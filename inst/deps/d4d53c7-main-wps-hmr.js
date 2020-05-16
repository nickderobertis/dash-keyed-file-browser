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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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

    _defineProperty(_assertThisInitialized(_this), "state", {
      files: _this.props.files
    });

    _defineProperty(_assertThisInitialized(_this), "handleRenameFolder", function (oldKey, newKey) {
      _this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key.substr(0, oldKey.length) === oldKey) {
            newFiles.push(_objectSpread(_objectSpread({}, file), {}, {
              key: file.key.replace(oldKey, newKey)
            }));
          } else {
            newFiles.push(file);
          }
        });
        state.files = newFiles;

        _this.setFiles(newFiles);

        return state;
      });
    });

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(KeyedFileBrowser, [{
    key: "setFiles",
    value: function setFiles(files) {
      this.props.setProps({
        files: files
      });
    }
  }, {
    key: "handleCreateFolder",
    value: function handleCreateFolder(key) {
      var _this2 = this;

      this.setState(function (state) {
        var newFiles = state.files.concat([{
          key: key
        }]);
        state.files = newFiles;

        _this2.setFiles(newFiles);

        return state;
      });
    }
  }, {
    key: "handleCreateFiles",
    value: function handleCreateFiles(files, prefix) {
      var _this3 = this;

      this.setState(function (state) {
        var newFiles = files.map(function (file) {
          var newKey = prefix;

          if (prefix !== '' && prefix.substring(prefix.length - 1, prefix.length) !== '/') {
            newKey += '/';
          }

          newKey += file.name;
          return {
            key: newKey,
            size: file.size
          };
        });
        var uniqueNewFiles = [];
        newFiles.map(function (newFile) {
          var exists = false;
          state.files.map(function (existingFile) {
            if (existingFile.key === newFile.key) {
              exists = true;
            }
          });

          if (!exists) {
            uniqueNewFiles.push(newFile);
          }
        });
        var replaceFiles = state.files.concat(uniqueNewFiles);
        state.files = replaceFiles;

        _this3.setFiles(replaceFiles);

        return state;
      });
    }
  }, {
    key: "handleRenameFile",
    value: function handleRenameFile(oldKey, newKey) {
      var _this4 = this;

      this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key === oldKey) {
            newFiles.push(_objectSpread(_objectSpread({}, file), {}, {
              key: newKey
            }));
          } else {
            newFiles.push(file);
          }
        });
        state.files = newFiles;

        _this4.setFiles(newFiles);

        return state;
      });
    }
  }, {
    key: "handleDeleteFolder",
    value: function handleDeleteFolder(folderKey) {
      var _this5 = this;

      this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key.substr(0, folderKey.length) !== folderKey) {
            newFiles.push(file);
          }
        });
        state.files = newFiles;

        _this5.setFiles(newFiles);

        return state;
      });
    }
  }, {
    key: "handleDeleteFile",
    value: function handleDeleteFile(fileKey) {
      var _this6 = this;

      this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key !== fileKey) {
            newFiles.push(file);
          }
        });
        state.files = newFiles;

        _this6.setFiles(newFiles);

        return state;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Component works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, JSON.stringify(this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_keyed_file_browser__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
        files: this.state.files,
        onChange: this.handleChange
      }, defaultFuncProps, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["omit"])(['setProps', 'files'], this.props), {
        onCreateFolder: this.handleCreateFolder,
        onCreateFiles: this.handleCreateFiles,
        onMoveFolder: this.handleRenameFolder,
        onMoveFile: this.handleRenameFile,
        onRenameFolder: this.handleRenameFolder,
        onRenameFile: this.handleRenameFile,
        onDeleteFolder: this.handleDeleteFolder,
        onDeleteFile: this.handleDeleteFile
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2tleWVkX2ZpbGVfYnJvd3Nlci8uL3NyYy9saWIvY29tcG9uZW50cy9LZXllZEZpbGVCcm93c2VyLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRGdW5jUHJvcHMiLCJoZWFkZXJSZW5kZXJlciIsIkhlYWRlcnMiLCJUYWJsZUhlYWRlciIsImZpbHRlclJlbmRlcmVyIiwiRmlsdGVycyIsIkRlZmF1bHRGaWx0ZXIiLCJmaWxlUmVuZGVyZXIiLCJGaWxlUmVuZGVyZXJzIiwiVGFibGVGaWxlIiwiZm9sZGVyUmVuZGVyZXIiLCJGb2xkZXJSZW5kZXJlcnMiLCJUYWJsZUZvbGRlciIsImRldGFpbFJlbmRlcmVyIiwiRGV0YWlscyIsIkRlZmF1bHREZXRhaWwiLCJhY3Rpb25SZW5kZXJlciIsIkRlZmF1bHRBY3Rpb24iLCJjb25maXJtRGVsZXRpb25SZW5kZXJlciIsIkRlZmF1bHRDb25maXJtRGVsZXRpb24iLCJjb25maXJtTXVsdGlwbGVEZWxldGlvblJlbmRlcmVyIiwiTXVsdGlwbGVDb25maXJtRGVsZXRpb24iLCJncm91cCIsIkdyb3VwZXJzIiwiR3JvdXBCeUZvbGRlciIsInNvcnQiLCJTb3J0ZXJzIiwiU29ydEJ5TmFtZSIsIm9uU2VsZWN0IiwiZmlsZU9yRm9sZGVyIiwib25TZWxlY3RGaWxlIiwiZmlsZSIsIm9uU2VsZWN0Rm9sZGVyIiwiZm9sZGVyIiwib25QcmV2aWV3T3BlbiIsIm9uUHJldmlld0Nsb3NlIiwib25Gb2xkZXJPcGVuIiwib25Gb2xkZXJDbG9zZSIsIm9uRG93bmxvYWRGaWxlIiwiS2V5ZWRGaWxlQnJvd3NlciIsInByb3BzIiwiZmlsZXMiLCJvbGRLZXkiLCJuZXdLZXkiLCJzZXRTdGF0ZSIsInN0YXRlIiwibmV3RmlsZXMiLCJtYXAiLCJrZXkiLCJzdWJzdHIiLCJsZW5ndGgiLCJwdXNoIiwicmVwbGFjZSIsInNldEZpbGVzIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsInNldFByb3BzIiwiY29uY2F0IiwicHJlZml4Iiwic3Vic3RyaW5nIiwibmFtZSIsInNpemUiLCJ1bmlxdWVOZXdGaWxlcyIsIm5ld0ZpbGUiLCJleGlzdHMiLCJleGlzdGluZ0ZpbGUiLCJyZXBsYWNlRmlsZXMiLCJmb2xkZXJLZXkiLCJmaWxlS2V5IiwiaWQiLCJKU09OIiwic3RyaW5naWZ5Iiwib21pdCIsImhhbmRsZUNyZWF0ZUZvbGRlciIsImhhbmRsZUNyZWF0ZUZpbGVzIiwiaGFuZGxlUmVuYW1lRm9sZGVyIiwiaGFuZGxlUmVuYW1lRmlsZSIsImhhbmRsZURlbGV0ZUZvbGRlciIsImhhbmRsZURlbGV0ZUZpbGUiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJzaG93QWN0aW9uQmFyIiwiY2FuRmlsdGVyIiwibm9GaWxlc01lc3NhZ2UiLCJuZXN0Q2hpbGRyZW4iLCJyZW5kZXJTdHlsZSIsInN0YXJ0T3BlbiIsImhlYWRlclJlbmRlcmVyUHJvcHMiLCJmaWx0ZXJSZW5kZXJlclByb3BzIiwiZmlsZVJlbmRlcmVyUHJvcHMiLCJmb2xkZXJSZW5kZXJlclByb3BzIiwiZGV0YWlsUmVuZGVyZXJQcm9wcyIsImljb25zIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyIsImFjdGlvbnMiLCJub2RlIiwiYm9vbCIsInNoYXBlIiwiRm9sZGVyIiwiZWxlbWVudCIsIkZvbGRlck9wZW4iLCJGaWxlIiwiUERGIiwiSW1hZ2UiLCJEZWxldGUiLCJSZW5hbWUiLCJMb2FkaW5nIiwiRG93bmxvYWQiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBYUEsSUFBTUEsZ0JBQWdCLEdBQUc7QUFDckJDLGdCQUFjLEVBQUVDLGdFQUFPLENBQUNDLFdBREg7QUFFckJDLGdCQUFjLEVBQUVDLGdFQUFPLENBQUNDLGFBRkg7QUFHckJDLGNBQVksRUFB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LEdBQWhCLENBZmtCO0FBMkJ6QnBCLGNBQVksRUFBRVUsaURBQVMsQ0FBQ08sSUEzQkM7QUE0QnpCaEIsYUFBVyxFQUFFUyxpREFBUyxDQUFDbUIsS0FBVixDQUFnQixDQUFDLE1BQUQsRUFBUyxPQUFULENBQWhCLENBNUJZO0FBOEJ6QjNCLFdBQVMsRUFBRVEsaURBQVMsQ0FBQ08sSUE5Qkk7QUFnQ3pCZCxxQkFBbUIsRUFBRU8saURBQVMsQ0FBQ29CLE1BaENOO0FBaUN6QjFCLHFCQUFtQixFQUFFTSxpREFBUyxDQUFDb0IsTUFqQ047QUFrQ3pCekIsbUJBQWlCLEVBQUVLLGlEQUFTLENBQUNvQixNQWxDSjtBQW1DekJ4QixxQkFBbUIsRUFBRUksaURBQVMsQ0FBQ29CLE1BbkNOO0FBb0N6QnZCLHFCQUFtQixFQUFFRyxpREFBUyxDQUFDb0I7QUFwQ04sQ0FBN0IsQyIsImZpbGUiOiJkNGQ1M2M3LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtvbWl0fSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgRmlsZUJyb3dzZXIsIHtcbiAgICBIZWFkZXJzLFxuICAgIEZpbGVSZW5kZXJlcnMsXG4gICAgRm9sZGVyUmVuZGVyZXJzLFxuICAgIERldGFpbHMsXG4gICAgRmlsdGVycyxcbiAgICBHcm91cGVycyxcbiAgICBTb3J0ZXJzLFxuICAgIERlZmF1bHRBY3Rpb24sXG4gICAgRGVmYXVsdENvbmZpcm1EZWxldGlvbixcbiAgICBNdWx0aXBsZUNvbmZpcm1EZWxldGlvbixcbn0gZnJvbSAncmVhY3Qta2V5ZWQtZmlsZS1icm93c2VyJztcblxuY29uc3QgZGVmYXVsdEZ1bmNQcm9wcyA9IHtcbiAgICBoZWFkZXJSZW5kZXJlcjogSGVhZGVycy5UYWJsZUhlYWRlcixcbiAgICBmaWx0ZXJSZW5kZXJlcjogRmlsdGVycy5EZWZhdWx0RmlsdGVyLFxuICAgIGZpbGVSZW5kZXJlcjogRmlsZVJlbmRlcmVycy5UYWJsZUZpbGUsXG4gICAgZm9sZGVyUmVuZGVyZXI6IEZvbGRlclJlbmRlcmVycy5UYWJsZUZvbGRlcixcbiAgICBkZXRhaWxSZW5kZXJlcjogRGV0YWlscy5EZWZhdWx0RGV0YWlsLFxuICAgIGFjdGlvblJlbmRlcmVyOiBEZWZhdWx0QWN0aW9uLFxuICAgIGNvbmZpcm1EZWxldGlvblJlbmRlcmVyOiBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIGNvbmZpcm1NdWx0aXBsZURlbGV0aW9uUmVuZGVyZXI6IE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxuICAgIGdyb3VwOiBHcm91cGVycy5Hcm91cEJ5Rm9sZGVyLFxuICAgIHNvcnQ6IFNvcnRlcnMuU29ydEJ5TmFtZSxcblxuICAgIG9uU2VsZWN0OiAoZmlsZU9yRm9sZGVyKSA9PiB7fSwgLy8gQWx3YXlzIGNhbGxlZCB3aGVuIGEgZmlsZSBvciBmb2xkZXIgaXMgc2VsZWN0ZWRcbiAgICBvblNlbGVjdEZpbGU6IChmaWxlKSA9PiB7fSwgLy8gICAgQ2FsbGVkIGFmdGVyIG9uU2VsZWN0LCBvbmx5IG9uIGZpbGUgc2VsZWN0aW9uXG4gICAgb25TZWxlY3RGb2xkZXI6IChmb2xkZXIpID0+IHt9LCAvLyAgICBDYWxsZWQgYWZ0ZXIgb25TZWxlY3QsIG9ubHkgb24gZm9sZGVyIHNlbGVjdGlvblxuXG4gICAgb25QcmV2aWV3T3BlbjogKGZpbGUpID0+IHt9LCAvLyBGaWxlIG9wZW5lZFxuICAgIG9uUHJldmlld0Nsb3NlOiAoZmlsZSkgPT4ge30sIC8vIEZpbGUgY2xvc2VkXG5cbiAgICBvbkZvbGRlck9wZW46IChmb2xkZXIpID0+IHt9LCAvLyBGb2xkZXIgb3BlbmVkXG4gICAgb25Gb2xkZXJDbG9zZTogKGZvbGRlcikgPT4ge30sIC8vIEZvbGRlciBjbG9zZWRcblxuICAgIG9uRG93bmxvYWRGaWxlOiBmYWxzZSxcbn07XG5cbi8qKlxuICogRXhhbXBsZUNvbXBvbmVudCBpcyBhbiBleGFtcGxlIGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIGEgcHJvcGVydHksIGBsYWJlbGAsIGFuZFxuICogZGlzcGxheXMgaXQuXG4gKiBJdCByZW5kZXJzIGFuIGlucHV0IHdpdGggdGhlIHByb3BlcnR5IGB2YWx1ZWBcbiAqIHdoaWNoIGlzIGVkaXRhYmxlIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXllZEZpbGVCcm93c2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZmlsZXM6IHRoaXMucHJvcHMuZmlsZXMsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHNldEZpbGVzKGZpbGVzKSB7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJvcHMoe2ZpbGVzOiBmaWxlc30pO1xuICAgIH1cblxuICAgIGhhbmRsZUNyZWF0ZUZvbGRlcihrZXkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gc3RhdGUuZmlsZXMuY29uY2F0KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzID0gbmV3RmlsZXM7XG4gICAgICAgICAgICB0aGlzLnNldEZpbGVzKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ3JlYXRlRmlsZXMoZmlsZXMsIHByZWZpeCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBmaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3S2V5ID0gcHJlZml4O1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4ICE9PSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICBwcmVmaXguc3Vic3RyaW5nKHByZWZpeC5sZW5ndGggLSAxLCBwcmVmaXgubGVuZ3RoKSAhPT0gJy8nXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0tleSArPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0tleSArPSBmaWxlLm5hbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBuZXdLZXksXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZU5ld0ZpbGVzID0gW107XG4gICAgICAgICAgICBuZXdGaWxlcy5tYXAoKG5ld0ZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuZmlsZXMubWFwKChleGlzdGluZ0ZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nRmlsZS5rZXkgPT09IG5ld0ZpbGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlTmV3RmlsZXMucHVzaChuZXdGaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VGaWxlcyA9IHN0YXRlLmZpbGVzLmNvbmNhdCh1bmlxdWVOZXdGaWxlcyk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IHJlcGxhY2VGaWxlcztcbiAgICAgICAgICAgIHRoaXMuc2V0RmlsZXMocmVwbGFjZUZpbGVzKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVuYW1lRm9sZGVyID0gKG9sZEtleSwgbmV3S2V5KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUua2V5LnN1YnN0cigwLCBvbGRLZXkubGVuZ3RoKSA9PT0gb2xkS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5rZXkucmVwbGFjZShvbGRLZXksIG5ld0tleSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IG5ld0ZpbGVzO1xuICAgICAgICAgICAgdGhpcy5zZXRGaWxlcyhuZXdGaWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBoYW5kbGVSZW5hbWVGaWxlKG9sZEtleSwgbmV3S2V5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUua2V5ID09PSBvbGRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuZXdLZXksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IG5ld0ZpbGVzO1xuICAgICAgICAgICAgdGhpcy5zZXRGaWxlcyhuZXdGaWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZURlbGV0ZUZvbGRlcihmb2xkZXJLZXkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gW107XG4gICAgICAgICAgICBzdGF0ZS5maWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5rZXkuc3Vic3RyKDAsIGZvbGRlcktleS5sZW5ndGgpICE9PSBmb2xkZXJLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaChmaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzID0gbmV3RmlsZXM7XG4gICAgICAgICAgICB0aGlzLnNldEZpbGVzKG5ld0ZpbGVzKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGVsZXRlRmlsZShmaWxlS2V5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUua2V5ICE9PSBmaWxlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IG5ld0ZpbGVzO1xuICAgICAgICAgICAgdGhpcy5zZXRGaWxlcyhuZXdGaWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge2lkfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9e2lkfT5cbiAgICAgICAgICAgICAgICA8cD5Db21wb25lbnQgd29ya3M8L3A+XG4gICAgICAgICAgICAgICAgPHA+e0pTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMpfTwvcD5cbiAgICAgICAgICAgICAgICA8RmlsZUJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgZmlsZXM9e3RoaXMuc3RhdGUuZmlsZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgey4uLmRlZmF1bHRGdW5jUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5vbWl0KFsnc2V0UHJvcHMnLCAnZmlsZXMnXSwgdGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlRm9sZGVyPXt0aGlzLmhhbmRsZUNyZWF0ZUZvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVGaWxlcz17dGhpcy5oYW5kbGVDcmVhdGVGaWxlc31cbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlRm9sZGVyPXt0aGlzLmhhbmRsZVJlbmFtZUZvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlRmlsZT17dGhpcy5oYW5kbGVSZW5hbWVGaWxlfVxuICAgICAgICAgICAgICAgICAgICBvblJlbmFtZUZvbGRlcj17dGhpcy5oYW5kbGVSZW5hbWVGb2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVuYW1lRmlsZT17dGhpcy5oYW5kbGVSZW5hbWVGaWxlfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUZvbGRlcj17dGhpcy5oYW5kbGVEZWxldGVGb2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlRmlsZT17dGhpcy5oYW5kbGVEZWxldGVGaWxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbktleWVkRmlsZUJyb3dzZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dBY3Rpb25CYXI6IHRydWUsXG4gICAgY2FuRmlsdGVyOiB0cnVlLFxuICAgIG5vRmlsZXNNZXNzYWdlOiAnTm8gZmlsZXMuJyxcblxuICAgIG5lc3RDaGlsZHJlbjogZmFsc2UsXG4gICAgcmVuZGVyU3R5bGU6ICd0YWJsZScsXG5cbiAgICBzdGFydE9wZW46IGZhbHNlLFxuXG4gICAgaGVhZGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsZVJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGZvbGRlclJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IHt9LFxuXG4gICAgaWNvbnM6IHt9LFxufTtcblxuLyoqXG4gKiBXYXMgbm90IHdvcmtpbmcgdW50aWwgSSBjb3BpZWQgdGhlIHByb3BUeXBlcyByYXRoZXIgdGhhbiByZWZlcmVuY2VkIHRoZW1cbiAqL1xuS2V5ZWRGaWxlQnJvd3Nlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNob3dBY3Rpb25CYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbkZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9GaWxlc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBpY29uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgRm9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgRm9sZGVyT3BlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIEZpbGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQREY6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBJbWFnZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIERlbGV0ZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFJlbmFtZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIExvYWRpbmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBEb3dubG9hZDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgfSksXG5cbiAgICBuZXN0Q2hpbGRyZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHJlbmRlclN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydsaXN0JywgJ3RhYmxlJ10pLFxuXG4gICAgc3RhcnRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGhlYWRlclJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWxlUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb2xkZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==