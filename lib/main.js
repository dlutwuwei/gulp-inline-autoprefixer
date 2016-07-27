"use strict";

var es = require( "event-stream" );
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var cheerio = require('cheerio');

var VERSION = require('../package.json').version;

var HTMLPostCSS = function(plugins) {
  this.version = VERSION;
  this.plugins = plugins || [];
  this.processor = postcss(this.plugins);
  return this;
};

HTMLPostCSS.prototype.process = function(htmlString, cheerioOpts, postcssOpts) {
  var $ = cheerio.load(htmlString, cheerioOpts);
  var processor = this.processor;

  $('style').contents().each(function(index, style) {
    var prefixed = processor.process(style.data, postcssOpts).css;
    style.data = prefixed;
  });

  $('[style]').each(function(index, element) {
    var prefixed = processor.process(element.attribs.style, postcssOpts).css;
    element.attribs.style = prefixed;
  });

  return $.html();
};


module.exports = function(autoprefixerOpts, cheerioOpts, postcssOpts) {
  return es.map( function( file, done ) {
    var htmlString = file.contents.toString( );
    var res = new HTMLPostCSS([autoprefixer(autoprefixerOpts)]).process(htmlString, cheerioOpts, postcssOpts );
    file.contents = new Buffer(res);

    next();

    function next( err ) {
      done(err, file);
    }

  } );
}
