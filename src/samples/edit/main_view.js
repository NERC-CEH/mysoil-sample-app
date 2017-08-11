/** ****************************************************************************
 * Sample Edit main view.
 *****************************************************************************/
import Marionette from 'backbone.marionette';
import Indicia from 'indicia';
import JST from 'JST';
import DateHelp from 'helpers/date';
import StringHelp from 'helpers/string';

import './styles.scss';

export default Marionette.View.extend({
  template: JST['samples/edit/main'],

  triggers: {
    'click a#species-button': 'taxon:update',
  },

  /**
   * Need to push the main content down due to the subheader
   * @returns {string}
   */
  className() {
    const sample = this.model.get('sample');
    let amount = 0;

    let classes = 'slim ';

    if (sample.get('group')) {
      amount++;
    }

    if (sample.metadata.training) {
      amount++;
    }

    // eslint-disable-next-line
    classes += amount > 0 ? `band-margin-${amount}` : '';
    return classes;
  },

  initialize() {
    const sample = this.model.get('sample');
    this.listenTo(sample, 'geolocation', this.render);
  },

  serializeData() {
    const sample = this.model.get('sample');
    const occ = sample.getOccurrence();
    const specie = occ.get('taxon') || {};
    const appModel = this.model.get('appModel');

    // taxon
    const scientificName = specie.scientific_name;
    const commonName = specie.common_name;

    const locationPrint = sample.printLocation();
    const location = sample.get('location') || {};

    let numberLock = appModel.isAttrLocked('number', occ.get('number'));
    if (!numberLock) {
      numberLock = appModel.isAttrLocked('number-ranges', occ.get('number-ranges'));
    }
    const attrLocks = {
      date: appModel.isAttrLocked('date', sample.get('date')),
      location: appModel.isAttrLocked('location', location),
      number: numberLock,
      locationName: appModel.isAttrLocked('locationName', location.name),
      stage: appModel.isAttrLocked('stage', occ.get('stage')),
      identifiers: appModel.isAttrLocked('identifiers', occ.get('identifiers')),
      comment: appModel.isAttrLocked('comment', occ.get('comment')),
      activity: appModel.isAttrLocked('activity', sample.get('group')),
    };

    let number = occ.get('number') && StringHelp.limit(occ.get('number'));
    if (!number) {
      number = occ.get('number-ranges') && StringHelp.limit(occ.get('number-ranges'));
    }

    // show activity title.
    const group = sample.get('group');

    return {
      id: sample.cid,
      scientificName,
      commonName,
      isLocating: sample.isGPSRunning(),
      isSynchronising: sample.getSyncStatus() === Indicia.SYNCHRONISING,
      location: locationPrint,
      locationName: location.name,
      date: DateHelp.print(sample.get('date'), true),
      number,
      stage: occ.get('stage') && StringHelp.limit(occ.get('stage')),
      identifiers: occ.get('identifiers') && StringHelp.limit(occ.get('identifiers')),
      comment: occ.get('comment') && StringHelp.limit(occ.get('comment')),
      group_title: group ? group.title : null,
      group,
      locks: attrLocks,
    };
  },
});
