define("ace/theme/nord_dark", ["require", "exports", "module", "ace/lib/dom"], function (require, exports, module) {

    exports.isDark = true;
    exports.cssClass = "ace-nord-dark";
    exports.cssText = ".ace-nord-dark .ace_gutter {\
color: #616e88;\
}\
.ace-nord-dark .ace_print-margin {\
width: 1px;\
background: #4c566a;\
}\
.ace-nord-dark {\
background-color: #2e3440;\
color: #d8dee9;\
}\
.ace-nord-dark .ace_entity.ace_other.ace_attribute-name,\
.ace-nord-dark .ace_storage {\
color: #d8dee9;\
}\
.ace-nord-dark .ace_cursor {\
color: #d8dee9;\
},\
.ace-nord-dark .ace_string.ace_regexp {\
color: #bf616a;\
}\
.ace-nord-dark .ace_marker-layer .ace_active-line {\
background: rgba(67, 76, 94, 0.8);\
}\
.ace-nord-dark .ace_marker-layer .ace_selection {\
background: rgba(67, 76, 94, 0.8);\
}\
.ace-nord-dark.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #2e3440;\
}\
.ace-nord-dark .ace_marker-layer .ace_step {\
background: #ebcb8b;\
}\
.ace-nord-dark .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(136, 192, 208, 0.4);\
}\
.ace-nord-dark .ace_gutter-active-line {\
background-color: rgba(67, 76, 94, 0.8);\
}\
.ace-nord-dark .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(136, 192, 208, 0.4);\
}\
.ace-nord-dark .ace_invisible {\
color: #4c566a;\
}\
.ace-nord-dark .ace_keyword,\
.ace-nord-dark .ace_meta,\
.ace-nord-dark .ace_support.ace_class,\
.ace-nord-dark .ace_support.ace_type {\
color: #81a1c1;\
}\
.ace-nord-dark .ace_constant.ace_character,\
.ace-nord-dark .ace_constant.ace_other {\
color: #d8dee9;\
}\
.ace-nord-dark .ace_constant.ace_language {\
color: #5e81ac;\
}\
.ace-nord-dark .ace_constant.ace_escape {\
color: #ebcB8b;\
}\
.ace-nord-dark .ace_constant.ace_numeric {\
color: #b48ead;\
}\
.ace-nord-dark .ace_fold {\
background-color: #4c566a;\
border-color: #d8dee9;\
}\
.ace-nord-dark .ace_entity.ace_name.ace_function,\
.ace-nord-dark .ace_entity.ace_name.ace_tag,\
.ace-nord-dark .ace_support.ace_function,\
.ace-nord-dark .ace_variable,\
.ace-nord-dark .ace_variable.ace_language {\
color: #8fbcbb;\
}\
.ace-nord-dark .ace_string {\
color: #a3be8c;\
}\
.ace-nord-dark .ace_comment {\
color: #616e88;\
}\
.ace-nord-dark .ace_indent-guide {\
box-shadow: inset -1px 0 0 0 rgba(67, 76, 94, 0.7);\
}\
";
    exports.$selectionColorConflict = true;

    var dom = require("../lib/dom");
    dom.importCssString(exports.cssText, exports.cssClass, false);
}); (function () {
    window.require(["ace/theme/nord_dark"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
