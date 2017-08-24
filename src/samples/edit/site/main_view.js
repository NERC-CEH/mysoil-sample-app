/** ****************************************************************************
 * Sample Edit Site main view.
 *****************************************************************************/
import Marionette from 'backbone.marionette';
import Indicia from 'indicia';
import JST from 'JST';
import StringHelp from 'helpers/string';


export default Marionette.View.extend({
  template: JST['samples/edit/site/main'],

  serializeData() {
    const sample = this.model.get('sample');
    const appModel = this.model.get('appModel');

    const attrLocks = {
      'field-name': appModel.isAttrLocked('field-name', sample.get('field-name')),
      'field-size': appModel.isAttrLocked('field-size', sample.get('field-size')),
      'depth': appModel.isAttrLocked('depth', sample.get('depth')),
      'type': appModel.isAttrLocked('type', sample.get('type')),
      'soil': appModel.isAttrLocked('soil', sample.get('soil')),
      'crop-present': appModel.isAttrLocked('crop-present', sample.get('crop-present')),
      'crop-future': appModel.isAttrLocked('crop-future', sample.get('crop-future')),
      'straw': appModel.isAttrLocked('straw', sample.get('straw')),
      'manure': appModel.isAttrLocked('manure', sample.get('manure')),
      comment: appModel.isAttrLocked('comment', sample.get('comment')),
    };

    return {
      id: sample.cid,
      fieldName: sample.get('field-name') && StringHelp.limit(sample.get('field-name')),
      fieldSize: sample.get('field-size') + 'ha',
      depth: sample.get('depth') + 'cm',
      type: sample.get('type'),
      soil: sample.get('soil'),
      cropPresent: sample.get('crop-present') && StringHelp.limit(sample.get('crop-present')),
      cropFuture: sample.get('crop-future') && StringHelp.limit(sample.get('crop-future')),
      straw: sample.get('straw'),
      manure: sample.get('manure'),
      comment: sample.get('comment') && StringHelp.limit(sample.get('comment')),
      locks: attrLocks,
    };
  },
});
