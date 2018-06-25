/**
 * Radio input view.
 */
import Backbone from 'backbone';
import $ from 'jquery';
import Marionette from 'backbone.marionette';
import JST from 'JST';

export default Marionette.View.extend({
  template: JST['common/radio'],

  triggers: {
    'click input[type="radio"]': 'save',
  },

  events: {
    'click a': 'toggleSection'
  },


  initialize() {
    const config = this.options.config || {};
    let selection = this.options.selection;
    if (!selection) {
      // config.values is an object of key-value pairs where the key is the 
      // text of an attribute term and the value is its warehouse id.
      // However, terms may be grouped in to sections in the config file.
      // In that case the key is of the form Section-n where n is a number
      // and the value is the section name.
      let terms = Object.keys(config.values);
      // If grouped, the first term begins with the word 'Section'
      if (terms[0].substr(0, 7) === 'Section') {
        // Use the template for grouped inputs
        this.template = JST['common/sectioned_radio'];
        selection = terms.map(key => {
          if (key.substr(0, 7) === 'Section') {
            return {'section': config.values[key]};
          }
          else {
            return {'value': key};
          }
        });
      }
      else {
        // The inputs are not grouped.
        selection = terms.map(key => ({ 'value': key }));
      }
      // add default
      config.default && selection.unshift({ 'value': config.default });
    }

    this.model = new Backbone.Model({
      value: this.options.default || config.default,
      message: this.options.label || config.label,
      selection,
      selected: this.options.default || config.default,
    });
  },

  onRender() {
    // Open the section of checked input
    const $checked = this.$el.find('input:checked');
    const $section = $checked.closest('.radio-section');
    $section.toggleClass('expanded');
    const $anchor = $section.prev('.radio-section-head').children('.navigate-right');
    $anchor.toggleClass('expanded');
  },

  onDomRefresh() {
    // Scroll to an open section
    const $section = this.$el.find('.radio-section.expanded');
    if ($section.length > 0) {
      // Allow for height of info message (50px) and section-head (56px).
      $('#main').scrollTop($section.offset().top - 106);
    }
  },

  getValues() {
    let values;
    const that = this;
    const $inputs = this.$el.find('input');
    $inputs.each((int, elem) => {
      if ($(elem).prop('checked')) {
        const newVal = $(elem).val();
        // don't set default
        if (newVal !== that.options.config.default) {
          values = newVal;
        }
      }
    });

    return values;
  },

  resetValue() {
    const $inputs = this.$el.find('input[type="radio"]');
    $inputs.each((int, elem) => {
      $(elem).prop('checked', false);
    });
  },

  toggleSection(e) {
    // Close an open section first.
    let $section = this.$el.find('.radio-section.expanded');
    $section.toggleClass('expanded');
    let $anchor = $section.prev('.radio-section-head').children('.navigate-right');
    $anchor.toggleClass('expanded');
    if ($anchor.get(0) !== e.target) {
      // Expand the selected section if different from the one just closed.
      $anchor = $(e.target);
      $anchor.toggleClass('expanded');
      $section = $anchor.parent().next('.radio-section');
      $section.toggleClass('expanded');
      // Scroll to show section contents.
      $('#main').scrollTop($section.offset().top - 106);
    }
  }
});
