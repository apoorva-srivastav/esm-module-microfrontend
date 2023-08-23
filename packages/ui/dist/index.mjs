'use client'
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/index.js
import * as React3 from "react";

// src/Card/Card.module.css
var _default = {};

// src/Card/Card.jsx
import { jsx } from "react/jsx-runtime";
var Card = ({ children, className }) => {
  return /* @__PURE__ */ jsx("div", { className: `${_default.card} ${className}`, children });
};

// src/Footer/Footer.jsx
import React from "react";

// src/Footer/Footer.module.css
var _default2 = {};

// src/Footer/Footer.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Footer = ({ className }) => {
  return /* @__PURE__ */ jsxs("div", { className: `${_default2.footer} ${className}`, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "Copyright \xA9 2022",
      /* @__PURE__ */ jsx2("p", { children: "Disclaimer: This is a sample disclaimer for footer." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: _default2.footerList, children: [
      /* @__PURE__ */ jsxs("ul", { className: _default2.footerListItem, children: [
        /* @__PURE__ */ jsx2("li", { children: "About Us" }),
        /* @__PURE__ */ jsx2("li", { children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("ul", { className: _default2.footerListItem, children: [
        /* @__PURE__ */ jsx2("li", { children: "Follow Us" }),
        /* @__PURE__ */ jsx2("li", { children: "More Info" })
      ] })
    ] })
  ] });
};

// src/Button/Button.module.css
var _default3 = {};

// src/Button/Button.jsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, { text, onClick, disable, children, type = "primary", className } = _b, props = __objRest(_b, ["text", "onClick", "disable", "children", "type", "className"]);
  const classes = type === "secondary" ? _default3.buttonSecondary : "";
  return /* @__PURE__ */ jsx3("button", __spreadProps(__spreadValues({ className: `${_default3.button} ${classes} ${className}`, onClick: () => onClick(), disable }, props), { children: text || children }));
};

// src/NewTabLink.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var NewTabLink = (_a) => {
  var _b = _a, {
    children,
    href
  } = _b, other = __objRest(_b, [
    "children",
    "href"
  ]);
  return /* @__PURE__ */ jsx4("a", __spreadProps(__spreadValues({ target: "_blank", rel: "noreferrer", href }, other), { children }));
};

// src/CounterButton.tsx
import * as React2 from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var CounterButton = () => {
  const [count, setCount] = React2.useState(0);
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      style: {
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500
      },
      children: [
        /* @__PURE__ */ jsxs2("p", { style: { margin: "0 0 1.5rem 0" }, children: [
          "This component is from",
          " ",
          /* @__PURE__ */ jsx5(
            "code",
            {
              style: {
                padding: "0.2rem 0.3rem",
                background: `rgba(0,0,0,0.1)`,
                borderRadius: "0.25rem"
              },
              children: "ui"
            }
          )
        ] }),
        /* @__PURE__ */ jsx5("div", { children: /* @__PURE__ */ jsxs2(
          "button",
          {
            style: {
              background: "black",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              display: "inline-block",
              cursor: "pointer"
            },
            type: "button",
            onClick: () => setCount((c) => c + 1),
            children: [
              "Count: ",
              count
            ]
          }
        ) })
      ]
    }
  );
};

// src/Header/Header.module.css
var _default4 = {};

// src/Header/Header.jsx
import { format } from "date-fns";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var date = /* @__PURE__ */ new Date();
var pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
var output = format(date, pattern, { timeZone: "Europe/Berlin" });
var Counter = ({ count }) => /* @__PURE__ */ jsxs3("span", { className: _default4.cart, children: [
  "\u{1F6D2}",
  /* @__PURE__ */ jsx6("span", { className: _default4.counter, children: count })
] });
var Header = ({ title, children, count = 0, className }) => {
  return /* @__PURE__ */ jsxs3("div", { className: `${_default4.headerTab} ${className}`, children: [
    /* @__PURE__ */ jsx6("h3", { children: title }),
    children,
    /* @__PURE__ */ jsx6("p", { children: output }),
    /* @__PURE__ */ jsx6(Counter, { count })
  ] });
};
export {
  Button,
  Card,
  CounterButton,
  Footer,
  Header,
  NewTabLink
};
