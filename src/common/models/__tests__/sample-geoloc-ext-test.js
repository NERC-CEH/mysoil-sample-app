import { updateSampleLocation } from '../sample_geoloc_ext';

describe('Sample Geolocation Extension', () => {
  describe('updateSampleLocation method', () => {
    it('should save sample location', done => {
      const mockSample = {
        get: () => {},
        set: (key, location) => {
          expect(location.latitude).to.equal('x');
          done();
        },
      };
      updateSampleLocation(mockSample, { latitude: 'x' });
    });

    it('should return promise', () => {
      expect(updateSampleLocation()).to.be.instanceOf(Promise);
    });

    it('should promise return true if location was saved', done => {
      const mockSample = {
        get: () => {},
        set: () => {},
        save: () => Promise.resolve(),
      };

      updateSampleLocation(mockSample, {
        latitude: 'x',
      })
        .then(locationWasSet => {
          expect(locationWasSet).to.be.true;
          done();
        })
        .catch(done);
    });

    it('should promise return false if location was not saved', done => {
      const mockSample = {
        get: () => {},
        set: () => {},
        save: () => Promise.resolve(),
        setGPSLocation: () => false,
      };

      updateSampleLocation(mockSample, {
        latitude: 'x',
      })
        .then(locationWasSet => {
          expect(locationWasSet).to.be.false;
          done();
        })
        .catch(done);
    });
  });

  it('should call setGPSLocation if it is set', done => {
    const mockSample = {
      get: () => {},
      set: () => {},
      save: () => Promise.resolve(),
      setGPSLocation: () => Promise.resolve(),
    };

    updateSampleLocation(mockSample, {
      latitude: 'x',
    })
      .then(locationWasSet => {
        expect(locationWasSet).to.be.true;
        done();
      })
      .catch(done);
  });
});
