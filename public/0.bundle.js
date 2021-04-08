(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/Cards/Card.js":
/*!**************************************!*\
  !*** ./src/components/Cards/Card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CardsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CardsContext */ "./src/context/CardsContext.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/loading */ "./src/components/Common/loading.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Card = function Card(_ref) {
  var name = _ref.name,
      url = _ref.url;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      pokeName = _useState2[0],
      setPokeName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState4 = _slicedToArray(_useState3, 2),
      imgLoading = _useState4[0],
      setImgLoading = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      imageUrl = _useState6[0],
      setImageUrl = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      pokemonIndex = _useState8[0],
      setPokemonIndex = _useState8[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_CardsContext__WEBPACK_IMPORTED_MODULE_1__["CardsContext"]),
      doneFetch = _useContext.doneFetch; //const { setPokemonIndex, pokemonIndex } = useContext(CardsContext);


  console.log("poke index", pokemonIndex);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var pokeIndex = url.split("/")[url.split("/").length - 2]; //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;

    var imageUrl = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/".concat(pokeIndex, ".png?raw=true");
    setImageUrl(imageUrl);
    setPokeName(name);
    setPokemonIndex(pokeIndex);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "pokemon/".concat(pokemonIndex),
    className: " w-full h-auto m-4 back-poke",
    style: {
      maxWidth: "300px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-auto flex justify-between flex-col items-center img-card p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-auto flex justify-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-2xl font-bold"
  }, "#", pokemonIndex)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-xl"
  }, pokeName), doneFetch ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "LOADING"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageUrl,
    className: "w-full h-auto",
    style: {
      maxWidth: "150px",
      display: "".concat(doneFetch ? "block" : "none", " ")
    },
    alt: pokeName,
    loading: "lazy"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/components/Cards/Cards.js":
/*!***************************************!*\
  !*** ./src/components/Cards/Cards.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./src/components/Cards/Card.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Button */ "./src/components/Common/Button.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Cards = function Cards(_ref) {
  var cards = _ref.cards;
  console.log(cards);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(12),
      _useState2 = _slicedToArray(_useState, 2),
      maxValue = _useState2[0],
      setMaxValue = _useState2[1];

  var loadMore = function loadMore() {
    setMaxValue(maxValue + maxValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex flex-wrap justify-center w-full h-full"
  }, cards.slice(0, maxValue).map(function (poke, index) {
    var url = poke.url,
        name = poke.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: name,
      url: url,
      key: index
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " w-full h-full flex justify-center my-8"
  }, maxValue <= cards.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    loadMore: loadMore
  }))));
};

Cards.propTypes = {
  cards: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Cards);

/***/ }),

/***/ "./src/components/Cards/index.js":
/*!***************************************!*\
  !*** ./src/components/Cards/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CardsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CardsContext */ "./src/context/CardsContext.js");
/* harmony import */ var _Common_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/loading */ "./src/components/Common/loading.js");
/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cards */ "./src/components/Cards/Cards.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);






var CardsList = function CardsList() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_CardsContext__WEBPACK_IMPORTED_MODULE_1__["CardsContext"]),
      doneFetch = _useContext.doneFetch,
      cards = _useContext.cards;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, doneFetch ? cards.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-full h-full flex flex-wrap justify-center px-6 md:px-20 pt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cards__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: cards
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "no result") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_loading__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (CardsList);

/***/ }),

/***/ "./src/components/Common/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Common/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/css/styles.css */ "./src/assets/css/styles.css");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);




var Button = function Button(_ref) {
  var loadMore = _ref.loadMore;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "w-full h-full text-xl  text-white btn-loading",
    onClick: function onClick() {
      return loadMore();
    }
  }, "Cargar mas");
};

Button.propTypes = {
  stats: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map