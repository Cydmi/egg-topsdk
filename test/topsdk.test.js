'use strict';

const mock = require('egg-mock');

describe('test/topsdk.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/topsdk-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, topsdk')
      .expect(200);
  });

  it('should GET /execute', () => {
    return app.httpRequest()
      .get('/execute')
      .expect(200);
  });
});
