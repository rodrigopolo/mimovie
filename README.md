mimovie
=======

Wrapper around the `mediainfo' for obtaining information about multimedia files.

Overview
--------

Inspired by [node-mediainfo](https://github.com/deoxxa/node-mediainfo) this module provides an interface to the `mediainfo` command, it returns the common properties of a video or movie file in a JSON object, it uses a custom mediainfo template that you can change.

Install
--------

```
npm install mimovie
```

Usage
-----

The module exposes just one function, which has a signature of:

`mimovie("/path/to/video_file", callback)`

The callback function is called, in familiar node fashion, with two arguments.
The first is an Error object on error, or null on success. The second argument is an object or array of objects with all the video/movie information.

It's really easier to just see the output, so here:

```javascript
{ general: 
   { path: './test/movie.m4v',
     size: 79371001,
     bitrate: 10572228,
     duration: 60060,
     modified: 'UTC 2015-10-26 00:14:01',
     encoded: 'UTC 1904-01-01 00:00:00',
     tagged: 'UTC 1904-01-01 00:00:00',
     menu: false },
  video: 
   [ { width: 2560,
       height: 1440,
       codec: 'AVC',
       fps: 29.97,
       bitrate: 9998000,
       profile: 'Main@L4',
       aspect: '16:9' } ],
  audio: 
   [ { ch: 2,
       ch_pos: 'Front: L R',
       sample_rate: '44100',
       codec: 'AAC LC',
       bitrate: 128036,
       bitrate_mode: 'CBR',
       lang: false } ] }
```

Example
-------

```javascript
var mimovie = require("mimovie"),
    util = require("util");

mimovie("./test/movie.m4v", function(err, res) {
    if (err) {
        console.log(err);
    }else{
        console.log(util.inspect(res, null, null, true));
    }
});
```

Requirements
------------

The `mediainfo` CLI has to be available somewhere in the system `PATH`.

-------

### Donations
[PayPal](http://paypal.me/rodrigopolo)

License
-------

(The MIT License)

Copyright (c) by Rodrigo Polo http://rodrigopolo.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Contact
-------

* GitHub ([rodrigopolo](http://github.com/rodrigopolo/))
* Twitter ([@rodrigopolo](http://twitter.com/rodrigopolo))
