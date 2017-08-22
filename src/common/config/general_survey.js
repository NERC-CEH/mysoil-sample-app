/** ****************************************************************************
 * General survey configuration file.
 *****************************************************************************/
import $ from 'jquery';
import Indicia from 'indicia';
import DateHelp from 'helpers/date';
import cropsData from 'crops.data';

const crops = {};
cropsData.forEach((el) => {
  crops[el.name] = el.id;
});

const config = {
  survey_id: 2,
  input_form: 'poc-recording-form',

  sample: {
    location: {
      values(location, submission) {
        // convert accuracy for map and gridref sources
        const accuracy = location.accuracy;
        const attributes = {};
        const keys = config.sample;
        attributes.location_name = location.name; // this is a native indicia attr
        attributes[keys.location_source.id] = location.source;
        attributes[keys.location_gridref.id] = location.gridref;
        attributes[keys.location_altitude.id] = location.altitude;
        attributes[keys.location_altitude_accuracy.id] = location.altitudeAccuracy;
        attributes[keys.location_accuracy.id] = accuracy;

        // add other location related attributes
        $.extend(submission.fields, attributes);

        return `${location.latitude}, ${location.longitude}`;
      },
    },
    location_accuracy: { id: 282 },
    location_altitude: { id: 283 },
    location_altitude_accuracy: { id: 284 },
    location_source: { id: 760 },
    location_gridref: { id: 335 },

    device: {
      id: 273,
      values: {
        iOS: 2398,
        Android: 2399,
      },
    },

    device_version: { id: 759 },

    country: {
      label: 'Please pick the country where you are working.',
      id: 21,
      values: {
        GB: 139,
        FR: 140,
        DE: 141,
      },
    },

    number: {
      label: 'Enter sample number corresponding to that on box.',
      id: 23,
    },

    reference: {
      label: 'Add your own reference, if you wish, to help identify the sample.',
      id: 24,
    },

    'field-name': {
      label: 'Enter the field name.',
      id: 25,
    },

    'field-size': {
      label: 'Enter the field size in hectares.',
      id: 26,
    },

    'depth': {
      label: 'Enter the sample depth in centimetres.',
      id: 27,
    },

    'type': {
      label: 'Select the sample type.',
      id: 28,
      values: {
        'Single': 142,
        'Bulked': 143,
      },
    },

    'soil': {
      label: 'Select the soil type.',
      id: 29,
      values: {
        'Light - sand etc.': 144,
        'Medium - loams': 145,
        'Heavy - clay': 146,
        'Organic - high OM content': 147,
        'Peaty soils': 148,
      },
    },

    'crop-present': {
      label: 'Select the crop present in the field.',
      id: 30,
      values: crops,
    },

    'crop-future': {
      label: 'Select the intended future crop.',
      id: 31,
      values: crops,
    },

    'straw': {
      label: 'Select whether straw has been removed.',
      id: 32,
      values: {
        'Removed': 't',
        'Not removed': 'f',
      },
    },

    'manure': {
      label: 'Select whether farmyard manure has been added.',
      id: 33,
      values: {
        'Added': 't',
        'Not added': 'f',
      },
    },

    date: {
      values(date) {
        return DateHelp.print(date);
      },
    },

    group: {
      values(group) {
        return group.id;
      },
    },

    comment: {
      label: 'Please add any extra info about this record.',
    },
  },

  occurrence: {
    training: {
      id: 'training',
    },

    taxon: {
      values(taxon) {
        return taxon.warehouse_id;
      },
    },
  },

  verify(attrs) {
    const attributes = {};
    const occurrences = {};

    // todo: remove this bit once sample DB update is possible
    // check if saved or already send
    if (!this.metadata.saved || this.getSyncStatus() === Indicia.SYNCED) {
      attributes.send = false;
    }

    // location
    const location = attrs.location || {};
    if (!location.latitude) {
      attributes.location = 'missing';
    }
    // location name
    if (!location.name) {
      attributes['location name'] = 'missing';
    }

    // date
    if (!attrs.date) {
      attributes.date = 'missing';
    } else {
      const date = new Date(attrs.date);
      if (date === 'Invalid Date' || date > new Date()) {
        attributes.date = (new Date(date) > new Date()) ? 'future date' : 'invalid';
      }
    }

    // location type
    if (!attrs.location_type) {
      attributes.location_type = 'can\'t be blank';
    }

    // occurrences
    if (this.occurrences.length === 0) {
      attributes.occurrences = 'no species selected';
    } else {
      this.occurrences.each((occurrence) => {
        const errors = occurrence.validate(null, { remote: true });
        if (errors) {
          const occurrenceID = occurrence.cid;
          occurrences[occurrenceID] = errors;
        }
      });
    }

    return [attributes, null, occurrences];
  },
};

export default config;
