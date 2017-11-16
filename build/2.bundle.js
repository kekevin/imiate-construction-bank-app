webpackJsonp([2],{114:function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(9);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(12);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactRouterDom = __webpack_require__(13);\n\nvar _reactRedux = __webpack_require__(17);\n\nvar _propTypes = __webpack_require__(20);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _action = __webpack_require__(21);\n\nvar _action2 = _interopRequireDefault(_action);\n\nvar _Header = __webpack_require__(45);\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _Footer = __webpack_require__(46);\n\nvar _Footer2 = _interopRequireDefault(_Footer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar mapStoreStateToProps = function mapStoreStateToProps(state) {\n    return {\n        headerInfo: state.app.headerInfo,\n        headerInp: state.app.headerInp,\n        headerDiv: state.app.headerDiv\n\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n    return {\n        fn: {\n            changeHeaderInfo: function changeHeaderInfo(infotype, string) {\n                return dispatch(_action2.default.changeInfo(infotype, string));\n            }\n        }\n    };\n};\n\nvar Investment = function (_React$Component) {\n    _inherits(Investment, _React$Component);\n\n    function Investment(props) {\n        _classCallCheck(this, Investment);\n\n        var _this = _possibleConstructorReturn(this, (Investment.__proto__ || Object.getPrototypeOf(Investment)).call(this, props));\n\n        _this.props.fn.changeHeaderInfo(\"info\", \"投资理财\");\n        _this.props.fn.changeHeaderInfo(\"inp\", \"hide\");\n        _this.props.fn.changeHeaderInfo(\"div\", \"show\");\n        return _this;\n    }\n\n    _createClass(Investment, [{\n        key: 'render',\n        value: function render() {\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(_Header2.default, null),\n                _react2.default.createElement(\n                    'div',\n                    { id: 'investment' },\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'investment-list' },\n                        _react2.default.createElement(\n                            'ul',\n                            null,\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u901F\\u76C8'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u57FA\\u91D1\\u6295\\u8D44'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u7406\\u8D22\\u4EA7\\u54C1'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u7ED3\\u552E\\u6C47'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u8D26\\u6237\\u5546\\u54C1'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u8D26\\u6237\\u8D35\\u91D1\\u5C5E'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u4EE3\\u7406\\u4FDD\\u9669'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'a',\n                                    { href: 'javascript:void(0)' },\n                                    _react2.default.createElement('p', null),\n                                    '\\u5168\\u90E8\\u6295\\u8D44\\u4EA7\\u54C1'\n                                )\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'investment-ad' },\n                        _react2.default.createElement(\n                            'ul',\n                            null,\n                            _react2.default.createElement('li', null),\n                            _react2.default.createElement('li', null)\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'investment-banner' },\n                        _react2.default.createElement('img', { src: __webpack_require__(117), alt: '\\u624B\\u673A\\u5C3D\\u60C5\\u6447', className: 'show' }),\n                        _react2.default.createElement('img', { src: __webpack_require__(117), alt: '\\u624B\\u673A\\u5C3D\\u60C5\\u6447', className: 'hide' }),\n                        _react2.default.createElement(\n                            'ul',\n                            null,\n                            _react2.default.createElement('li', null),\n                            _react2.default.createElement('li', null)\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'investment-hotSell' },\n                        _react2.default.createElement(\n                            'h1',\n                            { className: 'headbar' },\n                            '\\u6700\\u8FD1\\u70ED\\u5356'\n                        ),\n                        _react2.default.createElement(\n                            'dl',\n                            null,\n                            _react2.default.createElement(\n                                'dt',\n                                null,\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '4.17%'\n                                ),\n                                ' ',\n                                _react2.default.createElement(\n                                    'span',\n                                    null,\n                                    '\\u4E03\\u65E5\\u5E74\\u5316\\u6536\\u76CA'\n                                )\n                            ),\n                            _react2.default.createElement(\n                                'dd',\n                                null,\n                                ' ',\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '\\u5EFA\\u4FE1\\u73B0\\u91D1\\u6DFB\\u5229 ',\n                                    _react2.default.createElement('i', null)\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '\\u8D27\\u5E01\\u5E02\\u573A\\u57FA\\u91D1 ',\n                                    _react2.default.createElement('i', null)\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '\\u4E07\\u4EFD\\u6536\\u76CA1.1525'\n                                )\n                            )\n                        )\n                    ),\n                    _react2.default.createElement(\n                        'div',\n                        { className: 'investment-info' },\n                        _react2.default.createElement(\n                            'h1',\n                            { className: 'headbar' },\n                            '\\u8D44\\u8BAF ',\n                            _react2.default.createElement(\n                                'span',\n                                null,\n                                '\\u66F4\\u591A>'\n                            )\n                        ),\n                        _react2.default.createElement(\n                            'ul',\n                            null,\n                            _react2.default.createElement(\n                                'li',\n                                null,\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '\\u5FEB\\u8BAF\\u63D0\\u793A\\uFF1AECB\\u6267\\u884C\\u59D4\\u666E\\u96F7\\u7279\\u79F0\\uFF0C\\u5BF9\\u672A\\u6765\\u901A\\u80C0\\u7684\\u57FA\\u672C\\u9884\\u8BBE\\u4ECD\\u9AD8\\u5EA6\\u4F9D\\u8D56\\u5BBD\\u677E'\n                                ),\n                                _react2.default.createElement(\n                                    'p',\n                                    null,\n                                    '2017-07-04'\n                                )\n                            )\n                        )\n                    )\n                ),\n                _react2.default.createElement(_Footer2.default, null)\n            );\n        }\n    }]);\n\n    return Investment;\n}(_react2.default.Component);\n\nexports.default = (0, _reactRedux.connect)(mapStoreStateToProps, mapDispatchToProps)(Investment);\n\n//////////////////\n// WEBPACK FOOTER\n// ./component/Investment.jsx\n// module id = 114\n// module chunks = 2\n\n//# sourceURL=webpack:///./component/Investment.jsx?")},117:function(module,exports,__webpack_require__){eval('module.exports = __webpack_require__.p + "images/t_01.jpg";\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/images/t_01.jpg\n// module id = 117\n// module chunks = 2\n\n//# sourceURL=webpack:///./src/images/t_01.jpg?')}});