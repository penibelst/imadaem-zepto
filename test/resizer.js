module('resizer-twitter', {
  setup: function() {
    $(document).ready(function() {

      $('<img class="twitter">').
        data('imadaem', {
          url: QUnit.helper.twitter
        }).
        attr('src', QUnit.helper.twitter + ':thumb').
        appendTo('#qunit-fixture').
        imadaem({
          url: function(tags) {
            var result;
            $.each([
              { width:    0, suffix: ':thumb' },
              { width:  340, suffix: ':small' },
              { width:  600, suffix: ':medium' },
              { width: 1024, suffix: ':large' }
            ], function() {
              if (tags.size.width >= this.width) {
                result = tags.url + this.suffix;
              }
            });
            return result;
          }
        });
    });
  }
});


asyncTest('small', function() {
  expect(1);

  $('img.twitter').css({'width': 599});

  QUnit.assert.srcEqual('img.twitter',
    QUnit.helper.twitter + ':small',
    'Url is small');
});


asyncTest('large', function() {
  expect(1);

  $('img.twitter').css({'width': 1024});

  QUnit.assert.srcEqual('img.twitter',
    QUnit.helper.twitter + ':large',
    'Url is large');
});


module('resizer-google', {
  setup: function() {
    $(document).ready(function() {

      $('<img class="google">').
        data('imadaem', {
          url: QUnit.helper.google
        }).
        attr('src', QUnit.helper.google + 'w150/').
        appendTo('#qunit-fixture').
        imadaem({
          url: function(tags) {
            return tags.url + 'w' + tags.size.width + '/';
          }
        });
    });
  }
});


asyncTest('half-year-width', function() {
  expect(1);

  var halfYear = Math.round(new Date().getFullYear() / 2);

  $('img.google').css({'width': halfYear});

  QUnit.assert.srcEqual('img.google',
    QUnit.helper.google + 'w' + halfYear + '/',
    'Url is half-year');
});
