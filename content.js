var style = document.createElement('style');
style.id = 'ykfull-chrome';
style.textContent = '#player{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}.yk-header,.yk-sidebar-w970,#id_google_tr,#player_sidebar,#sideTool,.mainCol,#qheader,#vpactionv5_wrap,.sideCol{display:none!important}';

var ykfullscreen_toggleFullsreen = function(isFullscreen) {
  if (isFullscreen) {
    document.head.removeChild(style);
  } else {
    document.head.appendChild(style);
  }
};