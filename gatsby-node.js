exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /displacejs/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}
