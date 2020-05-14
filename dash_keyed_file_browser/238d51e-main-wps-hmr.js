webpackHotUpdatedash_keyed_file_browser("main",{

/***/ "./src/lib/components/KeyedFileBrowser.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/KeyedFileBrowser.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyedFileBrowser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-keyed-file-browser */ "./node_modules/react-keyed-file-browser/index.js");
/* harmony import */ var react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */

var KeyedFileBrowser = /*#__PURE__*/function (_Component) {
  _inherits(KeyedFileBrowser, _Component);

  var _super = _createSuper(KeyedFileBrowser);

  function KeyedFileBrowser(props) {
    var _this;

    _classCallCheck(this, KeyedFileBrowser);

    _this = _super.call(this, props);
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } // Bind to Dash event handler that puts event back into props


  _createClass(KeyedFileBrowser, [{
    key: "handleChange",
    value: function handleChange(event) {
      console.log(event); // this.props.setProps({});
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Component works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.stringify(this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        onChange: this.handleChange
      }, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["omit"])(['setProps'], this.props)))); // return (
      //     <div id={id}>
      //         <div
      //             onChange={this.handleChange}
      //             {...omit(['setProps'], this.props)}
      //         />
      //         <p>Component works</p>
      //         <p>{JSON.stringify(this.props)}</p>
      //     </div>
      // );
    }
  }]);

  return KeyedFileBrowser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


KeyedFileBrowser.defaultProps = {
  showActionBar: true,
  canFilter: true,
  noFilesMessage: 'No files.',
  group: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Groupers"].GroupByFolder,
  sort: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Sorters"].SortByName,
  nestChildren: false,
  renderStyle: 'table',
  startOpen: false,
  headerRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Headers"].TableHeader,
  headerRendererProps: {},
  filterRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Filters"].DefaultFilter,
  filterRendererProps: {},
  fileRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["FileRenderers"].TableFile,
  fileRendererProps: {},
  folderRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["FolderRenderers"].TableFolder,
  folderRendererProps: {},
  detailRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Details"].DefaultDetail,
  detailRendererProps: {},
  actionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["DefaultAction"],
  confirmDeletionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["DefaultConfirmDeletion"],
  confirmMultipleDeletionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["MultipleConfirmDeletion"],
  icons: {},
  onSelect: function onSelect(fileOrFolder) {},
  // Always called when a file or folder is selected
  onSelectFile: function onSelectFile(file) {},
  //    Called after onSelect, only on file selection
  onSelectFolder: function onSelectFolder(folder) {},
  //    Called after onSelect, only on folder selection
  onPreviewOpen: function onPreviewOpen(file) {},
  // File opened
  onPreviewClose: function onPreviewClose(file) {},
  // File closed
  onFolderOpen: function onFolderOpen(folder) {},
  // Folder opened
  onFolderClose: function onFolderClose(folder) {} // Folder closed

};
/**
 * Was not working until I copied the propTypes rather than referenced them
 */

