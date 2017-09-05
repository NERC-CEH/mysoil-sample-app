import Backbone from 'backbone';
import Log from 'helpers/log';
import radio from 'radio';
import MainView from './main_view';
import HeaderView from '../../common/views/header_view';

const API = {
  show() {
    const mainView = new MainView();
    radio.trigger('app:main', mainView);

    const headerView = new HeaderView({
      model: new Backbone.Model({
        title: 'Links',
      }),
      classes: 'non-capitalize',
    });
    radio.trigger('app:header', headerView);
  },

};

export { API as default };
