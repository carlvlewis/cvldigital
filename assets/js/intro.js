var $hiddenGroup = $('section:not(#opening-section), header>.header-inner, footer, p, .btn:not(.nav-right>button)');
var innerText = '<b>Hi, I’m Carl.</b> <br/>I’ll help design and code your digital presence better and cheaper.';

if (localStorage.getItem('viewed-intro') === null) {
  $hiddenGroup.addClass('hidden');
  $('#opening').html('');
  $('body').addClass('yellow');

  $(function() {
    setTimeout(function() {
      $('#opening').typed({
        strings: [
          innerText
        ],
        typeSpeed: 14,
        showCursor: false,
        callback: function() {
          if (isLocalStorageNameSupported()) {
            localStorage.setItem('viewed-intro', 'true');
          }

          $('#opening').addClass('cursor-hidden');

          $('body').addClass('white');

          $hiddenGroup.addClass('visible');
        }
      });
    }, 1500);
  });
} else {
  $('#opening').addClass('cursor-hidden');
}

function isLocalStorageNameSupported() {
  var testKey = 'test', storage = window.localStorage;
  try {
    storage.setItem(testKey, '1');
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}
