module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath":"./result/frontend-result.html"
    }]
  ]

}
