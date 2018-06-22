'use strict';

const assert = require('assert');
const { ApiClient, TmcClient } = require('ali-topsdk');
module.exports = app => {
  app.addSingleton('topsdk', createApiClient);
};

function createApiClient(config, app) {
  assert(config.appkey && config.appsecret);
  app.coreLogger.info('[aliTopSdk] connecting %s@%s:%s/%s', config.appkey, config.appsecret);
  const apiClient = new ApiClient(config);
  const tmcClient = new TmcClient(config);
  const client = {
    apiClient,
    tmcClient,
  };
  return client;
}
