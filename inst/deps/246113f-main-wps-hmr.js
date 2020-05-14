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





var defaultFuncProps = {
  headerRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Headers"].TableHeader,
  filterRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Filters"].DefaultFilter,
  fileRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["FileRenderers"].TableFile,
  folderRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["FolderRenderers"].TableFolder,
  detailRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Details"].DefaultDetail,
  actionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["DefaultAction"],
  confirmDeletionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["DefaultConfirmDeletion"],
  confirmMultipleDeletionRenderer: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["MultipleConfirmDeletion"],
  group: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Groupers"].GroupByFolder,
  sort: react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3__["Sorters"].SortByName,
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
      }, defaultFuncProps, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["omit"])(['setProps'], this.props)))); // return (
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
  nestChildren: false,
  renderStyle: 'table',
  startOpen: false,
  // headerRenderer: Headers.TableHeader,
  headerRendererProps: {},
  filterRendererProps: {},
  fileRendererProps: {},
  folderRendererProps: {},
  detailRendererProps: {},
  icons: {}
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
  headerRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  filterRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fileRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  folderRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  detailRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object // onCreateFiles: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onCreateFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onMoveFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onMoveFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onRenameFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onRenameFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onDeleteFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onDeleteFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  // onDownloadFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),

};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2tleWVkX2ZpbGVfYnJvd3Nlci8uL3NyYy9saWIvY29tcG9uZW50cy9LZXllZEZpbGVCcm93c2VyLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRGdW5jUHJvcHMiLCJoZWFkZXJSZW5kZXJlciIsIkhlYWRlcnMiLCJUYWJsZUhlYWRlciIsImZpbHRlclJlbmRlcmVyIiwiRmlsdGVycyIsIkRlZmF1bHRGaWx0ZXIiLCJmaWxlUmVuZGVyZXIiLCJGaWxlUmVuZGVyZXJzIiwiVGFibGVGaWxlIiwiZm9sZGVyUmVuZGVyZXIiLCJGb2xkZXJSZW5kZXJlcnMiLCJUYWJsZUZvbGRlciIsImRldGFpbFJlbmRlcmVyIiwiRGV0YWlscyIsIkRlZmF1bHREZXRhaWwiLCJhY3Rpb25SZW5kZXJlciIsIkRlZmF1bHRBY3Rpb24iLCJjb25maXJtRGVsZXRpb25SZW5kZXJlciIsIkRlZmF1bHRDb25maXJtRGVsZXRpb24iLCJjb25maXJtTXVsdGlwbGVEZWxldGlvblJlbmRlcmVyIiwiTXVsdGlwbGVDb25maXJtRGVsZXRpb24iLCJncm91cCIsIkdyb3VwZXJzIiwiR3JvdXBCeUZvbGRlciIsInNvcnQiLCJTb3J0ZXJzIiwiU29ydEJ5TmFtZSIsIm9uU2VsZWN0IiwiZmlsZU9yRm9sZGVyIiwib25TZWxlY3RGaWxlIiwiZmlsZSIsIm9uU2VsZWN0Rm9sZGVyIiwiZm9sZGVyIiwib25QcmV2aWV3T3BlbiIsIm9uUHJldmlld0Nsb3NlIiwib25Gb2xkZXJPcGVuIiwib25Gb2xkZXJDbG9zZSIsIktleWVkRmlsZUJyb3dzZXIiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbWl0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwic2hvd0FjdGlvbkJhciIsImNhbkZpbHRlciIsIm5vRmlsZXNNZXNzYWdlIiwibmVzdENoaWxkcmVuIiwicmVuZGVyU3R5bGUiLCJzdGFydE9wZW4iLCJoZWFkZXJSZW5kZXJlclByb3BzIiwiZmlsdGVyUmVuZGVyZXJQcm9wcyIsImZpbGVSZW5kZXJlclByb3BzIiwiZm9sZGVyUmVuZGVyZXJQcm9wcyIsImRldGFpbFJlbmRlcmVyUHJvcHMiLCJpY29ucyIsInByb3BUeXBlcyIsImZpbGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwic2V0UHJvcHMiLCJmdW5jIiwiYWN0aW9ucyIsIm5vZGUiLCJib29sIiwic2hhcGUiLCJGb2xkZXIiLCJlbGVtZW50IiwiRm9sZGVyT3BlbiIsIkZpbGUiLCJQREYiLCJJbWFnZSIsIkRlbGV0ZSIsIlJlbmFtZSIsIkxvYWRpbmciLCJEb3dubG9hZCIsIm9uZU9mIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFhQSxJQUFNQSxnQkFBZ0IsR0FBRztBQUNyQkMsZ0JBQWMsRUFBRUMsZ0VBQU8sQ0FBQ0MsV0FESDtBQUVyQkMsZ0JBQWMsRUFBRUMsZ0VBQU8sQ0FBQ0MsYUFGSDtBQUdyQkMsY0FBWSxFQUFFQyxzRUFBYSxDQUFDQyxTQUhQO0FBSXJCQyxnQkFBYyxFQUFFQyx3RUFBZSxDQUFDQyxXQUpYO0FBS3JCQyxnQkFBYyxFQUFFQyxnRUFBTyxDQUFDQyxhQUxIO0FBTXJCQyxnQkFBYyxFQUFFQyxzRUFOSztBQU9yQkMseUJBQXVCLEVBQUVDLCtFQVBKO0FBUXJCQyxpQ0FBK0IsRUFBRUMsZ0ZBUlo7QUFTckJDLE9BQUssRUFBRUMsaUVBQVEsQ0FBQ0MsYUFUSztBQVVyQkMsTUFBSSxFQUFFQyxnRUFBTyxDQUFDQyxVQVZPO0FBWXJCQyxVQUFRLEVBQUUsa0JBQUNDLFlBQUQsRUFBa0IsQ0FBRSxDQVpUO0FBWVc7QUFDaENDLGNBQVksRUFBRSxzQkFBQ0MsSUFBRCxFQUFVLENBQUUsQ0FiTDtBQWFPO0FBQzVCQyxnQkFBYyxFQUFFLHdC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QUFTLENBQUNXO0FBVEQsR0FBaEIsQ0Fma0I7QUEyQnpCdEIsY0FBWSxFQUFFVyxpREFBUyxDQUFDUSxJQTNCQztBQTRCekJsQixhQUFXLEVBQUVVLGlEQUFTLENBQUNvQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0E1Qlk7QUE4QnpCN0IsV0FBUyxFQUFFUyxpREFBUyxDQUFDUSxJQTlCSTtBQWdDekJoQixxQkFBbUIsRUFBRVEsaURBQVMsQ0FBQ3FCLE1BaENOO0FBaUN6QjVCLHFCQUFtQixFQUFFTyxpREFBUyxDQUFDcUIsTUFqQ047QUFrQ3pCM0IsbUJBQWlCLEVBQUVNLGlEQUFTLENBQUNxQixNQWxDSjtBQW1DekIxQixxQkFBbUIsRUFBRUssaURBQVMsQ0FBQ3FCLE1BbkNOO0FBb0N6QnpCLHFCQUFtQixFQUFFSSxpREFBUyxDQUFDcUIsTUFwQ04sQ0FzQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE5Q3lCLENBQTdCLEMiLCJmaWxlIjoiMjQ2MTEzZi1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge29taXR9IGZyb20gJ3JhbWRhJztcbmltcG9ydCBGaWxlQnJvd3Nlciwge1xuICAgIEhlYWRlcnMsXG4gICAgRmlsZVJlbmRlcmVycyxcbiAgICBGb2xkZXJSZW5kZXJlcnMsXG4gICAgRGV0YWlscyxcbiAgICBGaWx0ZXJzLFxuICAgIEdyb3VwZXJzLFxuICAgIFNvcnRlcnMsXG4gICAgRGVmYXVsdEFjdGlvbixcbiAgICBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxufSBmcm9tICdyZWFjdC1rZXllZC1maWxlLWJyb3dzZXInO1xuXG5jb25zdCBkZWZhdWx0RnVuY1Byb3BzID0ge1xuICAgIGhlYWRlclJlbmRlcmVyOiBIZWFkZXJzLlRhYmxlSGVhZGVyLFxuICAgIGZpbHRlclJlbmRlcmVyOiBGaWx0ZXJzLkRlZmF1bHRGaWx0ZXIsXG4gICAgZmlsZVJlbmRlcmVyOiBGaWxlUmVuZGVyZXJzLlRhYmxlRmlsZSxcbiAgICBmb2xkZXJSZW5kZXJlcjogRm9sZGVyUmVuZGVyZXJzLlRhYmxlRm9sZGVyLFxuICAgIGRldGFpbFJlbmRlcmVyOiBEZXRhaWxzLkRlZmF1bHREZXRhaWwsXG4gICAgYWN0aW9uUmVuZGVyZXI6IERlZmF1bHRBY3Rpb24sXG4gICAgY29uZmlybURlbGV0aW9uUmVuZGVyZXI6IERlZmF1bHRDb25maXJtRGVsZXRpb24sXG4gICAgY29uZmlybU11bHRpcGxlRGVsZXRpb25SZW5kZXJlcjogTXVsdGlwbGVDb25maXJtRGVsZXRpb24sXG4gICAgZ3JvdXA6IEdyb3VwZXJzLkdyb3VwQnlGb2xkZXIsXG4gICAgc29ydDogU29ydGVycy5Tb3J0QnlOYW1lLFxuXG4gICAgb25TZWxlY3Q6IChmaWxlT3JGb2xkZXIpID0+IHt9LCAvLyBBbHdheXMgY2FsbGVkIHdoZW4gYSBmaWxlIG9yIGZvbGRlciBpcyBzZWxlY3RlZFxuICAgIG9uU2VsZWN0RmlsZTogKGZpbGUpID0+IHt9LCAvLyAgICBDYWxsZWQgYWZ0ZXIgb25TZWxlY3QsIG9ubHkgb24gZmlsZSBzZWxlY3Rpb25cbiAgICBvblNlbGVjdEZvbGRlcjogKGZvbGRlcikgPT4ge30sIC8vICAgIENhbGxlZCBhZnRlciBvblNlbGVjdCwgb25seSBvbiBmb2xkZXIgc2VsZWN0aW9uXG5cbiAgICBvblByZXZpZXdPcGVuOiAoZmlsZSkgPT4ge30sIC8vIEZpbGUgb3BlbmVkXG4gICAgb25QcmV2aWV3Q2xvc2U6IChmaWxlKSA9PiB7fSwgLy8gRmlsZSBjbG9zZWRcblxuICAgIG9uRm9sZGVyT3BlbjogKGZvbGRlcikgPT4ge30sIC8vIEZvbGRlciBvcGVuZWRcbiAgICBvbkZvbGRlckNsb3NlOiAoZm9sZGVyKSA9PiB7fSwgLy8gRm9sZGVyIGNsb3NlZFxufTtcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWVkRmlsZUJyb3dzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIEJpbmQgdG8gRGFzaCBldmVudCBoYW5kbGVyIHRoYXQgcHV0cyBldmVudCBiYWNrIGludG8gcHJvcHNcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAvLyB0aGlzLnByb3BzLnNldFByb3BzKHt9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgPHA+Q29tcG9uZW50IHdvcmtzPC9wPlxuICAgICAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX08L3A+XG4gICAgICAgICAgICAgICAgPEZpbGVCcm93c2VyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmRlZmF1bHRGdW5jUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vbWl0KFsnc2V0UHJvcHMnXSwgdGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICAvLyByZXR1cm4gKFxuICAgICAgICAvLyAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAvLyAgICAgICAgIDxkaXZcbiAgICAgICAgLy8gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvLyAgICAgICAgICAgICB7Li4ub21pdChbJ3NldFByb3BzJ10sIHRoaXMucHJvcHMpfVxuICAgICAgICAvLyAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgPHA+Q29tcG9uZW50IHdvcmtzPC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX08L3A+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gKTtcbiAgICB9XG59XG5cbktleWVkRmlsZUJyb3dzZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dBY3Rpb25CYXI6IHRydWUsXG4gICAgY2FuRmlsdGVyOiB0cnVlLFxuICAgIG5vRmlsZXNNZXNzYWdlOiAnTm8gZmlsZXMuJyxcblxuICAgIG5lc3RDaGlsZHJlbjogZmFsc2UsXG4gICAgcmVuZGVyU3R5bGU6ICd0YWJsZScsXG5cbiAgICBzdGFydE9wZW46IGZhbHNlLFxuXG4gICAgLy8gaGVhZGVyUmVuZGVyZXI6IEhlYWRlcnMuVGFibGVIZWFkZXIsXG4gICAgaGVhZGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsZVJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGZvbGRlclJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IHt9LFxuXG4gICAgaWNvbnM6IHt9LFxufTtcblxuLyoqXG4gKiBXYXMgbm90IHdvcmtpbmcgdW50aWwgSSBjb3BpZWQgdGhlIHByb3BUeXBlcyByYXRoZXIgdGhhbiByZWZlcmVuY2VkIHRoZW1cbiAqL1xuS2V5ZWRGaWxlQnJvd3Nlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNob3dBY3Rpb25CYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbkZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9GaWxlc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBpY29uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgRm9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgRm9sZGVyT3BlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIEZpbGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQREY6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBJbWFnZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIERlbGV0ZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFJlbmFtZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIExvYWRpbmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBEb3dubG9hZDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgfSksXG5cbiAgICBuZXN0Q2hpbGRyZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHJlbmRlclN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydsaXN0JywgJ3RhYmxlJ10pLFxuXG4gICAgc3RhcnRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGhlYWRlclJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWxlUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb2xkZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvLyBvbkNyZWF0ZUZpbGVzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAvLyBvbkNyZWF0ZUZvbGRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG4gICAgLy8gb25Nb3ZlRmlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG4gICAgLy8gb25Nb3ZlRm9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAvLyBvblJlbmFtZUZpbGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIC8vIG9uUmVuYW1lRm9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAvLyBvbkRlbGV0ZUZpbGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICAgIC8vIG9uRGVsZXRlRm9sZGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgICAvLyBvbkRvd25sb2FkRmlsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ib29sXSksXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==