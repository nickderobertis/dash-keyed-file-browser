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
  onFolderClose: function onFolderClose(folder) {},
  // Folder closed
  onCreateFiles: false,
  onCreateFolder: false,
  onMoveFile: false,
  onMoveFolder: false,
  onRenameFile: false,
  onRenameFolder: false,
  onDeleteFile: false,
  onDeleteFolder: false,
  onDownloadFile: false
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
  detailRendererProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2tleWVkX2ZpbGVfYnJvd3Nlci8uL3NyYy9saWIvY29tcG9uZW50cy9LZXllZEZpbGVCcm93c2VyLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRGdW5jUHJvcHMiLCJoZWFkZXJSZW5kZXJlciIsIkhlYWRlcnMiLCJUYWJsZUhlYWRlciIsImZpbHRlclJlbmRlcmVyIiwiRmlsdGVycyIsIkRlZmF1bHRGaWx0ZXIiLCJmaWxlUmVuZGVyZXIiLCJGaWxlUmVuZGVyZXJzIiwiVGFibGVGaWxlIiwiZm9sZGVyUmVuZGVyZXIiLCJGb2xkZXJSZW5kZXJlcnMiLCJUYWJsZUZvbGRlciIsImRldGFpbFJlbmRlcmVyIiwiRGV0YWlscyIsIkRlZmF1bHREZXRhaWwiLCJhY3Rpb25SZW5kZXJlciIsIkRlZmF1bHRBY3Rpb24iLCJjb25maXJtRGVsZXRpb25SZW5kZXJlciIsIkRlZmF1bHRDb25maXJtRGVsZXRpb24iLCJjb25maXJtTXVsdGlwbGVEZWxldGlvblJlbmRlcmVyIiwiTXVsdGlwbGVDb25maXJtRGVsZXRpb24iLCJncm91cCIsIkdyb3VwZXJzIiwiR3JvdXBCeUZvbGRlciIsInNvcnQiLCJTb3J0ZXJzIiwiU29ydEJ5TmFtZSIsIm9uU2VsZWN0IiwiZmlsZU9yRm9sZGVyIiwib25TZWxlY3RGaWxlIiwiZmlsZSIsIm9uU2VsZWN0Rm9sZGVyIiwiZm9sZGVyIiwib25QcmV2aWV3T3BlbiIsIm9uUHJldmlld0Nsb3NlIiwib25Gb2xkZXJPcGVuIiwib25Gb2xkZXJDbG9zZSIsIm9uQ3JlYXRlRmlsZXMiLCJvbkNyZWF0ZUZvbGRlciIsIm9uTW92ZUZpbGUiLCJvbk1vdmVGb2xkZXIiLCJvblJlbmFtZUZpbGUiLCJvblJlbmFtZUZvbGRlciIsIm9uRGVsZXRlRmlsZSIsIm9uRGVsZXRlRm9sZGVyIiwib25Eb3dubG9hZEZpbGUiLCJLZXllZEZpbGVCcm93c2VyIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJKU09OIiwic3RyaW5naWZ5Iiwib21pdCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNob3dBY3Rpb25CYXIiLCJjYW5GaWx0ZXIiLCJub0ZpbGVzTWVzc2FnZSIsIm5lc3RDaGlsZHJlbiIsInJlbmRlclN0eWxlIiwic3RhcnRPcGVuIiwiaGVhZGVyUmVuZGVyZXJQcm9wcyIsImZpbHRlclJlbmRlcmVyUHJvcHMiLCJmaWxlUmVuZGVyZXJQcm9wcyIsImZvbGRlclJlbmRlcmVyUHJvcHMiLCJkZXRhaWxSZW5kZXJlclByb3BzIiwiaWNvbnMiLCJwcm9wVHlwZXMiLCJmaWxlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsInNldFByb3BzIiwiZnVuYyIsImFjdGlvbnMiLCJub2RlIiwiYm9vbCIsInNoYXBlIiwiRm9sZGVyIiwiZWxlbWVudCIsIkZvbGRlck9wZW4iLCJGaWxlIiwiUERGIiwiSW1hZ2UiLCJEZWxldGUiLCJSZW5hbWUiLCJMb2FkaW5nIiwiRG93bmxvYWQiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBYUEsSUFBTUEsZ0JBQWdCLEdBQUc7QUFDckJDLGdCQUFjLEVBQUVDLGdFQUFPLENBQUNDLFdBREg7QUFFckJDLGdCQUFjLEVBQUVDLGdFQUFPLENBQUNDLGFBRkg7QUFHckJDLGNBQVksRUFBRUMsc0VBQWEsQ0FBQ0MsU0FIUDtBQUlyQkMsZ0JBQWMsRUFBRUMsd0VBQWUsQ0FBQ0MsV0FKWDtBQUtyQkMsZ0JBQWMsRUFBRUMsZ0VBQU8sQ0FBQ0MsYUFMSDtBQU1yQkMsZ0JBQWMsRUFBRUMsc0VBTks7QUFPckJDLHlCQUF1QixFQUFFQywrRUFQSjtBQVFyQkMsaUNBQStCLEVBQUVDLGdGQVJaO0FBU3JCQyxPQUFLLEVBQUVDLGlFQUFRLENBQUNDLGFBVEs7QUFVckJDLE1BQUks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QWJEO0FBZXpCTixPQUFLLEVBQUVHLGlEQUFTLENBQUNTLEtBQVYsQ0FBZ0I7QUFDbkJDLFVBQU0sRUFBRVYsaURBQVMsQ0FBQ1csT0FEQztBQUVuQkMsY0FBVSxFQUFFWixpREFBUyxDQUFDVyxPQUZIO0FBR25CRSxRQUFJLEVBQUViLGlEQUFTLENBQUNXLE9BSEc7QUFJbkJHLE9BQUcsRUFBRWQsaURBQVMsQ0FBQ1csT0FKSTtBQUtuQkksU0FBSyxFQUFFZixpREFBUyxDQUFDVyxPQUxFO0FBTW5CSyxVQUFNLEVBQUVoQixpREFBUyxDQUFDVyxPQU5DO0FBT25CTSxVQUFNLEVBQUVqQixpREFBUyxDQUFDVyxPQVBDO0FBUW5CTyxXQUFPLEVBQUVsQixpREFBUyxDQUFDVyxPQVJBO0FBU25CUSxZQUFRLEVBQUVuQixpREFBUyxDQUFDVztBQVRELEdBQWhCLENBZmtCO0FBMkJ6QnRCLGNBQVksRUFBRVcsaURBQVMsQ0FBQ1EsSUEzQkM7QUE0QnpCbEIsYUFBVyxFQUFFVSxpREFBUyxDQUFDb0IsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCLENBNUJZO0FBOEJ6QjdCLFdBQVMsRUFBRVMsaURBQVMsQ0FBQ1EsSUE5Qkk7QUFnQ3pCaEIscUJBQW1CLEVBQUVRLGlEQUFTLENBQUNxQixNQWhDTjtBQWlDekI1QixxQkFBbUIsRUFBRU8saURBQVMsQ0FBQ3FCLE1BakNOO0FBa0N6QjNCLG1CQUFpQixFQUFFTSxpREFBUyxDQUFDcUIsTUFsQ0o7QUFtQ3pCMUIscUJBQW1CLEVBQUVLLGlEQUFTLENBQUNxQixNQW5DTjtBQW9DekJ6QixxQkFBbUIsRUFBRUksaURBQVMsQ0FBQ3FCO0FBcENOLENBQTdCLEMiLCJmaWxlIjoiNzE0OTk4NC1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQge29taXR9IGZyb20gJ3JhbWRhJztcbmltcG9ydCBGaWxlQnJvd3Nlciwge1xuICAgIEhlYWRlcnMsXG4gICAgRmlsZVJlbmRlcmVycyxcbiAgICBGb2xkZXJSZW5kZXJlcnMsXG4gICAgRGV0YWlscyxcbiAgICBGaWx0ZXJzLFxuICAgIEdyb3VwZXJzLFxuICAgIFNvcnRlcnMsXG4gICAgRGVmYXVsdEFjdGlvbixcbiAgICBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxufSBmcm9tICdyZWFjdC1rZXllZC1maWxlLWJyb3dzZXInO1xuXG5jb25zdCBkZWZhdWx0RnVuY1Byb3BzID0ge1xuICAgIGhlYWRlclJlbmRlcmVyOiBIZWFkZXJzLlRhYmxlSGVhZGVyLFxuICAgIGZpbHRlclJlbmRlcmVyOiBGaWx0ZXJzLkRlZmF1bHRGaWx0ZXIsXG4gICAgZmlsZVJlbmRlcmVyOiBGaWxlUmVuZGVyZXJzLlRhYmxlRmlsZSxcbiAgICBmb2xkZXJSZW5kZXJlcjogRm9sZGVyUmVuZGVyZXJzLlRhYmxlRm9sZGVyLFxuICAgIGRldGFpbFJlbmRlcmVyOiBEZXRhaWxzLkRlZmF1bHREZXRhaWwsXG4gICAgYWN0aW9uUmVuZGVyZXI6IERlZmF1bHRBY3Rpb24sXG4gICAgY29uZmlybURlbGV0aW9uUmVuZGVyZXI6IERlZmF1bHRDb25maXJtRGVsZXRpb24sXG4gICAgY29uZmlybU11bHRpcGxlRGVsZXRpb25SZW5kZXJlcjogTXVsdGlwbGVDb25maXJtRGVsZXRpb24sXG4gICAgZ3JvdXA6IEdyb3VwZXJzLkdyb3VwQnlGb2xkZXIsXG4gICAgc29ydDogU29ydGVycy5Tb3J0QnlOYW1lLFxuXG4gICAgb25TZWxlY3Q6IChmaWxlT3JGb2xkZXIpID0+IHt9LCAvLyBBbHdheXMgY2FsbGVkIHdoZW4gYSBmaWxlIG9yIGZvbGRlciBpcyBzZWxlY3RlZFxuICAgIG9uU2VsZWN0RmlsZTogKGZpbGUpID0+IHt9LCAvLyAgICBDYWxsZWQgYWZ0ZXIgb25TZWxlY3QsIG9ubHkgb24gZmlsZSBzZWxlY3Rpb25cbiAgICBvblNlbGVjdEZvbGRlcjogKGZvbGRlcikgPT4ge30sIC8vICAgIENhbGxlZCBhZnRlciBvblNlbGVjdCwgb25seSBvbiBmb2xkZXIgc2VsZWN0aW9uXG5cbiAgICBvblByZXZpZXdPcGVuOiAoZmlsZSkgPT4ge30sIC8vIEZpbGUgb3BlbmVkXG4gICAgb25QcmV2aWV3Q2xvc2U6IChmaWxlKSA9PiB7fSwgLy8gRmlsZSBjbG9zZWRcblxuICAgIG9uRm9sZGVyT3BlbjogKGZvbGRlcikgPT4ge30sIC8vIEZvbGRlciBvcGVuZWRcbiAgICBvbkZvbGRlckNsb3NlOiAoZm9sZGVyKSA9PiB7fSwgLy8gRm9sZGVyIGNsb3NlZFxuXG4gICAgb25DcmVhdGVGaWxlczogZmFsc2UsXG4gICAgb25DcmVhdGVGb2xkZXI6IGZhbHNlLFxuICAgIG9uTW92ZUZpbGU6IGZhbHNlLFxuICAgIG9uTW92ZUZvbGRlcjogZmFsc2UsXG4gICAgb25SZW5hbWVGaWxlOiBmYWxzZSxcbiAgICBvblJlbmFtZUZvbGRlcjogZmFsc2UsXG4gICAgb25EZWxldGVGaWxlOiBmYWxzZSxcbiAgICBvbkRlbGV0ZUZvbGRlcjogZmFsc2UsXG4gICAgb25Eb3dubG9hZEZpbGU6IGZhbHNlLFxufTtcblxuLyoqXG4gKiBFeGFtcGxlQ29tcG9uZW50IGlzIGFuIGV4YW1wbGUgY29tcG9uZW50LlxuICogSXQgdGFrZXMgYSBwcm9wZXJ0eSwgYGxhYmVsYCwgYW5kXG4gKiBkaXNwbGF5cyBpdC5cbiAqIEl0IHJlbmRlcnMgYW4gaW5wdXQgd2l0aCB0aGUgcHJvcGVydHkgYHZhbHVlYFxuICogd2hpY2ggaXMgZWRpdGFibGUgYnkgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWVkRmlsZUJyb3dzZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIEJpbmQgdG8gRGFzaCBldmVudCBoYW5kbGVyIHRoYXQgcHV0cyBldmVudCBiYWNrIGludG8gcHJvcHNcbiAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAvLyB0aGlzLnByb3BzLnNldFByb3BzKHt9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICAgICAgPHA+Q29tcG9uZW50IHdvcmtzPC9wPlxuICAgICAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX08L3A+XG4gICAgICAgICAgICAgICAgPEZpbGVCcm93c2VyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmRlZmF1bHRGdW5jUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vbWl0KFsnc2V0UHJvcHMnXSwgdGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICAvLyByZXR1cm4gKFxuICAgICAgICAvLyAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAvLyAgICAgICAgIDxkaXZcbiAgICAgICAgLy8gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvLyAgICAgICAgICAgICB7Li4ub21pdChbJ3NldFByb3BzJ10sIHRoaXMucHJvcHMpfVxuICAgICAgICAvLyAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgPHA+Q29tcG9uZW50IHdvcmtzPC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX08L3A+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gKTtcbiAgICB9XG59XG5cbktleWVkRmlsZUJyb3dzZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dBY3Rpb25CYXI6IHRydWUsXG4gICAgY2FuRmlsdGVyOiB0cnVlLFxuICAgIG5vRmlsZXNNZXNzYWdlOiAnTm8gZmlsZXMuJyxcblxuICAgIG5lc3RDaGlsZHJlbjogZmFsc2UsXG4gICAgcmVuZGVyU3R5bGU6ICd0YWJsZScsXG5cbiAgICBzdGFydE9wZW46IGZhbHNlLFxuXG4gICAgaGVhZGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsZVJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGZvbGRlclJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IHt9LFxuXG4gICAgaWNvbnM6IHt9LFxufTtcblxuLyoqXG4gKiBXYXMgbm90IHdvcmtpbmcgdW50aWwgSSBjb3BpZWQgdGhlIHByb3BUeXBlcyByYXRoZXIgdGhhbiByZWZlcmVuY2VkIHRoZW1cbiAqL1xuS2V5ZWRGaWxlQnJvd3Nlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNob3dBY3Rpb25CYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbkZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9GaWxlc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBpY29uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgRm9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgRm9sZGVyT3BlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIEZpbGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQREY6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBJbWFnZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIERlbGV0ZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFJlbmFtZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIExvYWRpbmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBEb3dubG9hZDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgfSksXG5cbiAgICBuZXN0Q2hpbGRyZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHJlbmRlclN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydsaXN0JywgJ3RhYmxlJ10pLFxuXG4gICAgc3RhcnRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGhlYWRlclJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWxlUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb2xkZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==