module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        throwIfNamespace: false,
        runtime: 'automatic', 
        importSource: 'vue-jsx-runtime'
      }
    ]
  ]
}
