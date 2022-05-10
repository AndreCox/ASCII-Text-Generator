import React from "../../_snowpack/pkg/react.js";
function Button(props) {
  return /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "shadow shadow-green-400 even:text-green-400 border rounded-lg p-2 border-green-400",
    onClick: props.onClick
  }, props.children);
}
export default Button;
