module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'cjs']
};
