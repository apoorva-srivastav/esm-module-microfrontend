'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Card: () => Card,
  CounterButton: () => CounterButton,
  Footer: () => Footer,
  Header: () => Header,
  NewTabLink: () => NewTabLink
});
module.exports = __toCommonJS(src_exports);
var React3 = __toESM(require("react"));

// src/Card/Card.module.css
var _default = {};

// src/Card/Card.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var Card = ({ children, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `${_default.card} ${className}`, children });
};

// src/Footer/Footer.jsx
var import_react = __toESM(require("react"));

// src/Footer/Footer.module.css
var _default2 = {};

// src/Footer/Footer.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Footer = ({ className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `${_default2.footer} ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
      "Copyright \xA9 2022",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { children: "Disclaimer: This is a sample disclaimer for footer." })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: _default2.footerList, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: _default2.footerListItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "About Us" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "Contact" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: _default2.footerListItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "Follow Us" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "More Info" })
      ] })
    ] })
  ] });
};

// src/Button/Button.module.css
var _default3 = {};

// src/Button/Button.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, { text, onClick, disable, children, type = "primary", className } = _b, props = __objRest(_b, ["text", "onClick", "disable", "children", "type", "className"]);
  const classes = type === "secondary" ? _default3.buttonSecondary : "";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", __spreadProps(__spreadValues({ className: `${_default3.button} ${classes} ${className}`, onClick: () => onClick(), disable }, props), { children: text || children }));
};

// src/NewTabLink.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var NewTabLink = (_a) => {
  var _b = _a, {
    children,
    href
  } = _b, other = __objRest(_b, [
    "children",
    "href"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", __spreadProps(__spreadValues({ target: "_blank", rel: "noreferrer", href }, other), { children }));
};

// src/CounterButton.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime5 = require("react/jsx-runtime");
var CounterButton = () => {
  const [count, setCount] = React2.useState(0);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      style: {
        background: `rgba(0,0,0,0.05)`,
        borderRadius: `8px`,
        padding: "1.5rem",
        fontWeight: 500
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { style: { margin: "0 0 1.5rem 0" }, children: [
          "This component is from",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
var import_date_fns = require("https://esm.sh/date-fns");
var import_jsx_runtime6 = require("react/jsx-runtime");
var date = /* @__PURE__ */ new Date();
var pattern = "d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)";
var output = (0, import_date_fns.format)(date, pattern, { timeZone: "Europe/Berlin" });
var Counter = ({ count }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: _default4.cart, children: [
  "\u{1F6D2}",
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: _default4.counter, children: count })
] });
var Header = ({ title, children, count = 0, className }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: `${_default4.headerTab} ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: title }),
    children,
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: output }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Counter, { count })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CounterButton,
  Footer,
  Header,
  NewTabLink
});
