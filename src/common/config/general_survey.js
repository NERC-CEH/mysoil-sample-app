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
    location_accuracy: { id: 36 },
    location_altitude: { id: 37 },
    location_altitude_accuracy: { id: 38 },
    location_source: { id: 39 },
    location_gridref: { id: 40 },

    device: {
      id: 41,
      values: {
        iOS: 233,
        Android: 234,
      },
    },

    device_version: { id: 42 },

    uid: { id: 35 },

    country: {
      label: 'Please pick the country where you are working.',
      id: 21,
      values: {
        'England': 139,
        'Wales': 140,
        'Scotland': 141,
        'N. Ireland': 235,
      },
    },

    'your-ref': {
      label: 'Add your own reference, if you wish, to help identify the sample.',
      id: 24,
    },

    'lab-ref': {
      label: 'Enter sample number or code from laboratory corresponding to that on box.',
      id: 23,
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
      label: 'Select the sample depth.',
      id: 27,
      values: {
        '0-7.5 cm RB209 Long term grassland': 236,
        '0-15 cm RB209 Arable and field vegetables': 237,
        'Other': 238,
      },
    },

    'sample-type': {
      label: 'Select the sample type.',
      id: 28,
      values: {
        'Point (single location)': 142,
        'Field average (e.g. RB209 W)': 143,
      },
    },

    'soil-type': {
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

    'calcareous': {
      label: 'Select whether your soil is on chalk or limestone.',
      id: 45,
      values: {
        'Yes': 't',
        'No': 'f',
      },
    },

    'structure-score': {
      label: 'Select the structure score (VESS).',
      id: 44,
      values: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      },
    },

    'structure-notes': {
      label: 'Add any notes relating to soil structure.',
      id: 48,
    },

    'land-use': {
      label: 'Select the rotational land use.',
      id: 43,
      values: {
        'Cropping - combinable crops': 239,
        'Cropping - rotation including late harvested crops': 240,
        'Cropping - rotation including leys': 241,
        'Cropping - field-scale vegetables': 242,
        'Grassland - intensively managed': 243,
        'Grassland - permanent pasture': 244,
      },
    },

    'sample-notes': {
      label: 'Add any notes relating to the collected sample.',
      id: 50,
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
      label: 'Select whether organic fertiliser has been added (includes farmyard manure, slurry, sewage sludge, compost).',
      id: 33,
      values: {
        'Added': 't',
        'Not added': 'f',
      },
    },

    'tillage': {
      label: 'Select the type of tillage system employed.',
      id: 47,
      values: {
        'Conservation / zero tillage': 268,
        'Minimum / non-inversion': 269,
        'Plough-based': 270,
      },
    },

    'habitat': {
      label: 'Select the broad habitat where the sample is being taken.',
      id: 46,
      values: {
        'Arable and horticulture': 245,
        'Calcareous grassland': 246,
        'Improved grassland': 247,
        'Neutral grassland': 248,
        'Acid grassland': 249,
        'Rough grassland': 250,
        'Fen, marsh, swamp': 251,
        'Bog': 252,
        'Heather grassland': 253,
        'Heather': 254,
        'Broadleaved woodland': 255,
        'Coniferous woodland': 256,
        'Montane habitat': 257,
        'Inland rock': 258,
        'Freshwater': 259,
        'Saltmarsh': 260,
        'Supra-littoral sediment': 261,
        'Supra-littoral rock': 262,
        'Littoral-sediment': 263,
        'Littoral-rock': 264,
        'Saltwater': 265,
        'Suburban': 266,
        'Urban': 267,
      },
    },

    'field-notes': {
      label: 'Add any notes relating to field management.',
      id: 49,
    },

    'lab-name': {
      label: 'Select the laboratory that will analyse samples.',
      id: 34,
      values: {
        'CEH': 229,
        'NRM': 230,
      },
    },

    'client-code': {
      label: 'Enter your client code for the laboratory.',
      id: 22,
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

    // location type
    if (!attrs.location_type) {
      attributes.location_type = 'can\'t be blank';
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

    // laboratory reference requied
    if (!attrs['lab-ref']) {
      attributes['Laboratory reference'] = 'missing';
    }

    // sample type required
    if (!attrs['sample-type']) {
      attributes['Sample type'] = 'missing';
    }

    // sample depth required
    if (!attrs['depth']) {
      attributes['Sample depth'] = 'missing';
    }

    // field size numeric
    if (attrs['field-size']) {
      const size = new Number(attrs['field-size']);
      if (isNaN(size)) {
        attributes['Field size'] = 'not numeric';
      }
    }

    // lab name required
    if (!attrs['lab-name']) {
      attributes['Laboratory name'] = 'missing';
    }

    // client code required
    if (!attrs['client-code']) {
      attributes['Client code'] = 'missing';
    }

    return [attributes, null, null];
  },
};

export default config;
