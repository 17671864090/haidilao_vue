module.exports={
    devServer: {
        disableHostCheck: true,
        historyApiFallback:true,
        port: 8082,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3009',
                // target: 'http://60.205.178.222:8848',
                // target: 'http://60.205.178.222:3353',

                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
