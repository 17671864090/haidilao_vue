module.exports={
    devServer: {
        disableHostCheck: true,
        port: 8082,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3009',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
