(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSlider"] = factory();
	else
		root["VueSlider"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(8),
  /* scopeId */
  "data-v-3e784296",
  /* cssModules */
  null
)
Component.options.__file = "/Users/mengff/Downloads/workspace/github/vue-slider/src/slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e784296", Component.options)
  } else {
    hotAPI.reload("data-v-3e784296", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(7)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  "data-v-79c8a5e8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/mengff/Downloads/workspace/github/vue-slider/src/sliderItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sliderItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79c8a5e8", Component.options)
  } else {
    hotAPI.reload("data-v-79c8a5e8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import sliderItem from './sliderItem.vue';

exports.default = {
    name: 'c-slider',
    created: function created() {},
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.fBindEvent();
            _this.init();
        });
    },
    destroyed: function destroyed() {
        clearInterval(this.timer);
    },

    props: {
        speed: {
            type: Number,
            default: 300
        },
        loop: {
            type: Boolean,
            default: true
        },
        auto: {
            type: Number,
            default: 3000
        }
    },
    data: function data() {
        return {
            width: 0,
            amount: 0,
            startX: 0,
            startTime: 0,
            offsetX: 0,
            idx: 0,
            direction: 'horizontal', //vertical
            timer: '',
            touching: false
        };
    },

    computed: {
        towards: function towards() {
            //up,down,left,right
            return this.offsetX <= 0 ? 'left' : 'right';
        }
    },
    methods: {
        init: function init() {
            var self = this;
            if (this.$children.length) {
                this.width = this.$el.getBoundingClientRect().width;
                this.amount = this.$children.length;
                this.$children.forEach(function (item, index) {
                    item.style.webkitTransform = 'translate3d(' + index * 100 + '%,0,0)';
                });
                this.$children[this.amount - 1].style.webkitTransform = 'translate3d(' + -100 + '%,0,0)';
                if (this.loop) {
                    if (this.auto > 0 && this.amount > 0) {
                        this.fSetAutoPlay();
                    }
                } else {
                    throw new Error('component slider: only loop mode support auto play');
                }
            }
        },

        fBindEvent: function fBindEvent() {
            var self = this,
                el = self.$el;
            //wrap add event,not child
            el.addEventListener('touchstart', function (e) {
                self.startX = e.touches[0].pageX;
                self.startTime = +new Date();
                //clear offsetX
                self.offsetX = 0;
                self.fStopAutoPlay();
            });
            el.addEventListener('touchmove', function (e) {
                e.preventDefault();
                self.touching = true;
                self.offsetX = e.touches[0].pageX - self.startX;
                self.fSwipePage();
            });
            el.addEventListener('touchend', function (e) {
                self.touching = false;
                self.fGoPage();
                self.fSetAutoPlay();
            });
        },
        fSwipePage: function fSwipePage() {
            var self = this;
            var aPageIndex = self.fGetPageIndex(self.idx);
            aPageIndex.forEach(function (item) {
                if (self.$children[item]) {
                    self.$children[item].style.webkitTransition = '';
                }
            });
            aPageIndex.forEach(function (item, i) {
                if (self.$children[item]) {
                    self.$children[item].style.webkitTransform = 'translate3d(' + ((i - 1) * 100 + self.offsetX / self.width * 100) + '%,0,0)';
                }
            });
        },
        fGoPage: function fGoPage() {
            var self = this;
            var boundary = self.width / 4,
                endTime = +new Date();
            //slow swipe,more than 300ms
            if (endTime - self.startTime > 300) {
                if (self.offsetX >= boundary) {
                    self.fGoIndex(-1);
                } else if (self.offsetX <= -boundary) {
                    self.fGoIndex(1);
                } else {
                    self.fGoIndex(0);
                }
            }
            //quick swipe
            else {
                    if (self.offsetX > 50) {
                        self.fGoIndex(-1);
                    } else if (self.offsetX < -50) {
                        self.fGoIndex(1);
                    } else {
                        self.fGoIndex(0);
                    }
                }
        },

        fGoIndex: function fGoIndex(n) {
            var self = this,
                cIdx = self.idx + n;
            var aPageIndex = self.fGetPageIndex(cIdx);
            self.idx = aPageIndex[1];
            var aTrans = aPageIndex,
                aTransExclude = [];
            if (self.towards == 'left' && n != 0) {
                aTrans = aPageIndex.slice(0, -1);
                aTransExclude = aPageIndex.slice(-1);
            } else if (self.towards == 'right' && n != 0) {
                aTrans = aPageIndex.slice(1);
                aTransExclude = aPageIndex.slice(0, 1);
            }
            aTrans.forEach(function (item) {
                if (self.$children[item]) {
                    self.$children[item].style.webkitTransition = '-webkit-transform ' + self.speed + 'ms ease-out';
                }
            });
            aTransExclude.forEach(function (item) {
                if (self.$children[item]) {
                    self.$children[item].style.webkitTransition = '';
                }
            });
            aPageIndex.forEach(function (item, index) {
                if (self.$children[item]) {
                    self.$children[item].style.webkitTransform = 'translate3d(' + (index - 1) * 100 + '%,0,0)';
                }
            });
        },
        fGetPageIndex: function fGetPageIndex(cIdx) {
            var self = this;
            var len = self.$children.length;
            if (self.loop) {
                if (cIdx > len - 1) {
                    cIdx = 0;
                } else if (cIdx < 0) {
                    cIdx = len - 1;
                }
            } else {
                if (cIdx > len - 1) {
                    cIdx = len - 1;
                } else if (cIdx < 0) {
                    cIdx = 0;
                }
            }
            //range check
            var pre = cIdx - 1,
                next = cIdx + 1;

            if (self.loop) {
                pre = pre < 0 ? len - 1 : pre;
                next = next > len - 1 ? 0 : next;
            } else {
                pre = pre < 0 ? -1 : pre;
                next = next > len - 1 ? len : next;
            }
            var aPageIndex = [pre, cIdx, next];
            return aPageIndex;
        },
        fSetAutoPlay: function fSetAutoPlay() {
            var _this2 = this;

            if (this.auto <= 0) {
                return;
            }
            this.fStopAutoPlay();
            this.timer = setInterval(function () {
                _this2.fGoIndex(1);
            }, this.auto);
        },
        fStopAutoPlay: function fStopAutoPlay() {
            clearInterval(this.timer);
        }
    },
    components: {
        // sliderItem
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    name: 'c-slider-item',
    created: function created() {
        this.$parent.init();
    },
    data: function data() {
        return {
            style: {
                webkitTransform: '',
                webkitTransiton: ''
            }
        };
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderItem = exports.slider = undefined;

var _slider = __webpack_require__(1);

var _slider2 = _interopRequireDefault(_slider);

var _sliderItem = __webpack_require__(2);

var _sliderItem2 = _interopRequireDefault(_sliderItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.slider = _slider2.default;
exports.sliderItem = _sliderItem2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider"
  }, [_c('div', {
    ref: "slideWrapper",
    staticClass: "slide-wrap"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    staticClass: "pager-wrap"
  }, [_c('ul', {
    staticClass: "pagerList"
  }, _vm._l((_vm.amount), function(n) {
    return _c('li', {
      key: 'slider-dot' + n,
      staticClass: "pagerItem"
    }, [_c('span', {
      staticClass: "icon icon-dot",
      class: {
        'active': n == _vm.idx + 1
      }
    })])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e784296", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sliderItem",
    style: (_vm.style)
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-79c8a5e8", module.exports)
  }
}

/***/ })
/******/ ]);
});