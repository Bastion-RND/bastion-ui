import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { forwardRef as i, useId as m, createContext as k, useContext as B, useMemo as x } from "react";
function h(t) {
  var e, n, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (e = 0; e < s; e++) t[e] && (n = h(t[e])) && (o && (o += " "), o += n);
  } else for (n in t) t[n] && (o && (o += " "), o += n);
  return o;
}
function u() {
  for (var t, e, n = 0, o = "", s = arguments.length; n < s; n++) (t = arguments[n]) && (e = h(t)) && (o && (o += " "), o += e);
  return o;
}
const j = ({
  className: t,
  fill: e = "filled",
  size: n = "regular",
  color: o = "brand",
  expand: s,
  type: a = "button",
  ...l
}) => /* @__PURE__ */ r(
  "button",
  {
    type: a === "button" ? "button" : "submit",
    className: `bast-button ${u(
      {
        [`bast-button--${o}`]: o,
        [`bast-button--${e}`]: e,
        "bast-button--small": n === "small",
        [`bast-button--${s}`]: s !== void 0,
        [`${t}`]: t !== void 0
      }
    )}`,
    ...l
  }
), G = ({
  children: t,
  className: e,
  disabled: n,
  ...o
}) => /* @__PURE__ */ r(
  "p",
  {
    className: `bast-check-sublabel ${u({
      [`${e}`]: e,
      "bast-check-sublabel--disabled": n
    })}`,
    ...o,
    children: t
  }
), b = ({
  disabled: t,
  htmlFor: e,
  children: n,
  ...o
}) => /* @__PURE__ */ r(
  "label",
  {
    className: `bast-check-label ${u({
      "bast-check-label--disabled": t
    })}`,
    htmlFor: e,
    ...o,
    children: n
  }
);
b.SubLabel = G;
const g = (t) => i(({ label: e, subLabel: n, ...o }, s) => {
  const a = m(), l = o.id || a;
  return /* @__PURE__ */ p("div", { className: "bast-check-wrapper", children: [
    /* @__PURE__ */ r(t, { ...o, id: l, ref: s }),
    e && /* @__PURE__ */ p(b, { disabled: o.disabled, htmlFor: l, children: [
      e,
      n && /* @__PURE__ */ r(b.SubLabel, { disabled: o.disabled, children: n })
    ] })
  ] });
}), C = i(
  ({ className: t, ...e }, n) => /* @__PURE__ */ r(
    "input",
    {
      ref: n,
      type: "checkbox",
      className: `${u(["bast-check", t && ` ${t}`])}`,
      ...e
    }
  )
), E = g(C), $ = k(null), f = ({ withException: t }) => {
  const e = B($);
  if (!e && t)
    throw new Error("InputGroupComponents must be used inside InputGroup");
  return e;
}, w = (t, e = 0) => {
  let n = null;
  return (...o) => {
    n && clearTimeout(n), n = setTimeout(() => {
      t(...o);
    }, e);
  };
}, I = i(
  ({ size: t, id: e, debounce: n = 0, onChange: o, className: s, ...a }, l) => {
    const c = f({ withException: !1 }), v = e || (c == null ? void 0 : c.inputGroupId);
    return /* @__PURE__ */ r(
      "input",
      {
        ref: l,
        id: v,
        className: `bast-input${u([s && ` ${s}`])}`,
        ...a,
        onChange: o && w(o, n)
      }
    );
  }
), S = i(({ ...t }, e) => /* @__PURE__ */ r(I, { ref: e, ...t })), y = ({
  children: t,
  className: e,
  feedbackType: n = "info",
  ...o
}) => /* @__PURE__ */ r(
  "p",
  {
    className: `bast-input-group__feedback ${u({
      [`${e}`]: e,
      [`feedback--${n}`]: n
    })}`,
    ...o,
    children: t
  }
), F = ({
  htmlFor: t,
  children: e,
  className: n,
  ...o
}) => {
  const { inputGroupId: s } = f({ withException: !0 });
  return /* @__PURE__ */ r(
    "label",
    {
      htmlFor: t || s,
      ...o,
      className: `bast-input-group__label${u([n && ` ${n}`])}`,
      children: e
    }
  );
}, d = ({ id: t, children: e, className: n, ...o }) => {
  const s = m(), a = x(() => ({ inputGroupId: t || s }), []);
  return /* @__PURE__ */ r($.Provider, { value: a, children: /* @__PURE__ */ r(
    "div",
    {
      className: `bast-input-group ${u({
        [`${n}`]: n
      })}`,
      ...o,
      children: e
    }
  ) });
};
d.Control = I;
d.Label = F;
d.Feedback = y;
const A = ({ className: t, ...e }) => /* @__PURE__ */ r("input", { type: "radio", className: `${u(["bast-radio", t && t])}`, ...e });
export {
  j as BastButton,
  E as BastCheck,
  S as BastControl,
  d as BastInputGroup,
  b as BastLabel,
  A as BastRadio
};
