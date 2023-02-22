const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: `${process.env.BASE_URL}`,
	outputDir: path.resolve(__dirname, './dist'),
	assetsDir: './assets',
	indexPath: 'index.html',
	chainWebpack: config => {
		config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `
					@use "sass:math";
					@import "@/assets/stylesheet/mixins.scss";
					@import "@/assets/stylesheet/variable.scss";
					$BASE_URL: "${process.env.BASE_URL}";
				`,
			},
		},
	},
});
