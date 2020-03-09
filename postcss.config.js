const autoPrefix = require('autoprefixer');
const cssNano = require('autoprefixer');

module.exports = {
    plugins: [
        autoPrefix,
        cssNano({
            preset: 'default',
        }),
    ],
};
