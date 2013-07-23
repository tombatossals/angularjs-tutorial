basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;
browsers = [ 'PhantomJS' ];
singleRun = true;

proxies = {
  '/': 'http://localhost:9876/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
