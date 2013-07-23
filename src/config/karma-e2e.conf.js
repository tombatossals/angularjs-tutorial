basePath = '../';
urlRoot = '/_karma_/';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;
browsers = [ 'PhantomJS' ];
singleRun = true;
runnerPort = 9999;

logLevel = LOG_INFO;

proxies = {
  '/': 'http://localhost:80/dev/angularjs-tutorial/src/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
