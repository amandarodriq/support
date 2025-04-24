
      addEventListener("click", function() {
    var el = document.documentElement
      , rfs =
             el.requestFullScreen
          || el.webkitRequestFullScreen
          || el.mozRequestFullScreen
    ;
    rfs.call(el);
    });

   
      document.onkeydown = function(a) {
        return !1
      };
  