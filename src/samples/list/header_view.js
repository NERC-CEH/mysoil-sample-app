/** ****************************************************************************
 * Sample List header view.
 *****************************************************************************/
import Marionette from 'backbone.marionette';
import JST from 'JST';

export default Marionette.View.extend({
  id: 'samples-header',
  tagName: 'nav',
  template: JST['samples/list/header'],

  triggers: {
    'click #surveys-btn': 'surveys',
    'click #create-new-btn': 'create',
  },

  events: {
    'change input': 'photoUpload',
  },

  photoUpload(e) {
    this.trigger('photo:upload', e);
  },

  onAttach() {
    const that = this;

    // create camera/gallery selection
    if (window.cordova) {
      this.$el.find('.img-picker input').remove();

      this.$el.find('.img-picker').on('click', () => {
        that.trigger('photo:selection');
      });
    }
  },

  serializeData() {
    return {
      training: this.model.get('useTraining'),
    };
  },
});

