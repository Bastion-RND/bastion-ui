import { jsx as e } from "react/jsx-runtime";
function u(t) {
  var a, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (a = 0; a < o; a++) t[a] && (r = u(t[a])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function i() {
  for (var t, a, r = 0, n = "", o = arguments.length; r < o; r++) (t = arguments[r]) && (a = u(t)) && (n && (n += " "), n += a);
  return n;
}
const s = (t) => String(t[0]).toUpperCase() + String(t).slice(1), f = ({
  fill: t = "filled",
  size: a = "regular",
  color: r = "brand",
  expanded: n = !1,
  type: o = "button",
  ...b
}) => /* @__PURE__ */ e(
  "button",
  {
    type: o === "button" ? "button" : "submit",
    className: `bast-button ${i(
      {
        [`bast-button--${s(r)}`]: r,
        [`bast-button--${s(t)}`]: t,
        "bast-button--small": a === "small",
        "bast-button--expanded": n
      }
    )}`,
    ...b
  }
);
export {
  f as BastButton
};
