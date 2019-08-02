module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage'
      }
    ]
  ],
  plugins: [
    [
      'import',
      {libraryName: 'ant-design-vue',libraryDirectory: 'es',style: true}
    ]
  ]
}
