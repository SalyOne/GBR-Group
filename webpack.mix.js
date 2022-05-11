const path = require('path');
let mix = require('laravel-mix');
// require('laravel-mix-serve');

// mix.serve('php artisan serve --port=8888');

mix.js('src/js/app.js', 'assets/dist')
.sass('src/scss/app.scss', 'assets/dist')
.setPublicPath('public');