/** ****************************************************************************
 * Sample Attribute main view.
 *****************************************************************************/
import Marionette from 'backbone.marionette';
import _ from 'lodash';
import Log from 'helpers/log';
import CONFIG from 'config';
import InputView from 'common/views/inputView';
import RadioInputView from 'common/views/radioInputView';
import TextareaView from 'common/views/textareaInputView';

export default Marionette.View.extend({
  template: _.template('<div id="attribute"></div>'),
  regions: {
    attribute: {
      el: '#attribute',
      replaceElement: true,
    },
  },

  onRender() {
    const attrView = this._getAttrView();

    attrView.on('save', () => this.trigger('save'));

    const mainRegion = this.getRegion('attribute');
    mainRegion.show(attrView);
    this.attrView = attrView;
  },

  /**
   * Selects and initializes the attribute view.
   * @returns {*}
   * @private
   */
  _getAttrView() {
    const sample = this.model;
    const attr = this.options.attr;

    const surveyConfig = CONFIG.indicia.surveys.general;

    let attrView;
    switch (attr) {
      case 'date':
        attrView = new InputView({
          default: sample.get('date'),
          type: 'date',
          max: new Date(),
        });
        break;

        case 'your-ref':
        case 'lab-ref':
        case 'structure-notes':
        case 'sample-notes':
        case 'field-name':
        case 'field-size':
        case 'field-notes':
        case 'client-code':
        attrView = new InputView({
          config: surveyConfig.sample[attr],
          default: sample.get(attr),
        });
        break;

        case 'country':
        case 'depth':
        case 'sample-type':
        case 'soil-type':
        case 'calcareous':
        case 'structure-score':
        case 'land-use':
        case 'crop-present':
        case 'crop-future':
        case 'straw':
        case 'manure':
        case 'tillage':
        case 'habitat':
        case 'lab-name':
        attrView = new RadioInputView({
          config: surveyConfig.sample[attr],
          default: sample.get(attr),
        });
        break;

        case 'comment':
        attrView = new TextareaView({
          config: surveyConfig.sample.comment,
          default: sample.get('comment'),
        });
        break;

      case 'activity':
        attrView = new InputView({
          default: sample.get('date'),
          type: 'date',
          max: new Date(),
        });
        break;

      default:
        Log(`Samples:AttrView:${attr} no such attribute to show!`, 'e');
    }

    return attrView;
  },

  /**
   * Returns the attribute value extracted from the attribute view.
   * @returns {{}}
   */
  getValues() {
    const values = {};
    values[this.options.attr] = this.attrView.getValues();
    return values;
  },
});
