QUnit.extend(QUnit, {
  helper: {
    dot: 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=',
    twitter: 'https://pbs.twimg.com/media/A6j_dWXCcAAEOfR.jpg',
    google: 'https://lh3.googleusercontent.com' +
      '/-jd6gBLqQmpo/UUe4dmT5L6I/AAAAAAAAMXU/613uVeYlj6Y/',
    flickr: {
      url: 'https://farm8.staticflickr.com/7397/12383552194_3c25c47d76.jpg',
      size: {
        width: 1024,
        height: 614
      },
      description: 'Roman Forum. By Jamie Frith'
    }
  }
});


QUnit.extend(QUnit.assert, {
  srcEqual: function(element, expected, message) {
    $(window).
      one('resize', function() {
        var result = $(element).attr('src') === expected;
        QUnit.push(result, $(element).attr('src'), expected, message);
        start();
      }).
      trigger('resize');
  },
  srcEqualDot: function(element) {
    this.srcEqual(element, QUnit.helper.dot, 'Image is a dot');
  }
});
