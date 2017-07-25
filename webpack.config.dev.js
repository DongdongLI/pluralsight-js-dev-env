import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        path.resolve(__dirname, 'src/index') // entry point of the application
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'// won't actually generaate any physical files, will serve the build from memory
    },
    plugins:[],
    module:{// teach it how to load all different kinds of files
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}