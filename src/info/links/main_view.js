import Marionette from 'backbone.marionette';
import JST from 'JST';
import $ from 'jquery';
import Device from '../../common/helpers/device';

export default Marionette.View.extend({

  template: JST['info/links/main'],

  events: {
    'click a' : 'navigate',
  },

  // Event handler for clicked link.
  navigate(event) {
    // Get the app name from the id of the target which is *-button
    const appName = $(event.currentTarget).attr('id').slice(0, -7);

    // Get the app id for the appropriate platform.
    let appId;
    if (Device.isMobile() && Device.isIOS()) {
      switch (appName) {
        case 'soilinfo':
          appId = 'soilinfo/id895057724?mt=8';
          break;
        case 'mysoil':
          appId = 'mysoil/id529131863?mt=8';
          break;
        case 'soilscapes':
          appId = 'soilscapes/id979537925?mt=8';
          break;
        case 'crapapp':
          appId = 'farm-crap-app-pro/id1218868576?mt=8';
          break;
        case 'landpks':
          appId = 'landpks/id1084892005?mt=8';
          break;
        case 'igeology':
          appId = 'igeology/id392258040?mt=8';
          break;
        default:
          // Not present in Apple app store so do nothing.
          return;    
      }
    }
    else {
      switch (appName) {
        case 'soilinfo':
          appId = 'org.isric.soilinfo';
          break;
        case 'mysoil':
          appId = 'uk.ac.bgs.mysoil';
          break;
        case 'crapapp':
          appId = 'foam.crapapppro';
          break;
        case 'landpks':
          appId = 'org.landpotential.lpks.landcover';
          break;
        case 'igeology':
          appId = 'org.bgs';
          break;
        default:
          // Not present in Google app store so do nothing.
          return;
      }
    }

    // Get the base URL appropriate for the platform.
    let baseUrl;
    if (Device.isMobile()) {
      if (Device.isIOS()) {
        baseUrl = "https://itunes.apple.com/gb/app/";
      }
      else {
        baseUrl="market://details?id=";
      }
    }
    else {
      baseUrl = "http://play.google.com/store/apps/details?id=";
    }

    // Follow the constructed link.
    // Requires the inappbroswer cordova plugin:
    window.open(baseUrl + appId, '_system');
  },

});

