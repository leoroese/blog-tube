const env = process.NODE_ENV;

console.log('env', env);

module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['src', 'node_modules'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/', '<rootDir>/src/__tests__/__mocks__/'],
};
