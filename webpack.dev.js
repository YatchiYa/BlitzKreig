const merge = require('webpack-merge');
const common = require('./webpack.common.js');


// webpack plugins
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();


// to make images from ' all ' to .wbep
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
//
var gulp = require('gulp');
var glu_webpack = require('gulp-webpack');


imagemin(['images/*.{jpg}'], 'images', {
    use: [
        imageminWebp({quality: 60})
    ]
}).then(() => {
    console.log("image resized ");
});

gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(glu_webpack( require('./webpack.common.js') ))
    .pipe(gulp.dest('dist/'));
});



module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
       new DashboardPlugin(dashboard.setData),
   ],
});
