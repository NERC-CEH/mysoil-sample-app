/** ****************************************************************************
 * Indicia Sample geolocation functions.
 *
 * Sample geolocation events:
 * start, update, error, success, stop
 *****************************************************************************/
import $ from 'jquery';
import GPS from 'helpers/GPS';
import Log from 'helpers/log';
import LocHelp from 'helpers/location';
import appModel from 'app_model';

export function updateSampleLocation(sample, location) {
  return new Promise((resolve, reject) => {
    const newLocation = Object.assign({}, location);
    newLocation.source = 'gps';
    newLocation.updateTime = new Date(); // track when gps was acquired
    newLocation.gridref = LocHelp.locationToGrid(newLocation);

    // extend old location to preserve its previous attributes like name or id
    const oldLocation = sample.get('location');
    const fullLocation = $.extend(oldLocation, newLocation);

    if (sample.setGPSLocation) {
      const locationIsUpdatedPromise = sample.setGPSLocation(fullLocation);
      if (locationIsUpdatedPromise) {
        locationIsUpdatedPromise.then(() => resolve(true));
      } else {
        resolve(false);
      }
      return;
    }

    sample.set('location', fullLocation);
    sample.save().then(() => resolve(true));
  });
}

const extension = {
  startGPS(accuracyLimit) {
    Log('SampleModel:GPS: start.');

    const that = this;
    const options = {
      accuracyLimit,

      onUpdate(location) {
        // Called when GPS returns value of insufficient accuracy.
        Log('SampleModel:GPS: onUpdate.');
        that.trigger('geolocation', location);
        that.trigger('geolocation:update', location);
      },

      callback(error, location) {
        // Called on accurate GPS location or error.
        Log('SampleModel:GPS: callback.');
        extension.stopGPS.call(that, { silent: true });

        if (error) {
          that.trigger('geolocation', location);
          that.trigger('geolocation:error', error);
          return;
        }

        updateSampleLocation(that, location)
          .then(locationWasSet => {
            if (locationWasSet) {
              that.trigger('change:location');
              that.trigger('geolocation', location);
              that.trigger('geolocation:success', location);
            }
          })
          .catch(error => {
            that.trigger('geolocation:error', error);
          });
      },
    };

    this.watchId = GPS.start(options);
    this.locating = true;
    this.trigger('geolocation');
    this.trigger('geolocation:start');
  },

  stopGPS(options = {}) {
    Log('SampleModel:GPS: stop.');

    GPS.stop(this.watchId);
    delete this.locating;

    if (!options.silent) {
      this.trigger('geolocation');
      this.trigger('geolocation:stop');
    }
  },

  isGPSRunning() {
    return this.locating || this.locating === 0;
  },

  /**
   * Print pretty location.
   * @returns {string}
   */
  printLocation() {
    const location = this.get('location') || {};
    return appModel.printLocation(location);
  },
};

export { extension as default };
