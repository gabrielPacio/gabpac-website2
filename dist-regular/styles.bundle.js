webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--9-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/* ------------------ Colors -----------------*/\n/* ------------------- Used Colors ------------*/\n/* ------------------- Fonts ----------------*/\n/*$font_reading: 'Raleway', sans-serif;*/\n/* ------------------ Mixins ----------------*/\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after {\n  content: '';\n  content: none; }\n\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@font-face {\n  font-family: ElizabethLight;\n  src: url(/assets/fonts/elizabethserif-light-webfont.woff2); }\n\n@font-face {\n  font-family: ElizabethLightItalic;\n  src: url(/assets/fonts/elizabethserif-lightitalic-webfont.woff2); }\n\n/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.container {\n  position: relative;\n  width: 100%;\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 20px;\n  box-sizing: border-box; }\n\n.column, .columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; }\n\n/* For devices larger than 400px */\n@media (min-width: 400px) {\n  .container {\n    width: 85%;\n    padding: 0; } }\n\n/* For devices larger than 550px */\n@media (min-width: 550px) {\n  .container {\n    width: 80%; }\n  .column, .columns {\n    margin-left: 4%; }\n  .column:first-child, .columns:first-child {\n    margin-left: 0; }\n  .one.column,\n  .one.columns {\n    width: 4.66666666667%; }\n  .two.columns {\n    width: 13.3333333333%; }\n  .three.columns {\n    width: 22%; }\n  .four.columns {\n    width: 30.6666666667%; }\n  .five.columns {\n    width: 39.3333333333%; }\n  .six.columns {\n    width: 48%; }\n  .seven.columns {\n    width: 56.6666666667%; }\n  .eight.columns {\n    width: 65.3333333333%; }\n  .nine.columns {\n    width: 74.0%; }\n  .ten.columns {\n    width: 82.6666666667%; }\n  .eleven.columns {\n    width: 91.3333333333%; }\n  .twelve.columns {\n    width: 100%;\n    margin-left: 0; }\n  .one-third.column {\n    width: 30.6666666667%; }\n  .two-thirds.column {\n    width: 65.3333333333%; }\n  .one-half.column {\n    width: 48%; }\n  /* Offsets */\n  .offset-by-one.column,\n  .offset-by-one.columns {\n    margin-left: 8.66666666667%; }\n  .offset-by-two.column,\n  .offset-by-two.columns {\n    margin-left: 17.3333333333%; }\n  .offset-by-three.column,\n  .offset-by-three.columns {\n    margin-left: 26%; }\n  .offset-by-four.column,\n  .offset-by-four.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-five.column,\n  .offset-by-five.columns {\n    margin-left: 43.3333333333%; }\n  .offset-by-six.column,\n  .offset-by-six.columns {\n    margin-left: 52%; }\n  .offset-by-seven.column,\n  .offset-by-seven.columns {\n    margin-left: 60.6666666667%; }\n  .offset-by-eight.column,\n  .offset-by-eight.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-nine.column,\n  .offset-by-nine.columns {\n    margin-left: 78.0%; }\n  .offset-by-ten.column,\n  .offset-by-ten.columns {\n    margin-left: 86.6666666667%; }\n  .offset-by-eleven.column,\n  .offset-by-eleven.columns {\n    margin-left: 95.3333333333%; }\n  .offset-by-one-third.column,\n  .offset-by-one-third.columns {\n    margin-left: 34.6666666667%; }\n  .offset-by-two-thirds.column,\n  .offset-by-two-thirds.columns {\n    margin-left: 69.3333333333%; }\n  .offset-by-one-half.column,\n  .offset-by-one-half.columns {\n    margin-left: 52%; } }\n\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.5em;\n  /* currently ems cause chrome bug misinterpreting rems on body element */\n  line-height: 1.6;\n  font-weight: 400;\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  color: #4b4748; }\n\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  font-weight: 300; }\n\nh1 {\n  font-size: 4.0rem;\n  line-height: 1.2;\n  letter-spacing: -.1rem; }\n\nh2 {\n  font-size: 3.6rem;\n  line-height: 1.25;\n  letter-spacing: -.1rem; }\n\nh3 {\n  font-size: 3.0rem;\n  line-height: 1.3;\n  letter-spacing: -.1rem; }\n\nh4 {\n  font-size: 2.4rem;\n  line-height: 1.35;\n  letter-spacing: -.08rem; }\n\nh5 {\n  font-size: 1.8rem;\n  line-height: 1.5;\n  letter-spacing: -.05rem; }\n\nh6 {\n  font-size: 1.5rem;\n  line-height: 1.6;\n  letter-spacing: 0; }\n\n/* Larger than phablet */\n@media (min-width: 550px) {\n  h1 {\n    font-size: 5.0rem; }\n  h2 {\n    font-size: 4.2rem; }\n  h3 {\n    font-size: 3.6rem; }\n  h4 {\n    font-size: 3.0rem; }\n  h5 {\n    font-size: 2.4rem; }\n  h6 {\n    font-size: 1.5rem; } }\n\np {\n  margin-top: 0; }\n\nstrong {\n  font-weight: bold; }\n\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\na {\n  color: #a53731; }\n\na:hover {\n  color: #561d1a; }\n\n/* Buttons\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.button, button, input[type=\"submit\"], input[type=\"reset\"], input[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n\n.button:hover,\nbutton:hover,\ninput[type=\"submit\"]:hover,\ninput[type=\"reset\"]:hover,\ninput[type=\"button\"]:hover,\n.button:focus,\nbutton:focus,\ninput[type=\"submit\"]:focus,\ninput[type=\"reset\"]:focus,\ninput[type=\"button\"]:focus {\n  color: #333;\n  border-color: #888;\n  outline: 0; }\n\n.button.button-primary,\nbutton.button-primary,\ninput[type=\"submit\"].button-primary,\ninput[type=\"reset\"].button-primary,\ninput[type=\"button\"].button-primary {\n  color: #FFF;\n  background-color: #33C3F0;\n  border-color: #33C3F0; }\n\n.button.button-primary:hover,\nbutton.button-primary:hover,\ninput[type=\"submit\"].button-primary:hover,\ninput[type=\"reset\"].button-primary:hover,\ninput[type=\"button\"].button-primary:hover,\n.button.button-primary:focus,\nbutton.button-primary:focus,\ninput[type=\"submit\"].button-primary:focus,\ninput[type=\"reset\"].button-primary:focus,\ninput[type=\"button\"].button-primary:focus {\n  color: #FFF;\n  background-color: #1EAEDB;\n  border-color: #1EAEDB; }\n\n/* Forms\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea,\nselect {\n  height: 38px;\n  padding: 6px 10px;\n  /* The 6px vertically centers text on FF, ignored by Webkit */\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n\n/* Removes awkward default styles on some inputs for iOS */\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"search\"],\ninput[type=\"text\"],\ninput[type=\"tel\"],\ninput[type=\"url\"],\ninput[type=\"password\"],\ntextarea {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\ntextarea {\n  min-height: 65px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\ninput[type=\"email\"]:focus,\ninput[type=\"number\"]:focus,\ninput[type=\"search\"]:focus,\ninput[type=\"text\"]:focus,\ninput[type=\"tel\"]:focus,\ninput[type=\"url\"]:focus,\ninput[type=\"password\"]:focus,\ntextarea:focus,\nselect:focus {\n  border: 1px solid #33C3F0;\n  outline: 0; }\n\nlabel,\nlegend {\n  display: block;\n  margin-bottom: .5rem;\n  font-weight: 600; }\n\nfieldset {\n  padding: 0;\n  border-width: 0; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  display: inline; }\n\nlabel > .label-body {\n  display: inline-block;\n  margin-left: .5rem;\n  font-weight: normal; }\n\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nul {\n  list-style: none; }\n\nol {\n  list-style: decimal inside; }\n\nol, ul {\n  padding-left: 0;\n  margin-top: 0; }\n\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\ncode {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\n\npre > code {\n  display: block;\n  padding: 1rem 1.5rem;\n  white-space: pre; }\n\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nth,\ntd {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\n\nth:first-child,\ntd:first-child {\n  padding-left: 0; }\n\nth:last-child,\ntd:last-child {\n  padding-right: 0; }\n\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nbutton,\n.button {\n  margin-bottom: 1rem; }\n\ninput,\ntextarea,\nselect,\nfieldset {\n  margin-bottom: 1.5rem; }\n\npre,\nblockquote,\ndl,\nfigure,\ntable,\np,\nul,\nol,\nform {\n  margin-bottom: 2.5rem; }\n\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n\n.u-max-full-width {\n  max-width: 100%;\n  box-sizing: border-box; }\n\n.u-pull-right {\n  float: right; }\n\n.u-pull-left {\n  float: left; }\n\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\nhr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/* Self Clearing Goodness */\n.container:after,\n.row:after,\n.u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\n/* Larger than mobile */\n/* Larger than phablet (also point when grid becomes active) */\n/* Larger than tablet */\n/* Larger than desktop */\n/* Larger than Desktop HD */\n/* Bootstraps Modal\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n\n.modal.fade .modal-dialog {\n  -webkit-transform: translate(0, -25%);\n  transform: translate(0, -25%);\n  transition: -webkit-transform 0.3s ease-out;\n  transition: transform 0.3s ease-out;\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out; }\n\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n  transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #ffffff;\n  border: 1px solid #999999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000000; }\n\n.modal-backdrop.fade {\n  opacity: 0;\n  filter: alpha(opacity=0); }\n\n.modal-backdrop.in {\n  opacity: 0.5;\n  filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n  min-height: 16.42857143px; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n\n.modal-footer .btn + .btn {\n  margin-left: 5px;\n  margin-bottom: 0; }\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px; }\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n.clickable {\n  cursor: pointer; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.clearfix:before,\n.clearfix:after,\n.modal-footer:before,\n.modal-footer:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after,\n.modal-footer:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n/*--------------------- Main -----------------------*/\n.main {\n  background-image: -owg-linear-gradient(175deg, white, whitesmoke);\n  background-image: linear-gradient(175deg, white, whitesmoke); }\n  .main header {\n    background-image: -owg-linear-gradient(175deg, #e3a4a0, #da8681);\n    background-image: linear-gradient(175deg, #e3a4a0, #da8681);\n    position: fixed;\n    z-index: 2;\n    top: 0;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1vw 1vw 0.5vw 1vw; }\n    @media (min-width: 769px) {\n      .main header {\n        padding: 2rem 2rem 1rem 5rem; } }\n    .main header h1 {\n      font-size: calc(1.375em + 1.6vw);\n      font-family: \"Rubik\", sans-serif;\n      letter-spacing: 0.15rem; }\n      .main header h1.done {\n        color: rgba(240, 255, 255, 0.8);\n        text-shadow: 1px 2px 3px #de9591, 0 0 0 #000, 1px 2px 3px #de9591;\n        transition: all 1s ease-in-out; }\n      .main header h1.outing {\n        color: #de9591;\n        text-shadow: 0 0 0 #de9591, 0 0 0 #de9591, 0 0 0 #de9591;\n        transition: all 1s ease-in-out; }\n    .main header h2 {\n      font-size: calc(0.7em + 0.8vw);\n      font-weight: 600;\n      float: left;\n      margin: 0.5rem 0; }\n      .main header h2.done {\n        color: rgba(240, 255, 255, 0.8);\n        text-shadow: 1px 1px 1px #de9591, 0 0 0 #000, 1px 1px 1px #de9591;\n        transition: all 1s ease-in-out; }\n      .main header h2.outing {\n        color: #de9591;\n        text-shadow: 0 0 0 #de9591, 0 0 0 #de9591, 0 0 0 #de9591;\n        transition: all 1s ease-in-out; }\n\n.main-content {\n  margin-top: 16.6rem; }\n\nnav.main-menu li {\n  float: left;\n  padding: 0.2rem 1.2rem;\n  font-size: 1.9rem;\n  position: relative; }\n  @media (max-width: 769px) {\n    nav.main-menu li {\n      font-size: calc(1em + 1vw);\n      padding: .1vw .6vh; } }\n  nav.main-menu li .menu-tooltip {\n    font-size: 1.2rem;\n    padding: .6rem;\n    color: #7e2a25;\n    background-image: -owg-linear-gradient(175deg, #f7eac4, #f3dea0);\n    background-image: linear-gradient(175deg, #f7eac4, #f3dea0);\n    position: absolute;\n    z-index: 50;\n    text-align: center;\n    bottom: 3rem;\n    min-width: 10rem;\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n    opacity: 0;\n    transition: all 0.5s ease-in-out;\n    box-shadow: 3px 3px 12px 1px rgba(0, 0, 0, 0.3); }\n    nav.main-menu li .menu-tooltip p {\n      margin: 0;\n      line-height: 1.1rem; }\n      @media (min-width: 769px) {\n        nav.main-menu li .menu-tooltip p {\n          line-height: 0.9vh; } }\n  nav.main-menu li:hover .menu-tooltip {\n    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=80);\n    opacity: 0.8; }\n  nav.main-menu li a {\n    color: #7e2a25;\n    text-decoration: none; }\n\n.posts-container:first-child {\n  margin-top: 16rem; }\n\n.post-content, .after-posts {\n  margin: 7rem;\n  padding: 7rem;\n  background-color: #eef0f0;\n  max-width: 800px;\n  font-family: \"ElizabethLight\", sans-serif;\n  box-sizing: border-box; }\n  @media (min-width: 1400px) {\n    .post-content, .after-posts {\n      margin: 7rem auto; } }\n  @media (max-width: 1230px) {\n    .post-content, .after-posts {\n      margin: 7rem auto; } }\n  .post-content h2, .after-posts h2 {\n    margin-bottom: 2rem; }\n    .post-content h2 a, .after-posts h2 a {\n      color: #b89127;\n      background-color: #f5eacc;\n      font-family: \"Roboto Slab\", serif;\n      text-decoration: none;\n      font-size: calc(.75em + .8vw); }\n      .post-content h2 a:hover, .after-posts h2 a:hover {\n        text-decoration: solid; }\n  .post-content p, .post-content li, .after-posts p, .after-posts li {\n    margin-bottom: 1rem;\n    font-size: 1.5rem; }\n  .post-content li, .after-posts li {\n    list-style-type: square; }\n  .post-content .minimized, .after-posts .minimized {\n    height: 500px;\n    overflow: hidden; }\n  .post-content .shader, .after-posts .shader {\n    display: block;\n    width: 100%;\n    height: 4rem;\n    position: relative;\n    z-index: 1;\n    top: -4rem;\n    background-image: -owg-linear-gradient(rgba(238, 240, 240, 0), #eef0f0);\n    background-image: linear-gradient(rgba(238, 240, 240, 0), #eef0f0); }\n  .post-content .navigator-between-posts, .after-posts .navigator-between-posts {\n    padding-top: 3rem; }\n\n.side-navigator, .social-links {\n  /* Larger than tablet */\n  width: 200px;\n  position: fixed;\n  z-index: 5;\n  right: 5rem;\n  background-image: -owg-linear-gradient(175deg, #f9fafa, #e2e7e7);\n  background-image: linear-gradient(175deg, #f9fafa, #e2e7e7);\n  padding: 2rem; }\n  @media (max-width: 1230px) {\n    .side-navigator, .social-links {\n      display: none; } }\n\n.side-navigator {\n  bottom: 50px;\n  max-height: 540px;\n  overflow: auto;\n  top: 36rem; }\n  .side-navigator li {\n    padding-bottom: 1rem; }\n  .side-navigator a {\n    text-decoration: none;\n    color: #a53731;\n    font-weight: 600;\n    cursor: pointer; }\n    .side-navigator a:hover {\n      color: #561d1a; }\n  .side-navigator .selected {\n    color: #2f100e;\n    font-weight: 900; }\n\n.social-links {\n  top: 24rem; }\n  .social-links ul {\n    margin-bottom: 0; }\n  .social-links li {\n    float: left; }\n    .social-links li:not(:first-child) {\n      margin-left: 10px; }\n\n.simple-shadow {\n  box-shadow: 1px 2px 6px 2px rgba(126, 141, 148, 0.5); }\n\n.border-radius {\n  border-radius: 0.4rem; }\n\nfooter {\n  background-image: -owg-linear-gradient(175deg, #e3a4a0, #da8681);\n  background-image: linear-gradient(175deg, #e3a4a0, #da8681);\n  padding: 2rem;\n  color: #7e2a25; }\n\n.modal-lg button.close {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  line-height: inherit;\n  font-size: 3rem;\n  color: #7e2a25;\n  height: inherit;\n  float: right; }\n\n.modal-lg .modal-title {\n  font-family: \"Roboto Slab\", serif; }\n\n.modal-lg .comment {\n  border-top: 1px solid #b6bec2;\n  padding: 3rem 0; }\n  .modal-lg .comment h3 {\n    font-size: 1.5rem;\n    letter-spacing: inherit;\n    color: #7e2a25; }\n    .modal-lg .comment h3 strong {\n      font-weight: 900; }\n  .modal-lg .comment .comment-content {\n    padding: 2rem;\n    border: 1px solid #b6bec2;\n    margin: 2rem;\n    box-shadow: inset 1px 3px 10px 2px rgba(126, 141, 148, 0.5); }\n  .modal-lg .comment.leveled {\n    padding: 1rem 0;\n    border: inherit; }\n    .modal-lg .comment.leveled h3 {\n      font-size: 1.1rem; }\n    .modal-lg .comment.leveled .comment-content {\n      font-size: 1rem;\n      padding: 1rem;\n      border: 1px solid #b6bec2;\n      margin: 1rem;\n      box-shadow: inset 1px 3px 10px 2px rgba(126, 141, 148, 0.5); }\n\n.comment-create {\n  border: 1px solid #b6bec2;\n  padding: 2rem;\n  margin: 2rem;\n  background-color: #eef0f0; }\n  .comment-create .ng-valid[required], .comment-create .ng-valid.required {\n    border-left: 5px solid #42A948;\n    /* green */ }\n  .comment-create .ng-invalid:not(form) {\n    border-left: 5px solid #a94442;\n    /* red */ }\n  .comment-create .alert {\n    font-weight: 900;\n    color: #7e2a25;\n    font-size: 0.8rem;\n    position: relative;\n    top: -16px;\n    margin-left: 1rem; }\n  .comment-create input {\n    width: 50%; }\n    .comment-create input textarea {\n      width: 50%; }\n  .comment-create button[disabled]:hover {\n    background-color: #7e8d94;\n    color: white; }\n\n.img-self {\n  margin-bottom: 1rem; }\n\n.home-page .home-title {\n  text-align: center;\n  font-family: \"Roboto Slab\", serif;\n  color: #7e2a25; }\n\n.home-page .side-navigator h4 {\n  margin-bottom: 1.5rem;\n  font-family: \"Roboto Slab\", serif;\n  color: #7e2a25; }\n\n.contact {\n  font-family: \"Roboto Slab\", serif;\n  font-size: 2rem;\n  line-height: 2rem; }\n  .contact .tcolumn:first-child {\n    float: right; }\n  .contact .tline {\n    border-bottom: dotted #b6bec2 3px;\n    margin-bottom: 2rem; }\n\n.after-posts {\n  padding: 0;\n  background-color: inherit; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("../../../../style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../../../../style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map