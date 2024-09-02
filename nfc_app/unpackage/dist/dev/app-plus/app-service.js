(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!***********************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/main.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 5));\n__webpack_require__(/*! uni-pages */ 36);\n__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 71));\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./common/config.js */ 75));\nvar _common = _interopRequireDefault(__webpack_require__(/*! ./common/common.js */ 74));\nvar _db = _interopRequireDefault(__webpack_require__(/*! ./common/db.js */ 76));\nvar _func = _interopRequireDefault(__webpack_require__(/*! ./common/func.js */ 77));\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./common/store.js */ 78));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n// 测试阶段\n_config.default.debug = \"development\" === 'development';\nif (!_config.default.debug) {\n  // 取消日志打印功能\n  console.log = function () {};\n}\n\n// 注册当前环境 \n_common.default.register_env(function (env) {\n  _vue.default.prototype.$env = env;\n});\n_vue.default.config.productionTip = false;\n_vue.default.prototype.$config = _config.default;\n_vue.default.prototype.$api = _common.default;\n_vue.default.prototype.$db = _db.default;\n_vue.default.prototype.$dbcmd = uniCloud.database().command;\n_vue.default.prototype.$func = _func.default;\n_vue.default.prototype.$store = _store.default;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyIkY29uZmlnIiwiZGVidWciLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsIiRhcGkiLCJyZWdpc3Rlcl9lbnYiLCJlbnYiLCJWdWUiLCJwcm90b3R5cGUiLCIkZW52IiwiY29uZmlnIiwicHJvZHVjdGlvblRpcCIsIiRkYiIsIiRkYmNtZCIsInVuaUNsb3VkIiwiZGF0YWJhc2UiLCJjb21tYW5kIiwiJGZ1bmMiLCIkc3RvcmUiLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUFtQjtBQUF1RTtBQUMxRjtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBc0M7QUFBQTtBQXFDdEM7QUFDQUEsZUFBTyxDQUFDQyxLQUFLLEdBQUdDLGFBQW9CLEtBQUssYUFBYTtBQUV0RCxJQUFJLENBQUNGLGVBQU8sQ0FBQ0MsS0FBSyxFQUFFO0VBQ25CO0VBQ0FFLE9BQU8sQ0FBQ0MsR0FBRyxHQUFHLFlBQU0sQ0FBRSxDQUFDO0FBQ3hCOztBQUVBO0FBQ0FDLGVBQUksQ0FBQ0MsWUFBWSxDQUFDLFVBQUNDLEdBQUcsRUFBSztFQUMxQkMsWUFBRyxDQUFDQyxTQUFTLENBQUNDLElBQUksR0FBR0gsR0FBRztBQUN6QixDQUFDLENBQUM7QUFFRkMsWUFBRyxDQUFDRyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDSixZQUFHLENBQUNDLFNBQVMsQ0FBQ1QsT0FBTyxHQUFHQSxlQUFPO0FBQy9CUSxZQUFHLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxHQUFHQSxlQUFJO0FBQ3pCRyxZQUFHLENBQUNDLFNBQVMsQ0FBQ0ksR0FBRyxHQUFHQSxXQUFHO0FBQ3ZCTCxZQUFHLENBQUNDLFNBQVMsQ0FBQ0ssTUFBTSxHQUFHQyxRQUFRLENBQUNDLFFBQVEsRUFBRSxDQUFDQyxPQUFPO0FBQ2xEVCxZQUFHLENBQUNDLFNBQVMsQ0FBQ1MsS0FBSyxHQUFHQSxhQUFLO0FBQzNCVixZQUFHLENBQUNDLFNBQVMsQ0FBQ1UsTUFBTSxHQUFHQSxjQUFNO0FBRTdCQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJZCxZQUFHLG1CQUNmWSxZQUFHLEVBQ0w7QUFFRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCAnQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy91bmktY2xvdWQvZGlzdC9pbmRleC5qcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5pbXBvcnQgJGNvbmZpZyBmcm9tICcuL2NvbW1vbi9jb25maWcuanMnXHJcbmltcG9ydCAkYXBpIGZyb20gJy4vY29tbW9uL2NvbW1vbi5qcydcclxuaW1wb3J0ICRkYiBmcm9tICcuL2NvbW1vbi9kYi5qcydcclxuaW1wb3J0ICRmdW5jIGZyb20gJy4vY29tbW9uL2Z1bmMuanMnXHJcbmltcG9ydCAkc3RvcmUgZnJvbSAnLi9jb21tb24vc3RvcmUuanMnXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIOa1i+ivlemYtuautVxyXG4kY29uZmlnLmRlYnVnID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XHJcblxyXG5pZiAoISRjb25maWcuZGVidWcpIHtcclxuXHQvLyDlj5bmtojml6Xlv5fmiZPljbDlip/og71cclxuXHRjb25zb2xlLmxvZyA9ICgpID0+IHsgfVxyXG59XHJcblxyXG4vLyDms6jlhozlvZPliY3njq/looMgXHJcbiRhcGkucmVnaXN0ZXJfZW52KChlbnYpID0+IHtcclxuXHRWdWUucHJvdG90eXBlLiRlbnYgPSBlbnY7XHJcbn0pO1xyXG5cclxuVnVlLmNvbmZpZy5wcm9kdWN0aW9uVGlwID0gZmFsc2VcclxuXHJcblZ1ZS5wcm90b3R5cGUuJGNvbmZpZyA9ICRjb25maWdcclxuVnVlLnByb3RvdHlwZS4kYXBpID0gJGFwaVxyXG5WdWUucHJvdG90eXBlLiRkYiA9ICRkYlxyXG5WdWUucHJvdG90eXBlLiRkYmNtZCA9IHVuaUNsb3VkLmRhdGFiYXNlKCkuY29tbWFuZDtcclxuVnVlLnByb3RvdHlwZS4kZnVuYyA9ICRmdW5jXHJcblZ1ZS5wcm90b3R5cGUuJHN0b3JlID0gJHN0b3JlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG5cdC4uLkFwcFxyXG59KVxyXG5cclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 18));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 9));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 7));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 19));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 23));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 5));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 24));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 26));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 27));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 28));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 32));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 33));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 34));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e34) { throw _e34; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e35) { didErr = true; err = _e35; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) {
                this._doProcessBlock(s, h);
              }
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            P = e[t + 15],
            T = i[0],
            C = i[1],
            x = i[2],
            O = i[3];
          T = u(T, C, x, O, o, 7, a[0]), O = u(O, T, C, x, c, 12, a[1]), x = u(x, O, T, C, p, 17, a[2]), C = u(C, x, O, T, f, 22, a[3]), T = u(T, C, x, O, g, 7, a[4]), O = u(O, T, C, x, m, 12, a[5]), x = u(x, O, T, C, y, 17, a[6]), C = u(C, x, O, T, _, 22, a[7]), T = u(T, C, x, O, w, 7, a[8]), O = u(O, T, C, x, v, 12, a[9]), x = u(x, O, T, C, I, 17, a[10]), C = u(C, x, O, T, S, 22, a[11]), T = u(T, C, x, O, b, 7, a[12]), O = u(O, T, C, x, k, 12, a[13]), x = u(x, O, T, C, A, 17, a[14]), T = h(T, C = u(C, x, O, T, P, 22, a[15]), x, O, c, 5, a[16]), O = h(O, T, C, x, y, 9, a[17]), x = h(x, O, T, C, S, 14, a[18]), C = h(C, x, O, T, o, 20, a[19]), T = h(T, C, x, O, m, 5, a[20]), O = h(O, T, C, x, I, 9, a[21]), x = h(x, O, T, C, P, 14, a[22]), C = h(C, x, O, T, g, 20, a[23]), T = h(T, C, x, O, v, 5, a[24]), O = h(O, T, C, x, A, 9, a[25]), x = h(x, O, T, C, f, 14, a[26]), C = h(C, x, O, T, w, 20, a[27]), T = h(T, C, x, O, k, 5, a[28]), O = h(O, T, C, x, p, 9, a[29]), x = h(x, O, T, C, _, 14, a[30]), T = l(T, C = h(C, x, O, T, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, T, C, x, w, 11, a[33]), x = l(x, O, T, C, S, 16, a[34]), C = l(C, x, O, T, A, 23, a[35]), T = l(T, C, x, O, c, 4, a[36]), O = l(O, T, C, x, g, 11, a[37]), x = l(x, O, T, C, _, 16, a[38]), C = l(C, x, O, T, I, 23, a[39]), T = l(T, C, x, O, k, 4, a[40]), O = l(O, T, C, x, o, 11, a[41]), x = l(x, O, T, C, f, 16, a[42]), C = l(C, x, O, T, y, 23, a[43]), T = l(T, C, x, O, v, 4, a[44]), O = l(O, T, C, x, b, 11, a[45]), x = l(x, O, T, C, P, 16, a[46]), T = d(T, C = l(C, x, O, T, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, T, C, x, _, 10, a[49]), x = d(x, O, T, C, A, 15, a[50]), C = d(C, x, O, T, m, 21, a[51]), T = d(T, C, x, O, b, 6, a[52]), O = d(O, T, C, x, f, 10, a[53]), x = d(x, O, T, C, I, 15, a[54]), C = d(C, x, O, T, c, 21, a[55]), T = d(T, C, x, O, w, 6, a[56]), O = d(O, T, C, x, P, 10, a[57]), x = d(x, O, T, C, y, 15, a[58]), C = d(C, x, O, T, k, 21, a[59]), T = d(T, C, x, O, g, 6, a[60]), O = d(O, T, C, x, S, 10, a[61]), x = d(x, O, T, C, p, 15, a[62]), C = d(C, x, O, T, v, 21, a[63]), i[0] = i[0] + T | 0, i[1] = i[1] + C | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "app-plus",
  k = "true" === false || !0 === false,
  A = I([]),
  P = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  T = I({
    "address": [
        "127.0.0.1",
        "10.15.34.47",
        "192.168.88.1",
        "192.168.153.1"
    ],
    "debugPort": 9000,
    "initialLaunchType": "local",
    "servePort": 7000,
    "skipFiles": [
        "<node_internals>/**",
        "D:/Program Files/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),
  C = I([{"provider":"aliyun","spaceName":"nfc","spaceId":"mp-34b33b4d-bb1d-44ea-9df5-6814a5fbe389","clientSecret":"riGz4aK8SH3tADLyZOZvzg=="}]) || [],
  x = true;
var O = "";
try {
  O = (__webpack_require__(/*! uni-stat-config */ 35).default || __webpack_require__(/*! uni-stat-config */ 35)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === P && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function G(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function V(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(te, _Error);
  var _super = _createSuper(te);
  function te(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, te);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return te;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function ue() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return oe = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === P && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) return s(new te({
            code: "SYS_ERR",
            message: e.errMsg || "request:fail",
            requestId: t
          }));
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var le = /*#__PURE__*/function () {
  function le(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                h = a.accessKeyId;
                l = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: h,
                  Signature: l,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = he.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new te({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var de = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var pe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var ge = function ge() {},
  me = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  ye = me,
  _e = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function Ie(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function be(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n4 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n4(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var ke = {
    adapter: null,
    runtime: void 0
  },
  Ae = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_ge) {
  (0, _inherits2.default)(Pe, _ge);
  var _super2 = _createSuper(Pe);
  function Pe() {
    var _this6;
    (0, _classCallCheck2.default)(this, Pe);
    _this6 = _super2.call(this), ke.adapter.root.tcbObject || (ke.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      ke.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ke.adapter.root.tcbObject;
    }
  }]);
  return Pe;
}(ge);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var Ce = /*#__PURE__*/function () {
  function Ce(e) {
    (0, _classCallCheck2.default)(this, Ce);
    if (!this._storage) {
      this._persistence = ke.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, ke.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n5 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n5,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Ce, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, ke.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ae.includes(_e7)) continue;
        var _r2 = this._storage.getItem(_s6);
        ve(_r2) || Ie(_r2) || (n.setItem(_s6, _r2), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Ce;
}();
var xe = {},
  Oe = {};
function Ee(e) {
  return xe[e];
}
var Le = /*#__PURE__*/(0, _createClass2.default)(function Le(e, t) {
  (0, _classCallCheck2.default)(this, Le);
  this.data = t || null, this.name = e;
});
var Re = /*#__PURE__*/function (_Le) {
  (0, _inherits2.default)(Re, _Le);
  var _super3 = _createSuper(Re);
  function Re(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Re);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Re);
}(Le);
var Ue = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Re) return console.error(e.error), this;
      var n = "string" == typeof e ? new Le(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Ue.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ue.fire(e, t);
}
function Me(e, t) {
  Ue.off(e, t);
}
var qe = "loginStateChanged",
  Fe = "loginStateExpire",
  Ke = "loginTypeChanged",
  je = "anonymousConverted",
  $e = "refreshAccessToken";
var Be;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Be || (Be = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  He = {
    "X-SDK-Version": "1.3.5"
  };
function ze(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e9 in r) {
        o.append(_e9, r[_e9]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function Je() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, He), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new ke.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ee(this.config.env), this._localCache = (t = this.config.env, Oe[t]), ze(this._reqClass, "post", [Je]), ze(this._reqClass, "upload", [Je]), ze(this._reqClass, "download", [Je]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new te({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e10 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Be.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 19;
                  break;
                }
                _e11 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e11,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Fe), this._cache.removeStore(n);
              case 20:
                throw new te({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De($e), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new te({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e12 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e12);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e13 in o) {
                    o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e14 in i) {
                    void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(pe, "//tcb-api.tencentcloudapi.com/web", d);
                l && (p += l);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new te({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n6,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n6 = _context11.sent;
                if (!_n6.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new te({
                  code: _n6.data.code,
                  message: _n6.data.message
                });
              case 12:
                return _context11.abrupt("return", _n6.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new te({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ee(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ee(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Be.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Be.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Be.WECHAT || this.loginType === Be.WECHAT_OPEN || this.loginType === Be.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.ANONYMOUS,
                  persistence: "local"
                });
                _e16 = new Ze(this.config.env);
                _context16.next = 19;
                return _e16.user.refresh();
              case 19:
                return _context16.abrupt("return", _e16);
              case 20:
                throw new te({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Ke, {
                  loginType: Be.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new te({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Be.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new te({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Be.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Ke, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === Be.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new te({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Ke, {
                  env: this.config.env,
                  loginType: Be.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Fe, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne($e, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Ke, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  ht = function ht(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  lt = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (ke.adapter || (this.requestClient = new ke.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, lt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ke.adapter.primaryStorage || lt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        xe[t] = new Ce(e), Oe[t] = new Ce(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Me.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new te({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = be(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (ke.adapter = t), n && (ke.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var It = wt;
var St = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(St, _le);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = ue();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(le);
var bt = {
    init: function init(e) {
      var t = new St(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  kt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function At() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    }),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0, _slicedToArray2.default)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = ye(e.body).toString(kt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = ye(r).toString(kt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = _e(o, e.secretKey).toString(kt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Pt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _n7 = _ref21.message,
            _s10 = _ref21.errMsg,
            _r3 = _ref21.trace_id;
          return i(new te({
            code: "SYS_ERR",
            message: _n7 || _s10 || "request:fail",
            requestId: _r3 || t
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Tt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _At = At(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _At.url,
    o = _At.headers;
  return Pt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function xt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var Ot = /*#__PURE__*/function () {
  function Ot(e) {
    (0, _classCallCheck2.default)(this, Ot);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    });
  }
  (0, _createClass2.default)(Ot, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          r = "POST",
          _At2 = At("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: r,
            headers: {
              "x-to-function-name": n
            },
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          i = _At2.url,
          o = _At2.headers;
        return Pt({
          url: i,
          data: s,
          method: r,
          headers: o
        }).then(function (e) {
          return {
            errCode: 0,
            success: !0,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context34.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context34.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context34.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context34.next = 9;
                return Tt({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context34.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context34.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                e = _ref24.fileList;
                return _context35.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList不能为空数组"
                  })), e.length > 50 && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList数组长度不能超过50"
                  }));
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _t10 = _step5.value;
                      "string" !== f(_t10) && n(new te({
                        errCode: "INVALID_PARAM",
                        errMsg: "fileList的元素必须是非空的字符串"
                      }));
                      var _e17 = Ct.call(_this14, _t10);
                      s.push({
                        file_id: _e17,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Tt({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this14.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: xt.call(_this14, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }]);
  return Ot;
}();
var Et = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Ot(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Lt(_ref25) {
  var e = _ref25.data;
  var t;
  t = ue();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Rt() {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
            _context56.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context56.abrupt("return", new Promise(function (t, n) {
              ne.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: P,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var n = _ref70.code,
                s = _ref70.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e30 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e30), new Error(_e30);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e31 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e31), new Error(_e31);
                    }
                }
                return _this27._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = Lt.call(_this27, {
                  data: t
                });
                ne.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: P,
                    param: s
                  },
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref71.statusCode,
                      s = _ref71.data;
                    return !t || t >= 400 ? n(new te({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new te({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, this);
  }));
  return _Rt.apply(this, arguments);
}
var Ut = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var Nt = /[\\^$.*+?()[\]{}|]/g,
  Dt = RegExp(Nt.source);
function Mt(e, t, n) {
  return e.replace(new RegExp((s = t) && Dt.test(s) ? s.replace(Nt, "\\$&") : s, "g"), n);
  var s;
}
var qt = "none",
  Ft = "request",
  Kt = "response",
  jt = "both";
var $t = /*#__PURE__*/function () {
  function $t() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0, _classCallCheck2.default)(this, $t);
    this.clientType = "", this.secretType = e || qt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)($t, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.secretType === qt ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function encryptData(_x33) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        var _ref27, t, n;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(this.secretType === qt)) {
                  _context37.next = 2;
                  break;
                }
                return _context37.abrupt("return", e);
              case 2:
                _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
                return _context37.abrupt("return", t || !n ? e : this.secretType === Ft ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function decryptResult(_x34) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args38 = arguments;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _ref29 = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
                _context38.next = 3;
                return t.prepare();
              case 3:
                _context38.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context38.sent;
                _context38.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context38.sent;
                _context38.t0 = t.isClientKeyNotFound(r);
                if (!_context38.t0) {
                  _context38.next = 19;
                  break;
                }
                _context38.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context38.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context38.sent;
                _context38.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context38.sent;
              case 19:
                return _context38.abrupt("return", r);
              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r4,
          _args39 = arguments;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _ref31 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
                _context39.next = 3;
                return t.prepare();
              case 3:
                _context39.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context39.sent;
                _context39.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context39.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context39.next = 21;
                  break;
                }
                _context39.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context39.next = 14;
                return t.encryptData(s);
              case 14:
                _r4 = _context39.sent;
                _context39.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context39.sent;
                _context39.next = 20;
                return e({
                  name: n,
                  data: _r4
                });
              case 20:
                i = _context39.sent;
              case 21:
                _context39.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context39.sent;
                return _context39.abrupt("return", i);
              case 25:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));
    }
  }]);
  return $t;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Bt(e) {
  return parseInt(e) === e;
}
function Wt(e) {
  if (!Bt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Bt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ht(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Wt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Bt(e.length) && Wt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function zt(e) {
  return new Uint8Array(e);
}
function Jt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Gt,
  Vt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ht(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Yt = (Gt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Gt[(240 & s) >> 4] + Gt[15 & s]);
      }
      return t.join("");
    }
  }),
  Qt = {
    16: 10,
    24: 12,
    32: 14
  },
  Xt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  Zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  en = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  tn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  nn = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  sn = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  on = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  an = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  cn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  un = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  hn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  ln = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  dn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  pn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function fn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var gn = /*#__PURE__*/function () {
  function gn(e) {
    (0, _classCallCheck2.default)(this, gn);
    if (!(this instanceof gn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ht(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(gn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Qt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = fn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= Zt[o >> 16 & 255] << 24 ^ Zt[o >> 8 & 255] << 16 ^ Zt[255 & o] << 8 ^ Zt[o >> 24 & 255] ^ Xt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= Zt[255 & o] ^ Zt[o >> 8 & 255] << 8 ^ Zt[o >> 16 & 255] << 16 ^ Zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var h = 0; h < 4; h++) {
          o = this._Kd[u][h], this._Kd[u][h] = hn[o >> 24 & 255] ^ ln[o >> 16 & 255] ^ dn[o >> 8 & 255] ^ pn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = tn[s[r] >> 24 & 255] ^ nn[s[(r + 1) % 4] >> 16 & 255] ^ sn[s[(r + 2) % 4] >> 8 & 255] ^ rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (Zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = on[s[r] >> 24 & 255] ^ an[s[(r + 3) % 4] >> 16 & 255] ^ cn[s[(r + 2) % 4] >> 8 & 255] ^ un[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (en[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (en[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (en[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (en[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return gn;
}();
var mn = /*#__PURE__*/function () {
  function mn(e) {
    (0, _classCallCheck2.default)(this, mn);
    if (!(this instanceof mn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new gn(e);
  }
  (0, _createClass2.default)(mn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return mn;
}();
var yn = /*#__PURE__*/function () {
  function yn(e, t) {
    (0, _classCallCheck2.default)(this, yn);
    if (!(this instanceof yn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastCipherblock = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(yn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Jt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Jt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return yn;
}();
var _n = /*#__PURE__*/function () {
  function _n(e, t, n) {
    (0, _classCallCheck2.default)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = zt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(_n, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return _n;
}();
var wn = /*#__PURE__*/function () {
  function wn(e, t) {
    (0, _classCallCheck2.default)(this, wn);
    if (!(this instanceof wn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastPrecipher = Ht(t, !0), this._lastPrecipherIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(wn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return wn;
}();
var vn = /*#__PURE__*/function () {
  function vn(e) {
    (0, _classCallCheck2.default)(this, vn);
    if (!(this instanceof vn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = zt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(vn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ht(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return vn;
}();
var In = /*#__PURE__*/function () {
  function In(e, t) {
    (0, _classCallCheck2.default)(this, In);
    if (!(this instanceof In)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof vn || (t = new vn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(In, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return In;
}();
var Sn = {
  AES: gn,
  Counter: vn,
  ModeOfOperation: {
    ecb: mn,
    cbc: yn,
    cfb: _n,
    ofb: wn,
    ctr: In
  },
  utils: {
    hex: Yt,
    utf8: Vt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ht(e, !0)).length % 16,
          n = zt(e.length + t);
        Jt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ht(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = zt(n);
        return Jt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ht,
    createArray: zt,
    copyArray: Jt
  }
};
function bn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Sn.utils.utf8.toBytes(n),
    i = Sn.utils.utf8.toBytes(e),
    o = new Sn.ModeOfOperation.cbc(s, r),
    a = Sn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var kn = {
    code: 2e4,
    message: "System error"
  },
  An = {
    code: 20101,
    message: "Invalid client"
  },
  Pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  Tn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function Cn(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || kn.code,
    message: r || o,
    cause: a
  });
}
var xn,
  On,
  En = null;
var Ln = /*#__PURE__*/function (_$t) {
  (0, _inherits2.default)(Ln, _$t);
  var _super9 = _createSuper(Ln);
  function Ln(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, Ln);
    _this15 = _super9.call(this, e), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(Ln, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context40.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context40.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context41.next = 2;
                  break;
                }
                return _context41.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(En && En.expireTime)) {
                  _context41.next = 6;
                  break;
                }
                e = Date.now();
                if (!(En.expireTime - e > 0)) {
                  _context41.next = 6;
                  break;
                }
                return _context41.abrupt("return", (this.userEncryptKey = En, this.userEncryptKey));
              case 6:
                return _context41.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      En = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(Cn(_objectSpread(_objectSpread({}, Pn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context42.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context42.abrupt("return", {
                  verifyClientSign: bn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context43.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context43.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: bn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = e.content;
                _context44.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context44.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context44.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Sn.utils.utf8.toBytes(n),
                    o = new Sn.ModeOfOperation.cbc(r, i),
                    a = Sn.padding.pkcs7.strip(o.decrypt(s));
                  return Sn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return Ln;
}($t);
function Rn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s11) {
    var r = t[_s11];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(Cn({
            errCode: r,
            errMsg: Tn[r] || i || a,
            errSubject: o
          }));
        }])) : s(Cn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s11 = 0; _s11 < t.length; _s11++) {
    _loop(_s11);
  }
  return n;
}
var Un = /*#__PURE__*/function (_$t2) {
  (0, _inherits2.default)(Un, _$t2);
  var _super10 = _createSuper(Un);
  function Un(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, Un);
    _this17 = _super10.call(this, e), _this17.clientType = "app", _this17.appUtils = _objectSpread({}, Rn(uni.requireNativePlugin("plus"))), _this17.systemInfo = xn || (xn = ae());
    return _this17;
  }
  (0, _createClass2.default)(Un, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context45.sent;
                return _context45.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context46.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context46.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context46.t0 = _context46.sent.result;
                if (_context46.t0) {
                  _context46.next = 10;
                  break;
                }
                _context46.t0 = {};
              case 10:
                n = _context46.t0;
                if (!(0 !== n.errCode)) {
                  _context46.next = 13;
                  break;
                }
                throw function (e) {
                  return new te({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || kn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context46.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args47 = arguments;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _ref34 = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
                _context47.t1 = !0;
                _context47.next = 4;
                return this.hasClientKey();
              case 4:
                _context47.t2 = _context47.sent;
                _context47.t0 = _context47.t1 !== _context47.t2;
                if (_context47.t0) {
                  _context47.next = 8;
                  break;
                }
                _context47.t0 = e;
              case 8:
                if (!_context47.t0) {
                  _context47.next = 10;
                  break;
                }
                return _context47.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args48 = arguments;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _ref35 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
                _context48.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context49.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context49.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context50.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context50.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function platformEncryptData(_x37) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context51.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context51.sent;
                return _context51.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));
      function platformDecryptResult(_x38) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Un;
}($t);
function Nn() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === Ft || e === Kt || e === jt;
}
function Dn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === P && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Mn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Cn(An);
}
function qn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s12 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s12, "[/").concat(n, "-request]"));
  }
}
function Fn(e) {
  var t = e.callFunction,
    n = function n(_n8) {
      var _this19 = this;
      var s = _n8.name;
      _n8.data = Lt.call(e, {
        data: _n8.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = Nn(_n8),
        o = Dn(_n8),
        a = i || o;
      return t.call(this, _n8).then(function (e) {
        return e.errCode = 0, !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s13 = 0; _s13 < n.length; _s13++) {
            var _n$_s = n[_s13],
              _r5 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r5);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) {
              _c = Mt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            }
            for (var _e20 in t) {
              _c = Mt(_c, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n8.name, "]: ").concat(e.message),
          formatter: Ut,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && C ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Rt), o = Rt) : o = n, o = o.bind(e), Dn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === P && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (Nn(t)) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Mn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a;
  };
}
On = "mp-weixin" !== P && "app" !== P ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw Cn({
      message: "Platform ".concat(P, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === P ? Ln : Un : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw Cn({
      message: "Platform ".concat(P, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Kn = Symbol("CLIENT_DB_INTERNAL");
function jn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Kn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t11 = e[n];
        return "function" == typeof _t11 ? _t11.bind(e) : _t11;
      }
      return t.get(e, n, s);
    }
  });
}
function $n(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Bn = ["db.Geo", "db.command", "command.aggregate"];
function Wn(e, t) {
  return Bn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Hn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Hn(e);
      });
    case "object":
      return e._internalType === Kn || Object.keys(e).forEach(function (t) {
        e[t] = Hn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function zn(e) {
  return e && e.content && e.content.$method;
}
var Jn = /*#__PURE__*/function () {
  function Jn(e, t, n) {
    (0, _classCallCheck2.default)(this, Jn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Jn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Hn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n9 = zn(e.prevStage);
        if ("aggregate" === t && "collection" === _n9 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === zn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n10 = zn(e.prevStage);
        if ("aggregate" === t && "command" === _n10) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Gn({
          $method: e,
          $param: Hn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Hn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t12 = _e21 && _e21.$param;
        _t12 && 1 === _t12.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Jn;
}();
function Gn(e, t, n) {
  return jn(new Jn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Wn(s, t) ? Gn({
        $method: t
      }, e, n) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Vn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return jn(new e(t), {
    get: function get(e, t) {
      return Wn("db", t) ? Gn({
        $method: t
      }, null, e) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Qn = /*#__PURE__*/function (_ref44) {
  (0, _inherits2.default)(Qn, _ref44);
  var _super11 = _createSuper(Qn);
  function Qn() {
    (0, _classCallCheck2.default)(this, Qn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Qn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n11 = 0; _n11 < s.length; _n11++) {
          var _r6 = s[_n11];
          _r6.udb && "function" == typeof _r6.udb.setResult && (t ? _r6.udb.setResult(t) : _r6.udb.setResult(e.result.dataList[_n11]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t13 = _u$_e.level,
            _n12 = _u$_e.message,
            _s14 = _u$_e.detail,
            _r7 = console["app" === P && "warn" === _t13 ? "error" : _t13] || console.log;
          var _i4 = "[System Info]" + _n12;
          _s14 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s14)), _r7(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t14) {
          var _h$_t = h[_t14],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t15 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t15;
              }
            });
          }
        };
        for (var _t14 = 0; _t14 < h.length; _t14++) {
          _loop2(_t14);
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Qn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = $n(this._authCallBacks)), this._isJQL = t, Object.assign(this, $n(this._dbCallBacks)), this.env = jn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = jn({}, {
      get: function get(e, t) {
        return Vn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Vn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Vn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Xn = "token无效，跳转登录页面",
  Zn = "token过期，跳转登录页面",
  es = {
    TOKEN_INVALID_TOKEN_EXPIRED: Zn,
    TOKEN_INVALID_INVALID_CLIENTID: Xn,
    TOKEN_INVALID: Xn,
    TOKEN_INVALID_WRONG_TOKEN: Xn,
    TOKEN_INVALID_ANONYMOUS_USER: Xn
  },
  ts = {
    "uni-id-token-expired": Zn,
    "uni-id-check-token-failed": Xn,
    "uni-id-token-not-exist": Xn,
    "uni-id-check-device-feature-failed": Xn
  };
function ns(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function ss() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(ns(t, e.path)) : !1 === e.needLogin && s.push(ns(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function rs(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function is() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function os() {
  return rs(is());
}
function as() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = rs(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var cs = !!_pages.default.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _ss = ss(t),
      c = _ss.needLoginPage,
      u = _ss.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _ss2 = ss(r, s),
            i = _ss2.needLoginPage,
            o = _ss2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(h)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(l)),
      loginPageInTabBar: as(i, r)
    };
  }(),
  us = _ref47.loginPage,
  hs = _ref47.routerNeedLogin,
  ls = _ref47.resToLogin,
  ds = _ref47.needLoginPage,
  ps = _ref47.notNeedLoginPage,
  fs = _ref47.loginPageInTabBar;
if (ds.indexOf(us) > -1) throw new Error("Login page [".concat(us, "] should not be \"needLogin\", please check your pages.json"));
function gs(e) {
  var t = os();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t16 = r[_e23];
    ".." === _t16 ? i.pop() : "." !== _t16 && i.push(_t16);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function ms(e) {
  var t = rs(gs(e));
  return !(ps.indexOf(t) > -1) && (ds.indexOf(t) > -1 || hs.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function ys(_ref48) {
  var e = _ref48.redirect;
  var t = rs(e),
    n = rs(us);
  return os() !== n && t !== n;
}
function _s() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !ys({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(us, t);
  fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  });
}
function ws() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: ts[_e25]
        };
      }
      return n;
    }();
  if (ms(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function vs() {
  !function () {
    var e = is(),
      _ws = ws({
        url: e
      }),
      t = _ws.abortLoginPageJump,
      n = _ws.autoToLoginPage;
    t || n && _s({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t17) {
    var n = e[_t17];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _ws2 = ws({
            url: e.url
          }),
          t = _ws2.abortLoginPageJump,
          s = _ws2.autoToLoginPage;
        return t ? e : s ? (_s({
          api: n,
          redirect: gs(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t17 = 0; _t17 < e.length; _t17++) {
    _loop3(_t17);
  }
}
function Is() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in es;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = is();
        if (n && ys({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (us && _s({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Ss(e) {
  !function (e) {
    e.onResponse = function (e) {
      G(j, e);
    }, e.offResponse = function (e) {
      V(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      G($, e);
    }, e.offNeedLogin = function (e) {
      V($, e);
    }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      vs.call(e);
    }), ls && Is.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      G(B, e);
    }, e.offRefreshToken = function (e) {
      V(B, e);
    };
  }(e);
}
var bs;
var ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Ps() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(bs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
bs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !As.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ks.indexOf(e.charAt(i++)) << 18 | ks.indexOf(e.charAt(i++)) << 12 | (n = ks.indexOf(e.charAt(i++))) << 6 | (s = ks.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var Ts = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t18 = s(e);
          if (void 0 !== _t18) return Promise.resolve(_t18).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Cs = t(Ts);
var xs = "manual";
function Os(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {}
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === xs) return;
        var n = !1;
        var s = [];
        for (var _r8 = 2; _r8 < e.length; _r8++) {
          e[_r8] !== t[_r8] && (s.push(e[_r8]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n13;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n = e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n13 = n).collection.apply(_n13, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Es(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n14 = n,
      s = _n14.customUI,
      r = _n14.loadingOptions,
      i = _n14.errorOptions,
      o = _n14.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context52.prev = 2;
                    _context52.next = 5;
                    return M(q(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context52.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context52.sent;
                    _context52.next = 10;
                    return M(q(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context52.abrupt("return", i);
                  case 13:
                    _context52.prev = 13;
                    _context52.t0 = _context52["catch"](2);
                    o = _context52.t0;
                    _context52.next = 18;
                    return M(q(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context52.prev = 19;
                    _context52.next = 22;
                    return M(q(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context52.finish(19);
                  case 23:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t19,
                _n15,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        h[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: h
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context54.prev = 5;
                      _context54.next = 8;
                      return e.callFunction(d);
                    case 8:
                      l = _context54.sent;
                      _context54.next = 14;
                      break;
                    case 11:
                      _context54.prev = 11;
                      _context54.t0 = _context54["catch"](5);
                      p = !0, l = {
                        result: new te(_context54.t0)
                      };
                    case 14:
                      _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, _objectSpread({}, y))), g)) {
                        _context54.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context54.next = 24;
                        break;
                      }
                      _context54.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: h,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context54.t1 = _context54.sent.errMsg;
                      if (_context54.t1) {
                        _context54.next = 23;
                        break;
                      }
                      _context54.t1 = m;
                    case 23:
                      _e26 = _context54.t1;
                    case 24:
                      if (!a) {
                        _context54.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context54.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context54.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context54.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context54.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
                        var _ref59,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee53$(_context53) {
                          while (1) {
                            switch (_context53.prev = _context53.next) {
                              case 0:
                                _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                                return _context53.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context53.stop();
                            }
                          }
                        }, _callee53);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context54.sent;
                      _t19 = _yield.confirm;
                      if (!(i.retry && _t19)) {
                        _context54.next = 37;
                        break;
                      }
                      return _context54.abrupt("return", s.apply(void 0, h));
                    case 37:
                      _n15 = new te({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: l.requestId
                      });
                      throw _n15.detail = l.result, Y(j, {
                        type: z,
                        content: _n15
                      }), _n15;
                    case 39:
                      return _context54.abrupt("return", (Y(j, {
                        type: z,
                        content: l.result
                      }), l.result));
                    case 40:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, null, [[5, 11]]);
            }));
            function s() {
              return _s15.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Ls(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Rs() {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return _regenerator.default.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = Ls(this);
            if (!("mp-weixin" !== P)) {
              _context57.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(P, "`"));
          case 4:
            if (!(e && t)) {
              _context57.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context57.next = 8;
              break;
            }
            return _context57.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context57.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context57.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context57.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context57.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, this);
  }));
  return _Rs.apply(this, arguments);
}
function Us(_x39) {
  return _Us.apply(this, arguments);
}
function _Us() {
  _Us = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var t;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            t = Ls(this);
            return _context58.abrupt("return", (t.initPromise || (t.initPromise = Rs.call(this, e)), t.initPromise));
          case 2:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, this);
  }));
  return _Us.apply(this, arguments);
}
function Ns(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Us.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ds(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e](_objectSpread(_objectSpread({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var Ms = /*#__PURE__*/function (_ref62) {
  (0, _inherits2.default)(Ms, _ref62);
  var _super12 = _createSuper(Ms);
  function Ms() {
    var _this23;
    (0, _classCallCheck2.default)(this, Ms);
    _this23 = _super12.call(this), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0, _createClass2.default)(Ms, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0, _slicedToArray2.default)(_ref63, 2),
          _ref64$ = _ref64[0];
        _ref64$ = _ref64$ === void 0 ? {} : _ref64$;
        var e = _ref64$.appId,
          _ref64$2 = _ref64[1];
        _ref64$2 = _ref64$2 === void 0 ? {} : _ref64$2;
        var t = _ref64$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55() {
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                return _context55.abrupt("return", this.init());
              case 1:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return Ms;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n16 = e.length - 1; _n16 >= 0; _n16--) {
          if (e[_n16] === t) return _n16;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function qs(_x40, _x41) {
  return _qs.apply(this, arguments);
}
function _qs() {
  _qs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context59.prev = 1;
            _context59.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ne.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context59.sent;
            return _context59.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](1);
            return _context59.abrupt("return", !1);
          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[1, 8]]);
  }));
  return _qs.apply(this, arguments);
}
function Fs(_x42) {
  return _Fs.apply(this, arguments);
}
function _Fs() {
  _Fs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61(e) {
    var _ae2, _e33, _t21, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (S) {
              _context61.next = 2;
              break;
            }
            return _context61.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === P) {
              _ae2 = ae(), _e33 = _ae2.osName, _t21 = _ae2.osVersion;
              "ios" === _e33 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t21) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发模式生效，发行模式会连接uniCloud云端服务）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context61.next = 6;
              break;
            }
            return _context61.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context61.next = 11;
            return function () {
              var _ref73 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60(e, t) {
                var n, _s16, _r9;
                return _regenerator.default.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        _s16 = 0;
                      case 1:
                        if (!(_s16 < e.length)) {
                          _context60.next = 11;
                          break;
                        }
                        _r9 = e[_s16];
                        _context60.next = 5;
                        return qs(_r9, t);
                      case 5:
                        if (!_context60.sent) {
                          _context60.next = 8;
                          break;
                        }
                        n = _r9;
                        return _context60.abrupt("break", 11);
                      case 8:
                        _s16++;
                        _context60.next = 1;
                        break;
                      case 11:
                        return _context60.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60);
              }));
              return function (_x43, _x44) {
                return _ref73.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context61.sent;
            r = _yield2.address;
            if (!r) {
              _context61.next = 15;
              break;
            }
            return _context61.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === P ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === P && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === P.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context61.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _Fs.apply(this, arguments);
}
function Ks(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var js = {
  tcb: It,
  tencent: It,
  aliyun: de,
  private: bt,
  alipay: Et
};
var $s = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = js[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === P && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === P);
        var n = T;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return Fs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Ks(t), Fn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Yn(Qn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Yn(Qn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = Ps, e.chooseAndUploadFile = Cs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Os(e);
          }
        }), e.SSEChannel = Ms, e.initSecureNetworkByWeixin = Ns(e), e.importObject = Es(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
(function () {
  var e = C;
  var t = {};
  if (e && 1 === e.length) t = e[0], $s = $s.init(t), $s._isDefault = !0;else {
    var _t20 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n17;
    _n17 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t20.forEach(function (e) {
      $s[e] = function () {
        return console.error(_n17), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n17
        }));
      };
    });
  }
  Object.assign($s, {
    get mixinDatacom() {
      return Os($s);
    }
  }), Ss($s), $s.addInterceptor = N, $s.removeInterceptor = D, $s.interceptObject = F, S && "web" === P && (window.uniCloud = $s);
})();
var Bs = $s;
exports.default = Bs;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 3)["default"]))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Behavior = Behavior;
exports.Component = Component;
exports.Page = Page;
exports.nextTick = exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 5));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 9));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));
var _PROP_DEFAULT_VALUES;
function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}
function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var SOURCE_KEY = '__data__';
var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed'
};
var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);
var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize'
};
var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);
var PAGE_LIFECYCLE = ['onLoad', 'onShow', 'onReady', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}
function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}
function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {}
  };
  parseComponents(vueComponentOptions);
  parseData(mpComponentOptions.data, vueComponentOptions);
  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);
  return vueComponentOptions;
}
function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}
function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}
function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}
function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).push(mpComponentOptions[name]);
    }
  });
}
var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {}
};
function callDefinitionFilter(mpComponentOptions) {
  var behaviors = mpComponentOptions.behaviors,
    definitionFilter = mpComponentOptions.definitionFilter;
  var behaviorDefinitionFilters = [];
  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }
  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}
function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}
function parseBehavior(behavior) {
  var data = behavior.data,
    methods = behavior.methods,
    behaviors = behavior.behaviors,
    properties = behavior.properties;
  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);
  return vueComponentOptions;
}
var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }
      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String
        };
      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    }
  }
};

function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}
function parseSinglePath(path) {
  return path.split('.');
}
function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {
    return parseSinglePath(path);
  });
}
function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }
  var mpObservers = vueComponentOptions.mpOptions.mpObservers;
  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path]
    });
  });
}
function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}
function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}
function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: ''
    };
  });
}
function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}
function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}
function parseComponent(mpComponentOptions) {
  var data = mpComponentOptions.data,
    options = mpComponentOptions.options,
    methods = mpComponentOptions.methods,
    behaviors = mpComponentOptions.behaviors,
    lifetimes = mpComponentOptions.lifetimes,
    observers = mpComponentOptions.observers,
    relations = mpComponentOptions.relations,
    properties = mpComponentOptions.properties,
    pageLifetimes = mpComponentOptions.pageLifetimes,
    externalClasses = mpComponentOptions.externalClasses;
  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: []
    }
  };
  parseComponents(vueComponentOptions);
  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);
  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);
  return vueComponentOptions;
}
function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}
function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}
function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}
function findParentRelation(parentVm, target, type) {
  var relations = parentVm && parentVm.$options.mpOptions && parentVm.$options.mpOptions.relations;
  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}
function initParentRelation(vm, childRelation, match) {
  var _match = match(vm, vm.$options.mpOptions.path),
    _match2 = (0, _slicedToArray2.default)(_match, 2),
    parentRelation = _match2[0],
    parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }
  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);
  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}
function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}
function initRelations(vm) {
  var _ref = vm.$options.mpOptions || {},
    relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}
function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {
    return handler();
  });
}
var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};
function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}
function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}
function setData(data, callback) {
  var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
 * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
 */

var _toString$1 = Object.prototype.toString;
/**
 * 深度assign的函数
 * @param {Object} targetObject 要被拷贝的目标对象
 * @param {Object} originObject 拷贝的源对象
 * @return {Object} merge后的对象
 */
var deepAssign = function deepAssign() {
  var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
 * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
 * @param {*} [originObj] 原对象
 * @return {Object|Array} 拷贝结果
 */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};
var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, String, ''), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Number, 0), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Boolean, false), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Object, null), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, Array, []), (0, _defineProperty2.default)(_PROP_DEFAULT_VALUES, null, null), _PROP_DEFAULT_VALUES);
function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}
function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}
function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}
function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}
function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}
function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' && typeof vm[observer] === 'function') {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}
function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }
  var propsData = deepClone(vm.$options.propsData) || {};
  var _loop = function _loop(key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      }
    });
  };
  for (var key in properties) {
    _loop(key);
  }
}
function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}
function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));
  vm[SOURCE_KEY] = instanceData;
  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    }
  };
  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition
  });
  vm.setData = setData;
  initProperties(vm, instanceData);
  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}
function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset
    };
    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop
    };
    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {
      return !vm._isDestroyed;
    });
  };
  vm._$updateProperties = updateProperties;
}
function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}
var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;
    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {
    // properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  }
};
global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);
function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}
function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}
function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}
function Behavior(options) {
  return options;
}
var nextTick = _vue.default.nextTick;
exports.nextTick = nextTick;
var index = uni.__$wx__;
var _default = index;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 6);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 7)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 8);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 7 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 8 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 7)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 9 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 10);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 11);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 12);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 14);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 10 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 11 */
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 12 */
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 13);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 7);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 17)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 17 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 7)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 18 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 19 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 20);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 21);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 12);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 22);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 20 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 13);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 21 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 22 */
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 23 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 24 */
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 25);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 25 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 26 */
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 7)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 18);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 27 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 28 */
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 27);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 25);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 29);
var construct = __webpack_require__(/*! ./construct.js */ 30);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 29 */
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 30 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 25);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 31);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 31 */
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 32 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 33 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 6);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 34 */
/*!*******************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages.json?{"type":"origin-pages-json"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/tabbar/home",
    "style": {
      "navigationBarTitleText": "Hornbill",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/tabbar/start",
    "style": {
      "navigationBarTitleText": "start",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/tabbar/countdown",
    "style": {
      "navigationBarTitleText": "",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/tabbar/more",
    "style": {
      "navigationBarTitleText": "more",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/tabbar/setting",
    "style": {
      "navigationBarTitleText": "setting",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/tabbar/history",
    "style": {
      "navigationBarTitleText": "history",
      "enablePullDownRefresh": true
    }
  }],
  "easycom": {
    "autoscan": true,
    "custom": {
      "usekf-(.*)": "@/sub-kf/components/usekf-$1/usekf-$1.vue"
    }
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "Hornbill",
    "navigationBarBackgroundColor": "#f5f5f5",
    "backgroundColor": "#f5f5f5",
    "navigationStyle": "default",
    "mp-alipay": {
      "titleBarColor": "#ffffff"
    },
    "mp-360": {
      "navigationStyle": "custom"
    },
    "h5": {
      "navigationStyle": "custom"
    }
  },
  "tabBar": {
    "color": "#C0C4CC",
    "selectedColor": "#ff6a6c",
    "borderStyle": "white",
    "backgroundColor": "#ffffff",
    "list": []
  },
  "condition": {
    "current": 0,
    "list": [{
      "name": "",
      "path": "",
      "query": ""
    }]
  }
};
exports.default = _default;

/***/ }),
/* 35 */
/*!******************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages.json?{"type":"stat"} ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__EAB698D"
};
exports.default = _default;

/***/ }),
/* 36 */
/*!**************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages.json ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/tabbar/home', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/home.vue?mpType=page */ 37).default);
});
__definePage('pages/tabbar/start', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/start.vue?mpType=page */ 45).default);
});
__definePage('pages/tabbar/countdown', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/countdown.vue?mpType=page */ 51).default);
});
__definePage('pages/tabbar/more', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/more.vue?mpType=page */ 56).default);
});
__definePage('pages/tabbar/setting', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/setting.vue?mpType=page */ 61).default);
});
__definePage('pages/tabbar/history', function () {
  return Vue.extend(__webpack_require__(/*! pages/tabbar/history.vue?mpType=page */ 66).default);
});

/***/ }),
/* 37 */
/*!*************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/home.vue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=63588a52&mpType=page */ 38);\n/* harmony import */ var _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js&mpType=page */ 40);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/home.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzNTg4YTUyJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2hvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!*******************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/home.vue?vue&type=template&id=63588a52&mpType=page ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=63588a52&mpType=page */ 39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_63588a52_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 39 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/home.vue?vue&type=template&id=63588a52&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        { staticClass: _vm._$s(1, "sc", "button-group"), attrs: { _i: 1 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(2, "sc", "dflex-b"), attrs: { _i: 2 } },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(3, "sc", "button"),
                  attrs: { _i: 3 },
                  on: { click: _vm.setting },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(
                      4,
                      "sc",
                      "iconfont1 icon-a-013shuangchilun"
                    ),
                    attrs: { _i: 4 },
                  }),
                  _c("view"),
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(6, "sc", "button"),
                  attrs: { _i: 6 },
                  on: { click: _vm.start },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(7, "sc", "iconfont1 icon-kaishi"),
                    attrs: { _i: 7 },
                  }),
                  _c("view"),
                ]
              ),
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(9, "sc", "button"),
              attrs: { _i: 9 },
              on: { click: _vm.history },
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(10, "sc", "dflex-a"),
                  attrs: { _i: 10 },
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(11, "sc", "iconfont1 icon-caozuo"),
                    attrs: { _i: 11 },
                  }),
                  _c("view"),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 40 */
/*!*************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/home.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js&mpType=page */ 41);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixxb0JBQUcsRUFBQyIsImZpbGUiOiI0MC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ob21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/home.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 5));\nvar _vuex = __webpack_require__(/*! vuex */ 43);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar _default = {\n  computed: _objectSpread({}, (0, _vuex.mapState)({\n    apptitle: function apptitle(state) {\n      return state.appname;\n    } // 假设appname是在vuex状态管理里定义的\n  })),\n  data: function data() {\n    return {\n      // 数据定义\n    };\n  },\n  onLoad: function onLoad() {\n    // 页面加载时的操作\n  },\n  onPageScroll: function onPageScroll(e) {\n    // 页面滚动时的操作\n  },\n  onShow: function onShow() {\n    // 页面显示时的操作\n  },\n  methods: {\n    setting: function setting() {\n      __f__(\"log\", 'home setting', \" at pages/tabbar/home.vue:51\");\n      uni.navigateTo({\n        url: \"/pages/tabbar/setting\"\n      });\n    },\n    start: function start() {\n      __f__(\"log\", 'home start', \" at pages/tabbar/home.vue:57\");\n      uni.navigateTo({\n        url: \"/pages/tabbar/start\"\n      });\n    },\n    history: function history() {\n      __f__(\"log\", 'home history', \" at pages/tabbar/home.vue:63\");\n      uni.navigateTo({\n        url: \"/pages/tabbar/history\"\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2hvbWUudnVlIl0sIm5hbWVzIjpbImNvbXB1dGVkIiwiYXBwdGl0bGUiLCJkYXRhIiwib25Mb2FkIiwib25QYWdlU2Nyb2xsIiwib25TaG93IiwibWV0aG9kcyIsInNldHRpbmciLCJ1bmkiLCJ1cmwiLCJzdGFydCIsImhpc3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBMEJBO0FBQUE7QUFBQTtBQUFBLGVBRUE7RUFDQUEsNEJBQ0E7SUFDQUM7TUFBQTtJQUFBO0VBQ0EsR0FDQTtFQUNBQztJQUNBO01BQ0E7SUFBQSxDQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUFBLENBQ0E7RUFDQUM7SUFDQTtFQUFBLENBQ0E7RUFDQUM7SUFDQTtFQUFBLENBQ0E7RUFDQUM7SUFDQUM7TUFDQTtNQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFDQTtNQUNBRjtRQUNBQztNQUNBO0lBQ0E7SUFDQUU7TUFDQTtNQUNBSDtRQUNBQztNQUNBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiNDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPCEtLSDov5nph4zlj6/ku6XmlL7nva7lr7zoiKrmoI/nu4Tku7YgLS0+XG4gICAgPCEtLSA8dXNlLW5hdmJhciA6dGl0bGU9XCJhcHB0aXRsZVwiPjwvdXNlLW5hdmJhcj4gLS0+XG4gICAgPHZpZXcgY2xhc3M9XCJidXR0b24tZ3JvdXBcIj5cblx0XHQ8dmlldyBjbGFzcz1cImRmbGV4LWJcIj5cblx0XHQgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWZmO3dpZHRoOiA5MHB4O1wiIEBjbGljaz1cInNldHRpbmdcIj5cblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJpY29uZm9udDEgaWNvbi1hLTAxM3NodWFuZ2NoaWx1blwiPjwvdmlldz5cblx0XHRcdCAgPHZpZXc+U2V0dGluZzwvdmlldz5cblx0XHQgIDwvdmlldz5cblx0XHQgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7d2lkdGg6IDkwcHg7XCIgQGNsaWNrPVwic3RhcnRcIj5cblx0XHRcdCAgPHZpZXcgY2xhc3M9XCJpY29uZm9udDEgaWNvbi1rYWlzaGlcIj48L3ZpZXc+XG5cdFx0XHQgIDx2aWV3PlN0YXJ0PC92aWV3PlxuXHRcdCAgPC92aWV3PlxuXHQgIDwvdmlldz5cbiAgICAgIDx2aWV3IGNsYXNzPVwiYnV0dG9uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1wiIEBjbGljaz1cImhpc3RvcnlcIj5cblx0XHQgIDx2aWV3IGNsYXNzPVwiZGZsZXgtYVwiPlxuXHRcdFx0ICA8dmlldyBjbGFzcz1cImljb25mb250MSBpY29uLWNhb3p1b1wiPjwvdmlldz5cblx0XHRcdCAgPHZpZXc+SGlzdG9yeSBkYXRhPC92aWV3PlxuXHRcdCAgPC92aWV3PlxuXHQgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXB1dGVkOiB7XG4gICAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICAgIGFwcHRpdGxlOiBzdGF0ZSA9PiBzdGF0ZS5hcHBuYW1lIC8vIOWBh+iuvmFwcG5hbWXmmK/lnKh2dWV454q25oCB566h55CG6YeM5a6a5LmJ55qEXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIOaVsOaNruWumuS5iVxuICAgICAgfTtcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgIC8vIOmhtemdouWKoOi9veaXtueahOaTjeS9nFxuICAgIH0sXG4gICAgb25QYWdlU2Nyb2xsKGUpIHtcbiAgICAgIC8vIOmhtemdoua7muWKqOaXtueahOaTjeS9nFxuICAgIH0sXG4gICAgb25TaG93KCkge1xuICAgICAgLy8g6aG16Z2i5pi+56S65pe255qE5pON5L2cXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICBzZXR0aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBzZXR0aW5nJyk7XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvdGFiYmFyL3NldHRpbmdgXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBzdGFydCcpO1xuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3RhYmJhci9zdGFydGBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgaGlzdG9yeSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgaGlzdG9yeScpO1xuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiBgL3BhZ2VzL3RhYmJhci9oaXN0b3J5YFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmJ1dHRvbi1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nLXRvcDogMTAwdXB4O1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 43 */
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 44 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 45 */
/*!**************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/start.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.vue?vue&type=template&id=38b6163a&mpType=page */ 46);\n/* harmony import */ var _start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.vue?vue&type=script&lang=js&mpType=page */ 48);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/start.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3N0YXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGI2MTYzYSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N0YXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL3N0YXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!********************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/start.vue?vue&type=template&id=38b6163a&mpType=page ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./start.vue?vue&type=template&id=38b6163a&mpType=page */ 47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_template_id_38b6163a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 47 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/start.vue?vue&type=template&id=38b6163a&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("view"),
      _c("canvas", {}),
      _c("view"),
      _c("view"),
      _c("canvas", {}),
      _c("view"),
      _c(
        "view",
        { staticClass: _vm._$s(7, "sc", "button-group"), attrs: { _i: 7 } },
        [
          _c("view", {
            staticClass: _vm._$s(8, "sc", "button"),
            attrs: { _i: 8 },
            on: { click: _vm.Back },
          }),
          _c("view", {
            staticClass: _vm._$s(9, "sc", "button"),
            attrs: { _i: 9 },
            on: { click: _vm.Param },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 48 */
/*!**************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/start.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./start.vue?vue&type=script&lang=js&mpType=page */ 49);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_start_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVtQixDQUFnQixzb0JBQUcsRUFBQyIsImZpbGUiOiI0OC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3RhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/start.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 19));\nvar _hexiiiNfc = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/hexiii-nfc/hexiii-nfc.js */ 50));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar db = uniCloud.database();\nvar _default = {\n  data: function data() {\n    return {\n      chartWidth: 0,\n      chartHeight: 300,\n      context1: null,\n      context2: null,\n      setting: null,\n      e: '',\n      mockData1: [\n        // { x: '5', y: 20 },\n        // 添加更多模拟数据点...\n      ],\n      mockData2: [\n        // { x: '5', y: 20 },\n        // 添加更多模拟数据点...\n      ]\n    };\n  },\n  onLoad: function onLoad(options) {\n    var res = uni.getSystemInfoSync();\n    this.chartWidth = res.windowWidth;\n    this.context1 = uni.createCanvasContext('lineChart1', this);\n    this.drawChart(this.context1, this.mockData1);\n    this.context2 = uni.createCanvasContext('lineChart2', this);\n    this.drawChart(this.context2, this.mockData2);\n    __f__(\"log\", \"onLoad\", options, \" at pages/tabbar/start.vue:47\");\n    if (options.arr) {\n      this.setting = options.setting;\n      this.e = this.setting.split(',')[4];\n      this.renderArr(options.arr.substring(2).split('/'));\n    } else if (options.id) {\n      this.setting = options.setting;\n      this.e = this.setting.split(',')[4];\n      _hexiiiNfc.default.listenNFCStatus();\n      this.fetchDataPeriodically(options.id);\n    } else {\n      __f__(\"log\", \"enter start\", \" at pages/tabbar/start.vue:58\");\n      this.fetchDataPeriodically();\n    }\n  },\n  methods: {\n    drawChart: function drawChart(ctx, data) {\n      var _this = this;\n      var that = this;\n      var xMin = 0.4;\n      var xMax = 0.9;\n      if (this.setting) {\n        var setting = this.setting.split(',');\n        xMin = parseFloat(setting[0]);\n        xMax = parseFloat(setting[1]);\n      }\n      __f__(\"log\", this.setting, \" at pages/tabbar/start.vue:73\");\n      var padding = 50;\n      __f__(\"log\", data, \" at pages/tabbar/start.vue:76\");\n      var xPoints = data.length < 10 ? data.length : 10; // 最多显示10个X轴坐标点\n      // 修正：使用实际的x轴范围来计算间隔\n\n      var xRange = xMax - xMin; // 实际的x轴范围\n\n      var yMax = Math.max.apply(Math, (0, _toConsumableArray2.default)(data.map(function (p) {\n        return p.y;\n      })));\n\n      // 修正：根据实际的x轴范围来计算比例\n      var yRatio = (this.chartHeight - padding * 2) / yMax;\n      var xRatio = (this.chartWidth - padding * 2) / xRange;\n      ctx.clearRect(0, 0, this.chartWidth, this.chartHeight); // 清除之前的绘图\n\n      // 绘制Y轴坐标点（不变）\n      for (var i = 0; i <= xPoints; i++) {\n        var yValue = yMax / xPoints * i;\n        var y = this.chartHeight - padding - yValue * yRatio;\n        ctx.fillText(yValue.toFixed(2), padding - 30, y + 3); // Y轴数值\n        ctx.beginPath();\n        ctx.arc(padding, y, 2, 0, Math.PI * 2);\n        ctx.fill();\n      }\n      if (that.e == '1e-5') {\n        ctx.fillText(\"10^-5\", 30, 30);\n      } else if (that.e == '1e-4') {\n        ctx.fillText(\"10^-4\", 30, 30);\n      } else if (that.e == '1e-3') {\n        ctx.fillText(\"10^-3\", 30, 30);\n      } else if (that.e == '1e-2') {\n        ctx.fillText(\"10^-2\", 30, 30);\n      } else if (that.e == 'Default') {\n        //ctx.fillText(\"10^-4\", 30,  30);\n        ctx.fillText(\"10^-5\", 30, 30);\n      }\n\n      // 修正：绘制X轴坐标点，考虑实际的x轴范围\n      for (var _i = 0; _i <= xPoints; _i++) {\n        var xValue = xMin + xRange / xPoints * _i; // 根据实际范围计算x值\n        var x = padding + (xValue - xMin) * xRatio; // 调整x位置计算方式\n        var _y = this.chartHeight - padding; // Y坐标固定在底部\n        ctx.fillText(xValue.toFixed(2), x - 10, _y + 20); // X轴数值，稍微调整位置以便阅读\t\n\n        ctx.beginPath();\n        ctx.arc(x, _y, 2, 0, Math.PI * 2);\n        ctx.fill();\n      }\n\n      // 绘制坐标轴（不变）\n      ctx.setStrokeStyle('blue');\n      ctx.beginPath();\n      ctx.moveTo(padding, padding);\n      ctx.lineTo(padding, this.chartHeight - padding);\n      ctx.lineTo(this.chartWidth - padding, this.chartHeight - padding);\n      ctx.stroke();\n\n      // 绘制坐标点和曲线（不变）\n      ctx.setStrokeStyle('red');\n      ctx.setLineWidth(1.5);\n      ctx.beginPath();\n      data.forEach(function (point, index) {\n        var x = padding + (point.x - xMin) * xRatio; // 调整x位置计算方式\n        var y = _this.chartHeight - padding - point.y * yRatio;\n        if (index === 0) {\n          ctx.moveTo(x, y);\n        } else {\n          ctx.lineTo(x, y);\n        }\n        if (index === data.length - 1) {\n          ctx.fillText(\"(\".concat(point.x, \", \").concat(point.y, \")\"), x, y - 10); // 显示坐标\n        }\n\n        ctx.arc(x, y, 1.5, 0, Math.PI * 2); // 绘制点\n        ctx.moveTo(x, y);\n        //ctx.lineTo(x, y);\n      });\n\n      ctx.stroke();\n      ctx.translate(15, 150); // 将原点移动到绘制位置\n      ctx.rotate(-Math.PI / 2); // 旋转 90°\n\n      // 绘制文本\n      ctx.fillText(\"Current(A)\", 0, 0);\n      ctx.restore(); // 恢复之前保存的绘图状态\n      ctx.draw();\n    },\n    renderArr: function renderArr(arr) {\n      __f__(\"log\", arr, \" at pages/tabbar/start.vue:175\");\n      var that = this;\n      // arr = arr.slice(0, 3)\n      arr.forEach(function (item, index) {\n        // console.log(subArr)\n        setTimeout(function () {\n          var subArr = item.split(',');\n          // console.log(subArr);\n          var x = parseFloat(subArr[0]);\n          var y1 = parseFloat(subArr[1]);\n          var y2 = parseFloat(subArr[2]);\n\n          //26214\n          x = (2.5 * x / 65535).toFixed(2);\n          if (that.e == '1e-5') {\n            //0.32\n            y1 = (1.5 * y1 / 1023 / 15000 * 100000).toFixed(2);\n            //0.32\n            y2 = (1.5 * y2 / 1023 / 15000 * 100000).toFixed(2);\n          } else if (that.e == '1e-4') {\n            //0.32\n            y1 = (1.5 * y1 / 1023 / 1500 * 10000).toFixed(2);\n            //0.32\n            y2 = (1.5 * y2 / 1023 / 1500 * 10000).toFixed(2);\n          } else if (that.e == '1e-3') {\n            //0.32\n            y1 = (1.5 * y1 / 1023 / 150 * 1000).toFixed(2);\n            //0.32\n            y2 = (1.5 * y2 / 1023 / 150 * 1000).toFixed(2);\n          } else if (that.e == '1e-2') {\n            //0.32\n            y1 = (1.5 * y1 / 1023 / 15 * 100).toFixed(2);\n            //0.32\n            y2 = (1.5 * y2 / 1023 / 15 * 100).toFixed(2);\n          } else if (that.e == 'Default') {\n            //0.32\n            y1 = (3.3 * y1 / 1023 / 10000 * 100000).toFixed(2);\n            //0.32\n            y2 = (3.3 * y2 / 1023 / 10000 * 100000).toFixed(2);\n\n            //y1=(8*y1/1023/10000*10000).toFixed(2)\n            //y2=(8*y2/1023/10000*10000).toFixed(2)\n          }\n\n          that.mockData1.push({\n            x: \"\".concat(x),\n            y: \"\".concat(y1)\n          });\n          that.mockData2.push({\n            x: \"\".concat(x),\n            y: \"\".concat(y2)\n          });\n          //绘制图\n          that.drawChart(that.context1, that.mockData1);\n          that.drawChart(that.context2, that.mockData2);\n        }, 500 * index); // 将延迟时间设为迭代次数乘以间隔时间\n      });\n    },\n    fetchDataPeriodically: function fetchDataPeriodically(id) {\n      var that = this;\n      var arr = [];\n      //不存在id的情况是直接点击进来的，因此要设置setting\n      if (!id) {\n        that.$func.usemall.call('app/mp/get').then(function (resGet) {\n          __f__(\"log\", resGet.result.data.length, \" at pages/tabbar/start.vue:241\");\n          for (var i = 0; i < resGet.result.data.length; i++) {\n            var item = resGet.result.data[i];\n            arr = item.arr.substring(2).split('/');\n            that.setting = item.setting;\n            that.e = that.setting.split(',')[4];\n          }\n          __f__(\"log\", arr, \" at pages/tabbar/start.vue:248\");\n          that.renderArr(arr);\n        });\n      } else {\n        _hexiiiNfc.default.readData(function (str) {\n          //`b/26214,0.32,0.32/26224,0.36,0.328/26234,0.4,0.5/26244,0.6,0.7`\n          __f__(\"log\", str, \" at pages/tabbar/start.vue:255\");\n          that.$func.usemall.call('app/mp/update', {\n            id: id,\n            arr: str\n          }).then(function (res) {\n            that.$func.usemall.call('app/mp/get', {\n              id: id\n            }).then(function (resGet) {\n              __f__(\"log\", resGet.result.data.length, \" at pages/tabbar/start.vue:264\");\n              for (var i = 0; i < resGet.result.data.length; i++) {\n                var item = resGet.result.data[i];\n                arr = item.arr.substring(2).split('/');\n              }\n              __f__(\"log\", arr, \" at pages/tabbar/start.vue:269\");\n              that.renderArr(arr);\n            });\n          });\n        });\n      }\n    },\n    Back: function Back() {\n      __f__(\"log\", 'Back start', \" at pages/tabbar/start.vue:283\");\n      uni.navigateTo({\n        url: \"/pages/tabbar/home\"\n      });\n    },\n    Param: function Param() {\n      __f__(\"log\", 'Param start', this.setting, \" at pages/tabbar/start.vue:289\");\n      uni.navigateTo({\n        url: \"/pages/tabbar/setting?setting=\".concat(this.setting)\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL3N0YXJ0LnZ1ZSJdLCJuYW1lcyI6WyJkYiIsInVuaUNsb3VkIiwiZGF0YWJhc2UiLCJkYXRhIiwiY2hhcnRXaWR0aCIsImNoYXJ0SGVpZ2h0IiwiY29udGV4dDEiLCJjb250ZXh0MiIsInNldHRpbmciLCJlIiwibW9ja0RhdGExIiwibW9ja0RhdGEyIiwib25Mb2FkIiwib3B0aW9ucyIsInJlcyIsInVuaSIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0NoYXJ0IiwiYXJyIiwic3BsaXQiLCJyZW5kZXJBcnIiLCJzdWJzdHJpbmciLCJpZCIsIm5mYyIsImxpc3Rlbk5GQ1N0YXR1cyIsImZldGNoRGF0YVBlcmlvZGljYWxseSIsIm1ldGhvZHMiLCJjdHgiLCJ0aGF0IiwieE1pbiIsInhNYXgiLCJwYXJzZUZsb2F0IiwicGFkZGluZyIsInhQb2ludHMiLCJsZW5ndGgiLCJ4UmFuZ2UiLCJ5TWF4IiwiTWF0aCIsIm1heCIsIm1hcCIsInAiLCJ5IiwieVJhdGlvIiwieFJhdGlvIiwiY2xlYXJSZWN0IiwiaSIsInlWYWx1ZSIsImZpbGxUZXh0IiwidG9GaXhlZCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCIsInhWYWx1ZSIsIngiLCJzZXRTdHJva2VTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInNldExpbmVXaWR0aCIsImZvckVhY2giLCJwb2ludCIsImluZGV4IiwidHJhbnNsYXRlIiwicm90YXRlIiwicmVzdG9yZSIsImRyYXciLCJpdGVtIiwic2V0VGltZW91dCIsInN1YkFyciIsInkxIiwieTIiLCJwdXNoIiwiJGZ1bmMiLCJ1c2VtYWxsIiwiY2FsbCIsInRoZW4iLCJyZXNHZXQiLCJyZXN1bHQiLCJyZWFkRGF0YSIsInN0ciIsIkJhY2siLCJuYXZpZ2F0ZVRvIiwidXJsIiwiUGFyYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7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QUUsRUFBRTtnQkFDbkQsSUFBSXNCLElBQUksR0FBR1UsTUFBTSxDQUFDQyxNQUFNLENBQUM3RSxJQUFJLENBQUM0QyxDQUFDLENBQUM7Z0JBQ2hDM0IsR0FBRyxHQUFHaUQsSUFBSSxDQUFDakQsR0FBRyxDQUFDRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQyxHQUFHLENBQUM7Y0FDdkM7Y0FDQSxhQUFZRCxHQUFHO2NBQ2ZVLElBQUksQ0FBQ1IsU0FBUyxDQUFDRixHQUFHLENBQUM7WUFFcEIsQ0FBQyxDQUFDO1VBQ0gsQ0FBQyxDQUFDO1FBSUgsQ0FBQyxDQUFDO01BQ0g7SUFHRCxDQUFDO0lBQ0QrRCxJQUFJLGtCQUFHO01BQ04sYUFBWSxZQUFZO01BQ3hCcEUsR0FBRyxDQUFDcUUsVUFBVSxDQUFDO1FBQ2RDLEdBQUc7TUFDSixDQUFDLENBQUM7SUFDSCxDQUFDO0lBQ0RDLEtBQUssbUJBQUc7TUFDUCxhQUFZLGFBQWEsRUFBQyxJQUFJLENBQUM5RSxPQUFPO01BQ3RDTyxHQUFHLENBQUNxRSxVQUFVLENBQUM7UUFDZEMsR0FBRywwQ0FBbUMsSUFBSSxDQUFDN0UsT0FBTztNQUNuRCxDQUFDLENBQUM7SUFDSDtFQUVEO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IG5mYyBmcm9tICdAL2pzX3Nkay9oZXhpaWktbmZjL2hleGlpaS1uZmMuanMnXG5jb25zdCBkYiA9IHVuaUNsb3VkLmRhdGFiYXNlKCk7XG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNoYXJ0V2lkdGg6IDAsXG5cdFx0XHRjaGFydEhlaWdodDogMzAwLFxuXHRcdFx0Y29udGV4dDE6IG51bGwsXG5cdFx0XHRjb250ZXh0MjogbnVsbCxcblx0XHRcdHNldHRpbmcgOiBudWxsLFxuXHRcdFx0ZSA6ICcnLFxuXHRcdFx0bW9ja0RhdGExOiBbXG5cdFx0XHRcdC8vIHsgeDogJzUnLCB5OiAyMCB9LFxuXHRcdFx0XHQvLyDmt7vliqDmm7TlpJrmqKHmi5/mlbDmja7ngrkuLi5cblx0XHRcdF0sXG5cdFx0XHRtb2NrRGF0YTI6IFtcblx0XHRcdFx0Ly8geyB4OiAnNScsIHk6IDIwIH0sXG5cdFx0XHRcdC8vIOa3u+WKoOabtOWkmuaooeaLn+aVsOaNrueCuS4uLlxuXHRcdFx0XSxcblx0XHR9O1xuXHR9LFxuXHRcblx0b25Mb2FkKG9wdGlvbnMpIHtcblx0XHRjb25zdCByZXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcblx0XHR0aGlzLmNoYXJ0V2lkdGggPSByZXMud2luZG93V2lkdGg7XG5cdFx0dGhpcy5jb250ZXh0MSA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdsaW5lQ2hhcnQxJywgdGhpcyk7XG5cdFx0dGhpcy5kcmF3Q2hhcnQodGhpcy5jb250ZXh0MSx0aGlzLm1vY2tEYXRhMSk7XG5cdFx0dGhpcy5jb250ZXh0MiA9IHVuaS5jcmVhdGVDYW52YXNDb250ZXh0KCdsaW5lQ2hhcnQyJywgdGhpcyk7XG5cdFx0dGhpcy5kcmF3Q2hhcnQodGhpcy5jb250ZXh0Mix0aGlzLm1vY2tEYXRhMik7XG5cdFx0Y29uc29sZS5sb2coXCJvbkxvYWRcIixvcHRpb25zKVxuXHRcdGlmKG9wdGlvbnMuYXJyKXtcblx0XHRcdHRoaXMuc2V0dGluZyA9IG9wdGlvbnMuc2V0dGluZ1xuXHRcdFx0dGhpcy5lID0gdGhpcy5zZXR0aW5nLnNwbGl0KCcsJylbNF1cblx0XHRcdHRoaXMucmVuZGVyQXJyKG9wdGlvbnMuYXJyLnN1YnN0cmluZygyKS5zcGxpdCgnLycpKVxuXHRcdH1lbHNlIGlmKG9wdGlvbnMuaWQpe1xuXHRcdFx0dGhpcy5zZXR0aW5nID0gb3B0aW9ucy5zZXR0aW5nXG5cdFx0XHR0aGlzLmUgPSB0aGlzLnNldHRpbmcuc3BsaXQoJywnKVs0XVxuXHRcdFx0bmZjLmxpc3Rlbk5GQ1N0YXR1cygpO1xuXHRcdFx0dGhpcy5mZXRjaERhdGFQZXJpb2RpY2FsbHkob3B0aW9ucy5pZCk7XG5cdFx0fWVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coXCJlbnRlciBzdGFydFwiKVxuXHRcdFx0dGhpcy5mZXRjaERhdGFQZXJpb2RpY2FsbHkoKTtcblx0XHR9XG5cdFx0XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRkcmF3Q2hhcnQoY3R4LGRhdGEpIHtcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcblx0XHRcdGxldCB4TWluID0gMC40O1xuXHRcdFx0bGV0IHhNYXggPSAwLjk7XG5cdFx0XHRpZih0aGlzLnNldHRpbmcpIHsgXG5cdFx0XHRcdGxldCBzZXR0aW5nID0gdGhpcy5zZXR0aW5nLnNwbGl0KCcsJylcblx0XHRcdFx0eE1pbiA9IHBhcnNlRmxvYXQoc2V0dGluZ1swXSk7XG5cdFx0XHRcdHhNYXggPSBwYXJzZUZsb2F0KHNldHRpbmdbMV0pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2codGhpcy5zZXR0aW5nKVxuXHRcdFx0XG5cdFx0XHRjb25zdCBwYWRkaW5nID0gNTA7XG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdGNvbnN0IHhQb2ludHMgPSBkYXRhLmxlbmd0aCA8IDEwID8gZGF0YS5sZW5ndGggOiAxMDsgLy8g5pyA5aSa5pi+56S6MTDkuKpY6L205Z2Q5qCH54K5XG5cdFx0XHQvLyDkv67mraPvvJrkvb/nlKjlrp7pmYXnmoR46L206IyD5Zu05p2l6K6h566X6Ze06ZqUXG5cdFx0XHRcblx0XHRcdGNvbnN0IHhSYW5nZSA9IHhNYXggLSB4TWluOyAvLyDlrp7pmYXnmoR46L206IyD5Zu0XG5cdFx0XHRcblx0XHRcdGNvbnN0IHlNYXggPSBNYXRoLm1heCguLi5kYXRhLm1hcCgocCkgPT4gcC55KSk7XG5cdFx0XHRcblx0XHRcdC8vIOS/ruato++8muagueaNruWunumZheeahHjovbTojIPlm7TmnaXorqHnrpfmr5Tkvotcblx0XHRcdGNvbnN0IHlSYXRpbyA9ICh0aGlzLmNoYXJ0SGVpZ2h0IC0gcGFkZGluZyAqIDIpIC8geU1heDtcblx0XHRcdGNvbnN0IHhSYXRpbyA9ICh0aGlzLmNoYXJ0V2lkdGggLSBwYWRkaW5nICogMikgLyB4UmFuZ2U7XG5cdFx0XHRcblx0XHRcdGN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jaGFydFdpZHRoLCB0aGlzLmNoYXJ0SGVpZ2h0KTsgLy8g5riF6Zmk5LmL5YmN55qE57uY5Zu+XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g57uY5Yi2Wei9tOWdkOagh+eCue+8iOS4jeWPmO+8iVxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0geFBvaW50czsgaSsrKSB7XG5cdFx0XHQgICAgbGV0IHlWYWx1ZSA9ICh5TWF4IC8geFBvaW50cykgKiBpO1xuXHRcdFx0ICAgIGxldCB5ID0gdGhpcy5jaGFydEhlaWdodCAtIHBhZGRpbmcgLSB5VmFsdWUgKiB5UmF0aW87XG5cdFx0XHQgICAgY3R4LmZpbGxUZXh0KCh5VmFsdWUpLnRvRml4ZWQoMiksIHBhZGRpbmcgLSAzMCwgeSArIDMpOyAvLyBZ6L205pWw5YC8XG5cdFx0XHQgICAgY3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0ICAgIGN0eC5hcmMocGFkZGluZywgeSwgMiwgMCwgTWF0aC5QSSAqIDIpO1xuXHRcdFx0ICAgIGN0eC5maWxsKCk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGF0LmUgPT0gJzFlLTUnKSB7XG5cdFx0XHRcdGN0eC5maWxsVGV4dChcIjEwXi01XCIsIDMwLCAgMzApO1xuXHRcdFx0fWVsc2UgaWYodGhhdC5lID09ICcxZS00Jykge1xuXHRcdFx0XHRjdHguZmlsbFRleHQoXCIxMF4tNFwiLCAzMCwgIDMwKTtcblx0XHRcdH1lbHNlIGlmKHRoYXQuZSA9PSAnMWUtMycpIHtcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KFwiMTBeLTNcIiwgMzAsICAzMCk7XG5cdFx0XHR9ZWxzZSBpZih0aGF0LmUgPT0gJzFlLTInKSB7XG5cdFx0XHRcdGN0eC5maWxsVGV4dChcIjEwXi0yXCIsIDMwLCAgMzApO1xuXHRcdFx0fWVsc2UgaWYodGhhdC5lID09ICdEZWZhdWx0Jykge1xuXHRcdFx0XHQvL2N0eC5maWxsVGV4dChcIjEwXi00XCIsIDMwLCAgMzApO1xuXHRcdFx0XHRjdHguZmlsbFRleHQoXCIxMF4tNVwiLCAzMCwgIDMwKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0Ly8g5L+u5q2j77ya57uY5Yi2WOi9tOWdkOagh+eCue+8jOiAg+iZkeWunumZheeahHjovbTojIPlm7Rcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IHhQb2ludHM7IGkrKykge1xuXHRcdFx0ICAgIGxldCB4VmFsdWUgPSB4TWluICsgKHhSYW5nZSAvIHhQb2ludHMpICogaTsgLy8g5qC55o2u5a6e6ZmF6IyD5Zu06K6h566XeOWAvFxuXHRcdFx0ICAgIGxldCB4ID0gcGFkZGluZyArICh4VmFsdWUgLSB4TWluKSAqIHhSYXRpbzsgLy8g6LCD5pW0eOS9jee9ruiuoeeul+aWueW8j1xuXHRcdFx0ICAgIGxldCB5ID0gdGhpcy5jaGFydEhlaWdodCAtIHBhZGRpbmc7IC8vIFnlnZDmoIflm7rlrprlnKjlupXpg6hcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KHhWYWx1ZS50b0ZpeGVkKDIpLCB4IC0gMTAsIHkgKyAyMCk7IC8vIFjovbTmlbDlgLzvvIznqI3lvq7osIPmlbTkvY3nva7ku6Xkvr/pmIXor7tcdFxuXHRcdFx0ICAgIFxuXHRcdFx0ICAgIGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdCAgICBjdHguYXJjKHgsIHksIDIsIDAsIE1hdGguUEkgKiAyKTtcblx0XHRcdCAgICBjdHguZmlsbCgpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHQvLyDnu5jliLblnZDmoIfovbTvvIjkuI3lj5jvvIlcblx0XHRcdGN0eC5zZXRTdHJva2VTdHlsZSgnYmx1ZScpO1xuXHRcdFx0Y3R4LmJlZ2luUGF0aCgpO1xuXHRcdFx0Y3R4Lm1vdmVUbyhwYWRkaW5nLCBwYWRkaW5nKTtcblx0XHRcdGN0eC5saW5lVG8ocGFkZGluZywgdGhpcy5jaGFydEhlaWdodCAtIHBhZGRpbmcpO1xuXHRcdFx0Y3R4LmxpbmVUbyh0aGlzLmNoYXJ0V2lkdGggLSBwYWRkaW5nLCB0aGlzLmNoYXJ0SGVpZ2h0IC0gcGFkZGluZyk7XG5cdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0XHRcblx0XHRcdC8vIOe7mOWItuWdkOagh+eCueWSjOabsue6v++8iOS4jeWPmO+8iVxuXHRcdFx0Y3R4LnNldFN0cm9rZVN0eWxlKCdyZWQnKTtcblx0XHRcdGN0eC5zZXRMaW5lV2lkdGgoMS41KTtcblx0XHRcdGN0eC5iZWdpblBhdGgoKTtcblx0XHRcdGRhdGEuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG5cdFx0XHQgICAgbGV0IHggPSBwYWRkaW5nICsgKHBvaW50LnggLSB4TWluKSAqIHhSYXRpbzsgLy8g6LCD5pW0eOS9jee9ruiuoeeul+aWueW8j1xuXHRcdFx0ICAgIGxldCB5ID0gdGhpcy5jaGFydEhlaWdodCAtIHBhZGRpbmcgLSBwb2ludC55ICogeVJhdGlvO1xuXHRcdFx0XG5cdFx0XHQgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHQgICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG5cdFx0XHQgICAgfSBlbHNlIHtcblx0XHRcdCAgICAgICAgY3R4LmxpbmVUbyh4LCB5KTtcblx0XHRcdCAgICB9XG5cdFx0XHRcblx0XHRcdCAgICBpZiAoaW5kZXggPT09IGRhdGEubGVuZ3RoIC0gMSkge1xuXHRcdFx0ICAgICAgICBjdHguZmlsbFRleHQoYCgke3BvaW50Lnh9LCAke3BvaW50Lnl9KWAsIHgsIHkgLSAxMCk7IC8vIOaYvuekuuWdkOagh1xuXHRcdFx0ICAgIH1cblx0XHRcdFxuXHRcdFx0ICAgIGN0eC5hcmMoeCwgeSwgMS41LCAwLCBNYXRoLlBJICogMik7IC8vIOe7mOWItueCuVxuXHRcdFx0XHRjdHgubW92ZVRvKHgsIHkpO1xuXHRcdFx0XHQvL2N0eC5saW5lVG8oeCwgeSk7XG5cdFx0XHRcdFxuXHRcdFx0fSk7XG5cdFx0XHRjdHguc3Ryb2tlKCk7XG5cdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGN0eC50cmFuc2xhdGUoMTUsMTUwKTsgLy8g5bCG5Y6f54K556e75Yqo5Yiw57uY5Yi25L2N572uXG5cdFx0XHRjdHgucm90YXRlKC1NYXRoLlBJIC8gMik7IC8vIOaXi+i9rCA5MMKwXG5cdFx0XHRcblx0XHRcdC8vIOe7mOWItuaWh+acrFxuXHRcdFx0Y3R4LmZpbGxUZXh0KFwiQ3VycmVudChBKVwiLCAwLCAwKTtcblx0XHRcdFxuXHRcdFx0Y3R4LnJlc3RvcmUoKTsgLy8g5oGi5aSN5LmL5YmN5L+d5a2Y55qE57uY5Zu+54q25oCBXG5cdFx0XHRjdHguZHJhdygpO1xuXG5cdFx0fSxcblx0XHRyZW5kZXJBcnIoYXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhhcnIpXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0XHQvLyBhcnIgPSBhcnIuc2xpY2UoMCwgMylcblx0XHRcdGFyci5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzdWJBcnIpXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBzdWJBcnIgPSBpdGVtLnNwbGl0KCcsJylcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzdWJBcnIpO1xuXHRcdFx0XHRcdGxldCB4ID0gcGFyc2VGbG9hdChzdWJBcnJbMF0pXG5cdFx0XHRcdFx0bGV0IHkxID0gcGFyc2VGbG9hdChzdWJBcnJbMV0pXG5cdFx0XHRcdFx0bGV0IHkyID0gcGFyc2VGbG9hdChzdWJBcnJbMl0pXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8yNjIxNFxuXHRcdFx0XHRcdHg9KDIuNSp4LzY1NTM1KS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGhhdC5lID09ICcxZS01Jykge1xuXHRcdFx0XHRcdFx0Ly8wLjMyXG5cdFx0XHRcdFx0XHR5MT0oMS41KnkxLzEwMjMvMTUwMDAqMTAwMDAwKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHQvLzAuMzJcblx0XHRcdFx0XHRcdHkyPSgxLjUqeTIvMTAyMy8xNTAwMCoxMDAwMDApLnRvRml4ZWQoMilcblx0XHRcdFx0XHR9ZWxzZSBpZih0aGF0LmUgPT0gJzFlLTQnKSB7XG5cdFx0XHRcdFx0XHQvLzAuMzJcblx0XHRcdFx0XHRcdHkxPSgxLjUqeTEvMTAyMy8xNTAwKjEwMDAwKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHQvLzAuMzJcblx0XHRcdFx0XHRcdHkyPSgxLjUqeTIvMTAyMy8xNTAwKjEwMDAwKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0fWVsc2UgaWYodGhhdC5lID09ICcxZS0zJykge1xuXHRcdFx0XHRcdFx0Ly8wLjMyXG5cdFx0XHRcdFx0XHR5MT0oMS41KnkxLzEwMjMvMTUwKjEwMDApLnRvRml4ZWQoMilcblx0XHRcdFx0XHRcdC8vMC4zMlxuXHRcdFx0XHRcdFx0eTI9KDEuNSp5Mi8xMDIzLzE1MCoxMDAwKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0fWVsc2UgaWYodGhhdC5lID09ICcxZS0yJykge1xuXHRcdFx0XHRcdFx0Ly8wLjMyXG5cdFx0XHRcdFx0XHR5MT0oMS41KnkxLzEwMjMvMTUqMTAwKS50b0ZpeGVkKDIpXG5cdFx0XHRcdFx0XHQvLzAuMzJcblx0XHRcdFx0XHRcdHkyPSgxLjUqeTIvMTAyMy8xNSoxMDApLnRvRml4ZWQoMilcblx0XHRcdFx0XHR9ZWxzZSBpZih0aGF0LmUgPT0gJ0RlZmF1bHQnKSB7XG5cdFx0XHRcdFx0XHQvLzAuMzJcblx0XHRcdFx0XHRcdHkxPSgzLjMqeTEvMTAyMy8xMDAwMCoxMDAwMDApLnRvRml4ZWQoMilcblx0XHRcdFx0XHRcdC8vMC4zMlxuXHRcdFx0XHRcdFx0eTI9KDMuMyp5Mi8xMDIzLzEwMDAwKjEwMDAwMCkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvL3kxPSg4KnkxLzEwMjMvMTAwMDAqMTAwMDApLnRvRml4ZWQoMilcblx0XHRcdFx0XHRcdC8veTI9KDgqeTIvMTAyMy8xMDAwMCoxMDAwMCkudG9GaXhlZCgyKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhhdC5tb2NrRGF0YTEucHVzaCh7XG5cdFx0XHRcdFx0XHR4OiBgJHt4fWAsXG5cdFx0XHRcdFx0XHR5OiBgJHt5MX1gXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGhhdC5tb2NrRGF0YTIucHVzaCh7XG5cdFx0XHRcdFx0XHR4OiBgJHt4fWAsXG5cdFx0XHRcdFx0XHR5OiBgJHt5Mn1gXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Ly/nu5jliLblm75cblx0XHRcdFx0XHR0aGF0LmRyYXdDaGFydCh0aGF0LmNvbnRleHQxLHRoYXQubW9ja0RhdGExKTtcblx0XHRcdFx0XHR0aGF0LmRyYXdDaGFydCh0aGF0LmNvbnRleHQyLHRoYXQubW9ja0RhdGEyKTtcblx0XHRcdFx0fSwgNTAwICogaW5kZXgpOyAvLyDlsIblu7bov5/ml7bpl7Torr7kuLrov63ku6PmrKHmlbDkuZjku6Xpl7TpmpTml7bpl7Rcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0ZmV0Y2hEYXRhUGVyaW9kaWNhbGx5KGlkKSB7XG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XG5cdFx0XHRsZXQgYXJyID0gW11cblx0XHRcdC8v5LiN5a2Y5ZyoaWTnmoTmg4XlhrXmmK/nm7TmjqXngrnlh7vov5vmnaXnmoTvvIzlm6DmraTopoHorr7nva5zZXR0aW5nXG5cdFx0XHRpZighaWQpe1xuXHRcdFx0XHR0aGF0LiRmdW5jLnVzZW1hbGwuY2FsbCgnYXBwL21wL2dldCcpLnRoZW4ocmVzR2V0ID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXNHZXQucmVzdWx0LmRhdGEubGVuZ3RoKVxuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzR2V0LnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRsZXQgaXRlbSA9IHJlc0dldC5yZXN1bHQuZGF0YVtpXVxuXHRcdFx0XHRcdFx0YXJyID0gaXRlbS5hcnIuc3Vic3RyaW5nKDIpLnNwbGl0KCcvJyk7XG5cdFx0XHRcdFx0XHR0aGF0LnNldHRpbmcgPSBpdGVtLnNldHRpbmdcblx0XHRcdFx0XHRcdHRoYXQuZSA9IHRoYXQuc2V0dGluZy5zcGxpdCgnLCcpWzRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGFycilcblx0XHRcdFx0XHR0aGF0LnJlbmRlckFycihhcnIpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdG5mYy5yZWFkRGF0YShmdW5jdGlvbihzdHIpIHtcblx0XHRcdFx0XHQvL2BiLzI2MjE0LDAuMzIsMC4zMi8yNjIyNCwwLjM2LDAuMzI4LzI2MjM0LDAuNCwwLjUvMjYyNDQsMC42LDAuN2Bcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhzdHIpXG5cdFx0XHRcdFx0dGhhdC4kZnVuYy51c2VtYWxsLmNhbGwoJ2FwcC9tcC91cGRhdGUnLCB7XG5cdFx0XHRcdFx0XHRpZCA6IGlkLFxuXHRcdFx0XHRcdFx0YXJyIDogc3RyXG5cdFx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR0aGF0LiRmdW5jLnVzZW1hbGwuY2FsbCgnYXBwL21wL2dldCcse1xuXHRcdFx0XHRcdFx0XHRpZCA6IGlkXG5cdFx0XHRcdFx0XHR9KS50aGVuKHJlc0dldCA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc0dldC5yZXN1bHQuZGF0YS5sZW5ndGgpXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzR2V0LnJlc3VsdC5kYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSByZXNHZXQucmVzdWx0LmRhdGFbaV1cblx0XHRcdFx0XHRcdFx0XHRhcnIgPSBpdGVtLmFyci5zdWJzdHJpbmcoMikuc3BsaXQoJy8nKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhhcnIpXG5cdFx0XHRcdFx0XHRcdHRoYXQucmVuZGVyQXJyKGFycilcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdFx0XG5cblx0XHR9LFxuXHRcdEJhY2soKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnQmFjayBzdGFydCcpO1xuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6IGAvcGFnZXMvdGFiYmFyL2hvbWVgXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdFBhcmFtKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1BhcmFtIHN0YXJ0Jyx0aGlzLnNldHRpbmcpO1xuXHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHR1cmw6IGAvcGFnZXMvdGFiYmFyL3NldHRpbmc/c2V0dGluZz0ke3RoaXMuc2V0dGluZ31gXG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///49\n");

/***/ }),
/* 50 */
/*!***********************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/js_sdk/hexiii-nfc/hexiii-nfc.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n// 包路径\nvar package_NdefRecord = 'android.nfc.NdefRecord';\nvar package_NdefMessage = 'android.nfc.NdefMessage';\nvar package_TECH_DISCOVERED = 'android.nfc.action.TECH_DISCOVERED';\nvar package_Intent = 'android.content.Intent';\nvar package_Activity = 'android.app.Activity';\nvar package_PendingIntent = 'android.app.PendingIntent';\nvar package_IntentFilter = 'android.content.IntentFilter';\nvar package_NfcAdapter = 'android.nfc.NfcAdapter';\nvar package_Ndef = 'android.nfc.tech.Ndef';\nvar package_NdefFormatable = 'android.nfc.tech.NdefFormatable';\nvar package_Parcelable = 'android.os.Parcelable';\nvar package_String = 'java.lang.String';\nvar NfcAdapter;\nvar NdefRecord;\nvar NdefMessage;\nvar readyWriteData = false;\nvar readyRead = false;\nvar noNFC = false;\nvar readCallback = function readCallback() {};\nvar writeCallback = function writeCallback() {};\nvar techListsArray = [['android.nfc.tech.IsoDep'], ['android.nfc.tech.NfcA'], ['android.nfc.tech.NfcB'], ['android.nfc.tech.NfcF'], ['android.nfc.tech.Nfcf'], ['android.nfc.tech.NfcV'], ['android.nfc.tech.NdefFormatable'], ['android.nfc.tech.MifareClassi'], ['android.nfc.tech.MifareUltralight']];\n// 要写入的数据\nvar text = '{id:123,name:nfc,stie:cssmini.com}';\nvar _default = {\n  initReadNfcAdapter: function initReadNfcAdapter(fun) {\n    var main = plus.android.runtimeMainActivity();\n    var PendingIntent = plus.android.importClass('android.app.PendingIntent');\n    var Intent = plus.android.importClass('android.content.Intent');\n    var intent = new Intent(main, main.getClass());\n    var pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);\n    var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n    var ndef = new IntentFilter(\"android.nfc.action.TECH_DISCOVERED\");\n    ndef.addDataType(\"*/*\");\n    var intentFiltersArray = [ndef];\n    NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');\n    var nfcAdapter = NfcAdapter.getDefaultAdapter(main);\n    readyRead = true;\n    nfcAdapter.disableForegroundDispatch(main);\n    __f__(\"log\", '2 新的意图', \" at js_sdk/hexiii-nfc/hexiii-nfc.js:58\");\n    // 轮询调用 NFC\n    this.nfcRuning();\n    NfcAdapter = nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);\n    readCallback = fun;\n    return NfcAdapter;\n  },\n  removeNFCStatus: function removeNFCStatus() {\n    //1 暂停 初始化\n    plus.globalEvent.removeEventListener('pause', function (e) {\n      __f__(\"log\", e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:70\");\n    });\n    plus.globalEvent.removeEventListener('newintent', function (e) {\n      __f__(\"log\", e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:74\");\n    });\n    plus.globalEvent.removeEventListener('resume', function (e) {\n      __f__(\"log\", e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:78\");\n    });\n  },\n  listenNFCStatus: function listenNFCStatus() {\n    readyWriteData = false;\n    readyRead = false;\n    __f__(\"log\", \"listenNFCStatus\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:86\");\n    // toast(\"listenNFCStatus\");\n    var that = this;\n    try {\n      var main = plus.android.runtimeMainActivity();\n      var Intent = plus.android.importClass('android.content.Intent');\n      var Activity = plus.android.importClass('android.app.Activity');\n      var PendingIntent = plus.android.importClass('android.app.PendingIntent');\n      var IntentFilter = plus.android.importClass('android.content.IntentFilter');\n      NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');\n      var nfcAdapter = NfcAdapter.getDefaultAdapter(main);\n      if (nfcAdapter == null) {\n        uni.showToast({\n          title: 'The device does not support NFC',\n          icon: 'none'\n        });\n        noNFC = true;\n        return;\n      }\n      if (!nfcAdapter.isEnabled()) {\n        uni.showToast({\n          title: 'Please enable NFC function in system settings first',\n          icon: 'none'\n        });\n        noNFC = true;\n        return;\n      } else {\n        noNFC = false;\n      }\n      var intent = new Intent(main, main.getClass());\n      intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);\n      var pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);\n      var ndef = new IntentFilter(\"android.nfc.action.TECH_DISCOVERED\");\n      ndef.addDataType(\"*/*\");\n      var intentFiltersArray = [ndef];\n      // toast(\"addEventListener\");\n      //1 暂停 初始化\n      plus.globalEvent.addEventListener('pause', function (e) {\n        // toast('1 暂停');\n        // console.log('1 暂停');\n        if (nfcAdapter) {\n          //关闭前台调度系统\n          //恢复默认状态\n          nfcAdapter.disableForegroundDispatch(main);\n        }\n      });\n      plus.globalEvent.addEventListener('nfcDiscovered', function (event) {\n        __f__(\"log\", '=========================NFC tag disconnected:', event, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:136\");\n\n        // 在断开连接后重新链接\n        // reConnectNFC(); // 自定义函数，用于重新链接 NFC 标签\n      });\n      //2 新的意图\n      plus.globalEvent.addEventListener('newintent', function () {\n        // console.log('2 新的意图');\n        // toast('2 新的意图');\n        // 轮询调用 NFC\n        that.nfcRuning();\n      });\n\n      //3 继续\n      plus.globalEvent.addEventListener('resume', function (e) {\n        // console.log('3 继续');\n        // toast('3 继续');\n        if (nfcAdapter) {\n          //开启前台调度系统\n          // 优于所有其他NFC\n          nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);\n        }\n      });\n\n      //初始化\n      nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);\n      // toast('初始化完成');\n      __f__(\"log\", \"初始化完成\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:164\");\n    } catch (e) {\n      toast(e);\n      __f__(\"error\", e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:167\");\n    }\n  },\n  nfcRuning: function nfcRuning() {\n    NdefRecord = plus.android.importClass(\"android.nfc.NdefRecord\");\n    NdefMessage = plus.android.importClass(\"android.nfc.NdefMessage\");\n    var main = plus.android.runtimeMainActivity();\n    var intent = main.getIntent();\n    var that = this;\n\n    // console.log(\"nfcRuning:\" + intent.getAction());\n    // toast(\"nfcRuning:\" + intent.getAction());\n    if (package_TECH_DISCOVERED == intent.getAction()) {\n      __f__(\"log\", \"if\", readyWriteData, readyRead, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:180\");\n      // toast(readyWriteData);\n      if (readyWriteData) {\n        that.write(intent);\n        __f__(\"log\", \"write\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:184\");\n        readyWriteData = false;\n      } else if (readyRead) {\n        __f__(\"log\", \"read1\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:187\");\n        that.read(intent);\n        readyRead = false;\n      }\n    }\n  },\n  write: function write(intent) {\n    try {\n      toast('Please do not remove the tag');\n      __f__(\"log\", \"text=\" + text, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:196\");\n      var textBytes = plus.android.invoke(text, \"getBytes\");\n      __f__(\"log\", textBytes, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:199\");\n      // image/jpeg text/plain  \n      var textRecord = new NdefRecord(NdefRecord.TNF_MIME_MEDIA, plus.android.invoke(\"text/plain\", \"getBytes\"), plus.android.invoke(\"\", \"getBytes\"), textBytes);\n      var message = new NdefMessage([textRecord]);\n      var Ndef = plus.android.importClass('android.nfc.tech.Ndef');\n      var NdefFormatable = plus.android.importClass('android.nfc.tech.NdefFormatable');\n      var tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);\n      var ndef = Ndef.get(tag);\n      if (ndef != null) {\n        // 待写入的数据长度\n        var size = message.toByteArray().length;\n        ndef.connect();\n        if (!ndef.isWritable()) {\n          toast('tag error！');\n          return;\n        }\n        if (ndef.getMaxSize() < size) {\n          toast(\"The file size exceeds the capacity! max \".concat(ndef.getMaxSize(), \"  current \").concat(size));\n          return;\n        }\n        ndef.writeNdefMessage(message);\n        toast('Write data successfully！size:' + size);\n      } else {\n        var format = NdefFormatable.get(tag);\n        if (format != null) {\n          try {\n            format.connect();\n            format.format(message);\n            toast('format tag');\n          } catch (e) {\n            toast('format tag error');\n          }\n        } else {\n          toast('Tag Not Supported NDEF');\n        }\n      }\n    } catch (e) {\n      toast('write error');\n      __f__(\"log\", \"error=\" + e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:239\");\n    }\n    __f__(\"log\", \"write done\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:241\");\n    writeCallback();\n  },\n  readFromSector: function readFromSector() {\n    toast('请勿移开标签正在读取数据');\n    readyRead = true;\n\n    // 在代码顶部导入 MifareClassic 类\n    var package_MifareClassic = 'android.nfc.tech.MifareClassic';\n\n    // 然后在使用 MifareClassic 的地方，确保已经正确导入\n    var main = plus.android.runtimeMainActivity();\n    var intent = main.getIntent();\n    var tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);\n    var MifareClassic = plus.android.importClass(\"android.nfc.tech.MifareClassic\");\n    __f__(\"log\", MifareClassic, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:258\");\n    var mifareTag = MifareClassic.get(tag);\n    __f__(\"log\", mifareTag, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:260\");\n    if (mifareTag != null) {\n      try {\n        mifareTag.connect();\n        var sectorIndex = 1; // 示例：读取第2个扇区（索引从0开始）\n        var authenticated = mifareTag.authenticateSectorWithKeyA(sectorIndex, MifareClassic.KEY_DEFAULT);\n        __f__(\"log\", authenticated, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:266\");\n        if (authenticated) {\n          // 读取扇区中的块\n          var blockIndex = mifareTag.sectorToBlock(sectorIndex);\n          var blockData = mifareTag.readBlock(blockIndex);\n          var dataStr = byteArrayToHexString(blockData);\n          toast('NFC 数据：' + dataStr);\n          __f__(\"log\", 'NFC 数据：', dataStr, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:273\");\n          readCallback(dataStr);\n        } else {\n          toast('扇区认证失败');\n        }\n      } catch (e) {\n        __f__(\"log\", e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:279\");\n        toast('读取过程中发生错误');\n      } finally {\n        if (mifareTag.isConnected()) {\n          mifareTag.close();\n        }\n      }\n    } else {\n      toast('不支持MifareClassic标签');\n    }\n  },\n  read: function read() {\n    // toast('请勿移开标签正在读取数据');\n\n    var main = plus.android.runtimeMainActivity();\n    var intent = main.getIntent();\n    readyRead = true;\n    var that = this;\n    // NFC id\n    var bytesId = intent.getByteArrayExtra(NfcAdapter.EXTRA_ID);\n    var nfc_id = that.byteArrayToHexString(bytesId);\n    __f__(\"log\", 'nfc_id:', nfc_id, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:302\");\n    var Parcelable = plus.android.importClass(\"android.os.Parcelable\");\n    var rawmsgs = intent.getParcelableArrayExtra(\"android.nfc.extra.NDEF_MESSAGES\");\n    __f__(\"log\", rawmsgs ? rawmsgs.length : 0, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:305\");\n    if (rawmsgs != null && rawmsgs.length > 0) {\n      var data = \"\";\n      for (var i = 0; i < rawmsgs.length; i++) {\n        __f__(\"log\", \"i:\" + i, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:310\");\n        // toast(\"i:\" + i);\n        var records = rawmsgs[i].getRecords();\n        for (var j = 0; j < records.length; j++) {\n          // toast(\"j\" + j);\n          __f__(\"log\", \"j\" + j, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:315\");\n          var result = records[j].getPayload();\n          __f__(\"log\", \"============read==========\", \" at js_sdk/hexiii-nfc/hexiii-nfc.js:317\");\n          data += plus.android.newObject(\"java.lang.String\", result);\n          // toast('NFC 数据：' + data);\n          __f__(\"log\", 'NFC 数据：', data, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:321\");\n        }\n      }\n      readCallback(data);\n    } else {\n      toast('没有读取到数据');\n    }\n  },\n  read1: function read1() {\n    // toast('请勿移开标签正在读取数据');\n\n    var main = plus.android.runtimeMainActivity();\n    var intent = main.getIntent();\n    readyRead = true;\n    var that = this;\n\n    // NFC id\n    // let bytesId = intent.getByteArrayExtra(\"android.nfc.NfcAdapter.EXTRA_ID\");\n    // let nfc_id = that.byteArrayToHexString(bytesId);\n    // console.log('nfc_id:', nfc_id);\n\n    // 尝试获取MifareUltralight实例\n    var tag = intent.getParcelableExtra(\"android.nfc.extra.TAG\");\n    var MifareUltralight = plus.android.importClass(\"android.nfc.tech.MifareUltralight\");\n    var mifareUltralight = MifareUltralight.get(tag);\n    try {\n      // mifareUltralight.connect();\n      __f__(\"log\", mifareUltralight.readPages, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:355\");\n      var payload = mifareUltralight.readPages(4); // 从第0页开始读取\n      var dataStr = plus.android.newObject(\"java.lang.String\", payload);\n      __f__(\"log\", '读取到的数据：', dataStr, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:358\");\n      // 处理或显示读取到的数据\n      toast('读取到的数据：' + dataStr);\n      readCallback(dataStr);\n    } catch (e) {\n      __f__(\"error\", '读取过程中发生错误：', e, \" at js_sdk/hexiii-nfc/hexiii-nfc.js:363\");\n      toast('读取过程中发生错误');\n    } finally {\n      if (mifareUltralight.isConnected()) {\n        mifareUltralight.close();\n      }\n    }\n  },\n  byteArrayToHexString: function byteArrayToHexString(inarray) {\n    // converts byte arrays to string  \n    var i, j, inn;\n    var hex = [\"0\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\"];\n    var out = \"\";\n    for (j = 0; j < inarray.length; ++j) {\n      inn = inarray[j] & 0xff;\n      i = inn >>> 4 & 0x0f;\n      out += hex[i];\n      i = inn & 0x0f;\n      out += hex[i];\n    }\n    return out;\n  },\n  writeData: function writeData(data, fun) {\n    if (noNFC) {\n      toast('Please check if the device supports and enables NFC');\n      return;\n    }\n    // 轮询条件\n    readyWriteData = true;\n    text = data;\n    writeCallback = fun;\n    toast('Close to the NFC tag');\n  },\n  readData: function readData(fun) {\n    if (noNFC) {\n      toast('Please check if the device supports and enables NFC');\n      return;\n    }\n    // 轮询条件\n    readyRead = true;\n    readCallback = fun;\n    toast('Close to the NFC tag');\n  }\n};\nexports.default = _default;\nfunction toast(content) {\n  uni.showToast({\n    title: content,\n    icon: 'none',\n    duration: 3000\n  });\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL2hleGlpaS1uZmMvaGV4aWlpLW5mYy5qcyJdLCJuYW1lcyI6WyJwYWNrYWdlX05kZWZSZWNvcmQiLCJwYWNrYWdlX05kZWZNZXNzYWdlIiwicGFja2FnZV9URUNIX0RJU0NPVkVSRUQiLCJwYWNrYWdlX0ludGVudCIsInBhY2thZ2VfQWN0aXZpdHkiLCJwYWNrYWdlX1BlbmRpbmdJbnRlbnQiLCJwYWNrYWdlX0ludGVudEZpbHRlciIsInBhY2thZ2VfTmZjQWRhcHRlciIsInBhY2thZ2VfTmRlZiIsInBhY2thZ2VfTmRlZkZvcm1hdGFibGUiLCJwYWNrYWdlX1BhcmNlbGFibGUiLCJwYWNrYWdlX1N0cmluZyIsIk5mY0FkYXB0ZXIiLCJOZGVmUmVjb3JkIiwiTmRlZk1lc3NhZ2UiLCJyZWFkeVdyaXRlRGF0YSIsInJlYWR5UmVhZCIsIm5vTkZDIiwicmVhZENhbGxiYWNrIiwid3JpdGVDYWxsYmFjayIsInRlY2hMaXN0c0FycmF5IiwidGV4dCIsImluaXRSZWFkTmZjQWRhcHRlciIsImZ1biIsIm1haW4iLCJwbHVzIiwiYW5kcm9pZCIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJQZW5kaW5nSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJJbnRlbnQiLCJpbnRlbnQiLCJnZXRDbGFzcyIsInBlbmRpbmdJbnRlbnQiLCJnZXRBY3Rpdml0eSIsIkludGVudEZpbHRlciIsIm5kZWYiLCJhZGREYXRhVHlwZSIsImludGVudEZpbHRlcnNBcnJheSIsIm5mY0FkYXB0ZXIiLCJnZXREZWZhdWx0QWRhcHRlciIsImRpc2FibGVGb3JlZ3JvdW5kRGlzcGF0Y2giLCJuZmNSdW5pbmciLCJlbmFibGVGb3JlZ3JvdW5kRGlzcGF0Y2giLCJyZW1vdmVORkNTdGF0dXMiLCJnbG9iYWxFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwibGlzdGVuTkZDU3RhdHVzIiwidGhhdCIsIkFjdGl2aXR5IiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiaXNFbmFibGVkIiwiYWRkRmxhZ3MiLCJGTEFHX0FDVElWSVRZX1NJTkdMRV9UT1AiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0b2FzdCIsImdldEludGVudCIsImdldEFjdGlvbiIsIndyaXRlIiwicmVhZCIsInRleHRCeXRlcyIsImludm9rZSIsInRleHRSZWNvcmQiLCJUTkZfTUlNRV9NRURJQSIsIm1lc3NhZ2UiLCJOZGVmIiwiTmRlZkZvcm1hdGFibGUiLCJ0YWciLCJnZXRQYXJjZWxhYmxlRXh0cmEiLCJFWFRSQV9UQUciLCJnZXQiLCJzaXplIiwidG9CeXRlQXJyYXkiLCJsZW5ndGgiLCJjb25uZWN0IiwiaXNXcml0YWJsZSIsImdldE1heFNpemUiLCJ3cml0ZU5kZWZNZXNzYWdlIiwiZm9ybWF0IiwicmVhZEZyb21TZWN0b3IiLCJwYWNrYWdlX01pZmFyZUNsYXNzaWMiLCJNaWZhcmVDbGFzc2ljIiwibWlmYXJlVGFnIiwic2VjdG9ySW5kZXgiLCJhdXRoZW50aWNhdGVkIiwiYXV0aGVudGljYXRlU2VjdG9yV2l0aEtleUEiLCJLRVlfREVGQVVMVCIsImJsb2NrSW5kZXgiLCJzZWN0b3JUb0Jsb2NrIiwiYmxvY2tEYXRhIiwicmVhZEJsb2NrIiwiZGF0YVN0ciIsImJ5dGVBcnJheVRvSGV4U3RyaW5nIiwiaXNDb25uZWN0ZWQiLCJjbG9zZSIsImJ5dGVzSWQiLCJnZXRCeXRlQXJyYXlFeHRyYSIsIkVYVFJBX0lEIiwibmZjX2lkIiwiUGFyY2VsYWJsZSIsInJhd21zZ3MiLCJnZXRQYXJjZWxhYmxlQXJyYXlFeHRyYSIsImRhdGEiLCJpIiwicmVjb3JkcyIsImdldFJlY29yZHMiLCJqIiwicmVzdWx0IiwiZ2V0UGF5bG9hZCIsIm5ld09iamVjdCIsInJlYWQxIiwiTWlmYXJlVWx0cmFsaWdodCIsIm1pZmFyZVVsdHJhbGlnaHQiLCJyZWFkUGFnZXMiLCJwYXlsb2FkIiwiaW5hcnJheSIsImlubiIsImhleCIsIm91dCIsIndyaXRlRGF0YSIsInJlYWREYXRhIiwiY29udGVudCIsImR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLElBQU1BLGtCQUFrQixHQUFHLHdCQUF3QjtBQUNuRCxJQUFNQyxtQkFBbUIsR0FBRyx5QkFBeUI7QUFDckQsSUFBTUMsdUJBQXVCLEdBQUcsb0NBQW9DO0FBQ3BFLElBQU1DLGNBQWMsR0FBRyx3QkFBd0I7QUFDL0MsSUFBTUMsZ0JBQWdCLEdBQUcsc0JBQXNCO0FBQy9DLElBQU1DLHFCQUFxQixHQUFHLDJCQUEyQjtBQUN6RCxJQUFNQyxvQkFBb0IsR0FBRyw4QkFBOEI7QUFDM0QsSUFBTUMsa0JBQWtCLEdBQUcsd0JBQXdCO0FBQ25ELElBQU1DLFlBQVksR0FBRyx1QkFBdUI7QUFDNUMsSUFBTUMsc0JBQXNCLEdBQUcsaUNBQWlDO0FBQ2hFLElBQU1DLGtCQUFrQixHQUFHLHVCQUF1QjtBQUNsRCxJQUFNQyxjQUFjLEdBQUcsa0JBQWtCO0FBS3pDLElBQUlDLFVBQVU7QUFDZCxJQUFJQyxVQUFVO0FBQ2QsSUFBSUMsV0FBVztBQUNmLElBQUlDLGNBQWMsR0FBRyxLQUFLO0FBQzFCLElBQUlDLFNBQVMsR0FBRyxLQUFLO0FBQ3JCLElBQUlDLEtBQUssR0FBRyxLQUFLO0FBQ2pCLElBQUlDLFlBQVksR0FBRyx3QkFBVyxDQUFDLENBQUM7QUFDaEMsSUFBSUMsYUFBYSxHQUFHLHlCQUFXLENBQUMsQ0FBQztBQUNqQyxJQUFJQyxjQUFjLEdBQUcsQ0FDcEIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUMzQixDQUFDLHVCQUF1QixDQUFDLEVBQ3pCLENBQUMsdUJBQXVCLENBQUMsRUFDekIsQ0FBQyx1QkFBdUIsQ0FBQyxFQUN6QixDQUFDLHVCQUF1QixDQUFDLEVBQ3pCLENBQUMsdUJBQXVCLENBQUMsRUFDekIsQ0FBQyxpQ0FBaUMsQ0FBQyxFQUNuQyxDQUFDLCtCQUErQixDQUFDLEVBQ2pDLENBQUMsbUNBQW1DLENBQUMsQ0FDckM7QUFDRDtBQUNBLElBQUlDLElBQUksR0FBRyxvQ0FBb0M7QUFBQyxlQUVqQztFQUNkQyxrQkFBa0IsRUFBRSw0QkFBU0MsR0FBRyxFQUFFO0lBQ2pDLElBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLG1CQUFtQixFQUFFO0lBQzdDLElBQUlDLGFBQWEsR0FBR0gsSUFBSSxDQUFDQyxPQUFPLENBQUNHLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztJQUN6RSxJQUFJQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsd0JBQXdCLENBQUM7SUFDL0QsSUFBSUUsTUFBTSxHQUFHLElBQUlELE1BQU0sQ0FBQ04sSUFBSSxFQUFFQSxJQUFJLENBQUNRLFFBQVEsRUFBRSxDQUFDO0lBQzlDLElBQUlDLGFBQWEsR0FBR0wsYUFBYSxDQUFDTSxXQUFXLENBQUNWLElBQUksRUFBRSxDQUFDLEVBQUVPLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDakUsSUFBSUksWUFBWSxHQUFHVixJQUFJLENBQUNDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLDhCQUE4QixDQUFDO0lBQzNFLElBQUlPLElBQUksR0FBRyxJQUFJRCxZQUFZLENBQUMsb0NBQW9DLENBQUM7SUFDakVDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJQyxrQkFBa0IsR0FBRyxDQUFDRixJQUFJLENBQUM7SUFDL0J4QixVQUFVLEdBQUdhLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsd0JBQXdCLENBQUM7SUFDL0QsSUFBSVUsVUFBVSxHQUFHM0IsVUFBVSxDQUFDNEIsaUJBQWlCLENBQUNoQixJQUFJLENBQUM7SUFFbkRSLFNBQVMsR0FBRyxJQUFJO0lBRWhCdUIsVUFBVSxDQUFDRSx5QkFBeUIsQ0FBQ2pCLElBQUksQ0FBQztJQUUxQyxhQUFZLFFBQVE7SUFDcEI7SUFDQSxJQUFJLENBQUNrQixTQUFTLEVBQUU7SUFFaEI5QixVQUFVLEdBQUcyQixVQUFVLENBQUNJLHdCQUF3QixDQUFDbkIsSUFBSSxFQUFFUyxhQUFhLEVBQUVLLGtCQUFrQixFQUFFbEIsY0FBYyxDQUFDO0lBRXpHRixZQUFZLEdBQUdLLEdBQUc7SUFDbEIsT0FBT1gsVUFBVTtFQUNsQixDQUFDO0VBQ0RnQyxlQUFlLEVBQUUsMkJBQVc7SUFDM0I7SUFDQW5CLElBQUksQ0FBQ29CLFdBQVcsQ0FBQ0MsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFVBQVNDLENBQUMsRUFBRTtNQUN6RCxhQUFZQSxDQUFDO0lBQ2QsQ0FBQyxDQUFDO0lBRUZ0QixJQUFJLENBQUNvQixXQUFXLENBQUNDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxVQUFTQyxDQUFDLEVBQUU7TUFDN0QsYUFBWUEsQ0FBQztJQUNkLENBQUMsQ0FBQztJQUVGdEIsSUFBSSxDQUFDb0IsV0FBVyxDQUFDQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsVUFBU0MsQ0FBQyxFQUFFO01BQzFELGFBQVlBLENBQUM7SUFDZCxDQUFDLENBQUM7RUFFSCxDQUFDO0VBQ0RDLGVBQWUsRUFBRSwyQkFBVztJQUMzQmpDLGNBQWMsR0FBRyxLQUFLO0lBQ3RCQyxTQUFTLEdBQUcsS0FBSztJQUVqQixhQUFZLGlCQUFpQjtJQUM3QjtJQUNBLElBQUlpQyxJQUFJLEdBQUcsSUFBSTtJQUNmLElBQUk7TUFDSCxJQUFJekIsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsbUJBQW1CLEVBQUU7TUFDN0MsSUFBSUcsTUFBTSxHQUFHTCxJQUFJLENBQUNDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLHdCQUF3QixDQUFDO01BQy9ELElBQUlxQixRQUFRLEdBQUd6QixJQUFJLENBQUNDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLHNCQUFzQixDQUFDO01BQy9ELElBQUlELGFBQWEsR0FBR0gsSUFBSSxDQUFDQyxPQUFPLENBQUNHLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztNQUN6RSxJQUFJTSxZQUFZLEdBQUdWLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsOEJBQThCLENBQUM7TUFDM0VqQixVQUFVLEdBQUdhLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsd0JBQXdCLENBQUM7TUFDL0QsSUFBSVUsVUFBVSxHQUFHM0IsVUFBVSxDQUFDNEIsaUJBQWlCLENBQUNoQixJQUFJLENBQUM7TUFFbkQsSUFBSWUsVUFBVSxJQUFJLElBQUksRUFBRTtRQUN2QlksR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsS0FBSyxFQUFFLGlDQUFpQztVQUN4Q0MsSUFBSSxFQUFFO1FBQ1AsQ0FBQyxDQUFDO1FBQ0ZyQyxLQUFLLEdBQUcsSUFBSTtRQUNaO01BQ0Q7TUFFQSxJQUFJLENBQUNzQixVQUFVLENBQUNnQixTQUFTLEVBQUUsRUFBRTtRQUM1QkosR0FBRyxDQUFDQyxTQUFTLENBQUM7VUFDYkMsS0FBSyxFQUFFLHFEQUFxRDtVQUM1REMsSUFBSSxFQUFFO1FBQ1AsQ0FBQyxDQUFDO1FBQ0ZyQyxLQUFLLEdBQUcsSUFBSTtRQUNaO01BQ0QsQ0FBQyxNQUFNO1FBQ05BLEtBQUssR0FBRyxLQUFLO01BQ2Q7TUFFQSxJQUFJYyxNQUFNLEdBQUcsSUFBSUQsTUFBTSxDQUFDTixJQUFJLEVBQUVBLElBQUksQ0FBQ1EsUUFBUSxFQUFFLENBQUM7TUFDOUNELE1BQU0sQ0FBQ3lCLFFBQVEsQ0FBQzFCLE1BQU0sQ0FBQzJCLHdCQUF3QixDQUFDO01BQ2hELElBQUl4QixhQUFhLEdBQUdMLGFBQWEsQ0FBQ00sV0FBVyxDQUFDVixJQUFJLEVBQUUsQ0FBQyxFQUFFTyxNQUFNLEVBQUUsQ0FBQyxDQUFDO01BQ2pFLElBQUlLLElBQUksR0FBRyxJQUFJRCxZQUFZLENBQUMsb0NBQW9DLENBQUM7TUFDakVDLElBQUksQ0FBQ0MsV0FBVyxDQUFDLEtBQUssQ0FBQztNQUN2QixJQUFJQyxrQkFBa0IsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDL0I7TUFDQTtNQUNBWCxJQUFJLENBQUNvQixXQUFXLENBQUNhLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTWCxDQUFDLEVBQUU7UUFDdEQ7UUFDQTtRQUNBLElBQUlSLFVBQVUsRUFBRTtVQUNmO1VBQ0E7VUFDQUEsVUFBVSxDQUFDRSx5QkFBeUIsQ0FBQ2pCLElBQUksQ0FBQztRQUMzQztNQUNELENBQUMsQ0FBQztNQUNGQyxJQUFJLENBQUNvQixXQUFXLENBQUNhLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxVQUFTQyxLQUFLLEVBQUU7UUFDbEUsYUFBWSxnREFBZ0QsRUFBRUEsS0FBSzs7UUFFbkU7UUFDQTtNQUNELENBQUMsQ0FBQztNQUNGO01BQ0FsQyxJQUFJLENBQUNvQixXQUFXLENBQUNhLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxZQUFXO1FBQ3pEO1FBQ0E7UUFDQTtRQUNBVCxJQUFJLENBQUNQLFNBQVMsRUFBRTtNQUNqQixDQUFDLENBQUM7O01BRUY7TUFDQWpCLElBQUksQ0FBQ29CLFdBQVcsQ0FBQ2EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQVNYLENBQUMsRUFBRTtRQUN2RDtRQUNBO1FBQ0EsSUFBSVIsVUFBVSxFQUFFO1VBQ2Y7VUFDQTtVQUNBQSxVQUFVLENBQUNJLHdCQUF3QixDQUFDbkIsSUFBSSxFQUFFUyxhQUFhLEVBQUVLLGtCQUFrQixFQUMxRWxCLGNBQWMsQ0FBQztRQUNqQjtNQUNELENBQUMsQ0FBQzs7TUFFRjtNQUNBbUIsVUFBVSxDQUFDSSx3QkFBd0IsQ0FBQ25CLElBQUksRUFBRVMsYUFBYSxFQUFFSyxrQkFBa0IsRUFBRWxCLGNBQWMsQ0FBQztNQUM1RjtNQUNBLGFBQVksT0FBTztJQUNwQixDQUFDLENBQUMsT0FBTzJCLENBQUMsRUFBRTtNQUNYYSxLQUFLLENBQUNiLENBQUMsQ0FBQztNQUNSLGVBQWNBLENBQUM7SUFDaEI7RUFDRCxDQUFDO0VBQ0RMLFNBQVMsRUFBRSxxQkFBVztJQUNyQjdCLFVBQVUsR0FBR1ksSUFBSSxDQUFDQyxPQUFPLENBQUNHLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQztJQUMvRGYsV0FBVyxHQUFHVyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0csV0FBVyxDQUFDLHlCQUF5QixDQUFDO0lBQ2pFLElBQUlMLElBQUksR0FBR0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLG1CQUFtQixFQUFFO0lBQzdDLElBQUlJLE1BQU0sR0FBR1AsSUFBSSxDQUFDcUMsU0FBUyxFQUFFO0lBQzdCLElBQUlaLElBQUksR0FBRyxJQUFJOztJQUVmO0lBQ0E7SUFDQSxJQUFJL0MsdUJBQXVCLElBQUk2QixNQUFNLENBQUMrQixTQUFTLEVBQUUsRUFBRTtNQUNsRCxhQUFZLElBQUksRUFBRS9DLGNBQWMsRUFBRUMsU0FBUztNQUMzQztNQUNBLElBQUlELGNBQWMsRUFBRTtRQUNuQmtDLElBQUksQ0FBQ2MsS0FBSyxDQUFDaEMsTUFBTSxDQUFDO1FBQ2xCLGFBQVksT0FBTztRQUNuQmhCLGNBQWMsR0FBRyxLQUFLO01BQ3ZCLENBQUMsTUFBTSxJQUFJQyxTQUFTLEVBQUU7UUFDckIsYUFBWSxPQUFPO1FBQ25CaUMsSUFBSSxDQUFDZSxJQUFJLENBQUNqQyxNQUFNLENBQUM7UUFDakJmLFNBQVMsR0FBRyxLQUFLO01BQ2xCO0lBQ0Q7RUFDRCxDQUFDO0VBQ0QrQyxLQUFLLGlCQUFDaEMsTUFBTSxFQUFFO0lBQ2IsSUFBSTtNQUNINkIsS0FBSyxDQUFDLDhCQUE4QixDQUFDO01BQ3JDLGFBQVksT0FBTyxHQUFHdkMsSUFBSTtNQUUxQixJQUFJNEMsU0FBUyxHQUFHeEMsSUFBSSxDQUFDQyxPQUFPLENBQUN3QyxNQUFNLENBQUM3QyxJQUFJLEVBQUUsVUFBVSxDQUFDO01BQ3JELGFBQVk0QyxTQUFTO01BQ3JCO01BQ0EsSUFBSUUsVUFBVSxHQUFHLElBQUl0RCxVQUFVLENBQUNBLFVBQVUsQ0FBQ3VELGNBQWMsRUFDeEQzQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ3dDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLEVBQzdDekMsSUFBSSxDQUFDQyxPQUFPLENBQUN3QyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFRCxTQUFTLENBQUM7TUFDaEQsSUFBSUksT0FBTyxHQUFHLElBQUl2RCxXQUFXLENBQUMsQ0FBQ3FELFVBQVUsQ0FBQyxDQUFDO01BQzNDLElBQUlHLElBQUksR0FBRzdDLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsdUJBQXVCLENBQUM7TUFDNUQsSUFBSTBDLGNBQWMsR0FBRzlDLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsaUNBQWlDLENBQUM7TUFDaEYsSUFBSTJDLEdBQUcsR0FBR3pDLE1BQU0sQ0FBQzBDLGtCQUFrQixDQUFDN0QsVUFBVSxDQUFDOEQsU0FBUyxDQUFDO01BQ3pELElBQUl0QyxJQUFJLEdBQUdrQyxJQUFJLENBQUNLLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDO01BQ3hCLElBQUlwQyxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2pCO1FBQ0EsSUFBSXdDLElBQUksR0FBR1AsT0FBTyxDQUFDUSxXQUFXLEVBQUUsQ0FBQ0MsTUFBTTtRQUN2QzFDLElBQUksQ0FBQzJDLE9BQU8sRUFBRTtRQUNkLElBQUksQ0FBQzNDLElBQUksQ0FBQzRDLFVBQVUsRUFBRSxFQUFFO1VBQ3ZCcEIsS0FBSyxDQUFDLFlBQVksQ0FBQztVQUNuQjtRQUNEO1FBQ0EsSUFBSXhCLElBQUksQ0FBQzZDLFVBQVUsRUFBRSxHQUFHTCxJQUFJLEVBQUU7VUFDN0JoQixLQUFLLG1EQUE0Q3hCLElBQUksQ0FBQzZDLFVBQVUsRUFBRSx1QkFBYUwsSUFBSSxFQUFHO1VBQ3RGO1FBQ0Q7UUFDQXhDLElBQUksQ0FBQzhDLGdCQUFnQixDQUFDYixPQUFPLENBQUM7UUFDOUJULEtBQUssQ0FBQywrQkFBK0IsR0FBR2dCLElBQUksQ0FBQztNQUM5QyxDQUFDLE1BQU07UUFDTixJQUFJTyxNQUFNLEdBQUdaLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDSCxHQUFHLENBQUM7UUFDcEMsSUFBSVcsTUFBTSxJQUFJLElBQUksRUFBRTtVQUNuQixJQUFJO1lBQ0hBLE1BQU0sQ0FBQ0osT0FBTyxFQUFFO1lBQ2hCSSxNQUFNLENBQUNBLE1BQU0sQ0FBQ2QsT0FBTyxDQUFDO1lBQ3RCVCxLQUFLLENBQUMsWUFBWSxDQUFDO1VBQ3BCLENBQUMsQ0FBQyxPQUFPYixDQUFDLEVBQUU7WUFDWGEsS0FBSyxDQUFDLGtCQUFrQixDQUFDO1VBQzFCO1FBQ0QsQ0FBQyxNQUFNO1VBQ05BLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQztRQUNoQztNQUNEO0lBQ0QsQ0FBQyxDQUFDLE9BQU9iLENBQUMsRUFBRTtNQUNYYSxLQUFLLENBQUMsYUFBYSxDQUFDO01BQ3BCLGFBQVksUUFBUSxHQUFHYixDQUFDO0lBQ3pCO0lBQ0EsYUFBWSxZQUFZO0lBQ3hCNUIsYUFBYSxFQUFFO0VBQ2hCLENBQUM7RUFDRGlFLGNBQWMsNEJBQUc7SUFDaEJ4QixLQUFLLENBQUMsY0FBYyxDQUFDO0lBRXJCNUMsU0FBUyxHQUFHLElBQUk7O0lBR2hCO0lBQ0EsSUFBTXFFLHFCQUFxQixHQUFHLGdDQUFnQzs7SUFFOUQ7SUFDQSxJQUFJN0QsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDN0MsSUFBSUksTUFBTSxHQUFHUCxJQUFJLENBQUNxQyxTQUFTLEVBQUU7SUFDN0IsSUFBSVcsR0FBRyxHQUFHekMsTUFBTSxDQUFDMEMsa0JBQWtCLENBQUM3RCxVQUFVLENBQUM4RCxTQUFTLENBQUM7SUFDekQsSUFBSVksYUFBYSxHQUFHN0QsSUFBSSxDQUFDQyxPQUFPLENBQUNHLFdBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUM5RSxhQUFZeUQsYUFBYTtJQUN6QixJQUFJQyxTQUFTLEdBQUdELGFBQWEsQ0FBQ1gsR0FBRyxDQUFDSCxHQUFHLENBQUM7SUFDdEMsYUFBWWUsU0FBUztJQUNyQixJQUFJQSxTQUFTLElBQUksSUFBSSxFQUFFO01BQ3RCLElBQUk7UUFDSEEsU0FBUyxDQUFDUixPQUFPLEVBQUU7UUFDbkIsSUFBSVMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUlDLGFBQWEsR0FBR0YsU0FBUyxDQUFDRywwQkFBMEIsQ0FBQ0YsV0FBVyxFQUFFRixhQUFhLENBQUNLLFdBQVcsQ0FBQztRQUNoRyxhQUFZRixhQUFhO1FBQ3pCLElBQUlBLGFBQWEsRUFBRTtVQUNsQjtVQUNBLElBQUlHLFVBQVUsR0FBR0wsU0FBUyxDQUFDTSxhQUFhLENBQUNMLFdBQVcsQ0FBQztVQUNyRCxJQUFJTSxTQUFTLEdBQUdQLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDSCxVQUFVLENBQUM7VUFDL0MsSUFBSUksT0FBTyxHQUFHQyxvQkFBb0IsQ0FBQ0gsU0FBUyxDQUFDO1VBQzdDbEMsS0FBSyxDQUFDLFNBQVMsR0FBR29DLE9BQU8sQ0FBQztVQUMxQixhQUFZLFNBQVMsRUFBRUEsT0FBTztVQUM5QjlFLFlBQVksQ0FBQzhFLE9BQU8sQ0FBQztRQUN0QixDQUFDLE1BQU07VUFDTnBDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDaEI7TUFDRCxDQUFDLENBQUMsT0FBT2IsQ0FBQyxFQUFFO1FBQ1gsYUFBWUEsQ0FBQztRQUNiYSxLQUFLLENBQUMsV0FBVyxDQUFDO01BQ25CLENBQUMsU0FBUztRQUNULElBQUkyQixTQUFTLENBQUNXLFdBQVcsRUFBRSxFQUFFO1VBQzVCWCxTQUFTLENBQUNZLEtBQUssRUFBRTtRQUNsQjtNQUNEO0lBQ0QsQ0FBQyxNQUFNO01BQ052QyxLQUFLLENBQUMsb0JBQW9CLENBQUM7SUFDNUI7RUFDRCxDQUFDO0VBRURJLElBQUksa0JBQUc7SUFDTjs7SUFFQSxJQUFJeEMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDN0MsSUFBSUksTUFBTSxHQUFHUCxJQUFJLENBQUNxQyxTQUFTLEVBQUU7SUFDN0I3QyxTQUFTLEdBQUcsSUFBSTtJQUVoQixJQUFJaUMsSUFBSSxHQUFHLElBQUk7SUFDZjtJQUNBLElBQUltRCxPQUFPLEdBQUdyRSxNQUFNLENBQUNzRSxpQkFBaUIsQ0FBQ3pGLFVBQVUsQ0FBQzBGLFFBQVEsQ0FBQztJQUMzRCxJQUFJQyxNQUFNLEdBQUd0RCxJQUFJLENBQUNnRCxvQkFBb0IsQ0FBQ0csT0FBTyxDQUFDO0lBQy9DLGFBQVksU0FBUyxFQUFFRyxNQUFNO0lBQzdCLElBQUlDLFVBQVUsR0FBRy9FLElBQUksQ0FBQ0MsT0FBTyxDQUFDRyxXQUFXLENBQUMsdUJBQXVCLENBQUM7SUFDbEUsSUFBSTRFLE9BQU8sR0FBRzFFLE1BQU0sQ0FBQzJFLHVCQUF1QixDQUFDLGlDQUFpQyxDQUFDO0lBQy9FLGFBQVlELE9BQU8sR0FBR0EsT0FBTyxDQUFDM0IsTUFBTSxHQUFHLENBQUM7SUFFeEMsSUFBSTJCLE9BQU8sSUFBSSxJQUFJLElBQUlBLE9BQU8sQ0FBQzNCLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDMUMsSUFBSTZCLElBQUksR0FBRyxFQUFFO01BQ2IsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILE9BQU8sQ0FBQzNCLE1BQU0sRUFBRThCLENBQUMsRUFBRSxFQUFFO1FBQ3hDLGFBQVksSUFBSSxHQUFHQSxDQUFDO1FBQ3BCO1FBQ0EsSUFBSUMsT0FBTyxHQUFHSixPQUFPLENBQUNHLENBQUMsQ0FBQyxDQUFDRSxVQUFVLEVBQUU7UUFDckMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLE9BQU8sQ0FBQy9CLE1BQU0sRUFBRWlDLENBQUMsRUFBRSxFQUFFO1VBQ3hDO1VBQ0EsYUFBWSxHQUFHLEdBQUdBLENBQUM7VUFDbkIsSUFBSUMsTUFBTSxHQUFHSCxPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxVQUFVLEVBQUU7VUFDcEMsYUFBWSw0QkFBNEI7VUFDeENOLElBQUksSUFBSWxGLElBQUksQ0FBQ0MsT0FBTyxDQUFDd0YsU0FBUyxDQUM3QixrQkFBa0IsRUFBRUYsTUFBTSxDQUFDO1VBQzVCO1VBQ0EsYUFBWSxTQUFTLEVBQUVMLElBQUk7UUFFNUI7TUFHRDtNQUVBekYsWUFBWSxDQUFDeUYsSUFBSSxDQUFDO0lBRW5CLENBQUMsTUFBTTtNQUNOL0MsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUNqQjtFQUNELENBQUM7RUFDRHVELEtBQUssbUJBQUc7SUFDUDs7SUFFQSxJQUFJM0YsSUFBSSxHQUFHQyxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsbUJBQW1CLEVBQUU7SUFDN0MsSUFBSUksTUFBTSxHQUFHUCxJQUFJLENBQUNxQyxTQUFTLEVBQUU7SUFDN0I3QyxTQUFTLEdBQUcsSUFBSTtJQUVoQixJQUFJaUMsSUFBSSxHQUFHLElBQUk7O0lBRWY7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7SUFDQSxJQUFJdUIsR0FBRyxHQUFHekMsTUFBTSxDQUFDMEMsa0JBQWtCLENBQUMsdUJBQXVCLENBQUM7SUFDNUQsSUFBSTJDLGdCQUFnQixHQUFHM0YsSUFBSSxDQUFDQyxPQUFPLENBQUNHLFdBQVcsQ0FBQyxtQ0FBbUMsQ0FBQztJQUNwRixJQUFJd0YsZ0JBQWdCLEdBQUdELGdCQUFnQixDQUFDekMsR0FBRyxDQUFDSCxHQUFHLENBQUM7SUFFaEQsSUFBSTtNQUNIO01BQ0EsYUFBWTZDLGdCQUFnQixDQUFDQyxTQUFTO01BQ3RDLElBQUlDLE9BQU8sR0FBR0YsZ0JBQWdCLENBQUNDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzdDLElBQUl0QixPQUFPLEdBQUd2RSxJQUFJLENBQUNDLE9BQU8sQ0FBQ3dGLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRUssT0FBTyxDQUFDO01BQ2pFLGFBQVksU0FBUyxFQUFFdkIsT0FBTztNQUM5QjtNQUNBcEMsS0FBSyxDQUFDLFNBQVMsR0FBR29DLE9BQU8sQ0FBQztNQUMxQjlFLFlBQVksQ0FBQzhFLE9BQU8sQ0FBQztJQUN0QixDQUFDLENBQUMsT0FBT2pELENBQUMsRUFBRTtNQUNYLGVBQWMsWUFBWSxFQUFFQSxDQUFDO01BQzdCYSxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ25CLENBQUMsU0FBUztNQUNULElBQUl5RCxnQkFBZ0IsQ0FBQ25CLFdBQVcsRUFBRSxFQUFFO1FBQ25DbUIsZ0JBQWdCLENBQUNsQixLQUFLLEVBQUU7TUFDekI7SUFDRDtFQUVELENBQUM7RUFDREYsb0JBQW9CLEVBQUUsOEJBQVN1QixPQUFPLEVBQUU7SUFBRTtJQUN6QyxJQUFJWixDQUFDLEVBQUVHLENBQUMsRUFBRVUsR0FBRztJQUNiLElBQUlDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUMxRixJQUFJQyxHQUFHLEdBQUcsRUFBRTtJQUVaLEtBQUtaLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR1MsT0FBTyxDQUFDMUMsTUFBTSxFQUFFLEVBQUVpQyxDQUFDLEVBQUU7TUFDcENVLEdBQUcsR0FBR0QsT0FBTyxDQUFDVCxDQUFDLENBQUMsR0FBRyxJQUFJO01BQ3ZCSCxDQUFDLEdBQUlhLEdBQUcsS0FBSyxDQUFDLEdBQUksSUFBSTtNQUN0QkUsR0FBRyxJQUFJRCxHQUFHLENBQUNkLENBQUMsQ0FBQztNQUNiQSxDQUFDLEdBQUdhLEdBQUcsR0FBRyxJQUFJO01BQ2RFLEdBQUcsSUFBSUQsR0FBRyxDQUFDZCxDQUFDLENBQUM7SUFDZDtJQUNBLE9BQU9lLEdBQUc7RUFDWCxDQUFDO0VBQ0RDLFNBQVMsRUFBRSxtQkFBU2pCLElBQUksRUFBQ3BGLEdBQUcsRUFBRTtJQUM3QixJQUFJTixLQUFLLEVBQUU7TUFDVjJDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQztNQUM1RDtJQUNEO0lBQ0E7SUFDQTdDLGNBQWMsR0FBRyxJQUFJO0lBQ3JCTSxJQUFJLEdBQUdzRixJQUFJO0lBQ1h4RixhQUFhLEdBQUdJLEdBQUc7SUFDbkJxQyxLQUFLLENBQUMsc0JBQXNCLENBQUM7RUFDOUIsQ0FBQztFQUNEaUUsUUFBUSxFQUFFLGtCQUFTdEcsR0FBRyxFQUFFO0lBQ3ZCLElBQUlOLEtBQUssRUFBRTtNQUNWMkMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDO01BQzVEO0lBQ0Q7SUFDQTtJQUNBNUMsU0FBUyxHQUFHLElBQUk7SUFDaEJFLFlBQVksR0FBR0ssR0FBRztJQUNsQnFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQztFQUM5QjtBQUNELENBQUM7QUFBQTtBQUVELFNBQVNBLEtBQUssQ0FBQ2tFLE9BQU8sRUFBRTtFQUN2QjNFLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDO0lBQ2JDLEtBQUssRUFBRXlFLE9BQU87SUFDZHhFLElBQUksRUFBRSxNQUFNO0lBQ1p5RSxRQUFRLEVBQUU7RUFDWCxDQUFDLENBQUM7QUFDSCxDIiwiZmlsZSI6IjUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5YyF6Lev5b6EXHJcbmNvbnN0IHBhY2thZ2VfTmRlZlJlY29yZCA9ICdhbmRyb2lkLm5mYy5OZGVmUmVjb3JkJztcclxuY29uc3QgcGFja2FnZV9OZGVmTWVzc2FnZSA9ICdhbmRyb2lkLm5mYy5OZGVmTWVzc2FnZSc7XHJcbmNvbnN0IHBhY2thZ2VfVEVDSF9ESVNDT1ZFUkVEID0gJ2FuZHJvaWQubmZjLmFjdGlvbi5URUNIX0RJU0NPVkVSRUQnO1xyXG5jb25zdCBwYWNrYWdlX0ludGVudCA9ICdhbmRyb2lkLmNvbnRlbnQuSW50ZW50JztcclxuY29uc3QgcGFja2FnZV9BY3Rpdml0eSA9ICdhbmRyb2lkLmFwcC5BY3Rpdml0eSc7XHJcbmNvbnN0IHBhY2thZ2VfUGVuZGluZ0ludGVudCA9ICdhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50JztcclxuY29uc3QgcGFja2FnZV9JbnRlbnRGaWx0ZXIgPSAnYW5kcm9pZC5jb250ZW50LkludGVudEZpbHRlcic7XHJcbmNvbnN0IHBhY2thZ2VfTmZjQWRhcHRlciA9ICdhbmRyb2lkLm5mYy5OZmNBZGFwdGVyJztcclxuY29uc3QgcGFja2FnZV9OZGVmID0gJ2FuZHJvaWQubmZjLnRlY2guTmRlZic7XHJcbmNvbnN0IHBhY2thZ2VfTmRlZkZvcm1hdGFibGUgPSAnYW5kcm9pZC5uZmMudGVjaC5OZGVmRm9ybWF0YWJsZSc7XHJcbmNvbnN0IHBhY2thZ2VfUGFyY2VsYWJsZSA9ICdhbmRyb2lkLm9zLlBhcmNlbGFibGUnO1xyXG5jb25zdCBwYWNrYWdlX1N0cmluZyA9ICdqYXZhLmxhbmcuU3RyaW5nJztcclxuXHJcblxyXG5cclxuXHJcbmxldCBOZmNBZGFwdGVyO1xyXG5sZXQgTmRlZlJlY29yZDtcclxubGV0IE5kZWZNZXNzYWdlO1xyXG5sZXQgcmVhZHlXcml0ZURhdGEgPSBmYWxzZTtcclxubGV0IHJlYWR5UmVhZCA9IGZhbHNlO1xyXG5sZXQgbm9ORkMgPSBmYWxzZTtcclxubGV0IHJlYWRDYWxsYmFjayA9IGZ1bmN0aW9uKCkge31cclxubGV0IHdyaXRlQ2FsbGJhY2sgPSBmdW5jdGlvbigpIHt9XHJcbmxldCB0ZWNoTGlzdHNBcnJheSA9IFtcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guSXNvRGVwJ10sXHJcblx0WydhbmRyb2lkLm5mYy50ZWNoLk5mY0EnXSxcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guTmZjQiddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5OZmNGJ10sXHJcblx0WydhbmRyb2lkLm5mYy50ZWNoLk5mY2YnXSxcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guTmZjViddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5OZGVmRm9ybWF0YWJsZSddLFxyXG5cdFsnYW5kcm9pZC5uZmMudGVjaC5NaWZhcmVDbGFzc2knXSxcclxuXHRbJ2FuZHJvaWQubmZjLnRlY2guTWlmYXJlVWx0cmFsaWdodCddXHJcbl07XHJcbi8vIOimgeWGmeWFpeeahOaVsOaNrlxyXG5sZXQgdGV4dCA9ICd7aWQ6MTIzLG5hbWU6bmZjLHN0aWU6Y3NzbWluaS5jb219JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpbml0UmVhZE5mY0FkYXB0ZXI6IGZ1bmN0aW9uKGZ1bikge1xyXG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0bGV0IFBlbmRpbmdJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuYXBwLlBlbmRpbmdJbnRlbnQnKTtcclxuXHRcdGxldCBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnQnKTtcclxuXHRcdGxldCBpbnRlbnQgPSBuZXcgSW50ZW50KG1haW4sIG1haW4uZ2V0Q2xhc3MoKSk7XHJcblx0XHRsZXQgcGVuZGluZ0ludGVudCA9IFBlbmRpbmdJbnRlbnQuZ2V0QWN0aXZpdHkobWFpbiwgMCwgaW50ZW50LCAwKTtcclxuXHRcdGxldCBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTtcclxuXHRcdGxldCBuZGVmID0gbmV3IEludGVudEZpbHRlcihcImFuZHJvaWQubmZjLmFjdGlvbi5URUNIX0RJU0NPVkVSRURcIik7XHJcblx0XHRuZGVmLmFkZERhdGFUeXBlKFwiKi8qXCIpO1xyXG5cdFx0bGV0IGludGVudEZpbHRlcnNBcnJheSA9IFtuZGVmXTtcclxuXHRcdE5mY0FkYXB0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQubmZjLk5mY0FkYXB0ZXInKTtcclxuXHRcdGxldCBuZmNBZGFwdGVyID0gTmZjQWRhcHRlci5nZXREZWZhdWx0QWRhcHRlcihtYWluKTtcclxuXHJcblx0XHRyZWFkeVJlYWQgPSB0cnVlO1xyXG5cclxuXHRcdG5mY0FkYXB0ZXIuZGlzYWJsZUZvcmVncm91bmREaXNwYXRjaChtYWluKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZygnMiDmlrDnmoTmhI/lm74nKTtcclxuXHRcdC8vIOi9ruivouiwg+eUqCBORkNcclxuXHRcdHRoaXMubmZjUnVuaW5nKClcclxuXHJcblx0XHROZmNBZGFwdGVyID0gbmZjQWRhcHRlci5lbmFibGVGb3JlZ3JvdW5kRGlzcGF0Y2gobWFpbiwgcGVuZGluZ0ludGVudCwgaW50ZW50RmlsdGVyc0FycmF5LCB0ZWNoTGlzdHNBcnJheSk7XHJcblxyXG5cdFx0cmVhZENhbGxiYWNrID0gZnVuXHJcblx0XHRyZXR1cm4gTmZjQWRhcHRlcjtcclxuXHR9LFxyXG5cdHJlbW92ZU5GQ1N0YXR1czogZnVuY3Rpb24oKSB7XHJcblx0XHQvLzEg5pqC5YGcIOWIneWni+WMllxyXG5cdFx0cGx1cy5nbG9iYWxFdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXVzZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdH0pO1xyXG5cclxuXHRcdHBsdXMuZ2xvYmFsRXZlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbmV3aW50ZW50JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhlKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cGx1cy5nbG9iYWxFdmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXN1bWUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHR9KTtcclxuXHJcblx0fSxcclxuXHRsaXN0ZW5ORkNTdGF0dXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmVhZHlXcml0ZURhdGEgPSBmYWxzZTtcclxuXHRcdHJlYWR5UmVhZCA9IGZhbHNlO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwibGlzdGVuTkZDU3RhdHVzXCIpXHJcblx0XHQvLyB0b2FzdChcImxpc3Rlbk5GQ1N0YXR1c1wiKTtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdFx0bGV0IEludGVudCA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5jb250ZW50LkludGVudCcpO1xyXG5cdFx0XHRsZXQgQWN0aXZpdHkgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuYXBwLkFjdGl2aXR5Jyk7XHJcblx0XHRcdGxldCBQZW5kaW5nSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLmFwcC5QZW5kaW5nSW50ZW50Jyk7XHJcblx0XHRcdGxldCBJbnRlbnRGaWx0ZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoJ2FuZHJvaWQuY29udGVudC5JbnRlbnRGaWx0ZXInKTtcclxuXHRcdFx0TmZjQWRhcHRlciA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcygnYW5kcm9pZC5uZmMuTmZjQWRhcHRlcicpO1xyXG5cdFx0XHRsZXQgbmZjQWRhcHRlciA9IE5mY0FkYXB0ZXIuZ2V0RGVmYXVsdEFkYXB0ZXIobWFpbik7XHJcblxyXG5cdFx0XHRpZiAobmZjQWRhcHRlciA9PSBudWxsKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ1RoZSBkZXZpY2UgZG9lcyBub3Qgc3VwcG9ydCBORkMnLFxyXG5cdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRub05GQyA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIW5mY0FkYXB0ZXIuaXNFbmFibGVkKCkpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAnUGxlYXNlIGVuYWJsZSBORkMgZnVuY3Rpb24gaW4gc3lzdGVtIHNldHRpbmdzIGZpcnN0JyxcclxuXHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdG5vTkZDID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bm9ORkMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0bGV0IGludGVudCA9IG5ldyBJbnRlbnQobWFpbiwgbWFpbi5nZXRDbGFzcygpKTtcclxuXHRcdFx0aW50ZW50LmFkZEZsYWdzKEludGVudC5GTEFHX0FDVElWSVRZX1NJTkdMRV9UT1ApO1xyXG5cdFx0XHRsZXQgcGVuZGluZ0ludGVudCA9IFBlbmRpbmdJbnRlbnQuZ2V0QWN0aXZpdHkobWFpbiwgMCwgaW50ZW50LCAwKTtcclxuXHRcdFx0bGV0IG5kZWYgPSBuZXcgSW50ZW50RmlsdGVyKFwiYW5kcm9pZC5uZmMuYWN0aW9uLlRFQ0hfRElTQ09WRVJFRFwiKTtcclxuXHRcdFx0bmRlZi5hZGREYXRhVHlwZShcIiovKlwiKTtcclxuXHRcdFx0bGV0IGludGVudEZpbHRlcnNBcnJheSA9IFtuZGVmXTtcclxuXHRcdFx0Ly8gdG9hc3QoXCJhZGRFdmVudExpc3RlbmVyXCIpO1xyXG5cdFx0XHQvLzEg5pqC5YGcIOWIneWni+WMllxyXG5cdFx0XHRwbHVzLmdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdC8vIHRvYXN0KCcxIOaaguWBnCcpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCcxIOaaguWBnCcpO1xyXG5cdFx0XHRcdGlmIChuZmNBZGFwdGVyKSB7XHJcblx0XHRcdFx0XHQvL+WFs+mXreWJjeWPsOiwg+W6puezu+e7n1xyXG5cdFx0XHRcdFx0Ly/mgaLlpI3pu5jorqTnirbmgIFcclxuXHRcdFx0XHRcdG5mY0FkYXB0ZXIuZGlzYWJsZUZvcmVncm91bmREaXNwYXRjaChtYWluKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRwbHVzLmdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ25mY0Rpc2NvdmVyZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09TkZDIHRhZyBkaXNjb25uZWN0ZWQ6JywgZXZlbnQpO1xyXG5cclxuXHRcdFx0XHQvLyDlnKjmlq3lvIDov57mjqXlkI7ph43mlrDpk77mjqVcclxuXHRcdFx0XHQvLyByZUNvbm5lY3RORkMoKTsgLy8g6Ieq5a6a5LmJ5Ye95pWw77yM55So5LqO6YeN5paw6ZO+5o6lIE5GQyDmoIfnrb5cclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vMiDmlrDnmoTmhI/lm75cclxuXHRcdFx0cGx1cy5nbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCduZXdpbnRlbnQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnMiDmlrDnmoTmhI/lm74nKTtcclxuXHRcdFx0XHQvLyB0b2FzdCgnMiDmlrDnmoTmhI/lm74nKTtcclxuXHRcdFx0XHQvLyDova7or6LosIPnlKggTkZDXHJcblx0XHRcdFx0dGhhdC5uZmNSdW5pbmcoKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vMyDnu6fnu61cclxuXHRcdFx0cGx1cy5nbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bWUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJzMg57un57utJyk7XHJcblx0XHRcdFx0Ly8gdG9hc3QoJzMg57un57utJyk7XHJcblx0XHRcdFx0aWYgKG5mY0FkYXB0ZXIpIHtcclxuXHRcdFx0XHRcdC8v5byA5ZCv5YmN5Y+w6LCD5bqm57O757ufXHJcblx0XHRcdFx0XHQvLyDkvJjkuo7miYDmnInlhbbku5ZORkNcclxuXHRcdFx0XHRcdG5mY0FkYXB0ZXIuZW5hYmxlRm9yZWdyb3VuZERpc3BhdGNoKG1haW4sIHBlbmRpbmdJbnRlbnQsIGludGVudEZpbHRlcnNBcnJheSxcclxuXHRcdFx0XHRcdFx0dGVjaExpc3RzQXJyYXkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQvL+WIneWni+WMllxyXG5cdFx0XHRuZmNBZGFwdGVyLmVuYWJsZUZvcmVncm91bmREaXNwYXRjaChtYWluLCBwZW5kaW5nSW50ZW50LCBpbnRlbnRGaWx0ZXJzQXJyYXksIHRlY2hMaXN0c0FycmF5KTtcclxuXHRcdFx0Ly8gdG9hc3QoJ+WIneWni+WMluWujOaIkCcpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuWIneWni+WMluWujOaIkFwiKVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0b2FzdChlKTtcclxuXHRcdFx0Y29uc29sZS5lcnJvcihlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG5mY1J1bmluZzogZnVuY3Rpb24oKSB7XHJcblx0XHROZGVmUmVjb3JkID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZmMuTmRlZlJlY29yZFwiKTtcclxuXHRcdE5kZWZNZXNzYWdlID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5uZmMuTmRlZk1lc3NhZ2VcIik7XHJcblx0XHRsZXQgbWFpbiA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XHJcblx0XHRsZXQgaW50ZW50ID0gbWFpbi5nZXRJbnRlbnQoKTtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyhcIm5mY1J1bmluZzpcIiArIGludGVudC5nZXRBY3Rpb24oKSk7XHJcblx0XHQvLyB0b2FzdChcIm5mY1J1bmluZzpcIiArIGludGVudC5nZXRBY3Rpb24oKSk7XHJcblx0XHRpZiAocGFja2FnZV9URUNIX0RJU0NPVkVSRUQgPT0gaW50ZW50LmdldEFjdGlvbigpKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiaWZcIiwgcmVhZHlXcml0ZURhdGEsIHJlYWR5UmVhZClcclxuXHRcdFx0Ly8gdG9hc3QocmVhZHlXcml0ZURhdGEpO1xyXG5cdFx0XHRpZiAocmVhZHlXcml0ZURhdGEpIHtcclxuXHRcdFx0XHR0aGF0LndyaXRlKGludGVudCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJ3cml0ZVwiKVxyXG5cdFx0XHRcdHJlYWR5V3JpdGVEYXRhID0gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSBpZiAocmVhZHlSZWFkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJyZWFkMVwiKVxyXG5cdFx0XHRcdHRoYXQucmVhZChpbnRlbnQpO1xyXG5cdFx0XHRcdHJlYWR5UmVhZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHR3cml0ZShpbnRlbnQpIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdHRvYXN0KCdQbGVhc2UgZG8gbm90IHJlbW92ZSB0aGUgdGFnJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwidGV4dD1cIiArIHRleHQpO1xyXG5cclxuXHRcdFx0bGV0IHRleHRCeXRlcyA9IHBsdXMuYW5kcm9pZC5pbnZva2UodGV4dCwgXCJnZXRCeXRlc1wiKTtcclxuXHRcdFx0Y29uc29sZS5sb2codGV4dEJ5dGVzKVxyXG5cdFx0XHQvLyBpbWFnZS9qcGVnIHRleHQvcGxhaW4gIFxyXG5cdFx0XHRsZXQgdGV4dFJlY29yZCA9IG5ldyBOZGVmUmVjb3JkKE5kZWZSZWNvcmQuVE5GX01JTUVfTUVESUEsXHJcblx0XHRcdFx0cGx1cy5hbmRyb2lkLmludm9rZShcInRleHQvcGxhaW5cIiwgXCJnZXRCeXRlc1wiKSxcclxuXHRcdFx0XHRwbHVzLmFuZHJvaWQuaW52b2tlKFwiXCIsIFwiZ2V0Qnl0ZXNcIiksIHRleHRCeXRlcyk7XHJcblx0XHRcdGxldCBtZXNzYWdlID0gbmV3IE5kZWZNZXNzYWdlKFt0ZXh0UmVjb3JkXSk7XHJcblx0XHRcdGxldCBOZGVmID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLm5mYy50ZWNoLk5kZWYnKTtcclxuXHRcdFx0bGV0IE5kZWZGb3JtYXRhYmxlID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKCdhbmRyb2lkLm5mYy50ZWNoLk5kZWZGb3JtYXRhYmxlJyk7XHJcblx0XHRcdGxldCB0YWcgPSBpbnRlbnQuZ2V0UGFyY2VsYWJsZUV4dHJhKE5mY0FkYXB0ZXIuRVhUUkFfVEFHKTtcclxuXHRcdFx0bGV0IG5kZWYgPSBOZGVmLmdldCh0YWcpO1xyXG5cdFx0XHRpZiAobmRlZiAhPSBudWxsKSB7XHJcblx0XHRcdFx0Ly8g5b6F5YaZ5YWl55qE5pWw5o2u6ZW/5bqmXHJcblx0XHRcdFx0bGV0IHNpemUgPSBtZXNzYWdlLnRvQnl0ZUFycmF5KCkubGVuZ3RoO1xyXG5cdFx0XHRcdG5kZWYuY29ubmVjdCgpO1xyXG5cdFx0XHRcdGlmICghbmRlZi5pc1dyaXRhYmxlKCkpIHtcclxuXHRcdFx0XHRcdHRvYXN0KCd0YWcgZXJyb3LvvIEnKTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG5kZWYuZ2V0TWF4U2l6ZSgpIDwgc2l6ZSkge1xyXG5cdFx0XHRcdFx0dG9hc3QoYFRoZSBmaWxlIHNpemUgZXhjZWVkcyB0aGUgY2FwYWNpdHkhIG1heCAke25kZWYuZ2V0TWF4U2l6ZSgpfSAgY3VycmVudCAke3NpemV9YCk7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG5kZWYud3JpdGVOZGVmTWVzc2FnZShtZXNzYWdlKTtcclxuXHRcdFx0XHR0b2FzdCgnV3JpdGUgZGF0YSBzdWNjZXNzZnVsbHnvvIFzaXplOicgKyBzaXplKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgZm9ybWF0ID0gTmRlZkZvcm1hdGFibGUuZ2V0KHRhZyk7XHJcblx0XHRcdFx0aWYgKGZvcm1hdCAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQuY29ubmVjdCgpO1xyXG5cdFx0XHRcdFx0XHRmb3JtYXQuZm9ybWF0KG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHR0b2FzdCgnZm9ybWF0IHRhZycpO1xyXG5cdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0XHR0b2FzdCgnZm9ybWF0IHRhZyBlcnJvcicpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0b2FzdCgnVGFnIE5vdCBTdXBwb3J0ZWQgTkRFRicpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHR0b2FzdCgnd3JpdGUgZXJyb3InKTtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJlcnJvcj1cIiArIGUpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJ3cml0ZSBkb25lXCIpXHJcblx0XHR3cml0ZUNhbGxiYWNrKClcclxuXHR9LFxyXG5cdHJlYWRGcm9tU2VjdG9yKCkge1xyXG5cdFx0dG9hc3QoJ+ivt+WLv+enu+W8gOagh+etvuato+WcqOivu+WPluaVsOaNricpO1xyXG5cclxuXHRcdHJlYWR5UmVhZCA9IHRydWU7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly8g5Zyo5Luj56CB6aG26YOo5a+85YWlIE1pZmFyZUNsYXNzaWMg57G7XHJcblx0XHRjb25zdCBwYWNrYWdlX01pZmFyZUNsYXNzaWMgPSAnYW5kcm9pZC5uZmMudGVjaC5NaWZhcmVDbGFzc2ljJztcclxuXHJcblx0XHQvLyDnhLblkI7lnKjkvb/nlKggTWlmYXJlQ2xhc3NpYyDnmoTlnLDmlrnvvIznoa7kv53lt7Lnu4/mraPnoa7lr7zlhaVcclxuXHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdGxldCBpbnRlbnQgPSBtYWluLmdldEludGVudCgpO1xyXG5cdFx0bGV0IHRhZyA9IGludGVudC5nZXRQYXJjZWxhYmxlRXh0cmEoTmZjQWRhcHRlci5FWFRSQV9UQUcpO1xyXG5cdFx0bGV0IE1pZmFyZUNsYXNzaWMgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLm5mYy50ZWNoLk1pZmFyZUNsYXNzaWNcIik7XHJcblx0XHRjb25zb2xlLmxvZyhNaWZhcmVDbGFzc2ljKVxyXG5cdFx0bGV0IG1pZmFyZVRhZyA9IE1pZmFyZUNsYXNzaWMuZ2V0KHRhZyk7XHJcblx0XHRjb25zb2xlLmxvZyhtaWZhcmVUYWcpXHJcblx0XHRpZiAobWlmYXJlVGFnICE9IG51bGwpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRtaWZhcmVUYWcuY29ubmVjdCgpO1xyXG5cdFx0XHRcdGxldCBzZWN0b3JJbmRleCA9IDE7IC8vIOekuuS+i++8muivu+WPluesrDLkuKrmiYfljLrvvIjntKLlvJXku44w5byA5aeL77yJXHJcblx0XHRcdFx0bGV0IGF1dGhlbnRpY2F0ZWQgPSBtaWZhcmVUYWcuYXV0aGVudGljYXRlU2VjdG9yV2l0aEtleUEoc2VjdG9ySW5kZXgsIE1pZmFyZUNsYXNzaWMuS0VZX0RFRkFVTFQpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0ZWQpXHJcblx0XHRcdFx0aWYgKGF1dGhlbnRpY2F0ZWQpIHtcclxuXHRcdFx0XHRcdC8vIOivu+WPluaJh+WMuuS4reeahOWdl1xyXG5cdFx0XHRcdFx0bGV0IGJsb2NrSW5kZXggPSBtaWZhcmVUYWcuc2VjdG9yVG9CbG9jayhzZWN0b3JJbmRleCk7XHJcblx0XHRcdFx0XHRsZXQgYmxvY2tEYXRhID0gbWlmYXJlVGFnLnJlYWRCbG9jayhibG9ja0luZGV4KTtcclxuXHRcdFx0XHRcdGxldCBkYXRhU3RyID0gYnl0ZUFycmF5VG9IZXhTdHJpbmcoYmxvY2tEYXRhKTtcclxuXHRcdFx0XHRcdHRvYXN0KCdORkMg5pWw5o2u77yaJyArIGRhdGFTdHIpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ05GQyDmlbDmja7vvJonLCBkYXRhU3RyKTtcclxuXHRcdFx0XHRcdHJlYWRDYWxsYmFjayhkYXRhU3RyKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dG9hc3QoJ+aJh+WMuuiupOivgeWksei0pScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdHRvYXN0KCfor7vlj5bov4fnqIvkuK3lj5HnlJ/plJnor68nKTtcclxuXHRcdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0XHRpZiAobWlmYXJlVGFnLmlzQ29ubmVjdGVkKCkpIHtcclxuXHRcdFx0XHRcdG1pZmFyZVRhZy5jbG9zZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9hc3QoJ+S4jeaUr+aMgU1pZmFyZUNsYXNzaWPmoIfnrb4nKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRyZWFkKCkge1xyXG5cdFx0Ly8gdG9hc3QoJ+ivt+WLv+enu+W8gOagh+etvuato+WcqOivu+WPluaVsOaNricpO1xyXG5cclxuXHRcdGxldCBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdGxldCBpbnRlbnQgPSBtYWluLmdldEludGVudCgpO1xyXG5cdFx0cmVhZHlSZWFkID0gdHJ1ZTtcclxuXHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHQvLyBORkMgaWRcclxuXHRcdGxldCBieXRlc0lkID0gaW50ZW50LmdldEJ5dGVBcnJheUV4dHJhKE5mY0FkYXB0ZXIuRVhUUkFfSUQpO1xyXG5cdFx0bGV0IG5mY19pZCA9IHRoYXQuYnl0ZUFycmF5VG9IZXhTdHJpbmcoYnl0ZXNJZCk7XHJcblx0XHRjb25zb2xlLmxvZygnbmZjX2lkOicsIG5mY19pZCk7XHJcblx0XHRsZXQgUGFyY2VsYWJsZSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQub3MuUGFyY2VsYWJsZVwiKTtcclxuXHRcdGxldCByYXdtc2dzID0gaW50ZW50LmdldFBhcmNlbGFibGVBcnJheUV4dHJhKFwiYW5kcm9pZC5uZmMuZXh0cmEuTkRFRl9NRVNTQUdFU1wiKTtcclxuXHRcdGNvbnNvbGUubG9nKHJhd21zZ3MgPyByYXdtc2dzLmxlbmd0aCA6IDApXHJcblxyXG5cdFx0aWYgKHJhd21zZ3MgIT0gbnVsbCAmJiByYXdtc2dzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0bGV0IGRhdGEgPSBcIlwiXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmF3bXNncy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaTpcIiArIGkpXHJcblx0XHRcdFx0Ly8gdG9hc3QoXCJpOlwiICsgaSk7XHJcblx0XHRcdFx0bGV0IHJlY29yZHMgPSByYXdtc2dzW2ldLmdldFJlY29yZHMoKTtcclxuXHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHJlY29yZHMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdC8vIHRvYXN0KFwialwiICsgaik7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImpcIiArIGopXHJcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gcmVjb3Jkc1tqXS5nZXRQYXlsb2FkKCk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj09PT09PT09PT09PXJlYWQ9PT09PT09PT09XCIpXHJcblx0XHRcdFx0XHRkYXRhICs9IHBsdXMuYW5kcm9pZC5uZXdPYmplY3QoXHJcblx0XHRcdFx0XHRcdFwiamF2YS5sYW5nLlN0cmluZ1wiLCByZXN1bHQpO1xyXG5cdFx0XHRcdFx0Ly8gdG9hc3QoJ05GQyDmlbDmja7vvJonICsgZGF0YSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnTkZDIOaVsOaNru+8micsIGRhdGEpO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmVhZENhbGxiYWNrKGRhdGEpXHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dG9hc3QoJ+ayoeacieivu+WPluWIsOaVsOaNricpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVhZDEoKSB7XHJcblx0XHQvLyB0b2FzdCgn6K+35Yu/56e75byA5qCH562+5q2j5Zyo6K+75Y+W5pWw5o2uJyk7XHJcblxyXG5cdFx0bGV0IG1haW4gPSBwbHVzLmFuZHJvaWQucnVudGltZU1haW5BY3Rpdml0eSgpO1xyXG5cdFx0bGV0IGludGVudCA9IG1haW4uZ2V0SW50ZW50KCk7XHJcblx0XHRyZWFkeVJlYWQgPSB0cnVlO1xyXG5cclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHJcblx0XHQvLyBORkMgaWRcclxuXHRcdC8vIGxldCBieXRlc0lkID0gaW50ZW50LmdldEJ5dGVBcnJheUV4dHJhKFwiYW5kcm9pZC5uZmMuTmZjQWRhcHRlci5FWFRSQV9JRFwiKTtcclxuXHRcdC8vIGxldCBuZmNfaWQgPSB0aGF0LmJ5dGVBcnJheVRvSGV4U3RyaW5nKGJ5dGVzSWQpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coJ25mY19pZDonLCBuZmNfaWQpO1xyXG5cclxuXHRcdC8vIOWwneivleiOt+WPlk1pZmFyZVVsdHJhbGlnaHTlrp7kvotcclxuXHRcdGxldCB0YWcgPSBpbnRlbnQuZ2V0UGFyY2VsYWJsZUV4dHJhKFwiYW5kcm9pZC5uZmMuZXh0cmEuVEFHXCIpO1xyXG5cdFx0bGV0IE1pZmFyZVVsdHJhbGlnaHQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLm5mYy50ZWNoLk1pZmFyZVVsdHJhbGlnaHRcIik7XHJcblx0XHRsZXQgbWlmYXJlVWx0cmFsaWdodCA9IE1pZmFyZVVsdHJhbGlnaHQuZ2V0KHRhZyk7XHJcblxyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly8gbWlmYXJlVWx0cmFsaWdodC5jb25uZWN0KCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKG1pZmFyZVVsdHJhbGlnaHQucmVhZFBhZ2VzKVxyXG5cdFx0XHRsZXQgcGF5bG9hZCA9IG1pZmFyZVVsdHJhbGlnaHQucmVhZFBhZ2VzKDQpOyAvLyDku47nrKww6aG15byA5aeL6K+75Y+WXHJcblx0XHRcdGxldCBkYXRhU3RyID0gcGx1cy5hbmRyb2lkLm5ld09iamVjdChcImphdmEubGFuZy5TdHJpbmdcIiwgcGF5bG9hZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5bliLDnmoTmlbDmja7vvJonLCBkYXRhU3RyKTtcclxuXHRcdFx0Ly8g5aSE55CG5oiW5pi+56S66K+75Y+W5Yiw55qE5pWw5o2uXHJcblx0XHRcdHRvYXN0KCfor7vlj5bliLDnmoTmlbDmja7vvJonICsgZGF0YVN0cik7XHJcblx0XHRcdHJlYWRDYWxsYmFjayhkYXRhU3RyKVxyXG5cdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRjb25zb2xlLmVycm9yKCfor7vlj5bov4fnqIvkuK3lj5HnlJ/plJnor6/vvJonLCBlKTtcclxuXHRcdFx0dG9hc3QoJ+ivu+WPlui/h+eoi+S4reWPkeeUn+mUmeivrycpO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0aWYgKG1pZmFyZVVsdHJhbGlnaHQuaXNDb25uZWN0ZWQoKSkge1xyXG5cdFx0XHRcdG1pZmFyZVVsdHJhbGlnaHQuY2xvc2UoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cdGJ5dGVBcnJheVRvSGV4U3RyaW5nOiBmdW5jdGlvbihpbmFycmF5KSB7IC8vIGNvbnZlcnRzIGJ5dGUgYXJyYXlzIHRvIHN0cmluZyAgXHJcblx0XHRsZXQgaSwgaiwgaW5uO1xyXG5cdFx0bGV0IGhleCA9IFtcIjBcIiwgXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCIsIFwiRVwiLCBcIkZcIl07XHJcblx0XHRsZXQgb3V0ID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKGogPSAwOyBqIDwgaW5hcnJheS5sZW5ndGg7ICsraikge1xyXG5cdFx0XHRpbm4gPSBpbmFycmF5W2pdICYgMHhmZjtcclxuXHRcdFx0aSA9IChpbm4gPj4+IDQpICYgMHgwZjtcclxuXHRcdFx0b3V0ICs9IGhleFtpXTtcclxuXHRcdFx0aSA9IGlubiAmIDB4MGY7XHJcblx0XHRcdG91dCArPSBoZXhbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0O1xyXG5cdH0sXHJcblx0d3JpdGVEYXRhOiBmdW5jdGlvbihkYXRhLGZ1bikge1xyXG5cdFx0aWYgKG5vTkZDKSB7XHJcblx0XHRcdHRvYXN0KCdQbGVhc2UgY2hlY2sgaWYgdGhlIGRldmljZSBzdXBwb3J0cyBhbmQgZW5hYmxlcyBORkMnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8g6L2u6K+i5p2h5Lu2XHJcblx0XHRyZWFkeVdyaXRlRGF0YSA9IHRydWU7XHJcblx0XHR0ZXh0ID0gZGF0YVxyXG5cdFx0d3JpdGVDYWxsYmFjayA9IGZ1bjtcclxuXHRcdHRvYXN0KCdDbG9zZSB0byB0aGUgTkZDIHRhZycpO1xyXG5cdH0sXHJcblx0cmVhZERhdGE6IGZ1bmN0aW9uKGZ1bikge1xyXG5cdFx0aWYgKG5vTkZDKSB7XHJcblx0XHRcdHRvYXN0KCdQbGVhc2UgY2hlY2sgaWYgdGhlIGRldmljZSBzdXBwb3J0cyBhbmQgZW5hYmxlcyBORkMnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8g6L2u6K+i5p2h5Lu2XHJcblx0XHRyZWFkeVJlYWQgPSB0cnVlO1xyXG5cdFx0cmVhZENhbGxiYWNrID0gZnVuXHJcblx0XHR0b2FzdCgnQ2xvc2UgdG8gdGhlIE5GQyB0YWcnKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvYXN0KGNvbnRlbnQpIHtcclxuXHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdHRpdGxlOiBjb250ZW50LFxyXG5cdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0ZHVyYXRpb246IDMwMDBcclxuXHR9KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///50\n");

/***/ }),
/* 51 */
/*!******************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/countdown.vue?mpType=page ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countdown.vue?vue&type=template&id=7aa29bee&mpType=page */ 52);\n/* harmony import */ var _countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countdown.vue?vue&type=script&lang=js&mpType=page */ 54);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/countdown.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvdW50ZG93bi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FhMjliZWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvdW50ZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vY291bnRkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2NvdW50ZG93bi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///51\n");

/***/ }),
/* 52 */
/*!************************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/countdown.vue?vue&type=template&id=7aa29bee&mpType=page ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./countdown.vue?vue&type=template&id=7aa29bee&mpType=page */ 53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_template_id_7aa29bee_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 53 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/countdown.vue?vue&type=template&id=7aa29bee&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container dflex-col"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "title"), attrs: { _i: 1 } }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "countdown"), attrs: { _i: 2 } },
        [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.countdown)))]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 54 */
/*!******************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/countdown.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./countdown.vue?vue&type=script&lang=js&mpType=page */ 55);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_countdown_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJtQixDQUFnQiwwb0JBQUcsRUFBQyIsImZpbGUiOiI1NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY291bnRkb3duLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS03LTEhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stdW5pLWFwcC1sb2FkZXJcXFxcdXNpbmctY29tcG9uZW50cy5qcyFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvdW50ZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///54\n");

/***/ }),
/* 55 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/countdown.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      setting: null,\n      countdown: 0 // 初始化倒计时为60秒\n    };\n  },\n  created: function created() {\n    // this.startCountdown(); // 页面创建时开始倒计时\n  },\n  onLoad: function onLoad(options) {\n    __f__(\"log\", \"onLoad\", options, \" at pages/tabbar/countdown.vue:20\");\n    this.countdown = parseInt(options.second);\n    this.startCountdown(options.id);\n    this.setting = options.setting;\n  },\n  methods: {\n    startCountdown: function startCountdown(id) {\n      var _this = this;\n      var that = this;\n      var interval = setInterval(function () {\n        if (_this.countdown > 0) {\n          _this.countdown--; // 每秒减少1\n        } else {\n          clearInterval(interval); // 倒计时结束，清除定时器\n          uni.navigateTo({\n            url: \"/pages/tabbar/start?id=\".concat(id, \"&setting=\").concat(that.setting)\n          });\n        }\n      }, 1000);\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2NvdW50ZG93bi52dWUiXSwibmFtZXMiOlsiZGF0YSIsInNldHRpbmciLCJjb3VudGRvd24iLCJjcmVhdGVkIiwib25Mb2FkIiwibWV0aG9kcyIsInN0YXJ0Q291bnRkb3duIiwiY2xlYXJJbnRlcnZhbCIsInVuaSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztlQVFBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7RUFBQSxDQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQ0E7TUFDQTtRQUNBO1VBQ0E7UUFDQTtVQUNBQztVQUNBQztZQUNBQztVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8dmlldyBjbGFzcz1cImNvbnRhaW5lciBkZmxleC1jb2xcIj5cblx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlRlc3RpbmcuLi48L3ZpZXc+XG4gICAgPHZpZXcgY2xhc3M9XCJjb3VudGRvd25cIj5SZW1haW5pbmcgdGltZe+8miB7eyBjb3VudGRvd24gfX08L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcblx0XHRzZXR0aW5nIDogbnVsbCxcbiAgICAgIGNvdW50ZG93bjogMCAvLyDliJ3lp4vljJblgJLorqHml7bkuLo2MOenklxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdGhpcy5zdGFydENvdW50ZG93bigpOyAvLyDpobXpnaLliJvlu7rml7blvIDlp4vlgJLorqHml7ZcbiAgfSxcbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgXHRjb25zb2xlLmxvZyhcIm9uTG9hZFwiLG9wdGlvbnMpXG4gIFx0dGhpcy5jb3VudGRvd24gPSBwYXJzZUludChvcHRpb25zLnNlY29uZClcbiAgXHR0aGlzLnN0YXJ0Q291bnRkb3duKG9wdGlvbnMuaWQpXG5cdHRoaXMuc2V0dGluZyA9IG9wdGlvbnMuc2V0dGluZ1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc3RhcnRDb3VudGRvd24oaWQpIHtcblx0XHRsZXQgdGhhdCA9IHRoaXM7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY291bnRkb3duID4gMCkge1xuICAgICAgICAgIHRoaXMuY291bnRkb3duLS07IC8vIOavj+enkuWHj+WwkTFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8g5YCS6K6h5pe257uT5p2f77yM5riF6Zmk5a6a5pe25ZmoXG5cdFx0ICB1bmkubmF2aWdhdGVUbyh7XG5cdFx0ICAgIHVybDogYC9wYWdlcy90YWJiYXIvc3RhcnQ/aWQ9JHtpZH0mc2V0dGluZz0ke3RoYXQuc2V0dGluZ31gXG5cdFx0ICB9KTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgY29sb3I6I2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmNvdW50ZG93biB7XG5cdHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///55\n");

/***/ }),
/* 56 */
/*!*************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/more.vue?mpType=page ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./more.vue?vue&type=template&id=2b56554d&mpType=page */ 57);\n/* harmony import */ var _more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more.vue?vue&type=script&lang=js&mpType=page */ 59);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/more.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSwwRkFBTTtBQUNSLEVBQUUsbUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21vcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiNTY1NTRkJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL21vcmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///56\n");

/***/ }),
/* 57 */
/*!*******************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/more.vue?vue&type=template&id=2b56554d&mpType=page ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./more.vue?vue&type=template&id=2b56554d&mpType=page */ 58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_template_id_2b56554d_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 58 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/more.vue?vue&type=template&id=2b56554d&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.loading)
        ? _c("view", {
            staticClass: _vm._$s(1, "sc", "loading"),
            attrs: { _i: 1 },
          })
        : _c("view", [
            _c(
              "checkbox-group",
              {
                staticClass: _vm._$s(3, "sc", "list"),
                attrs: { _i: 3 },
                model: {
                  value: _vm._$s(3, "v-model", _vm.selectedItems),
                  callback: function ($$v) {
                    _vm.selectedItems = $$v
                  },
                  expression: "selectedItems",
                },
              },
              [
                _c(
                  "view",
                  { staticClass: _vm._$s(4, "sc", "list"), attrs: { _i: 4 } },
                  _vm._l(
                    _vm._$s(5, "f", { forItems: _vm.itemList }),
                    function (item, index, $20, $30) {
                      return _c(
                        "view",
                        {
                          key: _vm._$s(5, "f", { forIndex: $20, key: index }),
                          staticClass: _vm._$s("5-" + $30, "sc", "item"),
                          attrs: { _i: "5-" + $30 },
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "6-" + $30,
                                "sc",
                                "item-info"
                              ),
                              attrs: { _i: "6-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "6-" + $30,
                                  "t0-0",
                                  _vm._s(item.cycle_id)
                                )
                              ),
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(
                                "7-" + $30,
                                "sc",
                                "item-info"
                              ),
                              attrs: { _i: "7-" + $30 },
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  "7-" + $30,
                                  "t0-0",
                                  _vm._s(
                                    _vm.$api.format(
                                      item.create_time,
                                      "yyyy/MM/dd hh:mm"
                                    )
                                  )
                                )
                              ),
                            ]
                          ),
                        ]
                      )
                    }
                  ),
                  0
                ),
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(8, "sc", "button-group"),
                attrs: { _i: 8 },
              },
              [
                _c("button", {
                  staticClass: _vm._$s(9, "sc", "button"),
                  attrs: { _i: 9 },
                  on: { click: _vm.back },
                }),
                _c("button", {
                  staticClass: _vm._$s(10, "sc", "button"),
                  attrs: { _i: 10 },
                  on: { click: _vm.deleteSelected },
                }),
                _c("button", {
                  staticClass: _vm._$s(11, "sc", "button"),
                  attrs: { _i: 11 },
                  on: { click: _vm.download },
                }),
              ]
            ),
          ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 59 */
/*!*************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/more.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./more.vue?vue&type=script&lang=js&mpType=page */ 60);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_more_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNtQixDQUFnQixxb0JBQUcsRUFBQyIsImZpbGUiOiI1OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9yZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tb3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///59\n");

/***/ }),
/* 60 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/more.vue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 23));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      itemList: [],\n      loading: false,\n      selectedItems: [] // 存储选中项的id数组\n    };\n  },\n\n  computed: {\n    isAllSelected: function isAllSelected() {\n      return this.selectedItems.length === this.itemList.length;\n    }\n  },\n  onLoad: function onLoad() {\n    this.queryList();\n  },\n  methods: {\n    queryList: function queryList() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var response;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _this.loading = true;\n                _context.prev = 1;\n                _context.next = 4;\n                return _this.$func.usemall.call('app/mp/list', {});\n              case 4:\n                response = _context.sent;\n                __f__(\"log\", response.result.data, \" at pages/tabbar/more.vue:51\");\n                _this.itemList = response.result.data;\n                _context.next = 12;\n                break;\n              case 9:\n                _context.prev = 9;\n                _context.t0 = _context[\"catch\"](1);\n                __f__(\"error\", 'Error fetching data:', _context.t0, \" at pages/tabbar/more.vue:54\");\n              case 12:\n                _context.prev = 12;\n                _this.loading = false;\n                return _context.finish(12);\n              case 15:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 9, 12, 15]]);\n      }))();\n    },\n    back: function back() {\n      uni.navigateTo({\n        url: \"/pages/tabbar/start\"\n      });\n    },\n    deleteSelected: function deleteSelected() {\n      var _this2 = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var response;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                __f__(\"log\", '删除选中项:', _this2.selectedItems, \" at pages/tabbar/more.vue:65\");\n                _context2.next = 3;\n                return _this2.$func.usemall.call('app/mp/delete', {});\n              case 3:\n                response = _context2.sent;\n                _this2.queryList();\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    },\n    download: function download() {\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {\n        return _regenerator.default.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                uni.downloadFile({\n                  url: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',\n                  success: function success(res) {\n                    __f__(\"log\", \"===============\", \" at pages/tabbar/more.vue:73\");\n                    __f__(\"log\", JSON.stringify(res), \" at pages/tabbar/more.vue:74\");\n                    if (res.statusCode === 200) {\n                      // 下载成功，使用plus.runtime.openFile打开文件\n                      var filePath = res.tempFilePath;\n                      __f__(\"log\", filePath, \" at pages/tabbar/more.vue:78\");\n                      uni.setClipboardData({\n                        data: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',\n                        success: function success(res) {\n                          // uni.showToast({\n                          // \ttitle: '复制成功'\n                          // });\n                        }\n                      });\n                      uni.showModal({\n                        title: '已复制，请在浏览器中打开',\n                        content: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',\n                        showCancel: false,\n                        success: function success(res) {\n                          if (res.confirm) {\n                            uni.saveFile({\n                              tempFilePath: filePath,\n                              success: function success(saveRes) {\n                                uni.showToast({\n                                  title: '文件下载成功',\n                                  icon: 'success'\n                                });\n                                __f__(\"log\", '保存的文件路径:', saveRes.savedFilePath, \" at pages/tabbar/more.vue:100\");\n                                // 如果需要可以在这里添加打开文件的代码\n                                plus.runtime.openFile(saveRes.savedFilePath);\n                              },\n                              fail: function fail(saveErr) {\n                                __f__(\"error\", '文件保存失败:', saveErr, \" at pages/tabbar/more.vue:105\");\n                                uni.showToast({\n                                  title: '文件保存失败',\n                                  icon: 'none'\n                                });\n                              }\n                            });\n                          } else if (res.cancel) {}\n                        }\n                      });\n\n                      // plus.runtime.openFile(filePath, {}, (error) => {\n                      // \tuni.showModal({\n                      // \t\ttitle: '下载失败',\n                      // \t\tcontent: '无法打开文件，错误码：' + error.code + ' - 错误信息：' +\n                      // \t\t\terror.message\n                      // \t});\n                      // });\n                    } else {\n                      // 服务器响应码不是200，下载失败\n                      uni.showModal({\n                        title: '下载失败',\n                        content: '服务器响应错误，状态码：' + res.statusCode\n                      });\n                    }\n                  },\n                  fail: function fail(error) {\n                    // 下载失败的回调\n                    uni.showModal({\n                      title: '下载失败',\n                      content: '下载过程中发生错误，错误信息：' + error.message\n                    });\n                  }\n                });\n                // // 获取数据\n                // // const response = await this.$func.usemall.call('app/mp/download', {});\n                // uni.saveImageToPhotosAlbum({\n                //   filePath: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',\n                //   success() {\n                //     uni.showToast({\n                //       title: '保存成功'\n                //     })\n                //   }\n                // })\n                // uni.downloadFile({\n                //   url: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',\n                //   success: res => {\n\n                //   }\n                // })\n\n                // console.log(response.result.data);\n                // let dataStr = JSON.stringify(response.result.data);\n\n                //   // 定义文件名\n                //   const fileName = `data_${Date.now()}.json`;\n\n                //   // 获取系统信息\n                //   const systemInfo = uni.getSystemInfoSync();\n                //   // 使用系统信息中的用户数据路径\n                //   const filePath = `${systemInfo.tempFilePath}/${fileName}`;\n\n                //   // 将数据写入临时文件\n                //   uni.writeFile({\n                //     filePath: filePath,\n                //     data: dataStr,\n                //     encoding: 'utf8',\n                //     success: (writeFileRes) => {\n                //       console.log('文件写入成功', writeFileRes);\n\n                //       // 保存文件到系统相册或文件系统\n                //       uni.saveFile({\n                //         tempFilePath: filePath,\n                //         success: (saveFileRes) => {\n                //           console.log('文件保存成功', saveFileRes);\n                //           uni.showToast({\n                //             title: '文件下载成功',\n                //             icon: 'success'\n                //           });\n                //         },\n                //         fail: (err) => {\n                //           console.error('文件保存失败', err);\n                //           uni.showToast({\n                //             title: '文件保存失败',\n                //             icon: 'none'\n                //           });\n                //         }\n                //       });\n                //     },\n                //     fail: (err) => {\n                //       console.error('文件写入失败', err);\n                //       uni.showToast({\n                //         title: '文件写入失败',\n                //         icon: 'none'\n                //       });\n                //     }\n                //   });\n              case 1:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }))();\n    },\n    toggleAll: function toggleAll() {\n      __f__(\"log\", this.isAllSelected, \" at pages/tabbar/more.vue:210\");\n      if (this.isAllSelected) {\n        this.selectedItems = this.itemList.map(function (item) {\n          return item.cycle_id.toString();\n        });\n      } else {\n        this.selectedItems = [];\n      }\n      // 注意：更新全选状态\n      this.isAllSelected = !this.isAllSelected;\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL21vcmUudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJpdGVtTGlzdCIsImxvYWRpbmciLCJzZWxlY3RlZEl0ZW1zIiwiY29tcHV0ZWQiLCJpc0FsbFNlbGVjdGVkIiwib25Mb2FkIiwibWV0aG9kcyIsInF1ZXJ5TGlzdCIsInJlc3BvbnNlIiwiYmFjayIsInVuaSIsInVybCIsImRlbGV0ZVNlbGVjdGVkIiwiZG93bmxvYWQiLCJzdWNjZXNzIiwidGl0bGUiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsInRlbXBGaWxlUGF0aCIsImljb24iLCJwbHVzIiwiZmFpbCIsInRvZ2dsZUFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTZCQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO0lBQ0E7RUFDQTs7RUFDQUM7SUFDQUM7TUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0FDO01BQUE7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQ0E7Z0JBQUE7Z0JBQUE7Z0JBQUEsT0FFQTtjQUFBO2dCQUFBQztnQkFDQTtnQkFDQTtnQkFBQTtnQkFBQTtjQUFBO2dCQUFBO2dCQUFBO2dCQUVBO2NBQUE7Z0JBQUE7Z0JBRUE7Z0JBQUE7Y0FBQTtjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFFQTtJQUNBQztNQUNBQztRQUNBQztNQUNBO0lBQ0E7SUFDQUM7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFDQTtnQkFBQTtnQkFBQSxPQUNBO2NBQUE7Z0JBQUFKO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQUs7TUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBSDtrQkFDQUM7a0JBQ0FHO29CQUNBO29CQUNBO29CQUNBO3NCQUNBO3NCQUNBO3NCQUNBO3NCQUNBSjt3QkFDQVg7d0JBQ0FlOzBCQUNBOzBCQUNBOzBCQUNBO3dCQUFBO3NCQUVBO3NCQUNBSjt3QkFDQUs7d0JBQ0FDO3dCQUNBQzt3QkFDQUg7MEJBQ0E7NEJBQ0FKOzhCQUNBUTs4QkFDQUo7Z0NBQ0FKO2tDQUNBSztrQ0FDQUk7Z0NBQ0E7Z0NBQ0E7Z0NBQ0E7Z0NBQ0FDOzhCQUNBOzhCQUNBQztnQ0FDQTtnQ0FDQVg7a0NBQ0FLO2tDQUNBSTtnQ0FDQTs4QkFDQTs0QkFDQTswQkFFQTt3QkFDQTtzQkFDQTs7c0JBS0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7c0JBQ0E7b0JBQ0E7c0JBQ0E7c0JBQ0FUO3dCQUNBSzt3QkFDQUM7c0JBQ0E7b0JBQ0E7a0JBQ0E7a0JBQ0FLO29CQUNBO29CQUNBWDtzQkFDQUs7c0JBQ0FDO29CQUNBO2tCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBOztnQkFFQTtnQkFDQTs7Z0JBSUE7Z0JBQ0E7O2dCQUVBO2dCQUNBOztnQkFFQTtnQkFDQTtnQkFDQTtnQkFDQTs7Z0JBRUE7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7Z0JBQ0E7O2dCQUVBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2dCQUNBO2NBQUE7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQU07TUFDQTtNQUNBO1FBQ0E7VUFBQTtRQUFBO01BQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHQ8dmlldyB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPuWKoOi9veS4rS4uLjwvdmlldz5cclxuXHRcdDx2aWV3IHYtZWxzZT5cclxuXHRcdFx0PCEtLSA8dmlldyBjbGFzcz1cInNlbGVjdC1hbGwtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PHRleHQgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4O1wiPuWFqOmAiTwvdGV4dD5cclxuXHRcdFx0XHQ8Y2hlY2tib3ggY2xhc3M9XCJzZWxlY3QtYWxsXCIgQGNsaWNrPVwidG9nZ2xlQWxsXCIgOmNoZWNrZWQ9XCJpc0FsbFNlbGVjdGVkXCI+PC9jaGVja2JveD5cclxuXHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0PGNoZWNrYm94LWdyb3VwIHYtbW9kZWw9XCJzZWxlY3RlZEl0ZW1zXCIgY2xhc3M9XCJsaXN0XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsaXN0XCI+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbUxpc3RcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cIml0ZW1cIj5cclxuXHRcdFx0XHRcdFx0PCEtLSDmmL7npLrliJfooajpobnnmoTlhoXlrrkgLS0+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaXRlbS1pbmZvXCI+e3sgaXRlbS5jeWNsZV9pZCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpdGVtLWluZm9cIj57eyAkYXBpLmZvcm1hdChpdGVtLmNyZWF0ZV90aW1lLCAneXl5eS9NTS9kZCBoaDptbScpIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOihjOacq+WwvueahOWkjemAieahhiAtLT5cclxuXHRcdFx0XHRcdFx0PCEtLSA8Y2hlY2tib3ggOnZhbHVlPVwiaXRlbS5jeWNsZV9pZC50b1N0cmluZygpXCI+PC9jaGVja2JveD4gLS0+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L2NoZWNrYm94LWdyb3VwPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbi1ncm91cFwiPlxyXG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiYmFja1wiIGNsYXNzPVwiYnV0dG9uXCI+QmFjazwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZGVsZXRlU2VsZWN0ZWRcIiBjbGFzcz1cImJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gQGNsaWNrPVwiZG93bmxvYWRcIiBjbGFzcz1cImJ1dHRvblwiPkRvd25sb2FkPC9idXR0b24+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXRlbUxpc3Q6IFtdLFxyXG5cdFx0XHRcdGxvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRcdHNlbGVjdGVkSXRlbXM6IFtdLCAvLyDlrZjlgqjpgInkuK3pobnnmoRpZOaVsOe7hFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGlzQWxsU2VsZWN0ZWQoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IHRoaXMuaXRlbUxpc3QubGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHR0aGlzLnF1ZXJ5TGlzdCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YXN5bmMgcXVlcnlMaXN0KCkge1xyXG5cdFx0XHRcdHRoaXMubG9hZGluZyA9IHRydWU7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy4kZnVuYy51c2VtYWxsLmNhbGwoJ2FwcC9tcC9saXN0Jywge30pO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0LmRhdGEpXHJcblx0XHRcdFx0XHR0aGlzLml0ZW1MaXN0ID0gcmVzcG9uc2UucmVzdWx0LmRhdGE7XHJcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG5cdFx0XHRcdH0gZmluYWxseSB7XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL3RhYmJhci9zdGFydGBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZGVsZXRlU2VsZWN0ZWQoKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+WIoOmZpOmAieS4remhuTonLCB0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy4kZnVuYy51c2VtYWxsLmNhbGwoJ2FwcC9tcC9kZWxldGUnLCB7fSk7XHJcblx0XHRcdFx0dGhpcy5xdWVyeUxpc3QoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgZG93bmxvYWQoKSB7XHJcblx0XHRcdFx0dW5pLmRvd25sb2FkRmlsZSh7XHJcblx0XHRcdFx0XHR1cmw6ICdodHRwczovL2ZjLW1wLTQ4NjIwYjU3LTA2NjYtNDJiZi1iY2M0LTQzM2VmMzZkMDM0ZC5uZXh0LmJzcGFwcC5jb20vZG93bmxvYWQnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PVwiKVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOS4i+i9veaIkOWKn++8jOS9v+eUqHBsdXMucnVudGltZS5vcGVuRmlsZeaJk+W8gOaWh+S7tlxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhmaWxlUGF0aClcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2V0Q2xpcGJvYXJkRGF0YSh7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogJ2h0dHBzOi8vZmMtbXAtNDg2MjBiNTctMDY2Ni00MmJmLWJjYzQtNDMzZWYzNmQwMzRkLm5leHQuYnNwYXBwLmNvbS9kb3dubG9hZCcsXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gdW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdHRpdGxlOiAn5aSN5Yi25oiQ5YqfJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gfSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflt7LlpI3liLbvvIzor7flnKjmtY/op4jlmajkuK3miZPlvIAnLFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICdodHRwczovL2ZjLW1wLTQ4NjIwYjU3LTA2NjYtNDJiZi1iY2M0LTQzM2VmMzZkMDM0ZC5uZXh0LmJzcGFwcC5jb20vZG93bmxvYWQnLFxuXHRcdFx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNhdmVGaWxlKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZW1wRmlsZVBhdGg6IGZpbGVQYXRoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChzYXZlUmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlofku7bkuIvovb3miJDlip8nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnc3VjY2Vzcydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+S/neWtmOeahOaWh+S7tui3r+W+hDonLCBzYXZlUmVzLnNhdmVkRmlsZVBhdGgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g5aaC5p6c6ZyA6KaB5Y+v5Lul5Zyo6L+Z6YeM5re75Yqg5omT5byA5paH5Lu255qE5Luj56CBXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbHVzLnJ1bnRpbWUub3BlbkZpbGUoc2F2ZVJlcy5zYXZlZEZpbGVQYXRoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZmFpbDogKHNhdmVFcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ+aWh+S7tuS/neWtmOWksei0pTonLCBzYXZlRXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aWh+S7tuS/neWtmOWksei0pScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHt9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vIHBsdXMucnVudGltZS5vcGVuRmlsZShmaWxlUGF0aCwge30sIChlcnJvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0Ly8gXHRcdHRpdGxlOiAn5LiL6L295aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0XHQvLyBcdFx0Y29udGVudDogJ+aXoOazleaJk+W8gOaWh+S7tu+8jOmUmeivr+egge+8micgKyBlcnJvci5jb2RlICsgJyAtIOmUmeivr+S/oeaBr++8micgK1xyXG5cdFx0XHRcdFx0XHRcdC8vIFx0XHRcdGVycm9yLm1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0XHQvLyBcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdC8vIH0pO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdC8vIOacjeWKoeWZqOWTjeW6lOeggeS4jeaYrzIwMO+8jOS4i+i9veWksei0pVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIvovb3lpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+acjeWKoeWZqOWTjeW6lOmUmeivr++8jOeKtuaAgeegge+8micgKyByZXMuc3RhdHVzQ29kZVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIOS4i+i9veWksei0peeahOWbnuiwg1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S4i+i9veWksei0pScsXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+S4i+i9vei/h+eoi+S4reWPkeeUn+mUmeivr++8jOmUmeivr+S/oeaBr++8micgKyBlcnJvci5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIC8vIOiOt+WPluaVsOaNrlxyXG5cdFx0XHRcdC8vIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy4kZnVuYy51c2VtYWxsLmNhbGwoJ2FwcC9tcC9kb3dubG9hZCcsIHt9KTtcclxuXHRcdFx0XHQvLyB1bmkuc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcblx0XHRcdFx0Ly8gICBmaWxlUGF0aDogJ2h0dHBzOi8vZmMtbXAtNDg2MjBiNTctMDY2Ni00MmJmLWJjYzQtNDMzZWYzNmQwMzRkLm5leHQuYnNwYXBwLmNvbS9kb3dubG9hZCcsXHJcblx0XHRcdFx0Ly8gICBzdWNjZXNzKCkge1xyXG5cdFx0XHRcdC8vICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHQvLyAgICAgICB0aXRsZTogJ+S/neWtmOaIkOWKnydcclxuXHRcdFx0XHQvLyAgICAgfSlcclxuXHRcdFx0XHQvLyAgIH1cclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdC8vIHVuaS5kb3dubG9hZEZpbGUoe1xyXG5cdFx0XHRcdC8vICAgdXJsOiAnaHR0cHM6Ly9mYy1tcC00ODYyMGI1Ny0wNjY2LTQyYmYtYmNjNC00MzNlZjM2ZDAzNGQubmV4dC5ic3BhcHAuY29tL2Rvd25sb2FkJyxcclxuXHRcdFx0XHQvLyAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblxyXG5cdFx0XHRcdC8vICAgfVxyXG5cdFx0XHRcdC8vIH0pXHJcblxyXG5cclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzcG9uc2UucmVzdWx0LmRhdGEpO1xyXG5cdFx0XHRcdC8vIGxldCBkYXRhU3RyID0gSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UucmVzdWx0LmRhdGEpO1xyXG5cclxuXHRcdFx0XHQvLyAgIC8vIOWumuS5ieaWh+S7tuWQjVxyXG5cdFx0XHRcdC8vICAgY29uc3QgZmlsZU5hbWUgPSBgZGF0YV8ke0RhdGUubm93KCl9Lmpzb25gO1xyXG5cclxuXHRcdFx0XHQvLyAgIC8vIOiOt+WPluezu+e7n+S/oeaBr1xyXG5cdFx0XHRcdC8vICAgY29uc3Qgc3lzdGVtSW5mbyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRcdC8vICAgLy8g5L2/55So57O757uf5L+h5oGv5Lit55qE55So5oi35pWw5o2u6Lev5b6EXHJcblx0XHRcdFx0Ly8gICBjb25zdCBmaWxlUGF0aCA9IGAke3N5c3RlbUluZm8udGVtcEZpbGVQYXRofS8ke2ZpbGVOYW1lfWA7XHJcblxyXG5cdFx0XHRcdC8vICAgLy8g5bCG5pWw5o2u5YaZ5YWl5Li05pe25paH5Lu2XHJcblx0XHRcdFx0Ly8gICB1bmkud3JpdGVGaWxlKHtcclxuXHRcdFx0XHQvLyAgICAgZmlsZVBhdGg6IGZpbGVQYXRoLFxyXG5cdFx0XHRcdC8vICAgICBkYXRhOiBkYXRhU3RyLFxyXG5cdFx0XHRcdC8vICAgICBlbmNvZGluZzogJ3V0ZjgnLFxyXG5cdFx0XHRcdC8vICAgICBzdWNjZXNzOiAod3JpdGVGaWxlUmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgY29uc29sZS5sb2coJ+aWh+S7tuWGmeWFpeaIkOWKnycsIHdyaXRlRmlsZVJlcyk7XHJcblxyXG5cdFx0XHRcdC8vICAgICAgIC8vIOS/neWtmOaWh+S7tuWIsOezu+e7n+ebuOWGjOaIluaWh+S7tuezu+e7n1xyXG5cdFx0XHRcdC8vICAgICAgIHVuaS5zYXZlRmlsZSh7XHJcblx0XHRcdFx0Ly8gICAgICAgICB0ZW1wRmlsZVBhdGg6IGZpbGVQYXRoLFxyXG5cdFx0XHRcdC8vICAgICAgICAgc3VjY2VzczogKHNhdmVGaWxlUmVzKSA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgIGNvbnNvbGUubG9nKCfmlofku7bkv53lrZjmiJDlip8nLCBzYXZlRmlsZVJlcyk7XHJcblx0XHRcdFx0Ly8gICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdC8vICAgICAgICAgICAgIHRpdGxlOiAn5paH5Lu25LiL6L295oiQ5YqfJyxcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuXHRcdFx0XHQvLyAgICAgICAgICAgfSk7XHJcblx0XHRcdFx0Ly8gICAgICAgICB9LFxyXG5cdFx0XHRcdC8vICAgICAgICAgZmFpbDogKGVycikgPT4ge1xyXG5cdFx0XHRcdC8vICAgICAgICAgICBjb25zb2xlLmVycm9yKCfmlofku7bkv53lrZjlpLHotKUnLCBlcnIpO1xyXG5cdFx0XHRcdC8vICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHQvLyAgICAgICAgICAgICB0aXRsZTogJ+aWh+S7tuS/neWtmOWksei0pScsXHJcblx0XHRcdFx0Ly8gICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcblx0XHRcdFx0Ly8gICAgICAgICAgIH0pO1xyXG5cdFx0XHRcdC8vICAgICAgICAgfVxyXG5cdFx0XHRcdC8vICAgICAgIH0pO1xyXG5cdFx0XHRcdC8vICAgICB9LFxyXG5cdFx0XHRcdC8vICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0Ly8gICAgICAgY29uc29sZS5lcnJvcign5paH5Lu25YaZ5YWl5aSx6LSlJywgZXJyKTtcclxuXHRcdFx0XHQvLyAgICAgICB1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHQvLyAgICAgICAgIHRpdGxlOiAn5paH5Lu25YaZ5YWl5aSx6LSlJyxcclxuXHRcdFx0XHQvLyAgICAgICAgIGljb246ICdub25lJ1xyXG5cdFx0XHRcdC8vICAgICAgIH0pO1xyXG5cdFx0XHRcdC8vICAgICB9XHJcblx0XHRcdFx0Ly8gICB9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9nZ2xlQWxsKCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNBbGxTZWxlY3RlZClcclxuXHRcdFx0XHRpZiAodGhpcy5pc0FsbFNlbGVjdGVkKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkSXRlbXMgPSB0aGlzLml0ZW1MaXN0Lm1hcChpdGVtID0+IGl0ZW0uY3ljbGVfaWQudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDms6jmhI/vvJrmm7TmlrDlhajpgInnirbmgIFcclxuXHRcdFx0XHR0aGlzLmlzQWxsU2VsZWN0ZWQgPSAhdGhpcy5pc0FsbFNlbGVjdGVkO1xyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LnNlbGVjdC1hbGwtY29udGFpbmVyIHtcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdFx0cGFkZGluZzogMTBweDtcclxuXHR9XHJcblxyXG5cdC5zZWxlY3QtYWxsIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQuY29udGFpbmVyIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHR9XHJcblxyXG5cdC5saXN0IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxuXHJcblx0Lml0ZW0ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQuaXRlbS1pbmZvIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHQvKiDkvb/mlofmnKzlhoXlrrnoh6rliqjloavlhYXlrr3luqYgKi9cclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdC8qIOiuvue9rumXtOi3nSAqL1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdC8qIOi2heWHuumDqOWIhumakOiXjyAqL1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHQvKiDmlofmnKzmuqLlh7rml7bmmL7npLrnnIHnlaXlj7cgKi9cclxuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHQvKiDkuI3mjaLooYwgKi9cclxuXHR9XHJcblxyXG5cdC5sb2FkaW5nIHtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLWdyb3VwIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luLXRvcDogMjBweDtcclxuXHR9XHJcblxyXG5cdC5idXR0b24ge1xyXG5cclxuXHRcdHBhZGRpbmc6IDEwcHggMjBweDtcclxuXHRcdG1hcmdpbjogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cclxuXHQuYnV0dG9uLWdyb3VwIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0Lyog5oyJ6ZKu57uE5ZCR5Y+z5a+56b2QICovXHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Lyog5Z6C55u05bGF5Lit5a+56b2QICovXHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQuc2VsZWN0LWFsbCB7XHJcblx0XHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRcdC8qIOWwhuWFqOmAieWkjemAieahhuaOqOWIsOacgOWPs+i+uSAqL1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///60\n");

/***/ }),
/* 61 */
/*!****************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/setting.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setting.vue?vue&type=template&id=7963efb0&mpType=page */ 62);\n/* harmony import */ var _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setting.vue?vue&type=script&lang=js&mpType=page */ 64);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/setting.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3NldHRpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5NjNlZmIwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL3NldHRpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///61\n");

/***/ }),
/* 62 */
/*!**********************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/setting.vue?vue&type=template&id=7963efb0&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=template&id=7963efb0&mpType=page */ 63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_template_id_7963efb0_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 63 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/setting.vue?vue&type=template&id=7963efb0&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _c("view", { staticClass: _vm._$s(1, "sc", "header"), attrs: { _i: 1 } }),
      _c("form", { staticClass: _vm._$s(2, "sc", "form"), attrs: { _i: 2 } }, [
        _c(
          "view",
          { staticClass: _vm._$s(3, "sc", "form-item"), attrs: { _i: 3 } },
          [
            _c("text", {
              staticClass: _vm._$s(4, "sc", "form-label"),
              attrs: { _i: 4 },
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.a,
                  expression: "a",
                },
              ],
              staticClass: _vm._$s(5, "sc", "form-input"),
              attrs: { _i: 5 },
              domProps: { value: _vm._$s(5, "v-model", _vm.a) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.a = $event.target.value
                },
              },
            }),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(6, "sc", "form-item"), attrs: { _i: 6 } },
          [
            _c("text", {
              staticClass: _vm._$s(7, "sc", "form-label"),
              attrs: { _i: 7 },
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.b,
                  expression: "b",
                },
              ],
              staticClass: _vm._$s(8, "sc", "form-input"),
              attrs: { _i: 8 },
              domProps: { value: _vm._$s(8, "v-model", _vm.b) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.b = $event.target.value
                },
              },
            }),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(9, "sc", "form-item"), attrs: { _i: 9 } },
          [
            _c("text", {
              staticClass: _vm._$s(10, "sc", "form-label"),
              attrs: { _i: 10 },
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.c,
                  expression: "c",
                },
              ],
              staticClass: _vm._$s(11, "sc", "form-input"),
              attrs: { _i: 11 },
              domProps: { value: _vm._$s(11, "v-model", _vm.c) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.c = $event.target.value
                },
              },
            }),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(12, "sc", "form-item"), attrs: { _i: 12 } },
          [
            _c("text", {
              staticClass: _vm._$s(13, "sc", "form-label"),
              attrs: { _i: 13 },
            }),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.d,
                  expression: "d",
                },
              ],
              staticClass: _vm._$s(14, "sc", "form-input"),
              attrs: { _i: 14 },
              domProps: { value: _vm._$s(14, "v-model", _vm.d) },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.d = $event.target.value
                },
              },
            }),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(15, "sc", "form-item"), attrs: { _i: 15 } },
          [
            _c("text", {
              staticClass: _vm._$s(16, "sc", "form-label"),
              attrs: { _i: 16 },
            }),
            _c(
              "picker",
              {
                attrs: {
                  range: _vm._$s(17, "a-range", _vm.pickerRange),
                  _i: 17,
                },
                on: { change: _vm.onPickerChange },
              },
              [
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(18, "sc", "form-input"),
                    attrs: { _i: 18 },
                  },
                  [_vm._v(_vm._$s(18, "t0-0", _vm._s(_vm.e)))]
                ),
              ]
            ),
          ]
        ),
        _c(
          "view",
          { staticClass: _vm._$s(19, "sc", "button-group"), attrs: { _i: 19 } },
          [
            _c("button", {
              staticClass: _vm._$s(20, "sc", "action-button"),
              attrs: { _i: 20 },
              on: { click: _vm.back },
            }),
            _c("button", {
              staticClass: _vm._$s(21, "sc", "action-button"),
              attrs: { _i: 21 },
              on: { click: _vm.save },
            }),
          ]
        ),
      ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 64 */
/*!****************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./setting.vue?vue&type=script&lang=js&mpType=page */ 65);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXltQixDQUFnQix3b0JBQUcsRUFBQyIsImZpbGUiOiI2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2V0dGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZXR0aW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///64\n");

/***/ }),
/* 65 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/setting.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _hexiiiNfc = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/hexiii-nfc/hexiii-nfc.js */ 50));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      // 下拉框选项列表\n      pickerRange: ['1e-5', '1e-4', '1e-3', '1e-2', 'Default'],\n      a: 0.4,\n      b: 0.9,\n      c: 0.005,\n      d: 0.05,\n      e: 'Default'\n    };\n  },\n  onLoad: function onLoad(options) {\n    __f__(\"log\", options, \" at pages/tabbar/setting.vue:55\");\n    if (options.setting) {\n      var temp = options.setting.split(',');\n      this.a = temp[0];\n      this.b = temp[1];\n      this.c = temp[2];\n      this.d = temp[3];\n      this.e = temp[4];\n    }\n    _hexiiiNfc.default.listenNFCStatus();\n  },\n  methods: {\n    onPickerChange: function onPickerChange(event) {\n      // event.detail.value 是选中项的索引\n      this.e = this.pickerRange[event.detail.value];\n    },\n    read: function read() {\n      var _this = this;\n      __f__(\"log\", this.a, this.b, this.c, this.d, this.e, \" at pages/tabbar/setting.vue:74\");\n      _hexiiiNfc.default.readData(function (res) {\n        __f__(\"log\", res, \" at pages/tabbar/setting.vue:76\");\n      });\n      setInterval(function () {\n        __f__(\"log\", \"setTimeout\", \" at pages/tabbar/setting.vue:80\");\n        _hexiiiNfc.default.initReadNfcAdapter(function (res) {\n          __f__(\"log\", res, \" at pages/tabbar/setting.vue:82\");\n        });\n      }, 5000);\n    },\n    back: function back() {\n      uni.navigateBack();\n    },\n    save1: function save1() {\n      _hexiiiNfc.default.writeData(\"b/10485,0102,0202/10616,0104,0204/10747,0106,0206/10878,0108,0208/11009,0110,0210/11140,0112,0212/11271,0114,0214/11402,0116,0216/11533,0118,0218/11664,0120,0220/11795,0122,0222/11926,0124,0224/12057,0126,0226/12188,0128,0228/12319,0130,0230/12450,0132,0232/12581,0134,0234/12712,0136,0236/12843,0138,0238/12974,0140,0240/13105,0142,0242/13236,0144,0244/13367,0146,0246/13498,0148,0248\", function () {});\n    },\n    save: function save() {\n      var _this = this;\n      if (this.a < 0) {\n        this.a = 0;\n      }\n      if (this.a > 1.5) {\n        this.a = 1.5;\n      }\n      if (this.b < 0) {\n        this.b = 0;\n      }\n      if (this.b > 1.5) {\n        this.b = 1.5;\n      }\n      if (this.c < 0.001) {\n        this.c = 0.001;\n      }\n      if (this.c > 0.05) {\n        this.c = 0.05;\n      }\n      if (this.d < 0.001) {\n        this.d = 0.001;\n      }\n      if (this.d > 0.1) {\n        this.d = 0.1;\n      }\n      if (!this.e) {\n        this.e = 'Default';\n      }\n      __f__(\"log\", this.e, \" at pages/tabbar/setting.vue:126\");\n      var writeData = \"a[\".concat(_this.a, \",\").concat(_this.b, \",\").concat(_this.c, \",\").concat(_this.d, \",\").concat(_this.e, \"]\");\n      __f__(\"log\", writeData, \" at pages/tabbar/setting.vue:129\");\n      _hexiiiNfc.default.writeData(writeData, function () {\n        _this.$func.usemall.call('app/mp/add', \"\".concat(_this.a, \",\").concat(_this.b, \",\").concat(_this.c, \",\").concat(_this.d, \",\").concat(_this.e)).then(function (res) {\n          //操作成功跳转\n          uni.showToast({\n            title: res.code,\n            icon: 'none',\n            duration: 3000\n          });\n          if (res.code == 200) {\n            __f__(\"log\", res.result.data, \" at pages/tabbar/setting.vue:140\");\n            var second = (_this.b - _this.a) / _this.c * 0.5;\n            uni.showToast({\n              title: second,\n              icon: 'none',\n              duration: 3000\n            });\n            __f__(\"log\", second, \" at pages/tabbar/setting.vue:147\");\n            uni.navigateTo({\n              url: \"/pages/tabbar/countdown?id=\".concat(res.result.data, \"&second=\").concat(second, \"&setting=\").concat(_this.a, \",\").concat(_this.b, \",\").concat(_this.c, \",\").concat(_this.d, \",\").concat(_this.e)\n            });\n          }\n          // console.log(res)\n        });\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL3NldHRpbmcudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJwaWNrZXJSYW5nZSIsImEiLCJiIiwiYyIsImQiLCJlIiwib25Mb2FkIiwibmZjIiwibWV0aG9kcyIsIm9uUGlja2VyQ2hhbmdlIiwicmVhZCIsInNldEludGVydmFsIiwiYmFjayIsInVuaSIsInNhdmUxIiwic2F2ZSIsIl90aGlzIiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUVBO0VBQ0FBO0lBQ0E7TUFDQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO01BRUE7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0E7SUFDQUM7RUFDQTtFQUNBQztJQUNBQztNQUNBO01BQ0E7SUFDQTtJQUNBQztNQUNBO01BQ0E7TUFDQUg7UUFDQTtNQUNBO01BRUFJO1FBQ0E7UUFDQUo7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBSztNQUNBQztJQUNBO0lBQ0FDO01BQ0FQLGthQUVBO0lBQ0E7SUFDQVE7TUFFQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUNBO1FBQ0E7TUFDQTtNQUdBO01BRUE7TUFDQTtNQUNBUjtRQUNBUyxpREFDQUE7VUFDQTtVQUNBSDtZQUNBSTtZQUNBQztZQUNBQztVQUNBO1VBQ0E7WUFDQTtZQUNBO1lBQ0FOO2NBQ0FJO2NBQ0FDO2NBQ0FDO1lBQ0E7WUFDQTtZQUNBTjtjQUNBTztZQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJoZWFkZXJcIj5TZXR0aW5nPC92aWV3PlxyXG5cdFx0PGZvcm0gY2xhc3M9XCJmb3JtXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1pdGVtXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb3JtLWxhYmVsXCI+SW5pdCBFKFYpOjwvdGV4dD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWlucHV0XCIgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJhXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBpbml0aWFsIEUgdmFsdWVcIiAvPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1pdGVtXCI+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb3JtLWxhYmVsXCI+RmluYWwgRShWKTo8L3RleHQ+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiYlwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZmluYWwgRSB2YWx1ZVwiIC8+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmb3JtLWl0ZW1cIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvcm0tbGFiZWxcIj5JbmNyIEUoVik6PC90ZXh0PlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0taW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cImNcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGluY3JlbWVudCBFIHZhbHVlXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZvcm0taXRlbVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9ybS1sYWJlbFwiPkFtcGxpdHVkZShWKTo8L3RleHQ+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1pbnB1dFwiIHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1wbGl0dWRlIHZhbHVlXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZvcm0taXRlbVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlNlbnNpdGl2aXR5KEEvVik6PC90ZXh0PlxyXG5cdFx0XHRcdDxwaWNrZXIgbW9kZT1cInNlbGVjdG9yXCIgOnJhbmdlPVwicGlja2VyUmFuZ2VcIiBAY2hhbmdlPVwib25QaWNrZXJDaGFuZ2VcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZm9ybS1pbnB1dFwiPlxyXG5cdFx0XHRcdFx0XHR7e2V9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvcGlja2VyPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImJ1dHRvbi1ncm91cFwiPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJhY3Rpb24tYnV0dG9uXCIgQGNsaWNrPVwiYmFja1wiPkJhY2s8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIEBjbGljaz1cInNhdmVcIj5TYXZlPC9idXR0b24+XHJcblx0XHRcdFx0PCEtLSA8YnV0dG9uIGNsYXNzPVwiYWN0aW9uLWJ1dHRvblwiIEBjbGljaz1cInNhdmUxXCI+dGVzdCBzYXZlPC9idXR0b24+IC0tPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L2Zvcm0+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgbmZjIGZyb20gJ0AvanNfc2RrL2hleGlpaS1uZmMvaGV4aWlpLW5mYy5qcydcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDkuIvmi4nmoYbpgInpobnliJfooahcclxuXHRcdFx0XHRwaWNrZXJSYW5nZTogWycxZS01JywgJzFlLTQnLCAnMWUtMycsICcxZS0yJywgJ0RlZmF1bHQnXSxcclxuXHRcdFx0XHRhOiAwLjQsXHJcblx0XHRcdFx0YjogMC45LFxyXG5cdFx0XHRcdGM6IDAuMDA1LFxyXG5cdFx0XHRcdGQ6IDAuMDUsXHJcblx0XHRcdFx0ZTogJ0RlZmF1bHQnLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb25zKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcblx0XHRcdGlmIChvcHRpb25zLnNldHRpbmcpIHtcclxuXHJcblx0XHRcdFx0bGV0IHRlbXAgPSBvcHRpb25zLnNldHRpbmcuc3BsaXQoJywnKVxyXG5cdFx0XHRcdHRoaXMuYSA9IHRlbXBbMF07XHJcblx0XHRcdFx0dGhpcy5iID0gdGVtcFsxXTtcclxuXHRcdFx0XHR0aGlzLmMgPSB0ZW1wWzJdO1xyXG5cdFx0XHRcdHRoaXMuZCA9IHRlbXBbM107XHJcblx0XHRcdFx0dGhpcy5lID0gdGVtcFs0XTtcclxuXHRcdFx0fVxyXG5cdFx0XHRuZmMubGlzdGVuTkZDU3RhdHVzKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvblBpY2tlckNoYW5nZShldmVudCkge1xyXG5cdFx0XHRcdC8vIGV2ZW50LmRldGFpbC52YWx1ZSDmmK/pgInkuK3pobnnmoTntKLlvJVcclxuXHRcdFx0XHR0aGlzLmUgPSB0aGlzLnBpY2tlclJhbmdlW2V2ZW50LmRldGFpbC52YWx1ZV07XHJcblx0XHRcdH0sXHJcblx0XHRcdHJlYWQoKSB7XHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jLCB0aGlzLmQsIHRoaXMuZSk7XHJcblx0XHRcdFx0bmZjLnJlYWREYXRhKGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInNldFRpbWVvdXRcIilcclxuXHRcdFx0XHRcdG5mYy5pbml0UmVhZE5mY0FkYXB0ZXIoZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sIDUwMDApXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzYXZlMSgpIHtcclxuXHRcdFx0XHRuZmMud3JpdGVEYXRhKFxyXG5cdFx0XHRcdFx0YGIvMTA0ODUsMDEwMiwwMjAyLzEwNjE2LDAxMDQsMDIwNC8xMDc0NywwMTA2LDAyMDYvMTA4NzgsMDEwOCwwMjA4LzExMDA5LDAxMTAsMDIxMC8xMTE0MCwwMTEyLDAyMTIvMTEyNzEsMDExNCwwMjE0LzExNDAyLDAxMTYsMDIxNi8xMTUzMywwMTE4LDAyMTgvMTE2NjQsMDEyMCwwMjIwLzExNzk1LDAxMjIsMDIyMi8xMTkyNiwwMTI0LDAyMjQvMTIwNTcsMDEyNiwwMjI2LzEyMTg4LDAxMjgsMDIyOC8xMjMxOSwwMTMwLDAyMzAvMTI0NTAsMDEzMiwwMjMyLzEyNTgxLDAxMzQsMDIzNC8xMjcxMiwwMTM2LDAyMzYvMTI4NDMsMDEzOCwwMjM4LzEyOTc0LDAxNDAsMDI0MC8xMzEwNSwwMTQyLDAyNDIvMTMyMzYsMDE0NCwwMjQ0LzEzMzY3LDAxNDYsMDI0Ni8xMzQ5OCwwMTQ4LDAyNDhgXHJcblx0XHRcdFx0XHQsZnVuY3Rpb24oKXt9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2F2ZSgpIHtcclxuXHJcblx0XHRcdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0XHRpZiAodGhpcy5hIDwgMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5hID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYSA+IDEuNSkge1xyXG5cdFx0XHRcdFx0dGhpcy5hID0gMS41XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmIgPCAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmIgPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodGhpcy5iID4gMS41KSB7XHJcblx0XHRcdFx0XHR0aGlzLmIgPSAxLjVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYyA8IDAuMDAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmMgPSAwLjAwMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYyA+IDAuMDUpIHtcclxuXHRcdFx0XHRcdHRoaXMuYyA9IDAuMDVcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuZCA8IDAuMDAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmQgPSAwLjAwMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuZCA+IDAuMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5kID0gMC4xXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghdGhpcy5lKSB7XHJcblx0XHRcdFx0XHR0aGlzLmUgPSAnRGVmYXVsdCdcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmUpXHJcblxyXG5cdFx0XHRcdGxldCB3cml0ZURhdGEgPSBgYVske190aGlzLmF9LCR7X3RoaXMuYn0sJHtfdGhpcy5jfSwke190aGlzLmR9LCR7X3RoaXMuZX1dYDtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh3cml0ZURhdGEpXHJcblx0XHRcdFx0bmZjLndyaXRlRGF0YSh3cml0ZURhdGEsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0X3RoaXMuJGZ1bmMudXNlbWFsbC5jYWxsKCdhcHAvbXAvYWRkJyxcclxuXHRcdFx0XHRcdFx0YCR7X3RoaXMuYX0sJHtfdGhpcy5ifSwke190aGlzLmN9LCR7X3RoaXMuZH0sJHtfdGhpcy5lfWApLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Ly/mk43kvZzmiJDlip/ot7PovaxcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlcy5jb2RlLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzLnJlc3VsdC5kYXRhKVxyXG5cdFx0XHRcdFx0XHRcdGxldCBzZWNvbmQgPSAoX3RoaXMuYiAtIF90aGlzLmEpIC8gX3RoaXMuYyAqIDAuNTtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBzZWNvbmQsXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMzAwMFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coc2Vjb25kKVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy90YWJiYXIvY291bnRkb3duP2lkPSR7cmVzLnJlc3VsdC5kYXRhfSZzZWNvbmQ9JHtzZWNvbmR9JnNldHRpbmc9JHtfdGhpcy5hfSwke190aGlzLmJ9LCR7X3RoaXMuY30sJHtfdGhpcy5kfSwke190aGlzLmV9YFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdC5jb250YWluZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogNTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG5cdFx0aGVpZ2h0OiAxMDB2aDtcclxuXHR9XHJcblxyXG5cdC5oZWFkZXIge1xyXG5cdFx0Zm9udC1zaXplOiA2MHJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNjBycHg7XHJcblx0fVxyXG5cclxuXHQuZm9ybSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1heC13aWR0aDogNjAwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZvcm0taXRlbSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcnB4O1xyXG5cdH1cclxuXHJcblx0LmZvcm0tbGFiZWwge1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBycHg7XHJcblx0fVxyXG5cclxuXHQuZm9ybS1pbnB1dCB7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdHBhZGRpbmc6IDIwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzNnJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0XHRib3gtc2hhZG93OiAwIDRycHggMTJycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHR9XHJcblxyXG5cdC5idXR0b24tZ3JvdXAge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHR9XHJcblxyXG5cdC5hY3Rpb24tYnV0dG9uIHtcclxuXHRcdGZsZXgtZ3JvdzogMTtcclxuXHRcdG1hcmdpbjogMTBycHg7XHJcblx0XHRwYWRkaW5nOiAyMHJweDtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdhZmY7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHJweDtcclxuXHRcdGJveC1zaGFkb3c6IDAgNHJweCAxMnJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///65\n");

/***/ }),
/* 66 */
/*!****************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/history.vue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.vue?vue&type=template&id=30e1d66c&mpType=page */ 67);\n/* harmony import */ var _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.vue?vue&type=script&lang=js&mpType=page */ 69);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/tabbar/history.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0g7QUFDL0g7QUFDc0U7QUFDTDs7O0FBR2pFO0FBQ29MO0FBQ3BMLGdCQUFnQiw2TEFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSw2RkFBTTtBQUNSLEVBQUUsc0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2hpc3RvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMwZTFkNjZjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9oaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvdGFiYmFyL2hpc3RvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///66\n");

/***/ }),
/* 67 */
/*!**********************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/history.vue?vue&type=template&id=30e1d66c&mpType=page ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./history.vue?vue&type=template&id=30e1d66c&mpType=page */ 68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_0_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_template_id_30e1d66c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 68 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/history.vue?vue&type=template&id=30e1d66c&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "container"), attrs: { _i: 0 } },
    [
      _vm._$s(1, "i", _vm.loading)
        ? _c("view", {
            staticClass: _vm._$s(1, "sc", "loading"),
            attrs: { _i: 1 },
          })
        : _c("view", [
            _c(
              "view",
              { staticClass: _vm._$s(3, "sc", "list"), attrs: { _i: 3 } },
              _vm._l(
                _vm._$s(4, "f", { forItems: _vm.itemList }),
                function (item, index, $20, $30) {
                  return _c(
                    "view",
                    {
                      key: _vm._$s(4, "f", { forIndex: $20, key: index }),
                      staticClass: _vm._$s("4-" + $30, "sc", "item"),
                      attrs: { _i: "4-" + $30 },
                      on: {
                        click: function ($event) {
                          return _vm.detail(item)
                        },
                      },
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("5-" + $30, "sc", "item-info"),
                          attrs: { _i: "5-" + $30 },
                        },
                        [
                          _vm._v(
                            _vm._$s("5-" + $30, "t0-0", _vm._s(item.setting))
                          ),
                        ]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("6-" + $30, "sc", "item-info"),
                          attrs: { _i: "6-" + $30 },
                        },
                        [
                          _vm._v(
                            _vm._$s(
                              "6-" + $30,
                              "t0-0",
                              _vm._s(
                                _vm.$api.format(
                                  item.create_time,
                                  "yyyy/MM/dd hh:mm:ss"
                                )
                              )
                            )
                          ),
                        ]
                      ),
                    ]
                  )
                }
              ),
              0
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(7, "sc", "button-group"),
                attrs: { _i: 7 },
              },
              [
                _c("button", {
                  staticClass: _vm._$s(8, "sc", "button"),
                  attrs: { _i: 8 },
                  on: { click: _vm.back },
                }),
                _c("button", {
                  staticClass: _vm._$s(9, "sc", "button"),
                  attrs: { _i: 9 },
                  on: { click: _vm.loadMore },
                }),
              ]
            ),
          ]),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 69 */
/*!****************************************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/history.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./history.vue?vue&type=script&lang=js&mpType=page */ 70);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_history_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXltQixDQUFnQix3b0JBQUcsRUFBQyIsImZpbGUiOiI2OS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGlzdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oaXN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///69\n");

/***/ }),
/* 70 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/pages/tabbar/history.vue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 23));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      itemList: [],\n      // 存储查询到的列表数据\n      loading: false,\n      // 标识是否正在加载数据\n      currentPage: 1,\n      // 当前页码\n      pageSize: 10 // 每页显示的数据条数\n    };\n  },\n  onLoad: function onLoad() {\n    // 页面加载时自动执行查询操作\n    // this.queryList();\n  },\n  onShow: function onShow() {\n    // 页面加载时自动执行查询操作\n    this.queryList();\n  },\n  methods: {\n    queryList: function queryList() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var that;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                that = _this;\n                try {\n                  _this.loading = true; // 设置 loading 状态为 true，表示正在加载数据\n                  // 发送 HTTP GET 请求获取数据，假设接口地址为 '/api/queryList'\n                  _this.$func.usemall.call('app/mp/list', {}).then(function (resGet) {\n                    __f__(\"log\", resGet.result.data, \" at pages/tabbar/history.vue:45\");\n                    that.itemList = resGet.result.data;\n                    that.loading = false;\n                    // for(let i=0;i<resGet.result.data.length;i++) {\n                    //     that.itemList = response.data;\n                    // }\n                  });\n                } catch (error) {\n                  __f__(\"error\", 'Error fetching data:', error, \" at pages/tabbar/history.vue:54\");\n                } finally {\n                  // 请求结束，设置 loading 状态为 false\n                }\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    detail: function detail(item) {\n      uni.navigateTo({\n        url: \"/pages/tabbar/start?setting=\".concat(item.setting, \"&arr=\").concat(item.arr)\n      });\n    },\n    back: function back() {\n      // 返回上一页\n      uni.navigateTo({\n        url: \"/pages/tabbar/home\"\n      });\n    },\n    loadMore: function loadMore() {\n      uni.navigateTo({\n        url: \"/pages/tabbar/more\"\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL2hpc3RvcnkudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJpdGVtTGlzdCIsImxvYWRpbmciLCJjdXJyZW50UGFnZSIsInBhZ2VTaXplIiwib25Mb2FkIiwib25TaG93IiwibWV0aG9kcyIsInF1ZXJ5TGlzdCIsInRoYXQiLCJkZXRhaWwiLCJ1bmkiLCJ1cmwiLCJiYWNrIiwibG9hZE1vcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFvQkE7RUFDQUE7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0VBQUEsQ0FDQTtFQUNBQztJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBQztNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7WUFBQTtjQUFBO2dCQUNBQztnQkFDQTtrQkFDQTtrQkFDQTtrQkFDQTtvQkFDQTtvQkFDQUE7b0JBQ0FBO29CQUNBO29CQUNBO29CQUNBO2tCQUNBO2dCQUVBO2tCQUNBO2dCQUNBO2tCQUNBO2dCQUFBO2NBQ0E7Y0FBQTtnQkFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBO0lBQ0E7SUFDQUM7TUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQUY7UUFDQUM7TUFDQTtJQUNBO0lBQ0FFO01BQ0FIO1FBQ0FDO01BQ0E7SUFDQTtFQUNBO0FBQ0E7QUFBQSwyQiIsImZpbGUiOiI3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8dmlldyB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZ1wiPkxvYWRpbmcuLi48L3ZpZXc+XG4gICAgPHZpZXcgdi1lbHNlPlxuICAgICAgPHZpZXcgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBpdGVtTGlzdFwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwiaXRlbVwiIEBjbGljaz1cImRldGFpbChpdGVtKVwiPlxuICAgICAgICAgIDwhLS0g5pi+56S65YiX6KGo6aG555qE5YaF5a65IC0tPlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS1pbmZvXCI+e3sgaXRlbS5zZXR0aW5nIH19PC90ZXh0PlxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiaXRlbS1pbmZvXCI+e3sgJGFwaS5mb3JtYXQoaXRlbS5jcmVhdGVfdGltZSwgJ3l5eXkvTU0vZGQgaGg6bW06c3MnKSB9fTwvdGV4dD5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgICAgPHZpZXcgY2xhc3M9XCJidXR0b24tZ3JvdXBcIj5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJiYWNrXCIgY2xhc3M9XCJidXR0b25cIj5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwibG9hZE1vcmVcIiBjbGFzcz1cImJ1dHRvblwiPk1vcmU8L2J1dHRvbj5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbUxpc3Q6IFtdLCAvLyDlrZjlgqjmn6Xor6LliLDnmoTliJfooajmlbDmja5cbiAgICAgICAgbG9hZGluZzogZmFsc2UsIC8vIOagh+ivhuaYr+WQpuato+WcqOWKoOi9veaVsOaNrlxuICAgICAgICBjdXJyZW50UGFnZTogMSwgLy8g5b2T5YmN6aG156CBXG4gICAgICAgIHBhZ2VTaXplOiAxMCwgLy8g5q+P6aG15pi+56S655qE5pWw5o2u5p2h5pWwXG4gICAgICB9O1xuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgLy8g6aG16Z2i5Yqg6L295pe26Ieq5Yqo5omn6KGM5p+l6K+i5pON5L2cXG4gICAgICAvLyB0aGlzLnF1ZXJ5TGlzdCgpO1xuICAgIH0sXG5cdG9uU2hvdygpIHtcblx0ICAvLyDpobXpnaLliqDovb3ml7boh6rliqjmiafooYzmn6Xor6Lmk43kvZxcblx0ICB0aGlzLnF1ZXJ5TGlzdCgpO1xuXHR9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIHF1ZXJ5TGlzdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7IC8vIOiuvue9riBsb2FkaW5nIOeKtuaAgeS4uiB0cnVl77yM6KGo56S65q2j5Zyo5Yqg6L295pWw5o2uXG4gICAgICAgICAgLy8g5Y+R6YCBIEhUVFAgR0VUIOivt+axguiOt+WPluaVsOaNru+8jOWBh+iuvuaOpeWPo+WcsOWdgOS4uiAnL2FwaS9xdWVyeUxpc3QnXG4gICAgICAgICAgdGhpcy4kZnVuYy51c2VtYWxsLmNhbGwoJ2FwcC9tcC9saXN0Jywge30pLnRoZW4ocmVzR2V0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc0dldC5yZXN1bHQuZGF0YSlcbiAgICAgICAgICAgIHRoYXQuaXRlbUxpc3QgPSByZXNHZXQucmVzdWx0LmRhdGFcblx0XHRcdHRoYXQubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gZm9yKGxldCBpPTA7aTxyZXNHZXQucmVzdWx0LmRhdGEubGVuZ3RoO2krKykge1xuICAgICAgICAgICAgLy8gICAgIHRoYXQuaXRlbUxpc3QgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgLy8g6K+35rGC57uT5p2f77yM6K6+572uIGxvYWRpbmcg54q25oCB5Li6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG5cdCAgZGV0YWlsKGl0ZW0pIHtcblx0XHQgIHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHQgICAgdXJsOiBgL3BhZ2VzL3RhYmJhci9zdGFydD9zZXR0aW5nPSR7aXRlbS5zZXR0aW5nfSZhcnI9JHtpdGVtLmFycn1gXG5cdFx0ICB9KTtcblx0ICB9LFxuICAgICAgYmFjaygpIHtcbiAgICAgICAgLy8g6L+U5Zue5LiK5LiA6aG1XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6IGAvcGFnZXMvdGFiYmFyL2hvbWVgXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGxvYWRNb3JlKCkge1xuXHRcdCAgdW5pLm5hdmlnYXRlVG8oe1xuXHRcdCAgICB1cmw6IGAvcGFnZXMvdGFiYmFyL21vcmVgXG5cdFx0ICB9KTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgLmNvbnRhaW5lciB7XG5cdCAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuXG4gIC5saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5pdGVtLWluZm8ge1xuICAgIGZsZXg6IDE7IC8qIOS9v+aWh+acrOWGheWuueiHquWKqOWhq+WFheWuveW6piAqL1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgLyog6K6+572u6Ze06LedICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyog6LaF5Ye66YOo5YiG6ZqQ6JePICovXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIOaWh+acrOa6ouWHuuaXtuaYvuekuuecgeeVpeWPtyAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIOS4jeaNouihjCAqL1xuICB9XG5cbiAgLmxvYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuYnV0dG9uLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAuYnV0dG9uIHtcblx0XG4gICAgcGFkZGluZzogMTBweCA1MHB4O1xuXHRtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///70\n");

/***/ }),
/* 71 */
/*!***********************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/App.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 72);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 44);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDb0w7QUFDcEwsZ0JBQWdCLDZMQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///71\n");

/***/ }),
/* 72 */
/*!************************************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 73);\n/* harmony import */ var _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_1_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBsQixDQUFnQix5bkJBQUcsRUFBQyIsImZpbGUiOiI3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTctMSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNy0xIUQ6XFxcXFByb2dyYW0gRmlsZXNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///72\n");

/***/ }),
/* 73 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vuex = __webpack_require__(/*! vuex */ 43);\nvar _common = _interopRequireDefault(__webpack_require__(/*! common/common.js */ 74));\nvar _config = _interopRequireDefault(__webpack_require__(/*! common/config.js */ 75));\n/**\n * vuex 管理登陆状态，具体可以参考官方登陆模板示例 \n */\n\nvar db = uniCloud.database();\nvar _default = {\n  computed: {},\n  methods: {},\n  onLaunch: function onLaunch(options) {\n    __f__(\"log\", 'App Launch', options, _config.default, \" at App.vue:22\");\n  },\n  onShow: function onShow(options) {\n    // console.log('App Show', options);\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:29\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJkYiIsInVuaUNsb3VkIiwiZGF0YWJhc2UiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJvbkxhdW5jaCIsIm9wdGlvbnMiLCJjb25maWciLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsRUFBRSxHQUFHQyxRQUFRLENBQUNDLFFBQVEsRUFBRTtBQUFDLGVBRWhCO0VBQ2RDLFFBQVEsRUFBRSxDQUNWLENBQUM7RUFDREMsT0FBTyxFQUFFLENBRVQsQ0FBQztFQUNEQyxRQUFRLEVBQUUsa0JBQVNDLE9BQU8sRUFBRTtJQUMzQixhQUFZLFlBQVksRUFBRUEsT0FBTyxFQUFFQyxlQUFNO0VBRTFDLENBQUM7RUFDREMsTUFBTSxFQUFFLGdCQUFTRixPQUFPLEVBQUU7SUFDekI7RUFBQSxDQUNBO0VBQ0RHLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkI7QUFDRCxDQUFDO0FBQUEsMkIiLCJmaWxlIjoiNzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogdnVleCDnrqHnkIbnmbvpmYbnirbmgIHvvIzlhbfkvZPlj6/ku6Xlj4LogIPlrpjmlrnnmbvpmYbmqKHmnb/npLrkvosgXG4gKi9cbmltcG9ydCB7XG5cdG1hcFN0YXRlLFxuXHRtYXBNdXRhdGlvbnNcbn0gZnJvbSAndnVleCc7XG5cbmltcG9ydCB1YXBpIGZyb20gJ2NvbW1vbi9jb21tb24uanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICdjb21tb24vY29uZmlnLmpzJztcblxuY29uc3QgZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXB1dGVkOiB7XG5cdH0sXG5cdG1ldGhvZHM6IHtcblx0XHRcblx0fSxcblx0b25MYXVuY2g6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcsIG9wdGlvbnMsIGNvbmZpZyk7XG5cblx0fSxcblx0b25TaG93OiBmdW5jdGlvbihvcHRpb25zKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ0FwcCBTaG93Jywgb3B0aW9ucyk7XG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///73\n");

/***/ }),
/* 74 */
/*!********************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/common/common.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 16));\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 5));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 23));\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 7));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 32));\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 33));\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 75));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar menuButtonInfo = {\n  top: 6,\n  width: 0,\n  height: 30\n};\nvar Common = /*#__PURE__*/function () {\n  function Common(arg) {\n    (0, _classCallCheck2.default)(this, Common);\n    this.navbar = menuButtonInfo;\n    this.menuButtonInfo = menuButtonInfo;\n    this.navbarTitleHeight = menuButtonInfo.height;\n    this.navbarHeight = menuButtonInfo.top + menuButtonInfo.height + 6;\n    __f__(\"log\", 'menuButtonInfo', menuButtonInfo, \" at common/common.js:30\");\n  }\n\n  /**\r\n   * @description 日期格式化\r\n   */\n  (0, _createClass2.default)(Common, [{\n    key: \"format\",\n    value: function format(date, fmt) {\n      if (typeof date === 'string') {\n        date = date.replace(/\\.|\\-/g, '/');\n      }\n      if ((0, _typeof2.default)(date) !== 'object') {\n        date = new Date(date);\n      }\n      fmt = fmt || 'yyyy-MM-dd hh:mm:ss';\n      var o = {\n        \"M+\": date.getMonth() + 1,\n        //月份   \n        \"d+\": date.getDate(),\n        //日   \n        \"h+\": date.getHours(),\n        //小时   \n        \"m+\": date.getMinutes(),\n        //分   \n        \"s+\": date.getSeconds(),\n        //秒\n        \"q+\": Math.floor((date.getMonth() + 3) / 3),\n        //季度\n        \"S\": date.getMilliseconds() //毫秒\n      };\n\n      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + \"\").substr(4 - RegExp.$1.length));\n      for (var k in o) {\n        if (new RegExp(\"(\" + k + \")\").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : (\"00\" + o[k]).substr((\"\" + o[k]).length));\n      }\n      return fmt;\n    }\n  }, {\n    key: \"format_price\",\n    value: function format_price(_number, _sep) {\n      _number = typeof _number != \"undefined\" && _number > 0 ? _number + '' : \"\";\n      if (_number.indexOf('.') != -1) {\n        _number = _number.split('.')[0];\n      }\n      _number = _number.replace(new RegExp(\"^(\\\\d{\" + (_number.length % 3 ? _number.length % 3 : 0) + \"})(\\\\d{3})\", \"g\"), \"$1 $2\").replace(/(\\d{3})+?/gi, \"$1 \").trim();\n      if (typeof _sep != \"undefined\" && _sep != \" \") {\n        _number = _number.replace(/\\s/g, _sep);\n      }\n      return _number;\n    }\n  }, {\n    key: \"get_price_decimal\",\n    value: function get_price_decimal(_price) {\n      _price = _price + '';\n      if (_price.indexOf('.') != -1) {\n        return '.' + _price.split('.')[1];\n      } else {\n        _price = Math.random(2).toFixed(2);\n      }\n      return this.get_price_decimal(_price);\n    }\n\n    /**\r\n     * @description 数值格式化\r\n     */\n  }, {\n    key: \"format_number\",\n    value: function format_number(number) {\n      try {\n        number = parseFloat(number);\n        if (isNaN(number)) return 0;\n        if (number > 10000 * 1000) {\n          return (number / (10000 * 10000)).toFixed(1) + '亿';\n        }\n        if (number > 10000) {\n          return (number / (10000 * 1)).toFixed(1) + '万';\n        }\n        return number;\n      } catch (e) {\n        return number;\n      }\n    }\n\n    /**\r\n     * @description float 格式化，防止 js 精度丢失\r\n     */\n  }, {\n    key: \"format_float\",\n    value: function format_float(number) {\n      number = parseFloat(number);\n      if (isNaN(number)) return 0;\n      number = parseInt((number * 100).toFixed(2));\n      return number / 100;\n    }\n\n    /**\r\n     * @description float 格式化，防止 js 精度丢失\r\n     */\n  }, {\n    key: \"format_int\",\n    value: function format_int(number) {\n      number = parseFloat(number);\n      if (isNaN(number)) return 0;\n      number = parseInt(number.toFixed(0));\n      return number;\n    }\n\n    /**\r\n     * @description 全球唯一 guid\r\n     */\n  }, {\n    key: \"guid\",\n    value: function guid() {\n      return this.__s4() + this.__s4() + \"-\" + this.__s4() + \"-\" + this.__s4() + \"-\" + this.__s4() + \"-\" + this.__s4() + this.__s4() + this.__s4();\n    }\n  }, {\n    key: \"__s4\",\n    value: function __s4() {\n      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);\n    }\n\n    /**\r\n     * @description 消息提示 toast\r\n     */\n  }, {\n    key: \"msg\",\n    value: function msg(title) {\n      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;\n      var mask = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n      var icon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'none';\n      if (!title) return;\n      if (typeof title !== 'string') title = JSON.stringify(title);\n      uni.showToast({\n        title: title,\n        duration: duration,\n        mask: mask,\n        icon: icon\n      });\n    }\n\n    /**\r\n     * @description 消息提示 alert\r\n     */\n  }, {\n    key: \"alert\",\n    value: function alert(content, callback) {\n      if (typeof content !== 'string') content = JSON.stringify(content);\n      uni.showModal({\n        // title: '提示',\n        content: content,\n        showCancel: false,\n        success: function success(res) {\n          if (res.confirm) {\n            if (typeof callback === 'function') {\n              callback();\n            }\n          } else if (res.cancel) {}\n        }\n      });\n    }\n\n    /**\r\n     * @description 获取路径参数\r\n     */\n  }, {\n    key: \"get_params\",\n    value: function get_params(data) {\n      var params = '';\n      if ((0, _typeof2.default)(data) === 'object') {\n        for (var _ in data) {\n          params += '&' + encodeURIComponent(_) + '=' + encodeURIComponent(data[_]);\n        }\n        params = '?' + params.slice(1);\n      } else if (typeof data === 'string') {\n        if (data.indexOf('?') != -1) params = data;else params = '?' + data;\n      } else {\n        params = data;\n      }\n      return params;\n    }\n\n    /**\r\n     * @param {Object} url路径\r\n     * @description 获取路径参数对象\r\n     */\n  }, {\n    key: \"request\",\n    value: function request(url) {\n      var href = decodeURIComponent(url || location.href).split('#')[0];\n      if (href.indexOf('?') == -1) return {};\n      var params = href.split('?')[1];\n      if (params === \"\") return {};\n      params = params || '';\n      var obj = {};\n      if (params.indexOf('&') <= -1) {\n        obj[params.split('=')[0]] = params.split('=')[1];\n        return obj;\n      }\n      var arr = params.split('&'),\n        len = arr.length,\n        i = 0;\n      for (i = 0; i < len; i++) {\n        if (arr[i] != \"\") {\n          obj[arr[i].split('=')[0]] = arr[i].split('=')[1];\n        }\n      }\n      return obj;\n    }\n\n    /**\r\n     * @description 去除两端空格\r\n     * */\n  }, {\n    key: \"trim\",\n    value: function trim(str) {\n      return str.replace(/\\s+/g, \"\");\n    }\n\n    /**\r\n     * @description 注册当前环境\r\n     * */\n  }, {\n    key: \"register_env\",\n    value: function register_env(callback) {\n      var _this = this;\n      uni.getSystemInfo({\n        success: function success(sis) {\n          var env = {\n            platform: ''\n          };\n          env.brand = sis.brand;\n          env.language = sis.language;\n          env.model = sis.model;\n          env.platform = sis.platform;\n          env.screenHeight = sis.screenHeight;\n          env.screenWidth = sis.screenWidth;\n          env.statusBarHeight = sis.statusBarHeight;\n          env.system = sis.system;\n          env.version = sis.version;\n          env.windowHeight = sis.windowHeight;\n          env.windowWidth = sis.windowWidth;\n          env.pixelRatio = sis.pixelRatio;\n          env.pixelRatio = sis.pixelRatio;\n          env.mobileType = sis.platform;\n          env.is_mp = false;\n          env.is_wx = false;\n          env.is_h5 = false;\n          env.is_app = false;\n\n          // 计算底部安全区域距离\n          env.safeBottom = sis.screenHeight - sis.safeArea.height - env.statusBarHeight;\n          if (env.safeBottom == 0) env.safeBottom = 12;\n          env.platform = \"app\";\n          env.platform_name = \"app\";\n          env.is_app = true;\n          env.runtime = {};\n          for (var key in plus.runtime) {\n            if (typeof plus.runtime[key] === 'function') continue;\n            env.runtime[key] = plus.runtime[key];\n          }\n          if (plus.runtime.isApplicationExist({\n            pname: 'com.tencent.mm',\n            action: 'weixin://'\n          })) {\n            __f__(\"log\", \"微信应用已安装\", \" at common/common.js:350\");\n          } else {\n            __f__(\"log\", \"微信应用未安装\", \" at common/common.js:352\");\n          }\n          env.os = {};\n          for (var _key in plus.os) {\n            if (typeof plus.os[_key] === 'function') continue;\n            env.os[_key] = plus.os[_key].toLowerCase();\n          }\n          env.platform_icon = \"icon\" + env.platform;\n          env.sis = sis;\n          uni.getNetworkType({\n            success: function success(res) {\n              __f__(\"log\", res.networkType, \" at common/common.js:366\");\n              env.networkType = res.networkType;\n            },\n            complete: function complete() {\n              __f__(\"log\", 'set storage env', env, \" at common/common.js:370\");\n              _this.env = env;\n              if (env.statusBarHeight) {\n                _this.navbar.top = env.statusBarHeight + 6;\n                _this.navbar.statusBarHeight = env.statusBarHeight;\n                _this.navbarHeight = _this.navbar.top + menuButtonInfo.height + 6;\n                __f__(\"log\", 'navbar', _this.navbar, \" at common/common.js:376\");\n              }\n              uni.setStorage({\n                key: '__env',\n                data: env\n              });\n              if (typeof callback === 'function') {\n                callback(env);\n              }\n            }\n          });\n        }\n      });\n    }\n\n    /**\r\n     * @description 运行环境\r\n     * */\n  }, {\n    key: \"get_env\",\n    value: function get_env(callback) {\n      // return uni.getStorageSync('env');\n      uni.getStorage({\n        key: '__env',\n        success: function success(res) {\n          if (typeof callback === 'function') {\n            callback(res.data || {});\n          }\n        }\n      });\n    }\n  }, {\n    key: \"dom\",\n    value: function dom(a, b) {\n      if (arguments.length === 1 && typeof arguments[0] == 'string') {\n        if (document.querySelector) {\n          return document.querySelector(arguments[0]);\n        }\n      } else if (arguments.length === 2) {\n        if (typeof a === 'string') a = this.dom(a);\n        if (a.querySelector) {\n          return a.querySelector(b);\n        }\n      }\n      return a;\n    }\n  }, {\n    key: \"domAll\",\n    value: function domAll(a, b) {\n      if (arguments.length === 1 && typeof arguments[0] == 'string') {\n        if (document.querySelectorAll) {\n          return document.querySelectorAll(arguments[0]);\n        }\n      } else if (arguments.length === 2) {\n        if (typeof a === 'string') a = this.dom(a);\n        if (a.querySelectorAll) {\n          return a.querySelectorAll(b);\n        }\n      }\n      return a;\n    }\n\n    /**\r\n     * @description 打印 info 日志\r\n     * */\n  }, {\n    key: \"info\",\n    value: function info(msg) {\n      __f__(\"info\", msg, \" at common/common.js:443\");\n    }\n\n    /**\r\n     * @description 当前页面数组\r\n     * */\n  }, {\n    key: \"pages\",\n    value: function pages() {\n      return getCurrentPages();\n    }\n\n    /**\r\n     * @description 返回上一级页面|跳转首页\r\n     * */\n  }, {\n    key: \"back\",\n    value: function back() {\n      if (getCurrentPages().length > 1) {\n        uni.navigateBack({});\n        return;\n      }\n      this.tohome();\n    }\n\n    /**\r\n     * @description 指定元素选择器 offset\r\n     */\n  }, {\n    key: \"offset\",\n    value: function offset(selector, callback) {\n      var query = uni.createSelectorQuery().select(selector);\n      // console.log('offset query', query);\n      if (typeof callback === 'function') {\n        query.boundingClientRect(function (res) {\n          callback(res);\n        });\n      }\n    }\n\n    /**\r\n     * @description 超时\r\n     */\n  }, {\n    key: \"timerout\",\n    value: function timerout(callback) {\n      var timer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;\n      var _timer = setTimeout(function () {\n        if (typeof callback === 'function') {\n          callback();\n        }\n        clearTimeout(_timer);\n      }, timer);\n    }\n\n    /**\r\n     * @description 复制\r\n     */\n  }, {\n    key: \"toCopy\",\n    value: function toCopy(content) {\n      uni.setClipboardData({\n        data: content,\n        success: function success(res) {\n          uni.showToast({\n            title: '复制成功'\n          });\n        }\n      });\n    }\n\n    /**\r\n     * @description 跳转登录页\r\n     */\n  }, {\n    key: \"tologin\",\n    value: function tologin(redirect) {\n      if (redirect) {\n        uni.redirectTo({\n          url: _config.default.route.login\n        });\n        return;\n      }\n      uni.navigateTo({\n        url: _config.default.route.login\n      });\n    }\n\n    /**\r\n     * @description 跳转首页\r\n     */\n  }, {\n    key: \"tohome\",\n    value: function tohome() {\n      uni.switchTab({\n        url: _config.default.route.home\n      });\n    }\n\n    /**\r\n     * @description 跳转订单页\r\n     */\n  }, {\n    key: \"toorder\",\n    value: function toorder() {\n      uni.redirectTo({\n        url: _config.default.route.order\n      });\n    }\n\n    /**\r\n     * @description 跳转支付页\r\n     */\n  }, {\n    key: \"topay\",\n    value: function topay(params) {\n      params.money = params.money || 0;\n      params.type = params.type || 'navigate';\n      if (params.type == 'redirect') {\n        uni.redirectTo({\n          url: _config.default.route.pay + this.get_params(params)\n        });\n        return;\n      }\n      uni.navigateTo({\n        url: _config.default.route.pay + this.get_params(params)\n      });\n    }\n\n    /**\r\n     * @description 跳转搜索页\r\n     */\n  }, {\n    key: \"tosearch\",\n    value: function tosearch() {\n      uni.reLaunch({\n        url: _config.default.route.search\n      });\n    }\n\n    /**\r\n     * @description 跳转产品详情页\r\n     */\n  }, {\n    key: \"togoods\",\n    value: function togoods(params) {\n      __f__(\"log\", 'togoods params', params, \" at common/common.js:570\");\n      uni.navigateTo({\n        url: _config.default.route.goods + this.get_params(params)\n      });\n    }\n\n    /**\r\n     * @description 跳转产品列表页\r\n     */\n  }, {\n    key: \"togoodslist\",\n    value: function togoodslist(params) {\n      uni.navigateTo({\n        url: _config.default.route.goodslist + this.get_params(params)\n      });\n    }\n\n    /**\r\n     * @description 跳转指定 url\r\n     */\n  }, {\n    key: \"toPage\",\n    value: function toPage(url) {\n      uni.navigateTo({\n        url: url\n      });\n    }\n\n    /**\r\n     * @description 自定义状态栏高度\r\n     */\n  }, {\n    key: \"navbarHeight\",\n    value: function navbarHeight() {\n      var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),\n        platform = _uni$getSystemInfoSyn.platform,\n        statusBarHeight = _uni$getSystemInfoSyn.statusBarHeight;\n      var height = statusBarHeight;\n      height += 4;\n      if (platform == 'android') {\n        height += 4;\n      }\n      return height + 32 + 6;\n    }\n\n    /**\r\n     * @description 获取路径文件名称\r\n     */\n  }, {\n    key: \"getFileName\",\n    value: function getFileName(path) {\n      if (path.indexOf('/') === -1) return path;\n      return path.split('/').reverse()[0];\n    }\n\n    /**\r\n     * @description 上传文件\r\n     */\n  }, {\n    key: \"uploadFile\",\n    value: function () {\n      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(url, path, progress) {\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                return _context2.abrupt(\"return\", new Promise(function (resolve, reject) {\n                  uniCloud.uploadFile({\n                    filePath: url,\n                    cloudPath: path,\n                    onUploadProgress: function onUploadProgress(progressEvent) {\n                      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);\n                      if (typeof progress === 'function') {\n                        progress(percentCompleted, progressEvent);\n                      }\n                    }\n                  }).then( /*#__PURE__*/function () {\n                    var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(uRes) {\n                      var tempRes;\n                      return _regenerator.default.wrap(function _callee$(_context) {\n                        while (1) {\n                          switch (_context.prev = _context.next) {\n                            case 0:\n                              __f__(\"log\", 'use-upload', uRes, \" at common/common.js:637\");\n                              uRes.url = uRes.fileID;\n                              // 兼容腾讯云上传文件\n                              if (!(uRes.url.indexOf('cloud://') != -1)) {\n                                _context.next = 7;\n                                break;\n                              }\n                              _context.next = 5;\n                              return uniCloud.getTempFileURL({\n                                fileList: [uRes.url]\n                              });\n                            case 5:\n                              tempRes = _context.sent;\n                              if (tempRes.fileList && tempRes.fileList.length > 0) {\n                                uRes.url = tempRes.fileList[0].tempFileURL;\n                              }\n                            case 7:\n                              resolve(uRes);\n                            case 8:\n                            case \"end\":\n                              return _context.stop();\n                          }\n                        }\n                      }, _callee);\n                    }));\n                    return function (_x4) {\n                      return _ref.apply(this, arguments);\n                    };\n                  }()).catch(function (err) {\n                    __f__(\"log\", 'use-upload', err, \" at common/common.js:652\");\n                    reject(err);\n                  });\n                }));\n              case 1:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n      function uploadFile(_x, _x2, _x3) {\n        return _uploadFile.apply(this, arguments);\n      }\n      return uploadFile;\n    }() // 获取 uni-sec-check 安全内容检测响应消息\n  }, {\n    key: \"getSecMessage\",\n    value: function getSecMessage(res) {\n      switch (res.errCode) {\n        case 'uni-sec-check-system-error':\n          return '系统错误，操作失败';\n        case 'uni-sec-check-risk-content':\n          var type = res.type || '';\n          if (typeof res.idx === 'number') {\n            return \"\".concat(type, \"[\").concat(res.idx++, \"]\\u5B58\\u5728\\u98CE\\u9669\\u5185\\u5BB9\");\n          }\n          return \"\".concat(type, \"\\u5B58\\u5728\\u98CE\\u9669\\u5185\\u5BB9\");\n        case 'uni-sec-check-invalid-file-type':\n          return '错误的文件类型';\n        case 'uni-sec-check-invalid-image-size':\n          return '图片大小超出限制';\n        case 'uni-sec-check-invoke-out-of-limit':\n          return '调用过于频繁，稍后再试';\n        default:\n          return \"\".concat(res.errCode, \" \").concat(res.errMsg);\n      }\n    }\n\n    // 版本号比较\n  }, {\n    key: \"compareVersion\",\n    value: function compareVersion(curr, prev) {\n      var prevs = prev.split('.');\n      var currs = curr.split('.');\n      var flag = false;\n      var prevVal = 0;\n      var currVal = 0;\n      for (var i = 0; i < currs.length; i++) {\n        prevVal = parseInt(prevs[i]);\n        currVal = parseInt(currs[i]);\n        if (prevVal > currVal) {\n          break;\n        }\n        if (currVal > prevVal) {\n          flag = true;\n          break;\n        }\n      }\n      return flag;\n    }\n\n    // 微信内部浏览器\n  }, {\n    key: \"isInternalWeixin\",\n    value: function isInternalWeixin() {\n      // 测试阶段，默认为 true\n      if (_config.default.debug) return true;\n      return location.href.indexOf('code') !== -1 && navigator.userAgent.toLowerCase().match(/MicroMessenger/i);\n    }\n\n    // 获取当前 page\n  }, {\n    key: \"getCurPage\",\n    value: function getCurPage() {\n      var pages = this.pages();\n      var curPage = pages[pages.length - 1];\n      return curPage;\n    }\n    // 获取当前 page 请求参数\n  }, {\n    key: \"getCurPageParamObj\",\n    value: function getCurPageParamObj() {\n      return this.getCurPage().options;\n    }\n    // 获取当前 page 请求参数\n  }, {\n    key: \"getCurPageParam\",\n    value: function getCurPageParam(param) {\n      var allowParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n      var page = this.getCurPage();\n      var options = [];\n      param = _objectSpread(_objectSpread({}, page.options), param);\n      for (var key in param) {\n        if (allowParams.length && !allowParams.includes(key)) {\n          continue;\n        }\n        options.push(\"\".concat(key, \"=\").concat(param[key]));\n      }\n      return options.join('&');\n    }\n    // 获取当前 page 完整请求 url\n  }, {\n    key: \"getCurPageFullUrl\",\n    value: function getCurPageFullUrl(param) {\n      var allowParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n      var page = this.getCurPage();\n      var options = this.getCurPageParam(param, allowParams);\n      return \"\".concat(page.route, \"?\").concat(options);\n    }\n    // 获取对应的设备类型\n  }, {\n    key: \"os\",\n    value: function os() {\n      var ua = navigator.userAgent,\n        isWindowsPhone = /(?:Windows Phone)/.test(ua),\n        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,\n        isAndroid = /(?:Android)/.test(ua),\n        isFireFox = /(?:Firefox)/.test(ua),\n        isChrome = /(?:Chrome|CriOS)/.test(ua),\n        isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua),\n        isPhone = /(?:iPhone)/.test(ua) && !isTablet,\n        isPc = !isPhone && !isAndroid && !isSymbian;\n      return {\n        isTablet: isTablet,\n        isPhone: isPhone,\n        isAndroid: isAndroid,\n        isPc: isPc\n      };\n    }\n    // pc 端\n  }, {\n    key: \"ispc\",\n    value: function ispc() {\n      var _this$os = this.os(),\n        isPc = _this$os.isPc;\n      return isPc;\n    }\n  }]);\n  return Common;\n}();\nvar _default = new Common();\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbW1vbi5qcyJdLCJuYW1lcyI6WyJtZW51QnV0dG9uSW5mbyIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiQ29tbW9uIiwiYXJnIiwibmF2YmFyIiwibmF2YmFyVGl0bGVIZWlnaHQiLCJuYXZiYXJIZWlnaHQiLCJkYXRlIiwiZm10IiwicmVwbGFjZSIsIkRhdGUiLCJvIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImdldE1pbGxpc2Vjb25kcyIsInRlc3QiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiayIsIl9udW1iZXIiLCJfc2VwIiwiaW5kZXhPZiIsInNwbGl0IiwidHJpbSIsIl9wcmljZSIsInJhbmRvbSIsInRvRml4ZWQiLCJnZXRfcHJpY2VfZGVjaW1hbCIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJpc05hTiIsImUiLCJwYXJzZUludCIsIl9fczQiLCJ0b1N0cmluZyIsInN1YnN0cmluZyIsInRpdGxlIiwiZHVyYXRpb24iLCJtYXNrIiwiaWNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmkiLCJzaG93VG9hc3QiLCJjb250ZW50IiwiY2FsbGJhY2siLCJzaG93TW9kYWwiLCJzaG93Q2FuY2VsIiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjYW5jZWwiLCJkYXRhIiwicGFyYW1zIiwiXyIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsaWNlIiwidXJsIiwiaHJlZiIsImRlY29kZVVSSUNvbXBvbmVudCIsImxvY2F0aW9uIiwib2JqIiwiYXJyIiwibGVuIiwiaSIsInN0ciIsIl90aGlzIiwiZ2V0U3lzdGVtSW5mbyIsInNpcyIsImVudiIsInBsYXRmb3JtIiwiYnJhbmQiLCJsYW5ndWFnZSIsIm1vZGVsIiwic2NyZWVuSGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJzdGF0dXNCYXJIZWlnaHQiLCJzeXN0ZW0iLCJ2ZXJzaW9uIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwaXhlbFJhdGlvIiwibW9iaWxlVHlwZSIsImlzX21wIiwiaXNfd3giLCJpc19oNSIsImlzX2FwcCIsInNhZmVCb3R0b20iLCJzYWZlQXJlYSIsInBsYXRmb3JtX25hbWUiLCJydW50aW1lIiwia2V5IiwicGx1cyIsImlzQXBwbGljYXRpb25FeGlzdCIsInBuYW1lIiwiYWN0aW9uIiwib3MiLCJ0b0xvd2VyQ2FzZSIsInBsYXRmb3JtX2ljb24iLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiY29tcGxldGUiLCJzZXRTdG9yYWdlIiwiZ2V0U3RvcmFnZSIsImEiLCJiIiwiYXJndW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZG9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm1zZyIsImdldEN1cnJlbnRQYWdlcyIsIm5hdmlnYXRlQmFjayIsInRvaG9tZSIsInNlbGVjdG9yIiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwidGltZXIiLCJfdGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInJlZGlyZWN0IiwicmVkaXJlY3RUbyIsIiRjb25maWciLCJyb3V0ZSIsImxvZ2luIiwibmF2aWdhdGVUbyIsInN3aXRjaFRhYiIsImhvbWUiLCJvcmRlciIsIm1vbmV5IiwidHlwZSIsInBheSIsImdldF9wYXJhbXMiLCJyZUxhdW5jaCIsInNlYXJjaCIsImdvb2RzIiwiZ29vZHNsaXN0IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwYXRoIiwicmV2ZXJzZSIsInByb2dyZXNzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ1bmlDbG91ZCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsImNsb3VkUGF0aCIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJwcm9ncmVzc0V2ZW50IiwicGVyY2VudENvbXBsZXRlZCIsInJvdW5kIiwibG9hZGVkIiwidG90YWwiLCJ0aGVuIiwidVJlcyIsImZpbGVJRCIsImdldFRlbXBGaWxlVVJMIiwiZmlsZUxpc3QiLCJ0ZW1wUmVzIiwidGVtcEZpbGVVUkwiLCJjYXRjaCIsImVyciIsImVyckNvZGUiLCJpZHgiLCJlcnJNc2ciLCJjdXJyIiwicHJldiIsInByZXZzIiwiY3VycnMiLCJmbGFnIiwicHJldlZhbCIsImN1cnJWYWwiLCJkZWJ1ZyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsIm1hdGNoIiwicGFnZXMiLCJjdXJQYWdlIiwiZ2V0Q3VyUGFnZSIsIm9wdGlvbnMiLCJwYXJhbSIsImFsbG93UGFyYW1zIiwicGFnZSIsImluY2x1ZGVzIiwicHVzaCIsImpvaW4iLCJnZXRDdXJQYWdlUGFyYW0iLCJ1YSIsImlzV2luZG93c1Bob25lIiwiaXNTeW1iaWFuIiwiaXNBbmRyb2lkIiwiaXNGaXJlRm94IiwiaXNDaHJvbWUiLCJpc1RhYmxldCIsImlzUGhvbmUiLCJpc1BjIl0sIm1hcHBpbmdzIjoiQUFBQSx1REFBYTs7QUFBQTtBQUFBO0VBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRWI7QUFBaUM7QUFBQTtBQUVqQyxJQUFJQSxjQUFjLEdBQUc7RUFDcEJDLEdBQUcsRUFBRSxDQUFDO0VBQ05DLEtBQUssRUFBRSxDQUFDO0VBQ1JDLE1BQU0sRUFBRTtBQUNULENBQUM7QUFBQyxJQWNJQyxNQUFNO0VBQ1gsZ0JBQVlDLEdBQUcsRUFBRTtJQUFBO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHTixjQUFjO0lBQzVCLElBQUksQ0FBQ0EsY0FBYyxHQUFHQSxjQUFjO0lBQ3BDLElBQUksQ0FBQ08saUJBQWlCLEdBQUdQLGNBQWMsQ0FBQ0csTUFBTTtJQUM5QyxJQUFJLENBQUNLLFlBQVksR0FBR1IsY0FBYyxDQUFDQyxHQUFHLEdBQUdELGNBQWMsQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFFbEUsYUFBWSxnQkFBZ0IsRUFBRUgs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QUFTLEdBQUcsYUFBYSxDQUFDekwsSUFBSSxDQUFDcUwsRUFBRSxDQUFDO1FBQ2xDSyxRQUFRLEdBQUcsa0JBQWtCLENBQUMxTCxJQUFJLENBQUNxTCxFQUFFLENBQUM7UUFDdENNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQzNMLElBQUksQ0FBQ3FMLEVBQUUsQ0FBQyxJQUFLRyxTQUFTLElBQUksQ0FBQyxZQUFZLENBQUN4TCxJQUFJLENBQUNxTCxFQUFFLENBQUUsSUFBS0ksU0FBUyxJQUFJLFlBQVksQ0FBQ3pMLElBQUksQ0FBQ3FMLEVBQUUsQ0FBRTtRQUN4SE8sT0FBTyxHQUFHLFlBQVksQ0FBQzVMLElBQUksQ0FBQ3FMLEVBQUUsQ0FBQyxJQUFJLENBQUNNLFFBQVE7UUFDNUNFLElBQUksR0FBRyxDQUFDRCxPQUFPLElBQUksQ0FBQ0osU0FBUyxJQUFJLENBQUNELFNBQVM7TUFFNUMsT0FBTztRQUNOSSxRQUFRLEVBQUVBLFFBQVE7UUFDbEJDLE9BQU8sRUFBRUEsT0FBTztRQUNoQkosU0FBUyxFQUFFQSxTQUFTO1FBQ3BCSyxJQUFJLEVBQUVBO01BQ1AsQ0FBQztJQUNGO0lBQ0E7RUFBQTtJQUFBO0lBQUEsT0FDQSxnQkFBTztNQUNMLGVBQWlCLElBQUksQ0FBQ3pHLEVBQUUsRUFBRTtRQUFsQnlHLElBQUksWUFBSkEsSUFBSTtNQUNiLE9BQU9BLElBQUk7SUFDWjtFQUFDO0VBQUE7QUFBQTtBQUFBLGVBSWEsSUFBSS9NLE1BQU0sRUFBRTtBQUFBLDJCIiwiZmlsZSI6Ijc0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0ICRjb25maWcgZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5sZXQgbWVudUJ1dHRvbkluZm8gPSB7XHJcblx0dG9wOiA2LFxyXG5cdHdpZHRoOiAwLFxyXG5cdGhlaWdodDogMzBcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIENvbW1vbiB7XHJcblx0Y29uc3RydWN0b3IoYXJnKSB7XHJcblx0XHR0aGlzLm5hdmJhciA9IG1lbnVCdXR0b25JbmZvO1xyXG5cdFx0dGhpcy5tZW51QnV0dG9uSW5mbyA9IG1lbnVCdXR0b25JbmZvO1xyXG5cdFx0dGhpcy5uYXZiYXJUaXRsZUhlaWdodCA9IG1lbnVCdXR0b25JbmZvLmhlaWdodDtcclxuXHRcdHRoaXMubmF2YmFySGVpZ2h0ID0gbWVudUJ1dHRvbkluZm8udG9wICsgbWVudUJ1dHRvbkluZm8uaGVpZ2h0ICsgNjtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coJ21lbnVCdXR0b25JbmZvJywgbWVudUJ1dHRvbkluZm8pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOaXpeacn+agvOW8j+WMllxyXG5cdCAqL1xyXG5cdGZvcm1hdChkYXRlLCBmbXQpIHtcclxuXHRcdGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuXHRcdFx0ZGF0ZSA9IGRhdGUucmVwbGFjZSgvXFwufFxcLS9nLCAnLycpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiBkYXRlICE9PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm10ID0gZm10IHx8ICd5eXl5LU1NLWRkIGhoOm1tOnNzJ1xyXG5cdFx0bGV0IG8gPSB7XHJcblx0XHRcdFwiTStcIjogZGF0ZS5nZXRNb250aCgpICsgMSwgLy/mnIjku70gICBcclxuXHRcdFx0XCJkK1wiOiBkYXRlLmdldERhdGUoKSwgLy/ml6UgICBcclxuXHRcdFx0XCJoK1wiOiBkYXRlLmdldEhvdXJzKCksIC8v5bCP5pe2ICAgXHJcblx0XHRcdFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCksIC8v5YiGICAgXHJcblx0XHRcdFwicytcIjogZGF0ZS5nZXRTZWNvbmRzKCksIC8v56eSXHJcblx0XHRcdFwicStcIjogTWF0aC5mbG9vcigoZGF0ZS5nZXRNb250aCgpICsgMykgLyAzKSwgLy/lraPluqZcclxuXHRcdFx0XCJTXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLy/mr6vnp5JcclxuXHRcdH07XHJcblx0XHRpZiAoLyh5KykvLnRlc3QoZm10KSlcclxuXHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoZGF0ZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XHJcblx0XHRmb3IgKGxldCBrIGluIG8pXHJcblx0XHRcdGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZtdCkpXHJcblx0XHRcdFx0Zm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSlcclxuXHRcdFx0XHRcdC5sZW5ndGgpKSk7XHJcblx0XHRyZXR1cm4gZm10O1xyXG5cdH1cclxuXHJcblx0Zm9ybWF0X3ByaWNlKF9udW1iZXIsIF9zZXApIHtcclxuXHRcdF9udW1iZXIgPSB0eXBlb2YgX251bWJlciAhPSBcInVuZGVmaW5lZFwiICYmIF9udW1iZXIgPiAwID8gX251bWJlciArICcnIDogXCJcIjtcclxuXHRcdGlmIChfbnVtYmVyLmluZGV4T2YoJy4nKSAhPSAtMSkge1xyXG5cdFx0XHRfbnVtYmVyID0gX251bWJlci5zcGxpdCgnLicpWzBdO1xyXG5cdFx0fVxyXG5cdFx0X251bWJlciA9IF9udW1iZXIucmVwbGFjZShuZXcgUmVnRXhwKFwiXihcXFxcZHtcIiArIChfbnVtYmVyLmxlbmd0aCAlIDMgPyBfbnVtYmVyLmxlbmd0aCAlIDMgOiAwKSArXHJcblx0XHRcdFx0XCJ9KShcXFxcZHszfSlcIiwgXCJnXCIpLFxyXG5cdFx0XHRcIiQxICQyXCIpLnJlcGxhY2UoLyhcXGR7M30pKz8vZ2ksIFwiJDEgXCIpLnRyaW0oKVxyXG5cdFx0aWYgKHR5cGVvZiBfc2VwICE9IFwidW5kZWZpbmVkXCIgJiYgX3NlcCAhPSBcIiBcIikge1xyXG5cdFx0XHRfbnVtYmVyID0gX251bWJlci5yZXBsYWNlKC9cXHMvZywgX3NlcCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gX251bWJlcjtcclxuXHR9XHJcblxyXG5cdGdldF9wcmljZV9kZWNpbWFsKF9wcmljZSkge1xyXG5cdFx0X3ByaWNlID0gX3ByaWNlICsgJyc7XHJcblxyXG5cdFx0aWYgKF9wcmljZS5pbmRleE9mKCcuJykgIT0gLTEpIHtcclxuXHRcdFx0cmV0dXJuICcuJyArIF9wcmljZS5zcGxpdCgnLicpWzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X3ByaWNlID0gTWF0aC5yYW5kb20oMikudG9GaXhlZCgyKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5nZXRfcHJpY2VfZGVjaW1hbChfcHJpY2UpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g5pWw5YC85qC85byP5YyWXHJcblx0ICovXHJcblx0Zm9ybWF0X251bWJlcihudW1iZXIpIHtcclxuXHRcdHRyeXtcclxuXHRcdFx0bnVtYmVyID0gcGFyc2VGbG9hdChudW1iZXIpO1xyXG5cdFx0XHRpZiAoaXNOYU4obnVtYmVyKSkgcmV0dXJuIDA7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAobnVtYmVyID4gMTAwMDAgKiAxMDAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIChudW1iZXIgLyAoMTAwMDAgKiAxMDAwMCkpLnRvRml4ZWQoMSkgKyAn5Lq/JztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKG51bWJlciA+IDEwMDAwKSB7XHJcblx0XHRcdFx0cmV0dXJuIChudW1iZXIgLyAoMTAwMDAgKiAxKSkudG9GaXhlZCgxKSArICfkuIcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdCBcclxuXHRcdFx0IHJldHVybiBudW1iZXI7XHJcblx0XHR9IGNhdGNoKGUpIHtcclxuXHRcdFx0cmV0dXJuIG51bWJlcjtcclxuXHRcdH0gXHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiBmbG9hdCDmoLzlvI/ljJbvvIzpmLLmraIganMg57K+5bqm5Lii5aSxXHJcblx0ICovXHJcblx0Zm9ybWF0X2Zsb2F0KG51bWJlcikge1xyXG5cdFx0bnVtYmVyID0gcGFyc2VGbG9hdChudW1iZXIpO1xyXG5cdFx0aWYgKGlzTmFOKG51bWJlcikpIHJldHVybiAwO1xyXG5cdFx0XHJcblx0XHRudW1iZXIgPSBwYXJzZUludCgobnVtYmVyICogMTAwKS50b0ZpeGVkKDIpKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIG51bWJlciAvIDEwMDtcclxuXHR9XHJcblx0XHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIGZsb2F0IOagvOW8j+WMlu+8jOmYsuatoiBqcyDnsr7luqbkuKLlpLFcclxuXHQgKi9cclxuXHRmb3JtYXRfaW50KG51bWJlcikge1xyXG5cdFx0bnVtYmVyID0gcGFyc2VGbG9hdChudW1iZXIpO1xyXG5cdFx0aWYgKGlzTmFOKG51bWJlcikpIHJldHVybiAwO1xyXG5cdFx0XHJcblx0XHRudW1iZXIgPSBwYXJzZUludChudW1iZXIudG9GaXhlZCgwKSk7XHJcblx0XHRcclxuXHRcdHJldHVybiBudW1iZXI7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDlhajnkIPllK/kuIAgZ3VpZFxyXG5cdCAqL1xyXG5cdGd1aWQoKSB7XHJcblx0XHRyZXR1cm4gKHRoaXMuX19zNCgpICsgdGhpcy5fX3M0KCkgKyBcIi1cIiArIHRoaXMuX19zNCgpICsgXCItXCIgKyB0aGlzLl9fczQoKSArIFwiLVwiICsgdGhpcy5fX3M0KCkgKyBcIi1cIiArIHRoaXNcclxuXHRcdFx0Ll9fczQoKSArXHJcblx0XHRcdHRoaXMuX19zNCgpICsgdGhpcy5fX3M0KCkpO1xyXG5cdH1cclxuXHRfX3M0KCkge1xyXG5cdFx0cmV0dXJuICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApIHwgMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDmtojmga/mj5DnpLogdG9hc3RcclxuXHQgKi9cclxuXHRtc2codGl0bGUsIGR1cmF0aW9uID0gMTUwMCwgbWFzayA9IGZhbHNlLCBpY29uID0gJ25vbmUnKSB7XHJcblx0XHRpZiAoIXRpdGxlKSByZXR1cm47XHJcblx0XHRpZiAodHlwZW9mIHRpdGxlICE9PSAnc3RyaW5nJykgdGl0bGUgPSBKU09OLnN0cmluZ2lmeSh0aXRsZSk7XHJcblxyXG5cdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdHRpdGxlLFxyXG5cdFx0XHRkdXJhdGlvbixcclxuXHRcdFx0bWFzayxcclxuXHRcdFx0aWNvblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g5raI5oGv5o+Q56S6IGFsZXJ0XHJcblx0ICovXHJcblx0YWxlcnQoY29udGVudCwgY2FsbGJhY2spIHtcclxuXHRcdGlmICh0eXBlb2YgY29udGVudCAhPT0gJ3N0cmluZycpIGNvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShjb250ZW50KTtcclxuXHRcdFxyXG5cdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdC8vIHRpdGxlOiAn5o+Q56S6JyxcclxuXHRcdFx0Y29udGVudDogY29udGVudCxcclxuXHRcdFx0c2hvd0NhbmNlbDogZmFsc2UsXHJcblx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge31cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDojrflj5bot6/lvoTlj4LmlbBcclxuXHQgKi9cclxuXHRnZXRfcGFyYW1zKGRhdGEpIHtcclxuXHRcdGxldCBwYXJhbXMgPSAnJztcclxuXHRcdGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0Zm9yIChsZXQgXyBpbiBkYXRhKSB7XHJcblx0XHRcdFx0cGFyYW1zICs9ICcmJyArIGVuY29kZVVSSUNvbXBvbmVudChfKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW19dKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRwYXJhbXMgPSAnPycgKyBwYXJhbXMuc2xpY2UoMSk7XHJcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG5cdFx0XHRpZiAoZGF0YS5pbmRleE9mKCc/JykgIT0gLTEpIHBhcmFtcyA9IGRhdGE7XHJcblx0XHRcdGVsc2UgcGFyYW1zID0gJz8nICsgZGF0YTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcmFtcyA9IGRhdGE7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcmFtcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSB1cmzot6/lvoRcclxuXHQgKiBAZGVzY3JpcHRpb24g6I635Y+W6Lev5b6E5Y+C5pWw5a+56LGhXHJcblx0ICovXHJcblx0cmVxdWVzdCh1cmwpIHtcclxuXHRcdHZhciBocmVmID0gZGVjb2RlVVJJQ29tcG9uZW50KHVybCB8fCBsb2NhdGlvbi5ocmVmKS5zcGxpdCgnIycpWzBdO1xyXG5cdFx0aWYgKGhyZWYuaW5kZXhPZignPycpID09IC0xKSByZXR1cm4ge307XHJcblxyXG5cdFx0dmFyIHBhcmFtcyA9IGhyZWYuc3BsaXQoJz8nKVsxXTtcclxuXHRcdGlmIChwYXJhbXMgPT09IFwiXCIpIHJldHVybiB7fTtcclxuXHJcblx0XHRwYXJhbXMgPSBwYXJhbXMgfHwgJyc7XHJcblx0XHR2YXIgb2JqID0ge307XHJcblxyXG5cdFx0aWYgKHBhcmFtcy5pbmRleE9mKCcmJykgPD0gLTEpIHtcclxuXHRcdFx0b2JqW3BhcmFtcy5zcGxpdCgnPScpWzBdXSA9IHBhcmFtcy5zcGxpdCgnPScpWzFdO1xyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBhcnIgPSBwYXJhbXMuc3BsaXQoJyYnKSxcclxuXHRcdFx0bGVuID0gYXJyLmxlbmd0aCxcclxuXHRcdFx0aSA9IDA7XHJcblxyXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdGlmIChhcnJbaV0gIT0gXCJcIikge1xyXG5cdFx0XHRcdG9ialthcnJbaV0uc3BsaXQoJz0nKVswXV0gPSBhcnJbaV0uc3BsaXQoJz0nKVsxXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBvYmo7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g5Y676Zmk5Lik56uv56m65qC8XHJcblx0ICogKi9cclxuXHR0cmltKHN0cikge1xyXG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOazqOWGjOW9k+WJjeeOr+Wig1xyXG5cdCAqICovXHJcblx0cmVnaXN0ZXJfZW52KGNhbGxiYWNrKSB7XHJcblx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRzdWNjZXNzKHNpcykge1xyXG5cdFx0XHRcdGxldCBlbnYgPSB7XHJcblx0XHRcdFx0XHRwbGF0Zm9ybTogJydcclxuXHRcdFx0XHR9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cdFx0XHRcdGVudi5icmFuZCA9IHNpcy5icmFuZDtcclxuXHRcdFx0XHRlbnYubGFuZ3VhZ2UgPSBzaXMubGFuZ3VhZ2U7XHJcblx0XHRcdFx0ZW52Lm1vZGVsID0gc2lzLm1vZGVsO1xyXG5cdFx0XHRcdGVudi5wbGF0Zm9ybSA9IHNpcy5wbGF0Zm9ybTtcclxuXHRcdFx0XHRlbnYuc2NyZWVuSGVpZ2h0ID0gc2lzLnNjcmVlbkhlaWdodDtcclxuXHRcdFx0XHRlbnYuc2NyZWVuV2lkdGggPSBzaXMuc2NyZWVuV2lkdGg7XHJcblx0XHRcdFx0ZW52LnN0YXR1c0JhckhlaWdodCA9IHNpcy5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0ZW52LnN5c3RlbSA9IHNpcy5zeXN0ZW07XHJcblx0XHRcdFx0ZW52LnZlcnNpb24gPSBzaXMudmVyc2lvbjtcclxuXHRcdFx0XHRlbnYud2luZG93SGVpZ2h0ID0gc2lzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRlbnYud2luZG93V2lkdGggPSBzaXMud2luZG93V2lkdGg7XHJcblx0XHRcdFx0ZW52LnBpeGVsUmF0aW8gPSBzaXMucGl4ZWxSYXRpbztcclxuXHRcdFx0XHRlbnYucGl4ZWxSYXRpbyA9IHNpcy5waXhlbFJhdGlvO1xyXG5cdFx0XHRcdGVudi5tb2JpbGVUeXBlID0gc2lzLnBsYXRmb3JtO1xyXG5cdFx0XHRcdGVudi5pc19tcCA9IGZhbHNlO1xyXG5cdFx0XHRcdGVudi5pc193eCA9IGZhbHNlO1xyXG5cdFx0XHRcdGVudi5pc19oNSA9IGZhbHNlO1xyXG5cdFx0XHRcdGVudi5pc19hcHAgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0Ly8g6K6h566X5bqV6YOo5a6J5YWo5Yy65Z+f6Led56a7XHJcblx0XHRcdFx0ZW52LnNhZmVCb3R0b20gPSBzaXMuc2NyZWVuSGVpZ2h0IC0gc2lzLnNhZmVBcmVhLmhlaWdodCAtIGVudi5zdGF0dXNCYXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdGlmIChlbnYuc2FmZUJvdHRvbSA9PSAwKSBlbnYuc2FmZUJvdHRvbSA9IDEyO1xyXG5cclxuXHRcdFx0XHRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHRcdFx0XHRlbnYucGxhdGZvcm0gPSBcImFwcFwiO1xyXG5cdFx0XHRcdGVudi5wbGF0Zm9ybV9uYW1lID0gXCJhcHBcIjtcclxuXHRcdFx0XHRlbnYuaXNfYXBwID0gdHJ1ZTtcclxuXHRcdFx0XHRlbnYucnVudGltZSA9IHt9O1xyXG5cdFx0XHRcdGZvciAobGV0IGtleSBpbiBwbHVzLnJ1bnRpbWUpIHtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGx1cy5ydW50aW1lW2tleV0gPT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0ZW52LnJ1bnRpbWVba2V5XSA9IHBsdXMucnVudGltZVtrZXldO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocGx1cy5ydW50aW1lLmlzQXBwbGljYXRpb25FeGlzdCh7XHJcblx0XHRcdFx0XHRcdHBuYW1lOiAnY29tLnRlbmNlbnQubW0nLFxyXG5cdFx0XHRcdFx0XHRhY3Rpb246ICd3ZWl4aW46Ly8nXHJcblx0XHRcdFx0XHR9KSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLlvq7kv6HlupTnlKjlt7Llronoo4VcIik7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi5b6u5L+h5bqU55So5pyq5a6J6KOFXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbnYub3MgPSB7fTtcclxuXHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gcGx1cy5vcykge1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBwbHVzLm9zW2tleV0gPT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0ZW52Lm9zW2tleV0gPSBwbHVzLm9zW2tleV0udG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRlbnYucGxhdGZvcm1faWNvbiA9IFwiaWNvblwiICsgZW52LnBsYXRmb3JtO1xyXG5cdFx0XHRcdGVudi5zaXMgPSBzaXM7XHJcblxyXG5cdFx0XHRcdHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMubmV0d29ya1R5cGUpO1xyXG5cdFx0XHRcdFx0XHRlbnYubmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGVcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3NldCBzdG9yYWdlIGVudicsIGVudik7XHJcblx0XHRcdFx0XHRcdF90aGlzLmVudiA9IGVudjtcclxuXHRcdFx0XHRcdFx0aWYgKGVudi5zdGF0dXNCYXJIZWlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRfdGhpcy5uYXZiYXIudG9wID0gZW52LnN0YXR1c0JhckhlaWdodCArIDY7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMubmF2YmFyLnN0YXR1c0JhckhlaWdodCA9IGVudi5zdGF0dXNCYXJIZWlnaHQ7XHJcblx0XHRcdFx0XHRcdFx0X3RoaXMubmF2YmFySGVpZ2h0ID0gX3RoaXMubmF2YmFyLnRvcCArIG1lbnVCdXR0b25JbmZvLmhlaWdodCArIDY7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ25hdmJhcicsIF90aGlzLm5hdmJhcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRrZXk6ICdfX2VudicsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogZW52XHJcblx0XHRcdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2soZW52KTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6L+Q6KGM546v5aKDXHJcblx0ICogKi9cclxuXHRnZXRfZW52KGNhbGxiYWNrKSB7XHJcblx0XHQvLyByZXR1cm4gdW5pLmdldFN0b3JhZ2VTeW5jKCdlbnYnKTtcclxuXHRcdHVuaS5nZXRTdG9yYWdlKHtcclxuXHRcdFx0a2V5OiAnX19lbnYnLFxyXG5cdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuXHRcdFx0XHRcdGNhbGxiYWNrKHJlcy5kYXRhIHx8IHt9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRkb20oYSwgYikge1xyXG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZ3VtZW50c1swXSA9PSAnc3RyaW5nJykge1xyXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xyXG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZ3VtZW50c1swXSlcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XHJcblx0XHRcdGlmICh0eXBlb2YgYSA9PT0gJ3N0cmluZycpXHJcblx0XHRcdFx0YSA9IHRoaXMuZG9tKGEpO1xyXG5cdFx0XHRpZiAoYS5xdWVyeVNlbGVjdG9yKSB7XHJcblx0XHRcdFx0cmV0dXJuIGEucXVlcnlTZWxlY3RvcihiKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYVxyXG5cdH1cclxuXHJcblx0ZG9tQWxsKGEsIGIpIHtcclxuXHRcdGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmd1bWVudHNbMF0gPT0gJ3N0cmluZycpIHtcclxuXHRcdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIHtcclxuXHRcdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhcmd1bWVudHNbMF0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xyXG5cdFx0XHRpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKVxyXG5cdFx0XHRcdGEgPSB0aGlzLmRvbShhKTtcclxuXHRcdFx0aWYgKGEucXVlcnlTZWxlY3RvckFsbCkge1xyXG5cdFx0XHRcdHJldHVybiBhLnF1ZXJ5U2VsZWN0b3JBbGwoYilcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDmiZPljbAgaW5mbyDml6Xlv5dcclxuXHQgKiAqL1xyXG5cdGluZm8obXNnKSB7XHJcblx0XHRjb25zb2xlLmluZm8obXNnKVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOW9k+WJjemhtemdouaVsOe7hFxyXG5cdCAqICovXHJcblx0cGFnZXMoKSB7XHJcblx0XHRyZXR1cm4gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6L+U5Zue5LiK5LiA57qn6aG16Z2ifOi3s+i9rOmmlumhtVxyXG5cdCAqICovXHJcblx0YmFjaygpIHtcclxuXHRcdGlmIChnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe30pXHJcblx0XHRcdHJldHVyblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMudG9ob21lKCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g5oyH5a6a5YWD57Sg6YCJ5oup5ZmoIG9mZnNldFxyXG5cdCAqL1xyXG5cdG9mZnNldChzZWxlY3RvciwgY2FsbGJhY2spIHtcclxuXHRcdGxldCBxdWVyeSA9IHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KHNlbGVjdG9yKTtcclxuXHRcdC8vIGNvbnNvbGUubG9nKCdvZmZzZXQgcXVlcnknLCBxdWVyeSk7XHJcblx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdHF1ZXJ5LmJvdW5kaW5nQ2xpZW50UmVjdCgocmVzKSA9PiB7XHJcblx0XHRcdFx0Y2FsbGJhY2socmVzKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6LaF5pe2XHJcblx0ICovXHJcblx0dGltZXJvdXQoY2FsbGJhY2ssIHRpbWVyID0gMTAwMCkge1xyXG5cdFx0bGV0IF90aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdFx0Y2FsbGJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjbGVhclRpbWVvdXQoX3RpbWVyKTtcclxuXHRcdH0sIHRpbWVyKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDlpI3liLZcclxuXHQgKi9cclxuXHR0b0NvcHkoY29udGVudCkge1xyXG5cdFx0dW5pLnNldENsaXBib2FyZERhdGEoe1xyXG5cdFx0XHRkYXRhOiBjb250ZW50LFxyXG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WkjeWItuaIkOWKnydcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6Lez6L2s55m75b2V6aG1XHJcblx0ICovXHJcblx0dG9sb2dpbihyZWRpcmVjdCkge1xyXG5cdFx0aWYgKHJlZGlyZWN0KSB7XHJcblx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0XHR1cmw6ICRjb25maWcucm91dGUubG9naW5cclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJGNvbmZpZy5yb3V0ZS5sb2dpblxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6Lez6L2s6aaW6aG1XHJcblx0ICovXHJcblx0dG9ob21lKCkge1xyXG5cdFx0dW5pLnN3aXRjaFRhYih7XHJcblx0XHRcdHVybDogJGNvbmZpZy5yb3V0ZS5ob21lXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDot7PovazorqLljZXpobVcclxuXHQgKi9cclxuXHR0b29yZGVyKCkge1xyXG5cdFx0dW5pLnJlZGlyZWN0VG8oe1xyXG5cdFx0XHR1cmw6ICRjb25maWcucm91dGUub3JkZXJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOi3s+i9rOaUr+S7mOmhtVxyXG5cdCAqL1xyXG5cdHRvcGF5KHBhcmFtcykge1xyXG5cdFx0cGFyYW1zLm1vbmV5ID0gcGFyYW1zLm1vbmV5IHx8IDA7XHJcblx0XHRwYXJhbXMudHlwZSA9IHBhcmFtcy50eXBlIHx8ICduYXZpZ2F0ZSc7XHJcblxyXG5cdFx0aWYgKHBhcmFtcy50eXBlID09ICdyZWRpcmVjdCcpIHtcclxuXHRcdFx0dW5pLnJlZGlyZWN0VG8oe1xyXG5cdFx0XHRcdHVybDogJGNvbmZpZy5yb3V0ZS5wYXkgKyB0aGlzLmdldF9wYXJhbXMocGFyYW1zKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0dXJsOiAkY29uZmlnLnJvdXRlLnBheSArIHRoaXMuZ2V0X3BhcmFtcyhwYXJhbXMpXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDot7PovazmkJzntKLpobVcclxuXHQgKi9cclxuXHR0b3NlYXJjaCgpIHtcclxuXHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdHVybDogJGNvbmZpZy5yb3V0ZS5zZWFyY2hcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOi3s+i9rOS6p+WTgeivpuaDhemhtVxyXG5cdCAqL1xyXG5cdHRvZ29vZHMocGFyYW1zKSB7XHJcblx0XHRjb25zb2xlLmxvZygndG9nb29kcyBwYXJhbXMnLCBwYXJhbXMpO1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6ICRjb25maWcucm91dGUuZ29vZHMgKyB0aGlzLmdldF9wYXJhbXMocGFyYW1zKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6Lez6L2s5Lqn5ZOB5YiX6KGo6aG1XHJcblx0ICovXHJcblx0dG9nb29kc2xpc3QocGFyYW1zKSB7XHJcblx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdHVybDogJGNvbmZpZy5yb3V0ZS5nb29kc2xpc3QgKyB0aGlzLmdldF9wYXJhbXMocGFyYW1zKVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDot7PovazmjIflrpogdXJsXHJcblx0ICovXHJcblx0dG9QYWdlKHVybCkge1xyXG5cdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHR1cmw6IHVybFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBAZGVzY3JpcHRpb24g6Ieq5a6a5LmJ54q25oCB5qCP6auY5bqmXHJcblx0ICovXHJcblx0bmF2YmFySGVpZ2h0KCkge1xyXG5cdFx0Y29uc3Qge1xyXG5cdFx0XHRwbGF0Zm9ybSxcclxuXHRcdFx0c3RhdHVzQmFySGVpZ2h0XHJcblx0XHR9ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5cdFx0bGV0IGhlaWdodCA9IHN0YXR1c0JhckhlaWdodDtcclxuXHRcdGhlaWdodCArPSA0O1xyXG5cdFx0aWYgKHBsYXRmb3JtID09ICdhbmRyb2lkJykge1xyXG5cdFx0XHRoZWlnaHQgKz0gNDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gaGVpZ2h0ICsgMzIgKyA2O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQGRlc2NyaXB0aW9uIOiOt+WPlui3r+W+hOaWh+S7tuWQjeensFxyXG5cdCAqL1xyXG5cdGdldEZpbGVOYW1lKHBhdGgpIHtcclxuXHRcdGlmIChwYXRoLmluZGV4T2YoJy8nKSA9PT0gLTEpIHJldHVybiBwYXRoO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gcGF0aC5zcGxpdCgnLycpLnJldmVyc2UoKVswXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBkZXNjcmlwdGlvbiDkuIrkvKDmlofku7ZcclxuXHQgKi9cclxuXHRhc3luYyB1cGxvYWRGaWxlKHVybCwgcGF0aCwgcHJvZ3Jlc3MpIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdHVuaUNsb3VkLnVwbG9hZEZpbGUoe1xyXG5cdFx0XHRcdGZpbGVQYXRoOiB1cmwsXHJcblx0XHRcdFx0Y2xvdWRQYXRoOiBwYXRoLFxyXG5cdFx0XHRcdG9uVXBsb2FkUHJvZ3Jlc3M6IChwcm9ncmVzc0V2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHR2YXIgcGVyY2VudENvbXBsZXRlZCA9IE1hdGgucm91bmQoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvXHJcblx0XHRcdFx0XHRcdHByb2dyZXNzRXZlbnQudG90YWwpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBwcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRcdFx0XHRwcm9ncmVzcyhwZXJjZW50Q29tcGxldGVkLCBwcm9ncmVzc0V2ZW50KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pLnRoZW4oYXN5bmMgdVJlcyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZS11cGxvYWQnLCB1UmVzKTtcclxuXHRcdFx0XHR1UmVzLnVybCA9IHVSZXMuZmlsZUlEO1xyXG5cdFx0XHRcdC8vIOWFvOWuueiFvuiur+S6keS4iuS8oOaWh+S7tlxyXG5cdFx0XHRcdGlmICh1UmVzLnVybC5pbmRleE9mKCdjbG91ZDovLycpICE9IC0xKSB7XHJcblx0XHRcdFx0XHRjb25zdCB0ZW1wUmVzID0gYXdhaXQgdW5pQ2xvdWQuZ2V0VGVtcEZpbGVVUkwoe1xyXG5cdFx0XHRcdFx0XHRmaWxlTGlzdDogW3VSZXMudXJsXVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHRlbXBSZXMuZmlsZUxpc3QgJiYgdGVtcFJlcy5maWxlTGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHRcdHVSZXMudXJsID0gdGVtcFJlcy5maWxlTGlzdFswXS50ZW1wRmlsZVVSTDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJlc29sdmUodVJlcyk7XHJcblx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VzZS11cGxvYWQnLCBlcnIpO1xyXG5cdFx0XHRcdHJlamVjdChlcnIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8g6I635Y+WIHVuaS1zZWMtY2hlY2sg5a6J5YWo5YaF5a655qOA5rWL5ZON5bqU5raI5oGvXHJcblx0Z2V0U2VjTWVzc2FnZShyZXMpIHtcclxuXHRcdHN3aXRjaCAocmVzLmVyckNvZGUpIHtcclxuXHRcdFx0Y2FzZSAndW5pLXNlYy1jaGVjay1zeXN0ZW0tZXJyb3InOlxyXG5cdFx0XHRcdHJldHVybiAn57O757uf6ZSZ6K+v77yM5pON5L2c5aSx6LSlJztcclxuXHRcdFx0Y2FzZSAndW5pLXNlYy1jaGVjay1yaXNrLWNvbnRlbnQnOlxyXG5cdFx0XHRcdGNvbnN0IHR5cGUgPSByZXMudHlwZSB8fCAnJztcclxuXHRcdFx0XHRpZiAodHlwZW9mIHJlcy5pZHggPT09ICdudW1iZXInKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gYCR7dHlwZX1bJHtyZXMuaWR4Kyt9XeWtmOWcqOmjjumZqeWGheWuuWA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBgJHt0eXBlfeWtmOWcqOmjjumZqeWGheWuuWA7XHJcblx0XHRcdGNhc2UgJ3VuaS1zZWMtY2hlY2staW52YWxpZC1maWxlLXR5cGUnOlxyXG5cdFx0XHRcdHJldHVybiAn6ZSZ6K+v55qE5paH5Lu257G75Z6LJztcclxuXHRcdFx0Y2FzZSAndW5pLXNlYy1jaGVjay1pbnZhbGlkLWltYWdlLXNpemUnOlxyXG5cdFx0XHRcdHJldHVybiAn5Zu+54mH5aSn5bCP6LaF5Ye66ZmQ5Yi2JztcclxuXHRcdFx0Y2FzZSAndW5pLXNlYy1jaGVjay1pbnZva2Utb3V0LW9mLWxpbWl0JzpcclxuXHRcdFx0XHRyZXR1cm4gJ+iwg+eUqOi/h+S6jumikee5ge+8jOeojeWQjuWGjeivlSc7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0cmV0dXJuIGAke3Jlcy5lcnJDb2RlfSAke3Jlcy5lcnJNc2d9YDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8vIOeJiOacrOWPt+avlOi+g1xyXG5cdGNvbXBhcmVWZXJzaW9uKGN1cnIsIHByZXYpIHtcclxuXHRcdGNvbnN0IHByZXZzID0gcHJldi5zcGxpdCgnLicpO1xyXG5cdFx0Y29uc3QgY3VycnMgPSBjdXJyLnNwbGl0KCcuJyk7XHJcblx0XHRsZXQgZmxhZyA9IGZhbHNlO1xyXG5cdFx0bGV0IHByZXZWYWwgPSAwO1xyXG5cdFx0bGV0IGN1cnJWYWwgPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjdXJycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRwcmV2VmFsID0gcGFyc2VJbnQocHJldnNbaV0pO1xyXG5cdFx0XHRjdXJyVmFsID0gcGFyc2VJbnQoY3VycnNbaV0pO1xyXG5cdFx0XHRpZiAocHJldlZhbCA+IGN1cnJWYWwpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoY3VyclZhbCA+IHByZXZWYWwpIHtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmbGFnO1xyXG5cdH1cclxuXHRcclxuXHQvLyDlvq7kv6HlhoXpg6jmtY/op4jlmahcclxuXHRpc0ludGVybmFsV2VpeGluKCkge1xyXG5cdFx0Ly8g5rWL6K+V6Zi25q6177yM6buY6K6k5Li6IHRydWVcclxuXHRcdGlmICgkY29uZmlnLmRlYnVnKSByZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2NvZGUnKSAhPT0gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pKTtcclxuXHR9XHJcblx0XHJcblx0Ly8g6I635Y+W5b2T5YmNIHBhZ2VcclxuXHRnZXRDdXJQYWdlKCkge1xyXG5cdFx0Y29uc3QgcGFnZXMgPSB0aGlzLnBhZ2VzKCk7XHJcblx0XHRjb25zdCBjdXJQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcblx0XHRcclxuXHRcdHJldHVybiBjdXJQYWdlO1xyXG5cdH1cclxuXHQvLyDojrflj5blvZPliY0gcGFnZSDor7fmsYLlj4LmlbBcclxuXHRnZXRDdXJQYWdlUGFyYW1PYmooKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRDdXJQYWdlKCkub3B0aW9ucztcclxuXHR9XHJcblx0Ly8g6I635Y+W5b2T5YmNIHBhZ2Ug6K+35rGC5Y+C5pWwXHJcblx0Z2V0Q3VyUGFnZVBhcmFtKHBhcmFtLCBhbGxvd1BhcmFtcyA9IFtdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy5nZXRDdXJQYWdlKCk7XHJcblx0XHRcclxuXHRcdGNvbnN0IG9wdGlvbnMgPSBbXTtcclxuXHRcdHBhcmFtID0ge1xyXG5cdFx0XHQuLi5wYWdlLm9wdGlvbnMsXHJcblx0XHRcdC4uLnBhcmFtXHJcblx0XHR9O1xyXG5cdFx0Zm9yIChsZXQga2V5IGluIHBhcmFtKSB7XHJcblx0XHRcdGlmIChhbGxvd1BhcmFtcy5sZW5ndGggJiYgIWFsbG93UGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRvcHRpb25zLnB1c2goYCR7a2V5fT0ke3BhcmFtW2tleV19YCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiBvcHRpb25zLmpvaW4oJyYnKTtcclxuXHR9XHJcblx0Ly8g6I635Y+W5b2T5YmNIHBhZ2Ug5a6M5pW06K+35rGCIHVybFxyXG5cdGdldEN1clBhZ2VGdWxsVXJsKHBhcmFtLCBhbGxvd1BhcmFtcyA9IFtdKSB7XHJcblx0XHRjb25zdCBwYWdlID0gdGhpcy5nZXRDdXJQYWdlKCk7XHJcblx0XHRjb25zdCBvcHRpb25zID0gdGhpcy5nZXRDdXJQYWdlUGFyYW0ocGFyYW0sIGFsbG93UGFyYW1zKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGAke3BhZ2Uucm91dGV9PyR7b3B0aW9uc31gO1xyXG5cdH1cclxuXHQvLyDojrflj5blr7nlupTnmoTorr7lpIfnsbvlnotcclxuXHRvcygpIHtcclxuXHRcdHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQsXHJcblx0XHRcdGlzV2luZG93c1Bob25lID0gLyg/OldpbmRvd3MgUGhvbmUpLy50ZXN0KHVhKSxcclxuXHRcdFx0aXNTeW1iaWFuID0gLyg/OlN5bWJpYW5PUykvLnRlc3QodWEpIHx8IGlzV2luZG93c1Bob25lLFxyXG5cdFx0XHRpc0FuZHJvaWQgPSAvKD86QW5kcm9pZCkvLnRlc3QodWEpLFxyXG5cdFx0XHRpc0ZpcmVGb3ggPSAvKD86RmlyZWZveCkvLnRlc3QodWEpLFxyXG5cdFx0XHRpc0Nocm9tZSA9IC8oPzpDaHJvbWV8Q3JpT1MpLy50ZXN0KHVhKSxcclxuXHRcdFx0aXNUYWJsZXQgPSAvKD86aVBhZHxQbGF5Qm9vaykvLnRlc3QodWEpIHx8IChpc0FuZHJvaWQgJiYgIS8oPzpNb2JpbGUpLy50ZXN0KHVhKSkgfHwgKGlzRmlyZUZveCAmJiAvKD86VGFibGV0KS8udGVzdCh1YSkpLFxyXG5cdFx0XHRpc1Bob25lID0gLyg/OmlQaG9uZSkvLnRlc3QodWEpICYmICFpc1RhYmxldCxcclxuXHRcdFx0aXNQYyA9ICFpc1Bob25lICYmICFpc0FuZHJvaWQgJiYgIWlzU3ltYmlhbjtcclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpc1RhYmxldDogaXNUYWJsZXQsXHJcblx0XHRcdGlzUGhvbmU6IGlzUGhvbmUsXHJcblx0XHRcdGlzQW5kcm9pZDogaXNBbmRyb2lkLFxyXG5cdFx0XHRpc1BjOiBpc1BjXHJcblx0XHR9O1xyXG5cdH1cclxuXHQvLyBwYyDnq69cclxuXHRpc3BjKCkge1xyXG5cdCBcdGNvbnN0IHsgaXNQYyB9ID0gdGhpcy5vcygpO1xyXG5cdFx0cmV0dXJuIGlzUGM7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQ29tbW9uKClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///74\n");

/***/ }),
/* 75 */
/*!********************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/common/config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar config = {\n  // 自定义头部 custom: 自定义，default: 系统默认\n  navbar: 'default',\n  debug: !0,\n  version: '2.3.6',\n  // 版本号\n  appname: 'Hornbill',\n  // 应用名称\n  appabbr: '尚福瑞',\n  // 简称\n  appslogan: '尚福瑞 · 让开发更简单',\n  pcUrl: 'https://www.shang77.com',\n  route: {\n    home: '/pages/tabbar/home',\n    login: '/pages/login/login',\n    search: '/pages/home/search/search',\n    order: '/sub-user/pages/order/order',\n    pay: '/sub-goods/pages/pay/pay',\n    goods: '/sub-goods/pages/detail',\n    goodslist: '/sub-goods/pages/list'\n  },\n  provider: '',\n  provider_names: {\n    'weixin': '微信',\n    'qq': 'QQ',\n    'alipay': '支付宝',\n    'baidu': '百度',\n    'toutiao': '头条'\n  },\n  const: {\n    __app: '__app',\n    __member: '__member',\n    __access_token: 'USE_ACCESS_TOKEN',\n    __sign_time: 'usemall-sign-time'\n  }\n};\nvar _default = config;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZiYXIiLCJkZWJ1ZyIsInZlcnNpb24iLCJhcHBuYW1lIiwiYXBwYWJiciIsImFwcHNsb2dhbiIsInBjVXJsIiwicm91dGUiLCJob21lIiwibG9naW4iLCJzZWFyY2giLCJvcmRlciIsInBheSIsImdvb2RzIiwiZ29vZHNsaXN0IiwicHJvdmlkZXIiLCJwcm92aWRlcl9uYW1lcyIsImNvbnN0IiwiX19hcHAiLCJfX21lbWJlciIsIl9fYWNjZXNzX3Rva2VuIiwiX19zaWduX3RpbWUiXSwibWFwcGluZ3MiOiJBQUFhOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRWIsSUFBSUEsTUFBTSxHQUFHO0VBQ1o7RUFDQUMsTUFBTSxFQUFFLFNBQVM7RUFDakJDLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDVEMsT0FBTyxFQUFFLE9BQU87RUFBSTtFQUNwQkMsT0FBTyxFQUFFLFVBQVU7RUFBSTtFQUN2QkMsT0FBTyxFQUFFLEtBQUs7RUFBSTtFQUNsQkMsU0FBUyxFQUFFLGNBQWM7RUFDekJDLEtBQUssRUFBRSx5QkFBeUI7RUFFaENDLEtBQUssRUFBRTtJQUNOQyxJQUFJLEVBQUUsb0JBQW9CO0lBQzFCQyxLQUFLLEVBQUUsb0JBQW9CO0lBQzNCQyxNQUFNLEVBQUUsMkJBQTJCO0lBQ25DQyxLQUFLLEVBQUUsNkJBQTZCO0lBQ3BDQyxHQUFHLEVBQUUsMEJBQTBCO0lBQy9CQyxLQUFLLEVBQUUseUJBQXlCO0lBQ2hDQyxTQUFTLEVBQUU7RUFDWixDQUFDO0VBQ0RDLFFBQVEsRUFBRSxFQUFFO0VBQ1pDLGNBQWMsRUFBRTtJQUNmLFFBQVEsRUFBRSxJQUFJO0lBQ2QsSUFBSSxFQUFFLElBQUk7SUFDVixRQUFRLEVBQUUsS0FBSztJQUNmLE9BQU8sRUFBRSxJQUFJO0lBQ2IsU0FBUyxFQUFFO0VBQ1osQ0FBQztFQUVEQyxLQUFLLEVBQUU7SUFDTkMsS0FBSyxFQUFFLE9BQU87SUFDZEMsUUFBUSxFQUFFLFVBQVU7SUFDcEJDLGNBQWMsRUFBRSxrQkFBa0I7SUFDbENDLFdBQVcsRUFBRTtFQUNkO0FBRUQsQ0FBQztBQUFDLGVBRWF0QixNQUFNO0FBQUEiLCJmaWxlIjoiNzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmxldCBjb25maWcgPSB7XG5cdC8vIOiHquWumuS5ieWktOmDqCBjdXN0b206IOiHquWumuS5ie+8jGRlZmF1bHQ6IOezu+e7n+m7mOiupFxuXHRuYXZiYXI6ICdkZWZhdWx0Jyxcblx0ZGVidWc6ICEwLFxuXHR2ZXJzaW9uOiAnMi4zLjYnLFx0XHRcdC8vIOeJiOacrOWPt1xuXHRhcHBuYW1lOiAnSG9ybmJpbGwnLFx0XHRcdC8vIOW6lOeUqOWQjeensFxuXHRhcHBhYmJyOiAn5bCa56aP55GeJyxcdFx0XHQvLyDnroDnp7Bcblx0YXBwc2xvZ2FuOiAn5bCa56aP55GeIMK3IOiuqeW8gOWPkeabtOeugOWNlScsXG5cdHBjVXJsOiAnaHR0cHM6Ly93d3cuc2hhbmc3Ny5jb20nLFxuXHRcblx0cm91dGU6IHtcblx0XHRob21lOiAnL3BhZ2VzL3RhYmJhci9ob21lJyxcblx0XHRsb2dpbjogJy9wYWdlcy9sb2dpbi9sb2dpbicsXG5cdFx0c2VhcmNoOiAnL3BhZ2VzL2hvbWUvc2VhcmNoL3NlYXJjaCcsXG5cdFx0b3JkZXI6ICcvc3ViLXVzZXIvcGFnZXMvb3JkZXIvb3JkZXInLFxuXHRcdHBheTogJy9zdWItZ29vZHMvcGFnZXMvcGF5L3BheScsXG5cdFx0Z29vZHM6ICcvc3ViLWdvb2RzL3BhZ2VzL2RldGFpbCcsXG5cdFx0Z29vZHNsaXN0OiAnL3N1Yi1nb29kcy9wYWdlcy9saXN0J1xuXHR9LFxuXHRwcm92aWRlcjogJycsXG5cdHByb3ZpZGVyX25hbWVzOiB7XG5cdFx0J3dlaXhpbic6ICflvq7kv6EnLFxuXHRcdCdxcSc6ICdRUScsXG5cdFx0J2FsaXBheSc6ICfmlK/ku5jlrp0nLFxuXHRcdCdiYWlkdSc6ICfnmb7luqYnLFxuXHRcdCd0b3V0aWFvJzogJ+WktOadoScsXG5cdH0sXG5cdFxuXHRjb25zdDoge1xuXHRcdF9fYXBwOiAnX19hcHAnLFxuXHRcdF9fbWVtYmVyOiAnX19tZW1iZXInLFxuXHRcdF9fYWNjZXNzX3Rva2VuOiAnVVNFX0FDQ0VTU19UT0tFTicsXG5cdFx0X19zaWduX3RpbWU6ICd1c2VtYWxsLXNpZ24tdGltZSdcblx0fSxcblx0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///75\n");

/***/ }),
/* 76 */
/*!****************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/common/db.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 7));\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 75));\nvar _common = _interopRequireDefault(__webpack_require__(/*! ./common.js */ 74));\nvar db = {};\nvar unidb = uniCloud.database();\ndb = new Proxy(db, {\n  get: function get(target, key) {\n    return new DbContext(key);\n  }\n});\nfunction DbContext(name) {\n  this.table = name;\n  this.where_obj = {};\n  this.where_arr = [];\n  this.where_str = '';\n  this.istemp = false;\n  this.temp = null;\n  this.configDefault = {\n    hideLoading: true\n  };\n  this.response = {\n    code: 200,\n    datas: {},\n    msg: ''\n  };\n}\nDbContext.prototype = {\n  table: '',\n  // 数据集合|表名\n  where_obj: {},\n  // where 条件\n  where_arr: [],\n  // where 条件\n  where_str: '',\n  // where 条件\n  istemp: false,\n  temp: null,\n  response: {},\n  // 统一响应格式\n  configDefault: {} // 配置文件\n};\n\nDbContext.prototype.config = function (config) {\n  // console.log('config', config)\n  if ((0, _typeof2.default)(config) === 'object') {\n    Object.assign(this.configDefault, config);\n  }\n  return this;\n};\nDbContext.prototype.where = function (params) {\n  // console.log('params', params)\n  if ((0, _typeof2.default)(params) === 'object') {\n    Object.assign(this.where_obj, params);\n  }\n  if (typeof params === 'string') {\n    this.where_arr.push(params);\n  }\n  return this;\n};\nDbContext.prototype.whereif = function (_flag, _obj) {\n  if (_flag) this.where(_obj);\n  return this;\n};\nDbContext.prototype.collection = function () {\n  return unidb.collection(this.table);\n};\nDbContext.prototype.add = function (obj) {\n  var _this = this;\n  uni.showLoading({\n    title: '请求中'\n  });\n  return this.collection().add(obj).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this.table + ' add', res, \" at common/db.js:79\");\n    }\n    if (res.result) {\n      _this.response.datas = res.result;\n      if (res.result.errCode === 0) _this.response.code = 200;\n      return Promise.resolve(_this.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this.table + ' add catch', err, \" at common/db.js:92\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {\n    _this.configDefault.hideLoading && uni.hideLoading();\n  });\n};\nDbContext.prototype.remove = function (_id) {\n  var _this2 = this;\n  uni.showLoading({\n    title: '请求中'\n  });\n  if (_id) {\n    return this.collection().doc(_id).remove().then(function (res) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this2.table + ' remove', res, \" at common/db.js:113\");\n      }\n      if (res.result) {\n        _this2.response.datas = res.result;\n        if (res.result.errCode === 0) _this2.response.code = 200;\n        return Promise.resolve(_this2.response);\n      }\n      return Promise.reject(res);\n    }).catch(function (err) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this2.table + ' remove catch', err, \" at common/db.js:126\");\n        _common.default.alert(err.message);\n      }\n      return Promise.reject(err);\n    }).finally(function (res) {\n      _this2.configDefault.hideLoading && uni.hideLoading();\n    });\n  }\n  this.where_str = this.where_arr.join(' && ');\n  return this.collection().where(this.where_str || this.where_obj).remove().then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this2.table + ' remove', res, \" at common/db.js:141\");\n    }\n    if (res.result) {\n      _this2.response.datas = res.result;\n      if (res.result.errCode === 0) _this2.response.code = 200;\n      return Promise.resolve(_this2.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this2.table + ' remove catch', err, \" at common/db.js:154\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {\n    _this2.configDefault.hideLoading && uni.hideLoading();\n  });\n};\nDbContext.prototype.set = function (_id, obj) {\n  var _this3 = this;\n  uni.showLoading({\n    title: '请求中'\n  });\n  return this.collection().doc(_id).set(obj).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this3.table + ' set', res, \" at common/db.js:173\");\n    }\n    if (res.result) {\n      _this3.response.datas = res.result;\n      if (res.result.errCode === 0) _this3.response.code = 200;\n      return Promise.resolve(_this3.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this3.table + ' set catch', err, \" at common/db.js:186\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {\n    _this3.configDefault.hideLoading && uni.hideLoading();\n  });\n};\nDbContext.prototype.update = function (_id, obj) {\n  var _this4 = this;\n  uni.showLoading({\n    title: '请求中'\n  });\n  if (_id && typeof _id === 'string') {\n    return this.collection().doc(_id).update(obj).then(function (res) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this4.table + ' update', res, \" at common/db.js:207\");\n      }\n      if (res.result) {\n        _this4.response.datas = res.result;\n        if (res.result.errCode === 0) _this4.response.code = 200;\n        return Promise.resolve(_this4.response);\n      }\n      return Promise.reject(res);\n    }).catch(function (err) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this4.table + ' doc update catch', err, \" at common/db.js:220\");\n        _common.default.alert(err.message);\n      }\n      return Promise.reject(err);\n    }).finally(function (res) {\n      _this4.configDefault.hideLoading && uni.hideLoading();\n    });\n  }\n  if ((0, _typeof2.default)(_id) === 'object') obj = _id;\n  this.where_str = this.where_arr.join(' && ');\n  return this.collection().where(this.where_str || this.where_obj).update(obj).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this4.table + ' update', res, \" at common/db.js:237\");\n    }\n    if (res.result) {\n      _this4.response.datas = res.result;\n      if (res.result.errCode === 0) _this4.response.code = 200;\n      return Promise.resolve(_this4.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this4.table + ' update catch', err, \" at common/db.js:250\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {\n    _this4.configDefault.hideLoading && uni.hideLoading();\n  });\n};\n\n// \nDbContext.prototype.tofirst = function (_id) {\n  var _this5 = this;\n  if (typeof _id === 'string') {\n    return this.collection().doc(_id).get({\n      getOne: true\n    }).then(function (res) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this5.table + ' doc.tofirst', res, \" at common/db.js:273\");\n      }\n      if (res.result && res.result.errCode === 0) {\n        _this5.response.code = 200;\n        _this5.response.datas = res.result.data || {};\n        return Promise.resolve(_this5.response);\n      }\n      return Promise.reject(res);\n    }).catch(function (err) {\n      if (_config.default.debug) {\n        __f__(\"log\", _this5.table + ' doc.tofirst catch', err, \" at common/db.js:287\");\n        _common.default.alert(err.message);\n      }\n      return Promise.reject(err);\n    }).finally(function (res) {});\n  }\n  var req = Object.assign({\n    orderby: ''\n  }, _id);\n  this.where_str = this.where_arr.join(' && ');\n  return this.collection().where(this.where_str || this.where_obj).orderBy(req.orderby).get({\n    getOne: true\n  }).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this5.table + ' tofirst', res, \" at common/db.js:309\");\n    }\n    if (res.result && res.result.errCode === 0) {\n      _this5.response.code = 200;\n      _this5.response.datas = res.result.data || {};\n      return Promise.resolve(_this5.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this5.table + ' tofirst catch', err, \" at common/db.js:322\");\n      _common.default.alert(err.message);\n    }\n    // return Promise.reject(err);\n  }).finally(function (res) {});\n};\nDbContext.prototype.tolist = function (req) {\n  var _this6 = this;\n  // 页码 页数 排序\n  req = Object.assign({\n    page: 1,\n    rows: 30,\n    orderby: ''\n  }, req);\n  var ctx = this.collection();\n  this.where_str = this.where_arr.join(' && ');\n  if (Object.keys(this.where_obj).length > 0) {\n    ctx = ctx.where(this.where_obj);\n  }\n  if (this.where_str) {\n    ctx = ctx.where(this.where_str);\n  }\n  return ctx.orderBy(req.orderby).skip((req.page - 1) * req.rows).limit(req.rows).get().then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this6.table + ' tolist', res, \" at common/db.js:358\");\n    }\n    if (res.result) {\n      _this6.response.datas = res.result.data;\n      if (res.result.errCode === 0) _this6.response.code = 200;\n      return Promise.resolve(_this6.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this6.table + ' tolist catch', err, \" at common/db.js:372\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {});\n};\nDbContext.prototype.totable = function (req) {\n  var _this7 = this;\n  // 页码 页数 排序\n  req = Object.assign({\n    page: 1,\n    rows: 10,\n    orderby: ''\n  }, req);\n  this.where_str = this.where_arr.join(' && ');\n  return this.collection().where(this.where_str || this.where_obj).orderBy(req.orderby).skip((req.page - 1) * req.rows).limit(req.rows).get({\n    getCount: true\n  }).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this7.table + ' totable', res, \" at common/db.js:405\");\n    }\n    if (res.result) {\n      _this7.response.datas.rows = res.result.data;\n      _this7.response.datas.total = res.result.count;\n      if (res.result.errCode === 0) _this7.response.code = 200;\n      return Promise.resolve(_this7.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this7.table + ' totable catch', err, \" at common/db.js:420\");\n      _common.default.alert(err.message);\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {});\n};\nvar _default = db;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2RiLmpzIl0sIm5hbWVzIjpbImRiIiwidW5pZGIiLCJ1bmlDbG91ZCIsImRhdGFiYXNlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJrZXkiLCJEYkNvbnRleHQiLCJuYW1lIiwidGFibGUiLCJ3aGVyZV9vYmoiLCJ3aGVyZV9hcnIiLCJ3aGVyZV9zdHIiLCJpc3RlbXAiLCJ0ZW1wIiwiY29uZmlnRGVmYXVsdCIsImhpZGVMb2FkaW5nIiwicmVzcG9uc2UiLCJjb2RlIiwiZGF0YXMiLCJtc2ciLCJwcm90b3R5cGUiLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJ3aGVyZSIsInBhcmFtcyIsInB1c2giLCJ3aGVyZWlmIiwiX2ZsYWciLCJfb2JqIiwiY29sbGVjdGlvbiIsImFkZCIsIm9iaiIsInVuaSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ0aGVuIiwicmVzIiwiJGNvbmZpZyIsImRlYnVnIiwicmVzdWx0IiwiZXJyQ29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2F0Y2giLCJlcnIiLCIkYXBpIiwiYWxlcnQiLCJtZXNzYWdlIiwiZmluYWxseSIsInJlbW92ZSIsIl9pZCIsImRvYyIsImpvaW4iLCJzZXQiLCJ1cGRhdGUiLCJ0b2ZpcnN0IiwiZ2V0T25lIiwiZGF0YSIsInJlcSIsIm9yZGVyYnkiLCJvcmRlckJ5IiwidG9saXN0IiwicGFnZSIsInJvd3MiLCJjdHgiLCJrZXlzIiwibGVuZ3RoIiwic2tpcCIsImxpbWl0IiwidG90YWJsZSIsImdldENvdW50IiwidG90YWwiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBSUEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNYLElBQUlDLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxRQUFRLEVBQUU7QUFHL0JILEVBQUUsR0FBRyxJQUFJSSxLQUFLLENBQUNKLEVBQUUsRUFBRTtFQUNsQkssR0FBRyxFQUFFLGFBQVNDLE1B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QUlyQyxHQUFHLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTyxLQUFLLENBQUMsRUFBRSxNQUFJLENBQUN6QixRQUFRLENBQUNDLElBQUksR0FBRyxHQUFHO01BRXRELE9BQU95QixPQUFPLENBQUNDLE9BQU8sQ0FBQyxNQUFJLENBQUMzQixRQUFRLENBQUM7SUFDdEM7SUFFQSxPQUFPMEIsT0FBTyxDQUFDRSxNQUFNLENBQUNQLEdBQUcsQ0FBQztFQUMzQixDQUFDLENBQUMsQ0FDRFEsS0FBSyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUNiLElBQUlSLGVBQU8sQ0FBQ0MsS0FBSyxFQUFFO01BQ2xCLGFBQVksTUFBSSxDQUFDL0IsS0FBSyxHQUFHLGdCQUFnQixFQUFFc0MsR0FBRztNQUM5Q0MsZUFBSSxDQUFDQyxLQUFLLENBQUNGLEdBQUcsQ0FBQ0csT0FBTyxDQUFDO0lBQ3hCO0lBQ0EsT0FBT1AsT0FBTyxDQUFDRSxNQUFNLENBQUNFLEdBQUcsQ0FBQztFQUMzQixDQUFDLENBQUMsQ0FDREksT0FBTyxDQUFDLFVBQUFiLEdBQUcsRUFBSSxDQUloQixDQUFDLENBQUM7QUFDSixDQUFDO0FBQUEsZUFFY3ZDLEVBQUU7QUFBQSwyQiIsImZpbGUiOiI3Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xyXG5pbXBvcnQgJGFwaSBmcm9tICcuL2NvbW1vbi5qcydcclxuXHJcbmxldCBkYiA9IHt9O1xyXG5sZXQgdW5pZGIgPSB1bmlDbG91ZC5kYXRhYmFzZSgpO1xyXG5cclxuXHJcbmRiID0gbmV3IFByb3h5KGRiLCB7XHJcblx0Z2V0OiBmdW5jdGlvbih0YXJnZXQsIGtleSkge1xyXG5cdFx0cmV0dXJuIG5ldyBEYkNvbnRleHQoa2V5KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gRGJDb250ZXh0KG5hbWUpIHtcclxuXHR0aGlzLnRhYmxlID0gbmFtZTtcclxuXHR0aGlzLndoZXJlX29iaiA9IHt9O1xyXG5cdHRoaXMud2hlcmVfYXJyID0gW107XHJcblx0dGhpcy53aGVyZV9zdHIgPSAnJztcclxuXHRcclxuXHR0aGlzLmlzdGVtcCA9IGZhbHNlO1xyXG5cdHRoaXMudGVtcCA9IG51bGw7XHJcblx0XHJcblx0dGhpcy5jb25maWdEZWZhdWx0ID0ge1xyXG5cdFx0aGlkZUxvYWRpbmc6IHRydWVcclxuXHR9O1xyXG5cdHRoaXMucmVzcG9uc2UgPSB7XHJcblx0XHRjb2RlOiAyMDAsXHJcblx0XHRkYXRhczoge30sXHJcblx0XHRtc2c6ICcnXHJcblx0fVxyXG59XHJcblxyXG5EYkNvbnRleHQucHJvdG90eXBlID0ge1xyXG5cdHRhYmxlOiAnJywgLy8g5pWw5o2u6ZuG5ZCIfOihqOWQjVxyXG5cdHdoZXJlX29iajoge30sIC8vIHdoZXJlIOadoeS7tlxyXG5cdHdoZXJlX2FycjogW10sIC8vIHdoZXJlIOadoeS7tlxyXG5cdHdoZXJlX3N0cjogJycsIC8vIHdoZXJlIOadoeS7tlxyXG5cdGlzdGVtcDogZmFsc2UsXHJcblx0dGVtcDogbnVsbCxcclxuXHRyZXNwb25zZToge30sIC8vIOe7n+S4gOWTjeW6lOagvOW8j1xyXG5cdGNvbmZpZ0RlZmF1bHQ6IHt9XHQvLyDphY3nva7mlofku7ZcclxufTtcclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0Ly8gY29uc29sZS5sb2coJ2NvbmZpZycsIGNvbmZpZylcclxuXHRpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcclxuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5jb25maWdEZWZhdWx0LCBjb25maWcpO1xyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGhpc1xyXG59XHJcbkRiQ29udGV4dC5wcm90b3R5cGUud2hlcmUgPSBmdW5jdGlvbihwYXJhbXMpIHtcclxuXHQvLyBjb25zb2xlLmxvZygncGFyYW1zJywgcGFyYW1zKVxyXG5cdGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xyXG5cdFx0T2JqZWN0LmFzc2lnbih0aGlzLndoZXJlX29iaiwgcGFyYW1zKTtcclxuXHR9XHJcblx0aWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnKSB7XHJcblx0XHR0aGlzLndoZXJlX2Fyci5wdXNoKHBhcmFtcyk7XHJcblx0fVxyXG5cdHJldHVybiB0aGlzXHJcbn1cclxuRGJDb250ZXh0LnByb3RvdHlwZS53aGVyZWlmID0gZnVuY3Rpb24oX2ZsYWcsIF9vYmopIHtcclxuXHRpZiAoX2ZsYWcpIHRoaXMud2hlcmUoX29iaik7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn1cclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUuY29sbGVjdGlvbiA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB1bmlkYi5jb2xsZWN0aW9uKHRoaXMudGFibGUpO1xyXG59XHJcblxyXG5EYkNvbnRleHQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKG9iaikge1xyXG5cdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHR0aXRsZTogJ+ivt+axguS4rSdcclxuXHR9KVxyXG5cdHJldHVybiB0aGlzLmNvbGxlY3Rpb24oKVxyXG5cdFx0LmFkZChvYmopXHJcblx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIGFkZCcsIHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlcy5yZXN1bHQpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzID0gcmVzLnJlc3VsdDtcclxuXHRcdFx0XHRpZiAocmVzLnJlc3VsdC5lcnJDb2RlID09PSAwKSB0aGlzLnJlc3BvbnNlLmNvZGUgPSAyMDA7XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZXMpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIGFkZCBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0JGFwaS5hbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9KVxyXG5cdFx0LmZpbmFsbHkocmVzID0+IHtcclxuXHRcdFx0dGhpcy5jb25maWdEZWZhdWx0LmhpZGVMb2FkaW5nICYmIHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oX2lkKSB7XHJcblx0dW5pLnNob3dMb2FkaW5nKHtcclxuXHRcdHRpdGxlOiAn6K+35rGC5LitJ1xyXG5cdH0pXHJcblxyXG5cdGlmIChfaWQpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbGxlY3Rpb24oKVxyXG5cdFx0XHQuZG9jKF9pZClcclxuXHRcdFx0LnJlbW92ZSgpXHJcblx0XHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0aWYgKCRjb25maWcuZGVidWcpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHJlbW92ZScsIHJlcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChyZXMucmVzdWx0KSB7XHJcblx0XHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzID0gcmVzLnJlc3VsdDtcclxuXHRcdFx0XHRcdGlmIChyZXMucmVzdWx0LmVyckNvZGUgPT09IDApIHRoaXMucmVzcG9uc2UuY29kZSA9IDIwMDtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlcyk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyByZW1vdmUgY2F0Y2gnLCBlcnIpO1xyXG5cdFx0XHRcdFx0JGFwaS5hbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuZmluYWxseShyZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY29uZmlnRGVmYXVsdC5oaWRlTG9hZGluZyAmJiB1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cdHRoaXMud2hlcmVfc3RyID0gdGhpcy53aGVyZV9hcnIuam9pbignICYmICcpO1xyXG5cdHJldHVybiB0aGlzLmNvbGxlY3Rpb24oKVxyXG5cdFx0LndoZXJlKHRoaXMud2hlcmVfc3RyIHx8IHRoaXMud2hlcmVfb2JqKVxyXG5cdFx0LnJlbW92ZSgpXHJcblx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHJlbW92ZScsIHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlcy5yZXN1bHQpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzID0gcmVzLnJlc3VsdDtcclxuXHRcdFx0XHRpZiAocmVzLnJlc3VsdC5lcnJDb2RlID09PSAwKSB0aGlzLnJlc3BvbnNlLmNvZGUgPSAyMDA7XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZXMpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHJlbW92ZSBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0JGFwaS5hbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9KVxyXG5cdFx0LmZpbmFsbHkocmVzID0+IHtcclxuXHRcdFx0dGhpcy5jb25maWdEZWZhdWx0LmhpZGVMb2FkaW5nICYmIHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oX2lkLCBvYmopIHtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0dGl0bGU6ICfor7fmsYLkuK0nXHJcblx0fSlcclxuXHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uKClcclxuXHRcdC5kb2MoX2lkKVxyXG5cdFx0LnNldChvYmopXHJcblx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHNldCcsIHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlcy5yZXN1bHQpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzID0gcmVzLnJlc3VsdDtcclxuXHRcdFx0XHRpZiAocmVzLnJlc3VsdC5lcnJDb2RlID09PSAwKSB0aGlzLnJlc3BvbnNlLmNvZGUgPSAyMDA7XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5yZXNwb25zZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZXMpO1xyXG5cdFx0fSlcclxuXHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHNldCBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0JGFwaS5hbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9KVxyXG5cdFx0LmZpbmFsbHkocmVzID0+IHtcclxuXHRcdFx0dGhpcy5jb25maWdEZWZhdWx0LmhpZGVMb2FkaW5nICYmIHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oX2lkLCBvYmopIHtcclxuXHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0dGl0bGU6ICfor7fmsYLkuK0nXHJcblx0fSlcclxuXHRcclxuXHRpZiAoX2lkICYmIHR5cGVvZiBfaWQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uKClcclxuXHRcdFx0LmRvYyhfaWQpXHJcblx0XHRcdC51cGRhdGUob2JqKVxyXG5cdFx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyB1cGRhdGUnLCByZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAocmVzLnJlc3VsdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZS5kYXRhcyA9IHJlcy5yZXN1bHQ7XHJcblx0XHRcdFx0XHRpZiAocmVzLnJlc3VsdC5lcnJDb2RlID09PSAwKSB0aGlzLnJlc3BvbnNlLmNvZGUgPSAyMDA7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChyZXMpO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgZG9jIHVwZGF0ZSBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0XHQkYXBpLmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5maW5hbGx5KHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5jb25maWdEZWZhdWx0LmhpZGVMb2FkaW5nICYmIHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0aWYgKHR5cGVvZiBfaWQgPT09ICdvYmplY3QnKSBvYmogPSBfaWQ7XHJcblx0dGhpcy53aGVyZV9zdHIgPSB0aGlzLndoZXJlX2Fyci5qb2luKCcgJiYgJyk7XHJcblx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbigpXHJcblx0XHQud2hlcmUodGhpcy53aGVyZV9zdHIgfHwgdGhpcy53aGVyZV9vYmopXHJcblx0XHQudXBkYXRlKG9iailcclxuXHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgdXBkYXRlJywgcmVzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocmVzLnJlc3VsdCkge1xyXG5cdFx0XHRcdHRoaXMucmVzcG9uc2UuZGF0YXMgPSByZXMucmVzdWx0O1xyXG5cdFx0XHRcdGlmIChyZXMucmVzdWx0LmVyckNvZGUgPT09IDApIHRoaXMucmVzcG9uc2UuY29kZSA9IDIwMDtcclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlcyk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgdXBkYXRlIGNhdGNoJywgZXJyKTtcclxuXHRcdFx0XHQkYXBpLmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH0pXHJcblx0XHQuZmluYWxseShyZXMgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbmZpZ0RlZmF1bHQuaGlkZUxvYWRpbmcgJiYgdW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHR9KTtcclxufVxyXG5cclxuLy8gXHJcbkRiQ29udGV4dC5wcm90b3R5cGUudG9maXJzdCA9IGZ1bmN0aW9uKF9pZCkge1xyXG5cclxuXHJcblxyXG5cdGlmICh0eXBlb2YgX2lkID09PSAnc3RyaW5nJykge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbigpXHJcblx0XHRcdC5kb2MoX2lkKVxyXG5cdFx0XHQuZ2V0KHtcclxuXHRcdFx0XHRnZXRPbmU6IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgZG9jLnRvZmlyc3QnLCByZXMpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzLnJlc3VsdCAmJiByZXMucmVzdWx0LmVyckNvZGUgPT09IDApIHtcclxuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2UuY29kZSA9IDIwMDtcclxuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2UuZGF0YXMgPSByZXMucmVzdWx0LmRhdGEgfHwge307XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlcyk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xyXG5cdFx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyBkb2MudG9maXJzdCBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0XHQkYXBpLmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5maW5hbGx5KHJlcyA9PiB7XHJcblxyXG5cclxuXHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRjb25zdCByZXEgPSBPYmplY3QuYXNzaWduKHtvcmRlcmJ5OiAnJ30sIF9pZCk7XHJcblx0dGhpcy53aGVyZV9zdHIgPSB0aGlzLndoZXJlX2Fyci5qb2luKCcgJiYgJyk7XHJcblx0cmV0dXJuIHRoaXMuY29sbGVjdGlvbigpXHJcblx0XHQud2hlcmUodGhpcy53aGVyZV9zdHIgfHwgdGhpcy53aGVyZV9vYmopXHJcblx0XHQub3JkZXJCeShyZXEub3JkZXJieSlcclxuXHRcdC5nZXQoe1xyXG5cdFx0XHRnZXRPbmU6IHRydWVcclxuXHRcdH0pXHJcblx0XHQudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMudGFibGUgKyAnIHRvZmlyc3QnLCByZXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChyZXMucmVzdWx0ICYmIHJlcy5yZXN1bHQuZXJyQ29kZSA9PT0gMCkge1xyXG5cdFx0XHRcdHRoaXMucmVzcG9uc2UuY29kZSA9IDIwMDtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzID0gcmVzLnJlc3VsdC5kYXRhIHx8IHt9O1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0aWYgKCRjb25maWcuZGVidWcpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyB0b2ZpcnN0IGNhdGNoJywgZXJyKTtcclxuXHRcdFx0XHQkYXBpLmFsZXJ0KGVyci5tZXNzYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuXHRcdH0pXHJcblx0XHQuZmluYWxseShyZXMgPT4ge1xyXG5cclxuXHJcblxyXG5cdFx0fSk7XHJcbn1cclxuXHJcbkRiQ29udGV4dC5wcm90b3R5cGUudG9saXN0ID0gZnVuY3Rpb24ocmVxKSB7XHJcblx0Ly8g6aG156CBIOmhteaVsCDmjpLluo9cclxuXHRyZXEgPSBPYmplY3QuYXNzaWduKHtcclxuXHRcdHBhZ2U6IDEsXHJcblx0XHRyb3dzOiAzMCxcclxuXHRcdG9yZGVyYnk6ICcnXHJcblx0fSwgcmVxKTtcclxuXHJcblxyXG5cclxuXHRcclxuXHRsZXQgY3R4ID0gdGhpcy5jb2xsZWN0aW9uKCk7XHJcblx0XHJcblx0dGhpcy53aGVyZV9zdHIgPSB0aGlzLndoZXJlX2Fyci5qb2luKCcgJiYgJyk7XHJcblx0aWYgKE9iamVjdC5rZXlzKHRoaXMud2hlcmVfb2JqKS5sZW5ndGggPiAwKSB7IGN0eCA9IGN0eC53aGVyZSh0aGlzLndoZXJlX29iaik7IH1cclxuXHRpZiAodGhpcy53aGVyZV9zdHIpIHsgY3R4ID0gY3R4LndoZXJlKHRoaXMud2hlcmVfc3RyKTsgfVxyXG5cdFxyXG5cdHJldHVybiBjdHhcclxuXHRcdC5vcmRlckJ5KHJlcS5vcmRlcmJ5KVxyXG5cdFx0LnNraXAoKHJlcS5wYWdlIC0gMSkgKiByZXEucm93cylcclxuXHRcdC5saW1pdChyZXEucm93cylcclxuXHRcdC5nZXQoKVxyXG5cdFx0LnRoZW4ocmVzID0+IHtcclxuXHRcdFx0aWYgKCRjb25maWcuZGVidWcpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyB0b2xpc3QnLCByZXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChyZXMucmVzdWx0KSB7XHJcblx0XHRcdFx0dGhpcy5yZXNwb25zZS5kYXRhcyA9IHJlcy5yZXN1bHQuZGF0YTtcclxuXHJcblx0XHRcdFx0aWYgKHJlcy5yZXN1bHQuZXJyQ29kZSA9PT0gMCkgdGhpcy5yZXNwb25zZS5jb2RlID0gMjAwO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKTtcclxuXHRcdH0pXHJcblx0XHQuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0aWYgKCRjb25maWcuZGVidWcpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYmxlICsgJyB0b2xpc3QgY2F0Y2gnLCBlcnIpO1xyXG5cdFx0XHRcdCRhcGkuYWxlcnQoZXJyLm1lc3NhZ2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG5cdFx0fSlcclxuXHRcdC5maW5hbGx5KHJlcyA9PiB7XHJcblxyXG5cclxuXHJcblx0XHR9KTtcclxufVxyXG5cclxuRGJDb250ZXh0LnByb3RvdHlwZS50b3RhYmxlID0gZnVuY3Rpb24ocmVxKSB7XHJcblx0Ly8g6aG156CBIOmhteaVsCDmjpLluo9cclxuXHRyZXEgPSBPYmplY3QuYXNzaWduKHtcclxuXHRcdHBhZ2U6IDEsXHJcblx0XHRyb3dzOiAxMCxcclxuXHRcdG9yZGVyYnk6ICcnXHJcblx0fSwgcmVxKTtcclxuXHJcblxyXG5cclxuXHR0aGlzLndoZXJlX3N0ciA9IHRoaXMud2hlcmVfYXJyLmpvaW4oJyAmJiAnKTtcclxuXHRyZXR1cm4gdGhpcy5jb2xsZWN0aW9uKClcclxuXHRcdC53aGVyZSh0aGlzLndoZXJlX3N0ciB8fCB0aGlzLndoZXJlX29iailcclxuXHRcdC5vcmRlckJ5KHJlcS5vcmRlcmJ5KVxyXG5cdFx0LnNraXAoKHJlcS5wYWdlIC0gMSkgKiByZXEucm93cylcclxuXHRcdC5saW1pdChyZXEucm93cylcclxuXHRcdC5nZXQoe1xyXG5cdFx0XHRnZXRDb3VudDogdHJ1ZVxyXG5cdFx0fSlcclxuXHRcdC50aGVuKHJlcyA9PiB7XHJcblx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgdG90YWJsZScsIHJlcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHJlcy5yZXN1bHQpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLmRhdGFzLnJvd3MgPSByZXMucmVzdWx0LmRhdGE7XHJcblx0XHRcdFx0dGhpcy5yZXNwb25zZS5kYXRhcy50b3RhbCA9IHJlcy5yZXN1bHQuY291bnQ7XHJcblxyXG5cdFx0XHRcdGlmIChyZXMucmVzdWx0LmVyckNvZGUgPT09IDApIHRoaXMucmVzcG9uc2UuY29kZSA9IDIwMDtcclxuXHJcblx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJlc3BvbnNlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KHJlcyk7XHJcblx0XHR9KVxyXG5cdFx0LmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdGlmICgkY29uZmlnLmRlYnVnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy50YWJsZSArICcgdG90YWJsZSBjYXRjaCcsIGVycik7XHJcblx0XHRcdFx0JGFwaS5hbGVydChlcnIubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcblx0XHR9KVxyXG5cdFx0LmZpbmFsbHkocmVzID0+IHtcclxuXHJcblxyXG5cclxuXHRcdH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///76\n");

/***/ }),
/* 77 */
/*!******************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/common/func.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 75));\nvar _common = _interopRequireDefault(__webpack_require__(/*! ./common.js */ 74));\nvar func = {};\nfunc = new Proxy(func, {\n  get: function get(target, key) {\n    return new FuncContext(key);\n  }\n});\nfunction FuncContext(name) {\n  this.funcname = name;\n  this.response = {\n    code: 200,\n    datas: {},\n    msg: ''\n  };\n}\nFuncContext.prototype = {\n  funcname: '',\n  // 云函数名称\n  response: {} // 统一响应格式\n};\n\n/**\n * 调尚福瑞函数\n * action controller 函数路径\n * data controller 数据参数\n * */\nFuncContext.prototype.call = function (action, data) {\n  var _this = this;\n  return uniCloud.callFunction({\n    name: this.funcname,\n    data: {\n      action: action,\n      data: data\n    }\n  }).then(function (res) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this.funcname + '/' + action + ' call', res, \" at common/func.js:44\");\n    }\n    if (res.result) {\n      _this.response.code = res.result.code === 0 ? 200 : res.result.code;\n      if (_this.response.code != 200) {\n        _this.response.msg = res.result.msg || res.result.message;\n      } else {\n        _this.response.msg = res.result.msg;\n      }\n      _this.response.datas = res.result.datas || res.result;\n      _this.response.result = res.result;\n      return Promise.resolve(_this.response);\n    }\n    return Promise.reject(res);\n  }).catch(function (err) {\n    if (_config.default.debug) {\n      __f__(\"log\", _this.funcname + '/' + action + ' call catch', err, \" at common/func.js:61\");\n      _common.default.alert(JSON.stringify(err));\n    }\n    return Promise.reject(err);\n  }).finally(function (res) {});\n};\nvar _default = func;\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 1)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 42)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2Z1bmMuanMiXSwibmFtZXMiOlsiZnVuYyIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0Iiwia2V5IiwiRnVuY0NvbnRleHQiLCJuYW1lIiwiZnVuY25hbWUiLCJyZXNwb25zZSIsImNvZGUiLCJkYXRhcyIsIm1zZyIsInByb3RvdHlwZSIsImNhbGwiLCJhY3Rpb24iLCJkYXRhIiwidW5pQ2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJ0aGVuIiwicmVzIiwiJGNvbmZpZyIsImRlYnVnIiwicmVzdWx0IiwibWVzc2FnZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2F0Y2giLCJlcnIiLCIkYXBpIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmluYWxseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFFQSxJQUFJQSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBRWJBLElBQUksR0FBRyxJQUFJQyxLQUFLLENBQUNELElBQUksRUFBRTtFQUN0QkUsR0FBRyxFQUFFLGFBQVNDLE1BQU0sRUFBRUMsR0FBRyxFQUFFO0lBQzFCLE9BQU8sSUFBSUMsV0FBVyxDQUFDRCxHQUFHLENBQUM7RUFDNUI7QUFDRCxDQUFDLENBQUM7QUFFRixTQUFTQyxXQUFXLENBQUNDLElBQUksRUFBRTtFQUMxQixJQUFJLENBQUNDLFFBQVEsR0FBR0QsSUFBSTtFQUNwQixJQUFJLENBQUNFLFFBQVEsR0FBRztJQUNmQyxJQUFJLEVBQUUsR0FBRztJQUNUQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ1RDLEdBQUcsRUFBRTtFQUNOLENBQUM7QUFDRjtBQUVBTixXQUFXLENBQUNPLFNBQVMsR0FBRztFQUN2QkwsUUFBUSxFQUFFLEVBQUU7RUFBRTtFQUNkQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUU7QUFDZixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUgsV0FBVyxDQUFDTyxTQUFTLENBQUNDLElBQUksR0FBRyxVQUFTQyxNQUFNLEVBQUVDLElBQUksRUFBRTtFQUFBO0VBSW5ELE9BQU9DLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDO0lBQzVCWCxJQUFJLEVBQUUsSUFBSSxDQUFDQyxRQUFRO0lBQ25CUSxJQUFJLEVBQUU7TUFDTEQsTUFBTSxFQUFOQSxNQUFNO01BQ05DLElBQUksRUFBSkE7SUFDRDtFQUNELENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUMsVUFBQUMsR0FBRyxFQUFJO0lBQ2QsSUFBSUMsZUFBTyxDQUFDQyxLQUFLLEVBQUU7TUFDbEIsYUFBWSxLQUFJLENBQUNkLFFBQVEsR0FBRyxHQUFHLEdBQUdPLE1BQU0sR0FBRyxPQUFPLEVBQUVLLEdBQUc7SUFDeEQ7SUFDQSxJQUFJQSxHQUFHLENBQUNHLE1BQU0sRUFBRTtNQUNmLEtBQUksQ0FBQ2QsUUFBUSxDQUFDQyxJQUFJLEdBQUdVLEdBQUcsQ0FBQ0csTUFBTSxDQUFDYixJQUFJLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBR1UsR0FBRyxDQUFDRyxNQUFNLENBQUNiLElBQUk7TUFDbEUsSUFBSSxLQUFJLENBQUNELFFBQVEsQ0FBQ0MsSUFBSSxJQUFJLEdBQUcsRUFBRTtRQUM5QixLQUFJLENBQUNELFFBQVEsQ0FBQ0csR0FBRyxHQUFHUSxHQUFHLENBQUNHLE1BQU0sQ0FBQ1gsR0FBRyxJQUFJUSxHQUFHLENBQUNHLE1BQU0sQ0FBQ0MsT0FBTztNQUN6RCxDQUFDLE1BQU07UUFDTixLQUFJLENBQUNmLFFBQVEsQ0FBQ0csR0FBRyxHQUFHUSxHQUFHLENBQUNHLE1BQU0sQ0FBQ1gsR0FBRztNQUNuQztNQUNBLEtBQUksQ0FBQ0gsUUFBUSxDQUFDRSxLQUFLLEdBQUdTLEdBQUcsQ0FBQ0csTUFBTSxDQUFDWixLQUFLLElBQUlTLEdBQUcsQ0FBQ0csTUFBTTtNQUNwRCxLQUFJLENBQUNkLFFBQVEsQ0FBQ2MsTUFBTSxHQUFHSCxHQUFHLENBQUNHLE1BQU07TUFDakMsT0FBT0UsT0FBTyxDQUFDQyxPQUFPLENBQUMsS0FBSSxDQUFDakIsUUFBUSxDQUFDO0lBQ3RDO0lBRUEsT0FBT2dCLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDUCxHQUFHLENBQUM7RUFDM0IsQ0FBQyxDQUFDLENBQUNRLEtBQUssQ0FBQyxVQUFBQyxHQUFHLEVBQUk7SUFDZixJQUFJUixlQUFPLENBQUNDLEtBQUssRUFBRTtNQUNsQixhQUFZLEtBQUksQ0FBQ2QsUUFBUSxHQUFHLEdBQUcsR0FBR08sTUFBTSxHQUFHLGFBQWEsRUFBRWMsR0FBRztNQUM3REMsZUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixHQUFHLENBQUMsQ0FBQztJQUNoQztJQUNBLE9BQU9KLE9BQU8sQ0FBQ0UsTUFBTSxDQUFDRSxHQUFHLENBQUM7RUFDM0IsQ0FBQyxDQUFDLENBQUNLLE9BQU8sQ0FBQyxVQUFBZCxHQUFHLEVBQUksQ0FJbEIsQ0FBQyxDQUFDO0FBQ0gsQ0FBQztBQUFBLGVBRWNuQixJQUFJO0FBQUEsMkIiLCJmaWxlIjoiNzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAkY29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0ICRhcGkgZnJvbSAnLi9jb21tb24uanMnXG5cbmxldCBmdW5jID0ge307XG5cbmZ1bmMgPSBuZXcgUHJveHkoZnVuYywge1xuXHRnZXQ6IGZ1bmN0aW9uKHRhcmdldCwga2V5KSB7XG5cdFx0cmV0dXJuIG5ldyBGdW5jQ29udGV4dChrZXkpO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gRnVuY0NvbnRleHQobmFtZSkge1xuXHR0aGlzLmZ1bmNuYW1lID0gbmFtZTtcblx0dGhpcy5yZXNwb25zZSA9IHtcblx0XHRjb2RlOiAyMDAsXG5cdFx0ZGF0YXM6IHt9LFxuXHRcdG1zZzogJydcblx0fVxufVxuXG5GdW5jQ29udGV4dC5wcm90b3R5cGUgPSB7XG5cdGZ1bmNuYW1lOiAnJyxcdC8vIOS6keWHveaVsOWQjeensFxuXHRyZXNwb25zZToge30gXHQvLyDnu5/kuIDlk43lupTmoLzlvI9cbn07XG5cbi8qKlxuICog6LCD5bCa56aP55Ge5Ye95pWwXG4gKiBhY3Rpb24gY29udHJvbGxlciDlh73mlbDot6/lvoRcbiAqIGRhdGEgY29udHJvbGxlciDmlbDmja7lj4LmlbBcbiAqICovXG5GdW5jQ29udGV4dC5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uKGFjdGlvbiwgZGF0YSkge1xuXG5cblxuXHRyZXR1cm4gdW5pQ2xvdWQuY2FsbEZ1bmN0aW9uKHtcblx0XHRuYW1lOiB0aGlzLmZ1bmNuYW1lLFxuXHRcdGRhdGE6IHtcblx0XHRcdGFjdGlvbixcblx0XHRcdGRhdGFcblx0XHR9XG5cdH0pLnRoZW4ocmVzID0+IHtcblx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5mdW5jbmFtZSArICcvJyArIGFjdGlvbiArICcgY2FsbCcsIHJlcyk7XG5cdFx0fVxuXHRcdGlmIChyZXMucmVzdWx0KSB7XG5cdFx0XHR0aGlzLnJlc3BvbnNlLmNvZGUgPSByZXMucmVzdWx0LmNvZGUgPT09IDAgPyAyMDAgOiByZXMucmVzdWx0LmNvZGU7XG5cdFx0XHRpZiAodGhpcy5yZXNwb25zZS5jb2RlICE9IDIwMCkge1xuXHRcdFx0XHR0aGlzLnJlc3BvbnNlLm1zZyA9IHJlcy5yZXN1bHQubXNnIHx8IHJlcy5yZXN1bHQubWVzc2FnZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMucmVzcG9uc2UubXNnID0gcmVzLnJlc3VsdC5tc2dcblx0XHRcdH1cblx0XHRcdHRoaXMucmVzcG9uc2UuZGF0YXMgPSByZXMucmVzdWx0LmRhdGFzIHx8IHJlcy5yZXN1bHQ7XG5cdFx0XHR0aGlzLnJlc3BvbnNlLnJlc3VsdCA9IHJlcy5yZXN1bHQ7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuXHRcdH1cblx0XHRcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKTtcblx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRpZiAoJGNvbmZpZy5kZWJ1Zykge1xuXHRcdFx0Y29uc29sZS5sb2codGhpcy5mdW5jbmFtZSArICcvJyArIGFjdGlvbiArICcgY2FsbCBjYXRjaCcsIGVycik7XG5cdFx0XHQkYXBpLmFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycikpO1xuXHRcdH1cblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcblx0fSkuZmluYWxseShyZXMgPT4ge1xuXG5cblxuXHR9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuYztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///77\n");

/***/ }),
/* 78 */
/*!*******************************************************************!*\
  !*** E:/master/1/组内相关资料/农药检测/NFC/app/nfc_app_2.0/common/store.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 15));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 43));\nvar _config = _interopRequireDefault(__webpack_require__(/*! ./config.js */ 75));\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  state: {\n    islogin: false,\n    member: {},\n    token: '',\n    token_expired: 0,\n    h5Weixin: {},\n    __key_member: 'usemall_member',\n    __key_token: 'uni_id_token',\n    __key_token_expired: 'uni_id_token_expired',\n    __key_h5Weixin: '__h5Weixn'\n  },\n  mutations: {\n    // 登录成功\n    login: function login(state, res) {\n      // 用户已登录\n      state.islogin = true;\n      state.member = res.member;\n      state.token = res.user.token;\n      state.token_expired = res.user.tokenExpired;\n\n      // 存储会员 member 数据\n      uni.setStorageSync(state.__key_member, state.member);\n\n      // 存储uid token 数据\n      if (state.token) uni.setStorageSync(state.__key_token, state.token);\n      // 存储uid token_expired 数据\n      if (state.token_expired) uni.setStorageSync(state.__key_token_expired, state.token_expired);\n    },\n    // 加载 Token\n    loadToken: function loadToken(state) {\n      state.member = uni.getStorageSync(state.__key_member);\n      state.token = uni.getStorageSync(state.__key_token);\n      state.token_expired = uni.getStorageSync(state.__key_token_expired);\n      if (state.token_expired > new Date().getTime()) {\n        state.islogin = true;\n      }\n    },\n    // 微信公众号 OAuth\n    h5WeixinOAuth: function h5WeixinOAuth(state, res) {\n      if (res.openid) {\n        uni.setStorage({\n          key: state.__key_h5Weixin,\n          data: {\n            code: res.code,\n            openid: res.openid\n          }\n        });\n        state.h5Weixin = res;\n      }\n    },\n    // 微信公众号 Token\n    h5WeixinToken: function h5WeixinToken(state, code) {\n      var h5Weixin = uni.getStorageSync(state.__key_h5Weixin);\n      if (h5Weixin && h5Weixin.code === code) {\n        state.h5Weixin = h5Weixin;\n      } else {\n        state.h5Weixin = {};\n        uni.removeStorageSync(state.__key_h5Weixin);\n      }\n      return state.h5Weixin;\n    },\n    // 注销 \n    logout: function logout(state) {\n      state.islogin = false;\n      state.member = {};\n      state.token = '';\n      state.token_expired = 0;\n      uni.removeStorage({\n        key: state.__key_member\n      });\n      uni.removeStorage({\n        key: state.__key_token\n      });\n      uni.removeStorage({\n        key: state.__key_token_expired\n      });\n    },\n    // token 令牌\n    token: function token(state, _token, token_expired) {\n      state.token = _token;\n      state.token_expired = token_expired;\n\n      // 存储uid token 数据\n      uni.setStorageSync(state.__key_token, state.token);\n      // 存储uid token_expired 数据\n      uni.setStorageSync(state.__key_token_expired, state.token_expired);\n    },\n    // 修改 member 数据\n    putMember: function putMember(state, user) {\n      state.member = user;\n\n      // 存储会员 member 数据\n      uni.setStorage({\n        key: state.__key_member,\n        data: state.member\n      });\n    }\n  },\n  actions: {}\n});\nvar _default = store;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3N0b3JlLmpzIl0sIm5hbWVzIjpbIlZ1ZSIsInVzZSIsIlZ1ZXgiLCJzdG9yZSIsIlN0b3JlIiwic3RhdGUiLCJpc2xvZ2luIiwibWVtYmVyIiwidG9rZW4iLCJ0b2tlbl9leHBpcmVkIiwiaDVXZWl4aW4iLCJfX2tleV9tZW1iZXIiLCJfX2tleV90b2tlbiIsIl9fa2V5X3Rva2VuX2V4cGlyZWQiLCJfX2tleV9oNVdlaXhpbiIsIm11dGF0aW9ucyIsImxvZ2luIiwicmVzIiwidXNlciIsInRva2VuRXhwaXJlZCIsInVuaSIsInNldFN0b3JhZ2VTeW5jIiwibG9hZFRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwiZ2V0VGltZSIsImg1V2VpeGluT0F1dGgiLCJvcGVuaWQiLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsImNvZGUiLCJoNVdlaXhpblRva2VuIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJsb2dvdXQiLCJyZW1vdmVTdG9yYWdlIiwicHV0TWVtYmVyIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxZQUFHLENBQUNDLEdBQUcsQ0FBQ0MsYUFBSSxDQUFDO0FBRWIsSUFBTUMsS0FBSyxHQUFHLElBQUlELGFBQUksQ0FBQ0UsS0FBSyxDQUFDO0VBQzVCQyxLQUFLLEVBQUU7SUFDTkMsT0FBTyxFQUFFLEtBQUs7SUFDZEMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNWQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxhQUFhLEVBQUUsQ0FBQztJQUNoQkMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUVaQyxZQUFZLEVBQUUsZ0JBQWdCO0lBQzlCQyxXQUFXLEVBQUUsY0FBYztJQUMzQkMsbUJBQW1CLEVBQUUsc0JBQXNCO0lBQzNDQyxjQUFjLEVBQUU7RUFDakIsQ0FBQztFQUNEQyxTQUFTLEVBQUU7SUFDVjtJQUNBQyxLQUFLLGlCQUFDWCxLQUFLLEVBQUVZLEdBQUcsRUFBRTtN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QUFFeEIsS0FBSyxDQUFDTztNQUNaLENBQUMsQ0FBQztNQUNGUSxHQUFHLENBQUNlLGFBQWEsQ0FBQztRQUNqQk4sR0FBRyxFQUFFeEIsS0FBSyxDQUFDUTtNQUNaLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRDtJQUNBTCxLQUFLLGlCQUFDSCxLQUFLLEVBQUVHLE1BQUssRUFBRUMsYUFBYSxFQUFFO01BQ2xDSixLQUFLLENBQUNHLEtBQUssR0FBR0EsTUFBSztNQUNuQkgsS0FBSyxDQUFDSSxhQUFhLEdBQUdBLGFBQWE7O01BRW5DO01BQ0FXLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDaEIsS0FBSyxDQUFDTyxXQUFXLEVBQUVQLEtBQUssQ0FBQ0csS0FBSyxDQUFDO01BQ2xEO01BQ0FZLEdBQUcsQ0FBQ0MsY0FBYyxDQUFDaEIsS0FBSyxDQUFDUSxtQkFBbUIsRUFBRVIsS0FBSyxDQUFDSSxhQUFhLENBQUM7SUFDbkUsQ0FBQztJQUVEO0lBQ0EyQixTQUFTLHFCQUFFL0IsS0FBSyxFQUFFYSxJQUFJLEVBQUU7TUFDdkJiLEtBQUssQ0FBQ0UsTUFBTSxHQUFHVyxJQUFJOztNQUVuQjtNQUNBRSxHQUFHLENBQUNRLFVBQVUsQ0FBQztRQUNkQyxHQUFHLEVBQUV4QixLQUFLLENBQUNNLFlBQVk7UUFDdkJtQixJQUFJLEVBQUV6QixLQUFLLENBQUNFO01BQ2IsQ0FBQyxDQUFDO0lBQ0g7RUFDRCxDQUFDO0VBQ0Q4QixPQUFPLEVBQUUsQ0FFVDtBQUNELENBQUMsQ0FBQztBQUFBLGVBRWFsQyxLQUFLO0FBQUEiLCJmaWxlIjoiNzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuaW1wb3J0ICRjb25maWcgZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5WdWUudXNlKFZ1ZXgpXHJcblxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHRzdGF0ZToge1xyXG5cdFx0aXNsb2dpbjogZmFsc2UsXHJcblx0XHRtZW1iZXI6IHt9LFxyXG5cdFx0dG9rZW46ICcnLFxyXG5cdFx0dG9rZW5fZXhwaXJlZDogMCxcclxuXHRcdGg1V2VpeGluOiB7fSxcclxuXHJcblx0XHRfX2tleV9tZW1iZXI6ICd1c2VtYWxsX21lbWJlcicsXHJcblx0XHRfX2tleV90b2tlbjogJ3VuaV9pZF90b2tlbicsXHJcblx0XHRfX2tleV90b2tlbl9leHBpcmVkOiAndW5pX2lkX3Rva2VuX2V4cGlyZWQnLFxyXG5cdFx0X19rZXlfaDVXZWl4aW46ICdfX2g1V2VpeG4nLFxyXG5cdH0sXHJcblx0bXV0YXRpb25zOiB7XHJcblx0XHQvLyDnmbvlvZXmiJDlip9cclxuXHRcdGxvZ2luKHN0YXRlLCByZXMpIHtcclxuXHRcdFx0Ly8g55So5oi35bey55m75b2VXHJcblx0XHRcdHN0YXRlLmlzbG9naW4gPSB0cnVlO1xyXG5cdFx0XHRcclxuXHRcdFx0c3RhdGUubWVtYmVyID0gcmVzLm1lbWJlcjtcclxuXHRcdFx0c3RhdGUudG9rZW4gPSByZXMudXNlci50b2tlbjtcclxuXHRcdFx0c3RhdGUudG9rZW5fZXhwaXJlZCA9IHJlcy51c2VyLnRva2VuRXhwaXJlZDtcclxuXHJcblx0XHRcdC8vIOWtmOWCqOS8muWRmCBtZW1iZXIg5pWw5o2uXHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhzdGF0ZS5fX2tleV9tZW1iZXIsIHN0YXRlLm1lbWJlcik7XHJcblxyXG5cdFx0XHQvLyDlrZjlgqh1aWQgdG9rZW4g5pWw5o2uXHJcblx0XHRcdGlmIChzdGF0ZS50b2tlbikgdW5pLnNldFN0b3JhZ2VTeW5jKHN0YXRlLl9fa2V5X3Rva2VuLCBzdGF0ZS50b2tlbik7XHJcblx0XHRcdC8vIOWtmOWCqHVpZCB0b2tlbl9leHBpcmVkIOaVsOaNrlxyXG5cdFx0XHRpZiAoc3RhdGUudG9rZW5fZXhwaXJlZCkgdW5pLnNldFN0b3JhZ2VTeW5jKHN0YXRlLl9fa2V5X3Rva2VuX2V4cGlyZWQsIHN0YXRlLnRva2VuX2V4cGlyZWQpO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5Yqg6L29IFRva2VuXHJcblx0XHRsb2FkVG9rZW4oc3RhdGUpIHtcclxuXHRcdFx0c3RhdGUubWVtYmVyID0gdW5pLmdldFN0b3JhZ2VTeW5jKHN0YXRlLl9fa2V5X21lbWJlcik7XHJcblx0XHRcdHN0YXRlLnRva2VuID0gdW5pLmdldFN0b3JhZ2VTeW5jKHN0YXRlLl9fa2V5X3Rva2VuKTtcclxuXHRcdFx0c3RhdGUudG9rZW5fZXhwaXJlZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhzdGF0ZS5fX2tleV90b2tlbl9leHBpcmVkKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzdGF0ZS50b2tlbl9leHBpcmVkID4gbmV3IERhdGUoKS5nZXRUaW1lKCkpIHtcclxuXHRcdFx0XHRzdGF0ZS5pc2xvZ2luID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Ly8g5b6u5L+h5YWs5LyX5Y+3IE9BdXRoXHJcblx0XHRoNVdlaXhpbk9BdXRoKHN0YXRlLCByZXMpIHtcclxuXHRcdFx0aWYgKHJlcy5vcGVuaWQpIHtcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6IHN0YXRlLl9fa2V5X2g1V2VpeGluLFxyXG5cdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRjb2RlOiByZXMuY29kZSxcclxuXHRcdFx0XHRcdFx0b3BlbmlkOiByZXMub3BlbmlkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3RhdGUuaDVXZWl4aW4gPSByZXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8vIOW+ruS/oeWFrOS8l+WPtyBUb2tlblxyXG5cdFx0aDVXZWl4aW5Ub2tlbihzdGF0ZSwgY29kZSkge1xyXG5cdFx0XHRsZXQgaDVXZWl4aW4gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoc3RhdGUuX19rZXlfaDVXZWl4aW4pO1xyXG5cdFx0XHRpZiAoaDVXZWl4aW4gJiYgaDVXZWl4aW4uY29kZSA9PT0gY29kZSkge1xyXG5cdFx0XHRcdHN0YXRlLmg1V2VpeGluID0gaDVXZWl4aW47XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c3RhdGUuaDVXZWl4aW4gPSB7fTtcclxuXHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMoc3RhdGUuX19rZXlfaDVXZWl4aW4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gc3RhdGUuaDVXZWl4aW47XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIOazqOmUgCBcclxuXHRcdGxvZ291dChzdGF0ZSkge1xyXG5cdFx0XHRzdGF0ZS5pc2xvZ2luID0gZmFsc2U7XHJcblx0XHRcdHN0YXRlLm1lbWJlciA9IHt9O1xyXG5cdFx0XHRzdGF0ZS50b2tlbiA9ICcnO1xyXG5cdFx0XHRzdGF0ZS50b2tlbl9leHBpcmVkID0gMDtcclxuXHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlKHtcclxuXHRcdFx0XHRrZXk6IHN0YXRlLl9fa2V5X21lbWJlclxyXG5cdFx0XHR9KVxyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZSh7XHJcblx0XHRcdFx0a2V5OiBzdGF0ZS5fX2tleV90b2tlblxyXG5cdFx0XHR9KVxyXG5cdFx0XHR1bmkucmVtb3ZlU3RvcmFnZSh7XHJcblx0XHRcdFx0a2V5OiBzdGF0ZS5fX2tleV90b2tlbl9leHBpcmVkXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyB0b2tlbiDku6TniYxcclxuXHRcdHRva2VuKHN0YXRlLCB0b2tlbiwgdG9rZW5fZXhwaXJlZCkge1xyXG5cdFx0XHRzdGF0ZS50b2tlbiA9IHRva2VuO1xyXG5cdFx0XHRzdGF0ZS50b2tlbl9leHBpcmVkID0gdG9rZW5fZXhwaXJlZDtcclxuXHJcblx0XHRcdC8vIOWtmOWCqHVpZCB0b2tlbiDmlbDmja5cclxuXHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKHN0YXRlLl9fa2V5X3Rva2VuLCBzdGF0ZS50b2tlbik7XHJcblx0XHRcdC8vIOWtmOWCqHVpZCB0b2tlbl9leHBpcmVkIOaVsOaNrlxyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZVN5bmMoc3RhdGUuX19rZXlfdG9rZW5fZXhwaXJlZCwgc3RhdGUudG9rZW5fZXhwaXJlZCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHQvLyDkv67mlLkgbWVtYmVyIOaVsOaNrlxyXG5cdFx0cHV0TWVtYmVyIChzdGF0ZSwgdXNlcikge1xyXG5cdFx0XHRzdGF0ZS5tZW1iZXIgPSB1c2VyO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g5a2Y5YKo5Lya5ZGYIG1lbWJlciDmlbDmja5cclxuXHRcdFx0dW5pLnNldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdGtleTogc3RhdGUuX19rZXlfbWVtYmVyLFxyXG5cdFx0XHRcdGRhdGE6IHN0YXRlLm1lbWJlclxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0YWN0aW9uczoge1xyXG5cclxuXHR9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///78\n");

/***/ })
],[[0,"app-config"]]]);