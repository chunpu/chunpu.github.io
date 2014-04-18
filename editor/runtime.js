$(function() {
  if (!window.mods2run) return
  for (var i = 0, a; a = mods2run[i]; i++) {
    $('.' + a[0]).each(function() {
      run(this, a[1])
    })
  }
  function run(dom, fn) {
    var _$ = function(sel) {
      if (typeof sel == 'string' && sel[0] != '<') {
        return $(dom).find(sel)
      }
      return $.apply(null, arguments)
    }
    $.extend(_$, $)
    fn.call(null, _$)
  }
})
