# gulp-inline-autoprefixer

[Gulp](http://gulpjs.com/) plugin to Autoprefix all CSS inside an html page - CSS inside style tags and inside style attributes. Uses [inline-autoprefixer](http://github.com/rebelmail/inline-autoprefixer) under the hood.

[![NPM version](https://badge.fury.io/js/gulp-inline-autoprefixer.png)](http://badge.fury.io/js/gulp-inline-autoprefixer)

```javascript
var gulp = require( "gulp" );
var htmlInlineAutoprefixer = require( "gulp-inline-autoprefixer" );

gulp.task( "html-autoprefix", function( ) {
  return gulp.src( "./path/to/index-or-other.html" )
    .pipe( htmlInlineAutoprefixer({'browsers':['ios 7', 'Android 4.3']},{},{}) )
    .pipe( gulp.dest( "dist" ) );
} );
```
## options

1. autoprefixerOpts
  options for [autoprefix](https://www.npmjs.com/package/autoprefixer)
2. cheerioOpts
  options for cheerio
3. postcssOpts
  options for postcss


## Installation

```
npm install gulp-inline-autoprefixer --save-dev
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

