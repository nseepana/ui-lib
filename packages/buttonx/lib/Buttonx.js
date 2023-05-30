"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//create button component
(function _() {
  if (typeof document === "undefined") {
    return;
  }
  var styles = ".buttonx {\n  background-color: red;\n  color: white;\n  padding: 10px;\n  border-radius: 5px;\n  border: none;\n  cursor: pointer;\n  font-size: 16px;\n}\n.buttonx:hover {\n  background-color: blue;\n}";
  var fileName = "Buttonx_Buttonx_1d07e404-eeac-4f96-9c59-928d36f86bbc";
  var element = document.querySelector("style[data-sass-component='Buttonx_Buttonx_1d07e404-eeac-4f96-9c59-928d36f86bbc']");
  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();
var Buttonx = function Buttonx(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    disabled = _ref.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "buttonx",
    onClick: onClick,
    disabled: disabled
  }, children);
};
Buttonx.propTypes = {
  children: _propTypes["default"].node.isRequired,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
};
Buttonx.defaultProps = {
  onClick: function onClick() {},
  disabled: false
};
var _default = Buttonx;
exports["default"] = _default;