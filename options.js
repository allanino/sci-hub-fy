// Saves options to chrome.storage
function save_options() {
  let domain = document.getElementById('domain').value;
  chrome.storage.sync.set({domain: domain});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value domain = 'sci-hub.tw'
  chrome.storage.sync.get({
    domain: 'sci-hub.tw'
  }, function(items) {
    document.getElementById('domain').value = items.domain;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);

// Detect cursor position for button ripple effect
(function (window, $) {
  $(function() {
    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
          xPos = event.pageX - btnOffset.left,
          yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 1000);
    });
  });
})(window, jQuery);
