(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/detail/HolderDetail.js":
/*!***********************************************!*\
  !*** ./src/components/detail/HolderDetail.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select-async-paginate */ \"./node_modules/react-select-async-paginate/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _sub_loadHolderOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sub/loadHolderOptions */ \"./src/components/detail/sub/loadHolderOptions.js\");\n/* harmony import */ var _sub_SubHolderDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub/SubHolderDetail */ \"./src/components/detail/sub/SubHolderDetail.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n // put value in redux\n// create another route to go one deeper\n\nfunction HolderDetail() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    value: '',\n    label: ''\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      holderLookup = _useState2[0],\n      setHolderLookup = _useState2[1];\n\n  var _useRouteMatch = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"useRouteMatch\"])(),\n      path = _useRouteMatch.path,\n      url = _useRouteMatch.url;\n\n  function Handler(e) {\n    if (holderLookup.value == '') {\n      e.preventDefault();\n    }\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n    className: \"header-c1\"\n  }, \"Search For A Title Holder:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"lookup-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"search-link-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"\".concat(url, \"/\").concat(holderLookup.value),\n    onClick: Handler\n  }, \"Search\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"selectbox-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_paginate__WEBPACK_IMPORTED_MODULE_1__[\"AsyncPaginate\"], {\n    label: \"Title Holder\",\n    name: \"title_holder\",\n    placeholder: \"Company Pty Ltd\",\n    value: holderLookup,\n    loadOptions: _sub_loadHolderOptions__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    onChange: function onChange(e) {\n      return setHolderLookup(e);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n    exact: true,\n    path: \"\".concat(path, \"/:id\"),\n    component: _sub_SubHolderDetail__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HolderDetail);\n\n//# sourceURL=webpack:///./src/components/detail/HolderDetail.js?");

/***/ }),

/***/ "./src/components/detail/sub/DetailTableC1.js":
/*!****************************************************!*\
  !*** ./src/components/detail/sub/DetailTableC1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar DetailTableC1 = function DetailTableC1(props) {\n  var _props$dict = props.dict,\n      value = _props$dict.value,\n      lookup = _props$dict.lookup,\n      header = _props$dict.header,\n      table_headers = _props$dict.table_headers,\n      table_data = _props$dict.table_data,\n      styles = _props$dict.styles;\n\n  if (value == null) {\n    return null;\n  } else if (value[lookup].length === 0) {\n    return null;\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, header, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: styles\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n      className: \"table\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null), table_headers.map(function (row) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n        key: row\n      }, row);\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, value[lookup].map(function (row, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, index + 1), table_data.map(function (line) {\n        var val = row;\n\n        for (var i = 0; i < line.length; i++) {\n          var val = val[line[i]];\n        }\n\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          key: val\n        }, val);\n      }));\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailTableC1);\n\n//# sourceURL=webpack:///./src/components/detail/sub/DetailTableC1.js?");

/***/ }),

/***/ "./src/components/detail/sub/SingleColumnTableC1.js":
/*!**********************************************************!*\
  !*** ./src/components/detail/sub/SingleColumnTableC1.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar format_values = function format_values(value, format) {\n  switch (format) {\n    case 'date':\n      var sDate = value.split(\"-\");\n      return sDate[0] === '2999' ? '' : \"\".concat(sDate[2], \"-\").concat(sDate[1], \"-\").concat(sDate[0]);\n\n    case 'length_boolean':\n      return value.length != 0 ? \"Yes\" : \"No\";\n\n    case 'length':\n      return value.length;\n\n    default:\n      return value;\n  }\n};\n\nvar SingleColumnTableC1 = function SingleColumnTableC1(props) {\n  var _props$dict = props.dict,\n      value = _props$dict.value,\n      header = _props$dict.header,\n      table_data = _props$dict.table_data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, header, \":\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"detail-sub-info-c1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"table\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, table_data.map(function (row, index) {\n    var val = value;\n\n    for (var i = 0; i < row['td'].length; i++) {\n      var val = val[row['td'][i]];\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n      key: index,\n      className: \"row\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n      className: \"col-5\"\n    }, row['th'], \":\"), row['multi'] == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: \"col-7\"\n    }, format_values(val, row['format'])) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n      className: \"col-7\"\n    }, val.map(function (line, index) {\n      var key = row['multi'] != '' ? line[row['multi']] : line;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n        key: index\n      }, format_values(key, row['format']));\n    })));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleColumnTableC1);\n\n//# sourceURL=webpack:///./src/components/detail/sub/SingleColumnTableC1.js?");

/***/ }),

