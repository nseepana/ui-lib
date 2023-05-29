"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Buttonx.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//create button component

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