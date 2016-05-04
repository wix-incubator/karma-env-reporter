'use strict';

module.exports = {
	'reporter:env': (process.env.BUILD_NUMBER || process.env.TEAMCITY_VERSION) ? require('karma-teamcity-reporter')['reporter:teamcity'] : require('karma-spec-reporter')['reporter:spec']
};
