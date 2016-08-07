// ==UserScript==
// @name         YouKu Fullscreen
// @namespace    gucheen
// @version      0.1
// @description  Webpage Fullscreen for YouKu.com
// @author       gucheen
// @match        http://v.youku.com/v_show/*
// @grant        none
// @license      MIT
// @homepageURL  https://github.com/gucheen/youku-fullscreen
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.id = 'ykfull-chrome';
    style.textContent = 'body{overflow:hidden!important}.yk-header{display:none}.yk-sidebar-w970{display:none!important}#id_google_tr{display:none}#player{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000}#player_sidebar{display:none}#sideTool{display:none!important}.mainCol{display:none}.toggle{top:40px;left:20px;opacity:0}';

    var toggleButtonStyle = document.createElement('style');
    toggleButtonStyle.textContent = '.toggle{z-index:99999;display:block;position:absolute;top:120px;left:120px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;transition:all .25s ease-in}.toggle:hover{opacity:1}.toggle--checkbox{display:none}.toggle--btn{display:block;margin:0 auto;font-size:1.4em;transition:all .35s ease-in}.toggle--btn:hover{cursor:pointer}.toggle--btn,.toggle--btn:before,.toggle--btn:after,.toggle--checkbox,.toggle--checkbox:before,.toggle--checkbox:after,.toggle--feature,.toggle--feature:before,.toggle--feature:after{transition:all .25s ease-in}.toggle--btn:before,.toggle--btn:after,.toggle--checkbox:before,.toggle--checkbox:after,.toggle--feature:before,.toggle--feature:after{content:"";display:block}@keyframes neon{0%{text-shadow:0 0 10px #fff,0 0 15px #fff,0 0 25px #fff,0 0 40px #f90,0 0 70px #f90,0 0 90px #f90,0 0 90px #f90}to{text-shadow:0 0 5px #fff,0 0 10px #fff,0 0 15px #fff,0 0 20px #f90,0 0 35px #f90,0 0 40px #f90,0 0 50px #f90}}.toggle--neon .toggle--btn{font-family:Audiowide;text-transform:uppercase;font-size:2em;color:#a0a0a0;text-shadow:0 0 10px transparent,0 0 15px transparent,0 0 25px transparent,0 0 40px transparent,0 0 70px transparent,0 0 90px transparent,0 0 90px transparent}.toggle--neon .toggle--btn:before,.toggle--neon .toggle--btn:after{display:inline-block;margin:0 20px;transition:all .22s ease-in-out}.toggle--neon .toggle--btn:before{content:attr(data-label-off);animation:neon 1.5s ease-in-out infinite alternate;animation-delay:90ms;color:#f1f1f1}.toggle--neon .toggle--btn:after{content:attr(data-label-on)}.toggle--neon .toggle--checkbox:checked+.toggle--btn:before{animation:none;color:#a0a0a0}.toggle--neon .toggle--checkbox:checked+.toggle--btn:after{animation:neon 1.5s ease-in-out infinite alternate;animation-delay:90ms;color:#f1f1f1}';

    var toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    toggleInput.id = 'toggle--neon';
    toggleInput.className = 'toggle--checkbox';

    var toggleLabel = document.createElement('label');
    toggleLabel.className = 'toggle--btn';
    toggleLabel.setAttribute('for', 'toggle--neon');
    toggleLabel.dataset.labelOn = 'on';
    toggleLabel.dataset.labelOff = 'off';

    var toggleButton = document.createElement('div');
    toggleButton.className = 'toggle toggle--neon';
    toggleButton.appendChild(toggleInput);
    toggleButton.appendChild(toggleLabel);

    document.head.appendChild(toggleButtonStyle);
    document.body.appendChild(toggleButton);

    toggleInput.addEventListener('change', function (event) {
        if (event.target.checked) {
            document.head.appendChild(style);
        } else {
            document.head.removeChild(style);
        }
    });

})();