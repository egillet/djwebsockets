!function(e){"use strict";var t=e.querySelector("#app");t.displayInstalledToast=function(){e.querySelector("#caching-complete").show()},t.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),t.onMenuSelect=function(){var t=e.querySelector("#paperDrawerPanel");t.narrow&&t.closeDrawer()}}(document),addEventListener("paper-header-transform",function(e){var t=document.querySelector(".app-name"),n=document.querySelector(".middle-container"),r=document.querySelector(".bottom-container"),a=e.detail,o=a.height-a.condensedHeight,c=Math.min(1,a.y/o),s=.5,l=Math.max(s,(o-a.y)/(o/(1-s))+s),d=1-c;Polymer.Base.transform("translate3d(0,"+100*c+"%,0)",n),d>.8?Polymer.Base.transform("scale("+d+") translateZ(0)",r):Polymer.Base.transform("scale(0) translateZ(0)",r),t.clientHeight*l>22&&Polymer.Base.transform("scale("+l+") translateZ(0)",t)});