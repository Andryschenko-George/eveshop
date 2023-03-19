const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: '/',
	productionSourceMap: true,
	filenameHashing: false,
	devServer: {
		proxy: 'http://127.0.0.1:8000/',
		port: 2020
  }
	
})


