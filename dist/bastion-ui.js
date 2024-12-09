import { jsx as e } from "react/jsx-runtime";
function b(t) {
  var s, a, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (s = 0; s < u; s++) t[s] && (a = b(t[s])) && (n && (n += " "), n += a);
  } else for (a in t) t[a] && (n && (n += " "), n += a);
  return n;
}
function l() {
  for (var t, s, a = 0, n = "", u = arguments.length; a < u; a++) (t = arguments[a]) && (s = b(t)) && (n && (n += " "), n += s);
  return n;
}
const r = (t) => String(t[0]).toUpperCase() + String(t).slice(1), B = "_bastButton_tbrtf_1", d = "_bastButtonFilled_tbrtf_11", i = "_bastButtonOutlined_tbrtf_39", _ = "_bastButtonCleared_tbrtf_67", c = "_bastButtonSmall_tbrtf_95", f = "_bastButtonExpanded_tbrtf_98", o = {
  bastButton: B,
  bastButtonFilled: d,
  bastButtonOutlined: i,
  bastButtonCleared: _,
  bastButtonSmall: c,
  bastButtonExpanded: f
}, m = ({
  fill: t = "filled",
  size: s = "regular",
  color: a = "brand",
  expanded: n = !1,
  ...u
}) => /* @__PURE__ */ e(
  "button",
  {
    type: "button",
    className: `${o.bastButton} ${o.bastButton + r(a)} ${o.bastButton + r(t)} ${l(
      {
        [o.bastButtonPrimary]: a === "brand",
        [o.bastButtonFilled]: t === "filled",
        [o.bastButtonOutlined]: t === "outline",
        [o.bastButtonCleared]: t === "clear",
        [o.bastButtonSmall]: s === "small",
        [o.bastButtonExpanded]: n
      }
    )}`,
    ...u
  }
);
export {
  m as BastButton
};
