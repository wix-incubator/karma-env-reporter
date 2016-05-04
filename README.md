# karma-env-reporter
[![npm version](https://badge.fury.io/js/karma-env-reporter.svg)](https://badge.fury.io/js/karma-env-reporter)

A [karma](https://karma-runner.github.io/) reporter that switches output format between [spec](https://www.npmjs.com/package/karma-spec-reporter) and [teamcity](https://www.npmjs.com/package/karma-teamcity-reporter) base on where tests are being executed - locally or ci. Actual switch is environment variable `IS_BUILD_AGENT`. Given environment variable `IS_BUILD_AGENT`. If it is set, 'teamcity' is used and 'spec' otherwise.

# install

```
npm install --save-dev karma-env-reporter
```

# usage

In you package.json append `--reporters karma-env-reporter` to your karma test command, ex.
  
```js
...
  "scripts": {
    "test": "karma --reporters karma-env-reporter"
  },
...
```


# License

We use a custom license, see ```LICENSE.md```