/***/ "./src/components/detail/sub/SubHolderDetail.js":
/*!******************************************************!*\
  !*** ./src/components/detail/sub/SubHolderDetail.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux */ \"./src/redux/index.js\");\n/* harmony import */ var _DetailTableC1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailTableC1 */ \"./src/components/detail/sub/DetailTableC1.js\");\n/* harmony import */ var _SingleColumnTableC1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SingleColumnTableC1 */ \"./src/components/detail/sub/SingleColumnTableC1.js\");\n/* harmony import */ var _loading_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../loading/Loading */ \"./src/components/loading/Loading.js\");\n\n\n\n\n\n\n\nfunction SubHolderDetail(_ref) {\n  var match = _ref.match;\n  var id = match.params.id;\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(function (state) {\n    return state.detailSelection;\n  }),\n      value = _useSelector.holder;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"getHolderData\"])(id));\n  }, [id]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (value) {\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setFilterValues\"])({\n        ind_lst: value.title_count,\n        datagroup: 'titles'\n      }));\n      dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"setFilterValues\"])({\n        ind_lst: value.site_count,\n        datagroup: 'sites'\n      }));\n    }\n  }, [value]);\n  var SubsidiariesDict = {\n    value: value,\n    styles: \"detail-sub-info-c1\",\n    lookup: \"subsidiaries\",\n    header: \"Subsidiaries\",\n    table_headers: [\"Name\", \"Percent Owned\", \"Type\", \"Listed\"],\n    table_data: [[\"holder_name\"], [\"percown\"], [\"typ\"], [\"listed\"]]\n  };\n  var OwnersDict = {\n    value: value,\n    styles: \"detail-sub-info-c1\",\n    lookup: \"parent_company\",\n    header: \"Parent Companies\",\n    table_headers: [\"Name\", \"Percent Owned\", \"Type\", \"Listed\"],\n    table_data: [[\"holder_name\"], [\"percown\"], [\"typ\"], [\"listed\"]]\n  };\n  var TickerDict = {\n    value: value,\n    styles: \"detail-sub-info-c1\",\n    lookup: \"listed\",\n    header: \"Listed Locations\",\n    table_headers: [\"Ticker\", \"Exchange Code\", \"Exchange Name\"],\n    table_data: [[\"ticker\"], [\"exchange\", \"code\"], [\"exchange\", \"name\"]]\n  };\n  var BasicDict = {\n    value: value,\n    header: \"General Info\",\n    table_data: [{\n      th: \"Holder/Company Type\",\n      td: [\"company_type\", \"original\"],\n      multi: null,\n      format: null\n    }, {\n      th: \"Is Listed\",\n      td: [\"listed\"],\n      multi: null,\n      format: 'length_boolean'\n    }, {\n      th: \"Number of Owners\",\n      td: [\"parent_company\"],\n      multi: null,\n      format: 'length'\n    }, {\n      th: \"Number of Subsidiaries\",\n      td: [\"subsidiaries\"],\n      multi: null,\n      format: 'length'\n    }, {\n      th: \"Number of Titles\",\n      td: [\"title_count\"],\n      multi: null,\n      format: 'length'\n    }, {\n      th: \"Number of Sites\",\n      td: [\"site_count\"],\n      multi: null,\n      format: 'length'\n    }, {\n      th: \"States Holding Titles\",\n      td: [\"states\"],\n      multi: '',\n      format: null\n    }]\n  };\n\n  if (value == null) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"detail-info-c1\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, value.holder_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"list-table-btn-group\"\n    }, ['titles', 'sites'].map(function (item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        key: item,\n        className: \"btn-c5\",\n        onClick: function onClick() {\n          return dispatch(Object(_redux__WEBPACK_IMPORTED_MODULE_2__[\"triggerElement\"])(item));\n        }\n      }, item.charAt(0).toUpperCase() + item.slice(1), \" List Table\");\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SingleColumnTableC1__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      dict: BasicDict\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: TickerDict\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: OwnersDict\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DetailTableC1__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      dict: SubsidiariesDict\n    }));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubHolderDetail);\n\n//# sourceURL=webpack:///./src/components/detail/sub/SubHolderDetail.js?");

/***/ }),

/***/ "./src/components/detail/sub/loadHolderOptions.js":
/*!********************************************************!*\
  !*** ./src/components/detail/sub/loadHolderOptions.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction getHolderOptions() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/holders-list/\").then(function (res) {\n    return res.data;\n  })[\"catch\"](function (err) {\n    return {\n      value: '',\n      label: ''\n    };\n  });\n} // search = value entered in the select box.\n// prevOptions = list of values already in the dropdown. When scrolled past the end, more values will be added.\n\n\nfunction loadOptions(_x, _x2) {\n  return _loadOptions.apply(this, arguments);\n}\n\nfunction _loadOptions() {\n  _loadOptions = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(search, prevOptions) {\n    var options, filteredOptions, searchLower, hasMore, slicedOptions;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return getHolderOptions();\n\n          case 2:\n            options = _context.sent;\n\n            if (!search) {\n              filteredOptions = options;\n            } else {\n              searchLower = search.toLowerCase();\n              filteredOptions = options.filter(function (_ref) {\n                var label = _ref.label;\n                return label.toLowerCase().includes(searchLower);\n              });\n            }\n\n            hasMore = filteredOptions.length > prevOptions.length + 10;\n            slicedOptions = filteredOptions.slice(prevOptions.length, prevOptions.length + 10);\n            return _context.abrupt(\"return\", {\n              options: slicedOptions,\n              hasMore: hasMore\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _loadOptions.apply(this, arguments);\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadOptions);\n\n//# sourceURL=webpack:///./src/components/detail/sub/loadHolderOptions.js?");

/***/ })

}]);