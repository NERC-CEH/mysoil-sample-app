import ImageHelp from 'helpers/image';
import userModel from 'user_model';
import appModel from 'app_model';
import ImageModel from './image';
import Sample from './sample';
import Occurrence from './occurrence';

const Factory = {
  createSample() {
    let uid = userModel.get('drupalID');
    let now = new Date();
    uid += '-' + now.getFullYear() + (now.getMonth() + 1) + now.getDate();
    uid += '-' + now.getHours() + now.getMinutes() + now.getSeconds();
   
    const sample = new Sample({
      uid: uid,
    }, {
      metadata: {
        survey: 'general',
      },
    });

    // append locked attributes
    appModel.appendAttrLocks(sample);

    // check if location attr is not locked
    const locks = appModel.get('attrLocks');

    if (!locks.general || !locks.general.location) {
      // no previous location
      sample.startGPS();
    }

    return Promise.resolve(sample);
  },

};

export default Factory;
