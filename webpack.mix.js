const path = require('path');
let mix = require('laravel-mix');
// require('laravel-mix-serve');

// mix.serve('php artisan serve --port=8888');

mix.js('src/js/app.js', 'assets/dist')
.sass('src/scss/app.scss', 'assets/dist')
.setPublicPath('public');

mix.extend('fixSassResourcesLoader', (webpackConfig) => {
    const scssRule = webpackConfig.module.rules.find((rule) => {
        const { test } = rule;
        return test && typeof test.test === 'function' &&  test.test('.scss');
    });

    if (!scssRule) return;

    scssRule.oneOf.forEach((oneOf) => {
        oneOf.use.forEach(({ loader, options}) => {
            if (loader === 'sass-resources-loader') {
                options.hoistUseStatements = true;
            }
        });
    })
});

mix.fixSassResourcesLoader();