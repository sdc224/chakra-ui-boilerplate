import webpack from "webpack";
import webpackMerge from "webpack-merge";
import baseConfig from "./webpack.common";
import paths from "../paths";

const config: webpack.Configuration = webpackMerge(baseConfig, {
	mode: "development",
	devtool: "#inline-source-map",
	devServer: {
		port: 5000,
		contentBase: paths.build,
		compress: true,
		open: true,
	},
});

export default config;
