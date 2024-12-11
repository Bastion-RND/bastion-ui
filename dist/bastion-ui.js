import { jsx as i } from "react/jsx-runtime";
import { createContext as I, useContext as v, useId as p, useMemo as $ } from "react";
function l(t) {
  var r, n, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var u = t.length;
    for (r = 0; r < u; r++) t[r] && (n = l(t[r])) && (o && (o += " "), o += n);
  } else for (n in t) t[n] && (o && (o += " "), o += n);
  return o;
}
function a() {
  for (var t, r, n = 0, o = "", u = arguments.length; n < u; n++) (t = arguments[n]) && (r = l(t)) && (o && (o += " "), o += r);
  return o;
}
const h = ({
  className: t,
  fill: r = "filled",
  size: n = "regular",
  color: o = "brand",
  expand: u,
  type: s = "button",
  ...e
}) => /* @__PURE__ */ i(
  "button",
  {
    type: s === "button" ? "button" : "submit",
    className: `bast-button ${a(
      {
        [`bast-button--${o}`]: o,
        [`bast-button--${r}`]: r,
        "bast-button--small": n === "small",
        [`bast-button--${u}`]: u !== void 0,
        [`${t}`]: t !== void 0
      }
    )}`,
    ...e
  }
), G = (t, r = 0) => {
  let n = null;
  return (...o) => {
    n && clearTimeout(n), n = setTimeout(() => {
      t(...o);
    }, r);
  };
}, b = I(null), c = ({ withException: t }) => {
  const r = v(b);
  if (!r && t)
    throw new Error("InputGroupComponents must be used inside InputGroup");
  return r;
}, d = ({
  size: t,
  id: r,
  debounce: n = 0,
  onChange: o,
  className: u,
  ...s
}) => {
  const e = c({ withException: !1 }), f = r || (e == null ? void 0 : e.inputGroupId);
  return /* @__PURE__ */ i(
    "input",
    {
      id: f,
      className: `bast-input${a([u && ` ${u}`])}`,
      ...s,
      onChange: o && G(o, n)
    }
  );
}, x = ({
  htmlFor: t,
  children: r,
  className: n,
  ...o
}) => {
  const { inputGroupId: u, ariaDescribedby: s } = c({ withException: !0 });
  return /* @__PURE__ */ i(
    "label",
    {
      htmlFor: t || u,
      "aria-describedby": s,
      ...o,
      className: `bast-input-group__label${a([n && ` ${n}`])}`,
      children: r
    }
  );
}, m = ({ id: t, children: r, className: n, ...o }) => {
  const u = p(), s = p(), e = $(() => ({ inputGroupId: t || u, ariaDescribedby: s }), []);
  return /* @__PURE__ */ i(b.Provider, { value: e, children: /* @__PURE__ */ i("div", { className: `bast-input-group${a([n && ` ${n}`])}`, ...o, children: r }) });
};
m.Control = d;
m.Label = x;
const B = ({ ...t }) => /* @__PURE__ */ i(d, { ...t });
export {
  h as BastButton,
  B as BastInput,
  m as BastInputGroup
};
