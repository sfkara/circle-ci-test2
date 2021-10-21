module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  reporters: [
    'default', [
        'jest-junit',
        {
            outputDirectory: 'result',
            outputName: 'frontend-result.xml',
        },
    ],
],
// collectCoverage: true,
// collectCoverageFrom: [
//   "<rootDir>/components/**/*.vue",
//   "<rootDir>/pages/*.vue"
// ]
}
