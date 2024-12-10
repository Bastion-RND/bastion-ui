import { jsx as b } from "react/jsx-runtime";
function s(t) {
  var a, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var o = t.length;
    for (a = 0; a < o; a++) t[a] && (r = s(t[a])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function e() {
  for (var t, a, r = 0, n = "", o = arguments.length; r < o; r++) (t = arguments[r]) && (a = s(t)) && (n && (n += " "), n += a);
  return n;
}
const l = ({
  fill: t = "filled",
  size: a = "regular",
  color: r = "brand",
  expanded: n = !1,
  type: o = "button",
  ...u
}) => /* @__PURE__ */ b(
  "button",
  {
    type: o === "button" ? "button" : "submit",
    className: `bast-button ${e(
      {
        [`bast-button--${r}`]: r,
        [`bast-button--${t}`]: t,
        "bast-button--small": a === "small",
        "bast-button--expanded": n
      }
    )}`,
    ...u
  }
);
export {
  l as BastButton
};
