var expect = require('chai').expect;
var teamcityReporter = require('karma-teamcity-reporter')['reporter:teamcity'];
var specReporter = require('karma-spec-reporter')['reporter:spec'];

function getEnvReporter() {
  delete require.cache[require.resolve('../index.js')];
  return require('../index.js')['reporter:env'];
}

describe('karma ci reporter', function() {

  it('should use "karma-teamcity-reporter" reporter when running with BUILD_NUMBER env variable', function() {
    delete process.env.TEAMCITY_VERSION;

    process.env.BUILD_NUMBER = '123';
    expect(getEnvReporter()).to.equal(teamcityReporter);
  });

  it('should use "karma-teamcity-reporter" reporter when running with TEAMCITY_VERSION env variable', function() {
    delete process.env.BUILD_NUMBER;
    process.env.TEAMCITY_VERSION = '123';

    expect(getEnvReporter()).to.equal(teamcityReporter);
  });

  it('should use "karma-spec-reporter" reporter when not running on ci', function() {
    delete process.env.BUILD_NUMBER;
    delete process.env.TEAMCITY_VERSION;

    expect(getEnvReporter()).to.equal(specReporter);
  });
});
