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
  onSelect: function onSelect(fileOrFolder) {
    console.log(fileOrFolder);
  },
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
  // onCreateFiles: (file) => {
  //     console.log(file);
  // },
  // onCreateFolder: false,
  // onMoveFile: (file) => {
  //     console.log(file);
  // },
  // onMoveFolder: false,
  // onRenameFile: false,
  // onRenameFolder: false,
  // onDeleteFile: false,
  // onDeleteFolder: false,
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

  function KeyedFileBrowser(_props) {
    var _this;

    _classCallCheck(this, KeyedFileBrowser);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      files: _this.props.files
    });

    _defineProperty(_assertThisInitialized(_this), "handleRenameFolder", function (oldKey, newKey) {
      _this.setState(function (state, props) {
        console.log('state');
        console.log(state);
        console.log('props');
        console.log(props);
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
        return state;
      });
    });

    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } // Bind to Dash event handler that puts event back into props


  _createClass(KeyedFileBrowser, [{
    key: "handleChange",
    value: function handleChange(event) {
      console.log(event); // this.props.setProps({});
    }
  }, {
    key: "handleCreateFolder",
    value: function handleCreateFolder(key) {
      this.setState(function (state) {
        state.files = state.files.concat([{
          key: key
        }]);
        return state;
      });
    }
  }, {
    key: "handleCreateFiles",
    value: function handleCreateFiles(files, prefix) {
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
        state.files = state.files.concat(uniqueNewFiles);
        return state;
      });
    }
  }, {
    key: "handleRenameFile",
    value: function handleRenameFile(oldKey, newKey) {
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
        return state;
      });
    }
  }, {
    key: "handleDeleteFolder",
    value: function handleDeleteFolder(folderKey) {
      this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key.substr(0, folderKey.length) !== folderKey) {
            newFiles.push(file);
          }
        });
        state.files = newFiles;
        return state;
      });
    }
  }, {
    key: "handleDeleteFile",
    value: function handleDeleteFile(fileKey) {
      this.setState(function (state) {
        var newFiles = [];
        state.files.map(function (file) {
          if (file.key !== fileKey) {
            newFiles.push(file);
          }
        });
        state.files = newFiles;
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
      }))); // return (
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX2tleWVkX2ZpbGVfYnJvd3Nlci8uL3NyYy9saWIvY29tcG9uZW50cy9LZXllZEZpbGVCcm93c2VyLnJlYWN0LmpzIl0sIm5hbWVzIjpbImRlZmF1bHRGdW5jUHJvcHMiLCJoZWFkZXJSZW5kZXJlciIsIkhlYWRlcnMiLCJUYWJsZUhlYWRlciIsImZpbHRlclJlbmRlcmVyIiwiRmlsdGVycyIsIkRlZmF1bHRGaWx0ZXIiLCJmaWxlUmVuZGVyZXIiLCJGaWxlUmVuZGVyZXJzIiwiVGFibGVGaWxlIiwiZm9sZGVyUmVuZGVyZXIiLCJGb2xkZXJSZW5kZXJlcnMiLCJUYWJsZUZvbGRlciIsImRldGFpbFJlbmRlcmVyIiwiRGV0YWlscyIsIkRlZmF1bHREZXRhaWwiLCJhY3Rpb25SZW5kZXJlciIsIkRlZmF1bHRBY3Rpb24iLCJjb25maXJtRGVsZXRpb25SZW5kZXJlciIsIkRlZmF1bHRDb25maXJtRGVsZXRpb24iLCJjb25maXJtTXVsdGlwbGVEZWxldGlvblJlbmRlcmVyIiwiTXVsdGlwbGVDb25maXJtRGVsZXRpb24iLCJncm91cCIsIkdyb3VwZXJzIiwiR3JvdXBCeUZvbGRlciIsInNvcnQiLCJTb3J0ZXJzIiwiU29ydEJ5TmFtZSIsIm9uU2VsZWN0IiwiZmlsZU9yRm9sZGVyIiwiY29uc29sZSIsImxvZyIsIm9uU2VsZWN0RmlsZSIsImZpbGUiLCJvblNlbGVjdEZvbGRlciIsImZvbGRlciIsIm9uUHJldmlld09wZW4iLCJvblByZXZpZXdDbG9zZSIsIm9uRm9sZGVyT3BlbiIsIm9uRm9sZGVyQ2xvc2UiLCJvbkRvd25sb2FkRmlsZSIsIktleWVkRmlsZUJyb3dzZXIiLCJwcm9wcyIsImZpbGVzIiwib2xkS2V5IiwibmV3S2V5Iiwic2V0U3RhdGUiLCJzdGF0ZSIsIm5ld0ZpbGVzIiwibWFwIiwia2V5Iiwic3Vic3RyIiwibGVuZ3RoIiwicHVzaCIsInJlcGxhY2UiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJjb25jYXQiLCJwcmVmaXgiLCJzdWJzdHJpbmciLCJuYW1lIiwic2l6ZSIsInVuaXF1ZU5ld0ZpbGVzIiwibmV3RmlsZSIsImV4aXN0cyIsImV4aXN0aW5nRmlsZSIsImZvbGRlcktleSIsImZpbGVLZXkiLCJpZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbWl0IiwiaGFuZGxlQ3JlYXRlRm9sZGVyIiwiaGFuZGxlQ3JlYXRlRmlsZXMiLCJoYW5kbGVSZW5hbWVGb2xkZXIiLCJoYW5kbGVSZW5hbWVGaWxlIiwiaGFuZGxlRGVsZXRlRm9sZGVyIiwiaGFuZGxlRGVsZXRlRmlsZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInNob3dBY3Rpb25CYXIiLCJjYW5GaWx0ZXIiLCJub0ZpbGVzTWVzc2FnZSIsIm5lc3RDaGlsZHJlbiIsInJlbmRlclN0eWxlIiwic3RhcnRPcGVuIiwiaGVhZGVyUmVuZGVyZXJQcm9wcyIsImZpbHRlclJlbmRlcmVyUHJvcHMiLCJmaWxlUmVuZGVyZXJQcm9wcyIsImZvbGRlclJlbmRlcmVyUHJvcHMiLCJkZXRhaWxSZW5kZXJlclByb3BzIiwiaWNvbnMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJzZXRQcm9wcyIsImZ1bmMiLCJhY3Rpb25zIiwibm9kZSIsImJvb2wiLCJzaGFwZSIsIkZvbGRlciIsImVsZW1lbnQiLCJGb2xkZXJPcGVuIiwiRmlsZSIsIlBERiIsIkltYWdlIiwiRGVsZXRlIiwiUmVuYW1lIiwiTG9hZGluZyIsIkRvd25sb2FkIiwib25lT2YiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWFBLElBQU1BLGdCQUFnQixHQUFHO0FBQ3JCQyxnQkFBYyxFQUFFQyxnRUFBTyxDQUFDQyxXQURIO0FBRXJCQyxnQkFBYyxFQUFFQyxnRUFBTyxDQUFDQyxhQUZIO0FBR3JCQyxjQUFZLEVBQUVD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Q0Fma0I7QUEyQnpCckIsY0FBWSxFQUFFVSxpREFBUyxDQUFDUSxJQTNCQztBQTRCekJqQixhQUFXLEVBQUVTLGlEQUFTLENBQUNvQixLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBaEIsQ0E1Qlk7QUE4QnpCNUIsV0FBUyxFQUFFUSxpREFBUyxDQUFDUSxJQTlCSTtBQWdDekJmLHFCQUFtQixFQUFFTyxpREFBUyxDQUFDcUIsTUFoQ047QUFpQ3pCM0IscUJBQW1CLEVBQUVNLGlEQUFTLENBQUNxQixNQWpDTjtBQWtDekIxQixtQkFBaUIsRUFBRUssaURBQVMsQ0FBQ3FCLE1BbENKO0FBbUN6QnpCLHFCQUFtQixFQUFFSSxpREFBUyxDQUFDcUIsTUFuQ047QUFvQ3pCeEIscUJBQW1CLEVBQUVHLGlEQUFTLENBQUNxQjtBQXBDTixDQUE3QixDIiwiZmlsZSI6ImM2NjEwMWMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtvbWl0fSBmcm9tICdyYW1kYSc7XG5pbXBvcnQgRmlsZUJyb3dzZXIsIHtcbiAgICBIZWFkZXJzLFxuICAgIEZpbGVSZW5kZXJlcnMsXG4gICAgRm9sZGVyUmVuZGVyZXJzLFxuICAgIERldGFpbHMsXG4gICAgRmlsdGVycyxcbiAgICBHcm91cGVycyxcbiAgICBTb3J0ZXJzLFxuICAgIERlZmF1bHRBY3Rpb24sXG4gICAgRGVmYXVsdENvbmZpcm1EZWxldGlvbixcbiAgICBNdWx0aXBsZUNvbmZpcm1EZWxldGlvbixcbn0gZnJvbSAncmVhY3Qta2V5ZWQtZmlsZS1icm93c2VyJztcblxuY29uc3QgZGVmYXVsdEZ1bmNQcm9wcyA9IHtcbiAgICBoZWFkZXJSZW5kZXJlcjogSGVhZGVycy5UYWJsZUhlYWRlcixcbiAgICBmaWx0ZXJSZW5kZXJlcjogRmlsdGVycy5EZWZhdWx0RmlsdGVyLFxuICAgIGZpbGVSZW5kZXJlcjogRmlsZVJlbmRlcmVycy5UYWJsZUZpbGUsXG4gICAgZm9sZGVyUmVuZGVyZXI6IEZvbGRlclJlbmRlcmVycy5UYWJsZUZvbGRlcixcbiAgICBkZXRhaWxSZW5kZXJlcjogRGV0YWlscy5EZWZhdWx0RGV0YWlsLFxuICAgIGFjdGlvblJlbmRlcmVyOiBEZWZhdWx0QWN0aW9uLFxuICAgIGNvbmZpcm1EZWxldGlvblJlbmRlcmVyOiBEZWZhdWx0Q29uZmlybURlbGV0aW9uLFxuICAgIGNvbmZpcm1NdWx0aXBsZURlbGV0aW9uUmVuZGVyZXI6IE11bHRpcGxlQ29uZmlybURlbGV0aW9uLFxuICAgIGdyb3VwOiBHcm91cGVycy5Hcm91cEJ5Rm9sZGVyLFxuICAgIHNvcnQ6IFNvcnRlcnMuU29ydEJ5TmFtZSxcblxuICAgIG9uU2VsZWN0OiAoZmlsZU9yRm9sZGVyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVPckZvbGRlcik7XG4gICAgfSwgLy8gQWx3YXlzIGNhbGxlZCB3aGVuIGEgZmlsZSBvciBmb2xkZXIgaXMgc2VsZWN0ZWRcbiAgICBvblNlbGVjdEZpbGU6IChmaWxlKSA9PiB7fSwgLy8gICAgQ2FsbGVkIGFmdGVyIG9uU2VsZWN0LCBvbmx5IG9uIGZpbGUgc2VsZWN0aW9uXG4gICAgb25TZWxlY3RGb2xkZXI6IChmb2xkZXIpID0+IHt9LCAvLyAgICBDYWxsZWQgYWZ0ZXIgb25TZWxlY3QsIG9ubHkgb24gZm9sZGVyIHNlbGVjdGlvblxuXG4gICAgb25QcmV2aWV3T3BlbjogKGZpbGUpID0+IHt9LCAvLyBGaWxlIG9wZW5lZFxuICAgIG9uUHJldmlld0Nsb3NlOiAoZmlsZSkgPT4ge30sIC8vIEZpbGUgY2xvc2VkXG5cbiAgICBvbkZvbGRlck9wZW46IChmb2xkZXIpID0+IHt9LCAvLyBGb2xkZXIgb3BlbmVkXG4gICAgb25Gb2xkZXJDbG9zZTogKGZvbGRlcikgPT4ge30sIC8vIEZvbGRlciBjbG9zZWRcblxuICAgIC8vIG9uQ3JlYXRlRmlsZXM6IChmaWxlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgIC8vIH0sXG4gICAgLy8gb25DcmVhdGVGb2xkZXI6IGZhbHNlLFxuICAgIC8vIG9uTW92ZUZpbGU6IChmaWxlKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgIC8vIH0sXG4gICAgLy8gb25Nb3ZlRm9sZGVyOiBmYWxzZSxcbiAgICAvLyBvblJlbmFtZUZpbGU6IGZhbHNlLFxuICAgIC8vIG9uUmVuYW1lRm9sZGVyOiBmYWxzZSxcbiAgICAvLyBvbkRlbGV0ZUZpbGU6IGZhbHNlLFxuICAgIC8vIG9uRGVsZXRlRm9sZGVyOiBmYWxzZSxcbiAgICBvbkRvd25sb2FkRmlsZTogZmFsc2UsXG59O1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5ZWRGaWxlQnJvd3NlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGZpbGVzOiB0aGlzLnByb3BzLmZpbGVzLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvLyBCaW5kIHRvIERhc2ggZXZlbnQgaGFuZGxlciB0aGF0IHB1dHMgZXZlbnQgYmFjayBpbnRvIHByb3BzXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5zZXRQcm9wcyh7fSk7XG4gICAgfVxuICAgIGhhbmRsZUNyZWF0ZUZvbGRlcihrZXkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzID0gc3RhdGUuZmlsZXMuY29uY2F0KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUNyZWF0ZUZpbGVzKGZpbGVzLCBwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGVzID0gZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleSA9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeCAhPT0gJycgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4LnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoIC0gMSwgcHJlZml4Lmxlbmd0aCkgIT09ICcvJ1xuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgKz0gJy8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdLZXkgKz0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogbmV3S2V5LFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVOZXdGaWxlcyA9IFtdO1xuICAgICAgICAgICAgbmV3RmlsZXMubWFwKChuZXdGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHN0YXRlLmZpbGVzLm1hcCgoZXhpc3RpbmdGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0ZpbGUua2V5ID09PSBuZXdGaWxlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZU5ld0ZpbGVzLnB1c2gobmV3RmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IHN0YXRlLmZpbGVzLmNvbmNhdCh1bmlxdWVOZXdGaWxlcyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVSZW5hbWVGb2xkZXIgPSAob2xkS2V5LCBuZXdLZXkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdGUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwcm9wcycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMpO1xuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmtleS5zdWJzdHIoMCwgb2xkS2V5Lmxlbmd0aCkgPT09IG9sZEtleSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUua2V5LnJlcGxhY2Uob2xkS2V5LCBuZXdLZXkpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMgPSBuZXdGaWxlcztcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBoYW5kbGVSZW5hbWVGaWxlKG9sZEtleSwgbmV3S2V5KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdGaWxlcyA9IFtdO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMubWFwKChmaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUua2V5ID09PSBvbGRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RmlsZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuZXdLZXksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0ZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdGF0ZS5maWxlcyA9IG5ld0ZpbGVzO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlRGVsZXRlRm9sZGVyKGZvbGRlcktleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmtleS5zdWJzdHIoMCwgZm9sZGVyS2V5Lmxlbmd0aCkgIT09IGZvbGRlcktleSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMgPSBuZXdGaWxlcztcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZURlbGV0ZUZpbGUoZmlsZUtleSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3RmlsZXMgPSBbXTtcbiAgICAgICAgICAgIHN0YXRlLmZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLmtleSAhPT0gZmlsZUtleSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3RhdGUuZmlsZXMgPSBuZXdGaWxlcztcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAgICAgICAgIDxwPkNvbXBvbmVudCB3b3JrczwvcD5cbiAgICAgICAgICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkodGhpcy5wcm9wcyl9PC9wPlxuICAgICAgICAgICAgICAgIDxGaWxlQnJvd3NlclxuICAgICAgICAgICAgICAgICAgICBmaWxlcz17dGhpcy5zdGF0ZS5maWxlc31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB7Li4uZGVmYXVsdEZ1bmNQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgey4uLm9taXQoWydzZXRQcm9wcycsICdmaWxlcyddLCB0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgb25DcmVhdGVGb2xkZXI9e3RoaXMuaGFuZGxlQ3JlYXRlRm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZUZpbGVzPXt0aGlzLmhhbmRsZUNyZWF0ZUZpbGVzfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdmVGb2xkZXI9e3RoaXMuaGFuZGxlUmVuYW1lRm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdmVGaWxlPXt0aGlzLmhhbmRsZVJlbmFtZUZpbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uUmVuYW1lRm9sZGVyPXt0aGlzLmhhbmRsZVJlbmFtZUZvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25SZW5hbWVGaWxlPXt0aGlzLmhhbmRsZVJlbmFtZUZpbGV9XG4gICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlRm9sZGVyPXt0aGlzLmhhbmRsZURlbGV0ZUZvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVGaWxlPXt0aGlzLmhhbmRsZURlbGV0ZUZpbGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICAvLyByZXR1cm4gKFxuICAgICAgICAvLyAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAvLyAgICAgICAgIDxkaXZcbiAgICAgICAgLy8gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAvLyAgICAgICAgICAgICB7Li4ub21pdChbJ3NldFByb3BzJ10sIHRoaXMucHJvcHMpfVxuICAgICAgICAvLyAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICAgICAgPHA+Q29tcG9uZW50IHdvcmtzPC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKX08L3A+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gKTtcbiAgICB9XG59XG5cbktleWVkRmlsZUJyb3dzZXIuZGVmYXVsdFByb3BzID0ge1xuICAgIHNob3dBY3Rpb25CYXI6IHRydWUsXG4gICAgY2FuRmlsdGVyOiB0cnVlLFxuICAgIG5vRmlsZXNNZXNzYWdlOiAnTm8gZmlsZXMuJyxcblxuICAgIG5lc3RDaGlsZHJlbjogZmFsc2UsXG4gICAgcmVuZGVyU3R5bGU6ICd0YWJsZScsXG5cbiAgICBzdGFydE9wZW46IGZhbHNlLFxuXG4gICAgaGVhZGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczoge30sXG4gICAgZmlsZVJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGZvbGRlclJlbmRlcmVyUHJvcHM6IHt9LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IHt9LFxuXG4gICAgaWNvbnM6IHt9LFxufTtcblxuLyoqXG4gKiBXYXMgbm90IHdvcmtpbmcgdW50aWwgSSBjb3BpZWQgdGhlIHByb3BUeXBlcyByYXRoZXIgdGhhbiByZWZlcmVuY2VkIHRoZW1cbiAqL1xuS2V5ZWRGaWxlQnJvd3Nlci5wcm9wVHlwZXMgPSB7XG4gICAgZmlsZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogRGFzaC1hc3NpZ25lZCBjYWxsYmFjayB0aGF0IHNob3VsZCBiZSBjYWxsZWQgd2hlbmV2ZXIgYW55IG9mIHRoZVxuICAgICAqIHByb3BlcnRpZXMgY2hhbmdlLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5ub2RlLFxuICAgIHNob3dBY3Rpb25CYXI6IFByb3BUeXBlcy5ib29sLFxuICAgIGNhbkZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbm9GaWxlc01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICBpY29uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgRm9sZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgICAgRm9sZGVyT3BlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIEZpbGU6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBQREY6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBJbWFnZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIERlbGV0ZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIFJlbmFtZTogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAgIExvYWRpbmc6IFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgICBEb3dubG9hZDogUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgfSksXG5cbiAgICBuZXN0Q2hpbGRyZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHJlbmRlclN0eWxlOiBQcm9wVHlwZXMub25lT2YoWydsaXN0JywgJ3RhYmxlJ10pLFxuXG4gICAgc3RhcnRPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIGhlYWRlclJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmaWxlUmVuZGVyZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBmb2xkZXJSZW5kZXJlclByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRldGFpbFJlbmRlcmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==