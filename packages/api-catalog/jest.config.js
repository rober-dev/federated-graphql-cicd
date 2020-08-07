module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/_utils/'
  ],
  testEnvironment: 'node'
};