KeyedFileBrowser.propTypes = {
  files: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  showActionBar: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  canFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  noFilesMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  group: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    Folder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    FolderOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    File: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    PDF: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    Image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    Delete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    Rename: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    Loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
    Download: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
  }),
  nestChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  renderStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['list', 'table']),
  startOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  headerRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  headerRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  filterRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  filterRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fileRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fileRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  folderRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  folderRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  detailRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  detailRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  actionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  confirmDeletionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  confirmMultipleDeletionRenderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onCreateFiles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onCreateFolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onMoveFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onMoveFolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onRenameFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onRenameFolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onDeleteFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onDeleteFolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onDownloadFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelectFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSelectFolder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPreviewOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onPreviewClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFolderOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onFolderClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2tleWVkX2ZpbGVfYnJvd3Nlci8uL3NyYy9saWIvY29tcG9uZW50cy9LZXllZEZpbGVCcm93c2VyLnJlYWN0LmpzIl0sIm5hbWVzIjpbIktleWVkRmlsZUJyb3dzZXIiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbWl0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwic2hvd0FjdGlvbkJhciIsImNhbkZpbHRlciIsIm5vRmlsZXNNZXNzYWdlIiwiZ3JvdXAiLCJHcm91cGVycyIsIkdyb3VwQnlGb2xkZXIiLCJzb3J0IiwiU29ydGVycyIsIlNvcnRCeU5hbWUiLCJuZXN0Q2hpbGRyZW4iLCJyZW5kZXJTdHlsZSIsInN0YXJ0T3BlbiIsImhlYWRlclJlbmRlcmVyIiwiSGVhZGVycyIsIlRhYmxlSGVhZGVyIiwiaGVhZGVyUmVuZGVyZXJQcm9wcyIsImZpbHRlclJlbmRlcmVyIiwiRmlsdGVycyIsIkRlZmF1bHRGaWx0ZXIiLCJmaWx0ZXJSZW5kZXJlclByb3BzIiwiZmlsZVJlbmRlcmVyIiwiRmlsZVJlbmRlcmVycyIsIlRhYmxlRmlsZSIsImZpbGVSZW5kZXJlclByb3BzIiwiZm9sZGVyUmVuZGVyZXIiLCJGb2xkZXJSZW5kZXJlcnMiLCJUYWJsZUZvbGRlciIsImZvbGRlclJlbmRlcmVyUHJvcHMiLCJkZXRhaWxSZW5kZXJlciIsIkRldGFpbHMiLCJEZWZhdWx0RGV0YWlsIiwiZGV0YWlsUmVuZGVyZXJQcm9wcyIsImFjdGlvblJlbmRlcmVyIiwiRGVmYXVsdEFjdGlvbiIsImNvbmZpcm1EZWxldGlvblJlbmRlcmVyIiwiRGVmYXVsdENvbmZpcm1EZWxldGlvbiIsImNvbmZpcm1NdWx0aXBsZURlbGV0aW9uUmVuZGVyZXIiLCJNdWx0aXBsZUNvbmZpcm1EZWxldGlvbiIsImljb25zIiwib25TZWxlY3QiLCJmaWxlT3JGb2xkZXIiLCJvblNlbGVjdEZpbGUiLCJmaWxlIiwib25TZWxlY3RGb2xkZXIiLCJmb2xkZXIiLCJvblByZXZpZXdPcGVuIiwib25QcmV2aWV3Q2xvc2UiLCJvbkZvbGRlck9wZW4iLCJvbkZvbGRlckNsb3NlIiwicHJvcFR5cGVzIiwiZmlsZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJzZXRQcm9wcyIsImZ1bmMiLCJhY3Rpb25zIiwibm9kZSIsImJvb2wiLCJzaGFwZSIsIkZvbGRlciIsImVsZW1lbnQiLCJGb2xkZXJPcGVuIiwiRmlsZSIsIlBERiIsIkltYWdlIiwiRGVsZXRlIiwiUmVuYW1lIiwiTG9hZGluZyIsIkRvd25sb2FkIiwib25lT2YiLCJvYmplY3QiLCJvbkNyZWF0ZUZpbGVzIiwib25lT2ZUeXBlIiwib25DcmVhdGVGb2xkZXIiLCJvbk1vdmVGaWxlIiwib25Nb3ZlRm9sZGVyIiwib25SZW5hbWVGaWxlIiwib25SZW5hbWVGb2xkZXIiLCJvbkRlbGV0ZUZpbGUiLCJvbkRlbGV0ZUZvbGRlciIsIm9uRG93bmxvYWRGaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFhQTs7Ozs7Ozs7SUFPcUJBLGdCOzs7OztBQUNqQiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQiwrQkFBcEI7QUFGZTtBQUdsQixHLENBRUQ7Ozs7O2lDQUNhQyxLLEVBQU87QUFDaEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLEVBRGdCLENBRWhCO0FBQ0g7Ozs2QkFFUTtBQUFBLFVBQ0VHLEVBREYsR0FDUSxLQUFLTixLQURiLENBQ0VNLEVBREY7QUFHTCwwQkFDSTtBQUFLLFVBQUUsRUFBRUE7QUFBVCxzQkFDSSx3RkFESixlQUVJLHNFQUFJQyxJQUFJLENB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QUFvQixDQUFDdkIsaURBQVMsQ0FBQ0ssSUFBWCxFQUFpQkwsaURBQVMsQ0FBQ1EsSUFBM0IsQ0FBcEIsQ0F6RFM7QUEyRHpCcEIsVUFBUSxFQUFFWSxpREFBUyxDQUFDSyxJQTNESztBQTREekJmLGNBQVksRUFBRVUsaURBQVMsQ0FBQ0ssSUE1REM7QUE2RHpCYixnQkFBYyxFQUFFUSxpREFBUyxDQUFDSyxJQTdERDtBQStEekJYLGVBQWEsRUFBRU0saURBQVMsQ0FBQ0ssSUEvREE7QUFnRXpCVixnQkFBYyxFQUFFSyxpREFBUyxDQUFDSyxJQWhFRDtBQWtFekJULGNBQVksRUFBRUksaURBQVMsQ0FBQ0ssSUFsRUM7QUFtRXpCUixlQUFhLEVBQUVHLGlEQUFTLENBQUNLO0FBbkVBLENBQTdCLEMiLCJmaWxlIjoiMjM4ZDUxZS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge29taXR9IGZyb20gJ3JhbWRhJztcbmltcG9ydCBGaWxlQnJvd3Nlciwge1xuICAgIEhlYWRlcnMsXG4gICAgRmlsZVJlbmRlcmVycyxcbiAgICBGb2xkZXJSZW5kZXJlcnMsXG4gICAgRGV0YWlscyxcbiAgICBGaWx0ZXJzLFxuICAgIEdyb3VwZXJzLFxuICAgIFNvcnRlcnMsXG4gICAgRGVmYXVsdEFjdGlvbixcbiAgICBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxufSBmcm9tICdyZWFjdC1rZXllZC1maWxlLWJyb3dzZXInO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5ZWRGaWxlQnJvd3NlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQmluZCB0byBEYXNoIGV2ZW50IGhhbmRsZXIgdGhhdCBwdXRzIGV2ZW50IGJhY2sgaW50byBwcm9wc1xuICAgIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgIC8vIHRoaXMucHJvcHMuc2V0UHJvcHMoe30pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICA8cD5Db21wb25lbnQgd29ya3M8L3A+XG4gICAgICAgICAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfTwvcD5cbiAgICAgICAgICAgICAgICA8RmlsZUJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB7Li4ub21pdChbJ3NldFByb3BzJ10sIHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgICAgLy8gcmV0dXJuIChcbiAgICAgICAgLy8gICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgLy8gICAgICAgICA8ZGl2XG4gICAgICAgIC8vICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLy8gICAgICAgICAgICAgey4uLm9taXQoWydzZXRQcm9wcyddLCB0aGlzLnByb3BzKX1cbiAgICAgICAgLy8gICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDxwPkNvbXBvbmVudCB3b3JrczwvcD5cbiAgICAgICAgLy8gICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcyl9PC9wPlxuICAgICAgICAvLyAgICAgPC9kaXY+XG4gICAgICAgIC8vICk7XG4gICAgfVxufVxuXG5LZXllZEZpbGVCcm93c2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93QWN0aW9uQmFyOiB0cnVlLFxuICAgIGNhbkZpbHRlcjogdHJ1ZSxcbiAgICBub0ZpbGVzTWVzc2FnZTogJ05vIGZpbGVzLicsXG5cbiAgICBncm91cDogR3JvdXBlcnMuR3JvdXBCeUZvbGRlcixcbiAgICBzb3J0OiBTb3J0ZXJzLlNvcnRCeU5hbWUsXG5cbiAgICBuZXN0Q2hpbGRyZW46IGZhbHNlLFxuICAgIHJlbmRlclN0eWxlOiAndGFibGUnLFxuXG4gICAgc3RhcnRPcGVuOiBmYWxzZSxcblxuICAgIGhlYWRlclJlbmRlcmVyOiBIZWFkZXJzLlRhYmxlSGVhZGVyLFxuICAgIGhlYWRlclJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGZpbHRlclJlbmRlcmVyOiBGaWx0ZXJzLkRlZmF1bHRGaWx0ZXIsXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsZVJlbmRlcmVyOiBGaWxlUmVuZGVyZXJzLlRhYmxlRmlsZSxcbiAgICBmaWxlUmVuZGVyZXJQcm9wczoge30sXG4gICAgZm9sZGVyUmVuZGVyZXI6IEZvbGRlclJlbmRlcmVycy5UYWJsZUZvbGRlcixcbiAgICBmb2xkZXJSZW5kZXJlclByb3BzOiB7fSxcbiAgICBkZXRhaWxSZW5kZXJlcjogRGV0YWlscy5EZWZhdWx0RGV0YWlsLFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGFjdGlvblJlbmRlcmVyOiBEZWZhdWx0QWN0aW9uLFxuICAgIGNvbmZpcm1EZWxldGlvblJlbmRlcmVyOiBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIGNvbmZpcm1NdWx0aXBsZURlbGV0aW9uUmVuZGVyZXI6IE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxuXG4gICAgaWNvbnM6IHt9LFxuXG4gICAgb25TZWxlY3Q6IChmaWxlT3JGb2xkZXIpID0+IHt9LCAvLyBBbHdheXMgY2FsbGVkIHdoZW4gYSBmaWxlIG9yIGZvbGRlciBpcyBzZWxlY3RlZFxuICAgIG9uU2VsZWN0RmlsZTogKGZpbGUpID0+IHt9LCAvLyAgICBDYWxsZWQgYWZ0ZXIgb25TZWxlY3QsIG9ubHkgb24gZmlsZSBzZWxlY3Rpb25cbiAgICBvblNlbGVjdEZvbGRlcjogKGZvbGRlcikgPT4ge30sIC8vICAgIENhbGxlZCBhZnRlciBvblNlbGVjdCwgb25seSBvbiBmb2xkZXIgc2VsZWN0aW9uXG5cbiAgICBvblByZXZpZXdPcGVuOiAoZmlsZSkgPT4ge30sIC8vIEZpbGUgb3BlbmVkXG4gICAgb25QcmV2aWV3Q2xvc2U6IChmaWxlKSA9PiB7fSwgLy8gRmlsZSBjbG9zZWRcblxuICAgIG9uRm9sZGVyT3BlbjogKGZvbGRlcikgPT4ge30sIC8vIEZvbGRlciBvcGVuZWRcbiAgICBvbkZvbGRlckNsb3NlOiAoZm9sZGVyKSA9PiB7fSwgLy8gRm9sZGVyIGNsb3NlZFxufTtcblxuLyoqXG4gKiBXYXMgbm90IHdvcmtpbmcgdW50aWwgSSBjb3BpZWQgdGhlIHByb3BUeXBlcyByYXRoZXIgdGhhbiByZWZlcmVuY2VkIHRoZW1cbiAqL1xuS2V5ZWRGaWxlQnJvd3Nlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNob3dBY3Rpb25CYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbkZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9GaWxlc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBncm91cDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc29ydDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICBpY29uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgRm9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgRm9sZGVyT3BlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIEZpbGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQREY6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBJbWFnZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIERlbGV0ZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFJlbmFtZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIExvYWRpbmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBEb3dubG9hZDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgfSksXG5cbiAgICBuZXN0Q2hpbGRyZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHJlbmRlclN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydsaXN0JywgJ3RhYmxlJ10pLFxuXG4gICAgc3RhcnRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGhlYWRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoZWFkZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbHRlclJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBmaWx0ZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZpbGVSZW5kZXJlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZmlsZVJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9sZGVyUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGZvbGRlclJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGV0YWlsUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYWN0aW9uUmVuZGVyZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGNvbmZpcm1EZWxldGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjb25maXJtTXVsdGlwbGVEZWxldGlvblJlbmRlcmVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIG9uQ3JlYXRlRmlsZXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIG9uQ3JlYXRlRm9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICBvbk1vdmVGaWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICBvbk1vdmVGb2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIG9uUmVuYW1lRmlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG4gICAgb25SZW5hbWVGb2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIG9uRGVsZXRlRmlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG4gICAgb25EZWxldGVGb2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIG9uRG93bmxvYWRGaWxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEZpbGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0Rm9sZGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIG9uUHJldmlld09wZW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUHJldmlld0Nsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIG9uRm9sZGVyT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2xkZXJDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==