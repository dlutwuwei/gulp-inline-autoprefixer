# gulp-inline-autoprefixer

![gulp-inline-autoprefixer](../master/gulp-inline-autoprefixer.png?raw=true)

[Gulp](http://gulpjs.com/) plugin to Autoprefix all CSS inside an html page - CSS inside style tags and inside style attributes. Uses [inline-autoprefixer](http://github.com/rebelmail/inline-autoprefixer) under the hood.

[![NPM version](https://badge.fury.io/js/gulp-inline-autoprefixer.png)](http://badge.fury.io/js/gulp-inline-autoprefixer)

```javascript
var gulp = require( "gulp" );
var htmlAutoprefixer = require( "gulp-inline-autoprefixer" );

gulp.task( "html-autoprefix", function( ) {
  return gulp.src( "./path/to/index-or-other.html" )
    .pipe( htmlAutoprefixer( ) )
    .pipe( gulp.dest( "dist" ) );
} );
```

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

