/* @ds-bundle: {"format":4,"namespace":"FWSCDesignSystem_db6c3e","components":[{"name":"Alert","sourcePath":"components/display/Alert.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Dialog","sourcePath":"components/display/Dialog.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/display/Alert.jsx":"5374adf84612","components/display/Badge.jsx":"0caa43b618c5","components/display/Card.jsx":"ab4ddac14c68","components/display/Dialog.jsx":"4fe430c7a96c","components/display/Tabs.jsx":"b3a55c849a10","components/display/Tag.jsx":"f959df9aefe9","components/forms/Button.jsx":"badc65793425","components/forms/Checkbox.jsx":"bd3c9009c063","components/forms/IconButton.jsx":"78c48e0fc3a8","components/forms/Input.jsx":"1a4952c5962c","components/forms/Radio.jsx":"21833231b523","components/forms/Select.jsx":"5d8c2761029f","components/forms/Switch.jsx":"ed13a243d3e9","ui_kits/website/AdvisoriesScreen.jsx":"fd19d1c9415e","ui_kits/website/Chrome.jsx":"f75e9e1eb543","ui_kits/website/DirectoryScreen.jsx":"741707cd1190","ui_kits/website/HomeScreen.jsx":"d132b743cba9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FWSCDesignSystem_db6c3e = window.FWSCDesignSystem_db6c3e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Alert.jsx
try { (() => {
const tones = {
  danger: {
    fg: 'var(--status-danger)',
    bg: 'var(--status-danger-bg)',
    bd: 'var(--status-danger)',
    label: 'Danger'
  },
  caution: {
    fg: 'var(--status-caution)',
    bg: 'var(--status-caution-bg)',
    bd: 'var(--status-caution)',
    label: 'Caution'
  },
  clear: {
    fg: 'var(--status-clear)',
    bg: 'var(--status-clear-bg)',
    bd: 'var(--status-clear)',
    label: 'All clear'
  },
  info: {
    fg: 'var(--status-info)',
    bg: 'var(--status-info-bg)',
    bd: 'var(--status-info)',
    label: 'Notice'
  }
};
function Alert({
  tone = 'info',
  title,
  children,
  action,
  style
}) {
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      background: t.bg,
      borderTop: `3px solid ${t.bd}`,
      border: `1px solid ${t.bd}`,
      borderTopWidth: '3px',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 18px',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: t.fg,
      marginBottom: title || children ? '4px' : 0
    }
  }, t.label), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-heading)',
      marginBottom: children ? '3px' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-body)'
    }
  }, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, action));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Alert.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const tones = {
  neutral: {
    bg: 'var(--navy-050)',
    fg: 'var(--navy-800)',
    bd: 'var(--navy-100)'
  },
  gold: {
    bg: 'var(--gold-100)',
    fg: 'var(--gold-700)',
    bd: 'var(--gold-200)'
  },
  danger: {
    bg: 'var(--status-danger-bg)',
    fg: 'var(--status-danger)',
    bd: '#EACDC6'
  },
  caution: {
    bg: 'var(--status-caution-bg)',
    fg: 'var(--status-caution)',
    bd: '#EEDCA8'
  },
  clear: {
    bg: 'var(--status-clear-bg)',
    fg: 'var(--status-clear)',
    bd: '#C4E0CF'
  },
  info: {
    bg: 'var(--status-info-bg)',
    fg: 'var(--status-info)',
    bd: '#C6D8F0'
  }
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: t.fg,
      background: t.bg,
      border: `1px solid ${t.bd}`,
      borderRadius: 'var(--radius-pill)',
      padding: '4px 11px',
      lineHeight: 1.2,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function Card({
  variant = 'default',
  eyebrow,
  title,
  children,
  footer,
  style
}) {
  const isNavy = variant === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: isNavy ? 'var(--surface-navy)' : 'var(--surface-card)',
      border: isNavy ? '1px solid var(--navy-900)' : '1px solid var(--border-default)',
      borderTop: variant === 'certificate' ? '3px solid var(--gold-500)' : undefined,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      color: isNavy ? 'var(--text-on-navy)' : 'var(--text-body)',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: isNavy ? 'var(--gold-400)' : 'var(--gold-700)',
      marginBottom: '8px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--weight-bold)',
      color: isNavy ? 'var(--white)' : 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: children ? '10px' : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: isNavy ? 'var(--text-on-navy)' : 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      paddingTop: 'var(--space-3)',
      borderTop: isNavy ? '1px solid var(--navy-600)' : '1px solid var(--line-200)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && (typeof tabs[0] === 'string' ? tabs[0] : tabs[0].value)));
  const active = value !== undefined ? value : internal;
  const set = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: '4px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, tabs.map(t => {
    const tab = typeof t === 'string' ? {
      value: t,
      label: t
    } : t;
    const isActive = active === tab.value;
    return /*#__PURE__*/React.createElement("button", {
      key: tab.value,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => set(tab.value),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: isActive ? 'var(--navy-800)' : 'var(--text-muted)',
        padding: '10px 14px',
        marginBottom: '-1px',
        borderBottom: isActive ? '3px solid var(--gold-500)' : '3px solid transparent',
        transition: 'color 120ms ease-out'
      }
    }, tab.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--navy-800)',
      background: 'var(--white)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-sm)',
      padding: '4px 10px',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--ink-400)',
      padding: 0,
      fontSize: '13px',
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-sm)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  lineHeight: 1,
  transition: 'background-color 140ms ease-out, color 140ms ease-out, border-color 140ms ease-out',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '8px 14px',
    minHeight: '32px'
  },
  md: {
    fontSize: 'var(--text-base)',
    padding: '10px 18px',
    minHeight: '40px'
  },
  lg: {
    fontSize: 'var(--text-md)',
    padding: '13px 24px',
    minHeight: '48px'
  }
};
const variants = {
  primary: {
    rest: {
      background: 'var(--action-primary)',
      color: 'var(--text-on-navy)'
    },
    hover: {
      background: 'var(--action-primary-hover)'
    },
    active: {
      background: 'var(--action-primary-active)'
    }
  },
  accent: {
    rest: {
      background: 'var(--action-accent)',
      color: 'var(--navy-900)'
    },
    hover: {
      background: 'var(--action-accent-hover)'
    },
    active: {
      background: 'var(--gold-700)',
      color: 'var(--white)'
    }
  },
  secondary: {
    rest: {
      background: 'transparent',
      color: 'var(--navy-800)',
      borderColor: 'var(--navy-800)'
    },
    hover: {
      background: 'var(--navy-050)'
    },
    active: {
      background: 'var(--navy-100)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--navy-800)'
    },
    hover: {
      background: 'var(--navy-050)'
    },
    active: {
      background: 'var(--navy-100)'
    }
  },
  danger: {
    rest: {
      background: 'var(--status-danger)',
      color: 'var(--white)'
    },
    hover: {
      background: '#8E2A19'
    },
    active: {
      background: '#761F10'
    }
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  style,
  ...rest
}) {
  const [state, setState] = React.useState('rest');
  const v = variants[variant] || variants.primary;
  const dyn = state === 'active' ? {
    ...v.rest,
    ...v.hover,
    ...v.active
  } : state === 'hover' ? {
    ...v.rest,
    ...v.hover
  } : v.rest;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setState('hover'),
    onMouseLeave: () => setState('rest'),
    onMouseDown: () => setState('active'),
    onMouseUp: () => setState('hover'),
    style: {
      ...base,
      ...sizes[size],
      ...dyn,
      ...(disabled ? {
        opacity: 0.45,
        cursor: 'not-allowed'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(14, 26, 52, 0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-md)',
      borderTop: '3px solid var(--gold-500)',
      boxShadow: 'var(--shadow-overlay)',
      width: '100%',
      maxWidth: width,
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-sans)'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      marginBottom: '8px'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--leading-snug)',
      marginBottom: '12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-base)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-body)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
      marginTop: 'var(--space-5)'
    }
  }, actions || /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onClose
  }, "Close"))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function boxLabel(children) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, children);
}
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  children,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: isOn,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '18px',
      height: '18px',
      flex: 'none',
      marginTop: '1px',
      border: `1.5px solid ${isOn ? 'var(--navy-800)' : 'var(--ink-400)'}`,
      borderRadius: 'var(--radius-sm)',
      background: isOn ? 'var(--navy-800)' : 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 120ms ease-out'
    }
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.5L4 7.5L10 1",
    stroke: "var(--gold-400)",
    strokeWidth: "2",
    strokeLinecap: "square"
  }))), children && boxLabel(children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  children,
  variant = 'ghost',
  size = 'md',
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || 40;
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    size: size,
    "aria-label": label,
    title: label,
    style: {
      width: d,
      minWidth: d,
      height: d,
      minHeight: d,
      padding: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-heading)',
      marginBottom: '6px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)'
    }
  }, " *")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      color: 'var(--status-danger)',
      marginTop: '5px'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: '5px'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: 'var(--surface-input)',
      border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--navy-800)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '10px 12px',
      minHeight: '40px',
      outline: focus ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: '1px',
      transition: 'border-color 140ms ease-out',
      ...style
    }
  }, rest));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    required: required
  }, control);
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  name,
  value,
  checked,
  onChange,
  disabled,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '18px',
      height: '18px',
      flex: 'none',
      marginTop: '1px',
      borderRadius: '50%',
      border: `1.5px solid ${checked ? 'var(--navy-800)' : 'var(--ink-400)'}`,
      background: 'var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color 120ms ease-out'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: 'var(--navy-800)'
    }
  })), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, children));
}
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  direction = 'column',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'column' ? '10px' : '20px',
      ...style
    }
  }, options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement(Radio, {
      key: opt.value,
      name: name,
      value: opt.value,
      checked: value === opt.value,
      onChange: onChange
    }, opt.label);
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  required,
  options = [],
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      background: 'var(--surface-input)',
      border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--navy-800)' : 'var(--border-default)'}`,
      borderRadius: 'var(--rad-sm, var(--radius-sm))',
      padding: '10px 34px 10px 12px',
      minHeight: '40px',
      outline: focus ? '2px solid var(--focus-ring)' : 'none',
      outlineOffset: '1px',
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-58%)',
      pointerEvents: 'none',
      color: 'var(--navy-800)',
      fontSize: '11px'
    }
  }, "\u25BE"));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    required: required
  }, control);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  disabled,
  children,
  style
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: isOn,
    disabled: disabled,
    onChange: toggle,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '38px',
      height: '22px',
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: isOn ? 'var(--navy-800)' : 'var(--ink-400)',
      position: 'relative',
      transition: 'background-color 140ms ease-out'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '3px',
      left: isOn ? '19px' : '3px',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      background: isOn ? 'var(--gold-400)' : 'var(--white)',
      transition: 'left 140ms ease-out, background-color 140ms ease-out',
      boxShadow: '0 1px 2px rgba(14,26,52,.3)'
    }
  })), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AdvisoriesScreen.jsx
try { (() => {
const {
  Button,
  Alert,
  Badge,
  Tabs,
  Tag
} = window.FWSCDesignSystem_db6c3e;
const ADVISORIES = [{
  tone: 'danger',
  title: 'Boat ramp closed — Matanzas Inlet',
  body: 'Storm damage to the north ramp. Use Bings Landing until further notice.',
  region: 'Northeast',
  issued: 'Jul 2, 2026',
  kind: 'Closures'
}, {
  tone: 'caution',
  title: 'Small craft advisory — Tampa Bay',
  body: 'Winds 20–25 kt through 6 PM EDT. Restrict rentals to protected waters.',
  region: 'Tampa Bay',
  issued: 'Jul 3, 2026',
  kind: 'Advisories'
}, {
  tone: 'caution',
  title: 'Manatee zone enforcement — Crystal River',
  body: 'FWC increasing idle-speed enforcement through Labor Day. Brief all renters.',
  region: 'Nature Coast',
  issued: 'Jun 28, 2026',
  kind: 'Advisories'
}, {
  tone: 'info',
  title: 'Updated briefing standard effective Aug 1',
  body: 'Revision 4 of the Passenger Briefing Standard adds kill-switch lanyard checks.',
  region: 'Statewide',
  issued: 'Jun 20, 2026',
  kind: 'Notices'
}, {
  tone: 'clear',
  title: 'Red tide advisory lifted — Sarasota',
  body: 'Water quality has returned to normal levels. Normal operations may resume.',
  region: 'Southwest',
  issued: 'Jun 18, 2026',
  kind: 'Notices'
}];
function AdvisoriesScreen() {
  const [tab, setTab] = React.useState('All');
  const rows = ADVISORIES.filter(a => tab === 'All' || a.kind === tab);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Official Notices",
    title: "Waterway advisories"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      maxWidth: 640,
      marginTop: -8
    }
  }, "Active advisories affecting member liveries and their passengers. Members are notified by email when an advisory is issued for their region."), /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['All', 'Advisories', 'Closures', 'Notices'],
    value: tab,
    onChange: setTab,
    style: {
      margin: '20px 0 24px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, rows.map(a => /*#__PURE__*/React.createElement(Alert, {
    key: a.title,
    tone: a.tone,
    title: a.title,
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Tag, null, a.region), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ink-400)'
      }
    }, "Issued ", a.issued))
  }, a.body))));
}
Object.assign(window, {
  AdvisoriesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AdvisoriesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Badge
} = window.FWSCDesignSystem_db6c3e;
function SiteHeader({
  page,
  onNav
}) {
  const items = [['home', 'Home'], ['advisories', 'Advisories'], ['directory', 'Operator Directory']];
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-900)',
      color: 'var(--gold-400)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '7px 16px'
    }
  }, "An official coalition of Florida boat liveries and water-sport operators"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--navy-800)',
      borderBottom: '3px solid var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fwsc-seal.png",
    alt: "FWSC seal",
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 19,
      letterSpacing: '0.06em',
      color: '#F5EFDF'
    }
  }, "FLORIDA WATER SPORTS COALITION"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)',
      marginTop: 3
    }
  }, "Safer Vessels \xB7 Safer Waters")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, items.map(([key, label]) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: () => onNav(key),
    style: {
      background: page === key ? 'var(--navy-700)' : 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: page === key ? 600 : 500,
      color: page === key ? '#FFFFFF' : '#C8D2E4',
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      borderBottom: page === key ? '2px solid var(--gold-500)' : '2px solid transparent'
    }
  }, label)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    style: {
      marginLeft: 10
    }
  }, "Become a member")))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-900)',
      color: '#8FA0C2',
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px',
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fwsc-seal.png",
    alt: "",
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.7,
      maxWidth: 380
    }
  }, "The Florida Water Sports Coalition is a voluntary association of boat liveries and water-sport operators dedicated to passenger safety on Florida waterways.", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      color: '#5F719A'
    }
  }, "\xA9 2026 Florida Water Sports Coalition \xB7 Tallahassee, FL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      marginLeft: 'auto',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Coalition"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "Membership"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "Bylaws")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Safety"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "Advisories"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "Report an incident"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: '#C8D2E4',
      textDecoration: 'none'
    }
  }, "F.S. \xA7327 resources")))));
}
function SectionRule({
  eyebrow,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--navy-800)',
      margin: '6px 0 12px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '2px solid var(--gold-500)',
      paddingTop: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-300)'
    }
  })));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  SectionRule
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DirectoryScreen.jsx
try { (() => {
const {
  Button,
  Badge,
  Tag,
  Input,
  Select,
  Dialog
} = window.FWSCDesignSystem_db6c3e;
const OPERATORS = [{
  name: 'Gulf Breeze Boat Rentals',
  city: 'Pensacola',
  region: 'Panhandle',
  vessels: ['Pontoon', 'Jet ski'],
  status: 'clear',
  since: 2026
}, {
  name: 'Bay Pirate Watersports',
  city: 'St. Petersburg',
  region: 'Tampa Bay',
  vessels: ['Jet ski', 'Kayak'],
  status: 'clear',
  since: 2026
}, {
  name: 'Crystal River Adventure Co.',
  city: 'Crystal River',
  region: 'Nature Coast',
  vessels: ['Pontoon', 'Kayak'],
  status: 'clear',
  since: 2026
}, {
  name: 'Islamorada Livery & Charters',
  city: 'Islamorada',
  region: 'Florida Keys',
  vessels: ['Pontoon', 'Skiff'],
  status: 'caution',
  since: 2026
}, {
  name: 'Intracoastal Watercraft LLC',
  city: 'Fort Lauderdale',
  region: 'Southeast',
  vessels: ['Jet ski'],
  status: 'clear',
  since: 2026
}, {
  name: 'St. Johns River Outfitters',
  city: 'DeLand',
  region: 'Northeast',
  vessels: ['Kayak', 'Canoe'],
  status: 'clear',
  since: 2026
}];
const statusLabel = {
  clear: 'Certified',
  caution: 'Under review'
};
function DirectoryScreen() {
  const [q, setQ] = React.useState('');
  const [region, setRegion] = React.useState('All regions');
  const [sel, setSel] = React.useState(null);
  const rows = OPERATORS.filter(o => (region === 'All regions' || o.region === region) && (q === '' || (o.name + o.city).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Member Directory",
    title: "Certified operators"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-end',
      margin: '0 0 20px',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 2
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Search",
    placeholder: "Operator or city",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Region",
    value: region,
    onChange: e => setRegion(e.target.value),
    options: ['All regions', 'Panhandle', 'Tampa Bay', 'Nature Coast', 'Northeast', 'Southeast', 'Florida Keys']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      border: '1px solid var(--line-300)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--parchment-200)'
    }
  }, ['Operator', 'Location', 'Vessels', 'Status', ''].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '11px 16px',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--navy-800)',
      borderBottom: '1px solid var(--line-300)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(o => /*#__PURE__*/React.createElement("tr", {
    key: o.name,
    style: {
      borderBottom: '1px solid var(--line-200)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      fontWeight: 600,
      color: 'var(--navy-800)'
    }
  }, o.name), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      color: 'var(--ink-600)'
    }
  }, o.city, " \xB7 ", o.region), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6
    }
  }, o.vessels.map(v => /*#__PURE__*/React.createElement(Tag, {
    key: v
  }, v)))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: o.status
  }, statusLabel[o.status])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '13px 16px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => setSel(o)
  }, "View")))), rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "5",
    style: {
      padding: '28px 16px',
      textAlign: 'center',
      color: 'var(--ink-400)'
    }
  }, "No operators match your search."))))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!sel,
    onClose: () => setSel(null),
    eyebrow: "Certified Operator",
    title: sel && sel.name,
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSel(null)
    }, "Close")
  }, sel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Location:"), " ", sel.city, " \xB7 ", sel.region), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Vessels:"), " ", sel.vessels.map(v => /*#__PURE__*/React.createElement(Tag, {
    key: v
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Status:"), " ", /*#__PURE__*/React.createElement(Badge, {
    tone: sel.status
  }, statusLabel[sel.status])), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Member since:"), " ", sel.since))));
}
Object.assign(window, {
  DirectoryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DirectoryScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Alert,
  Badge
} = window.FWSCDesignSystem_db6c3e;
function HomeScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "caution",
    title: "Small craft advisory \u2014 Tampa Bay",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: () => onNav('advisories')
    }, "All advisories")
  }, "Winds 20\u201325 kt through 6 PM EDT. Member liveries should restrict rentals to protected waters.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px',
      display: 'flex',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)',
      marginBottom: 14
    }
  }, "Est. 2026 \xB7 Tallahassee, Florida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 44,
      fontWeight: 700,
      lineHeight: 1.15,
      color: 'var(--navy-800)',
      margin: 0
    }
  }, "Safer vessels. Safer waters."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--ink-600)',
      margin: '18px 0 28px',
      textWrap: 'pretty'
    }
  }, "A coalition of Florida boat liveries and water-sport operators committed to the safety of every passenger on our state's waterways."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('directory')
  }, "Find a certified operator"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNav('advisories')
  }, "View safety advisories"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/fwsc-seal.png",
    alt: "Seal of the Florida Water Sports Coalition",
    style: {
      width: 280,
      height: 280,
      flex: 'none'
    }
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-navy)',
      borderTop: '1px solid var(--navy-900)',
      borderBottom: '3px solid var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '28px 24px',
      display: 'flex',
      gap: 24,
      justifyContent: 'space-between'
    }
  }, [['34', 'Member liveries'], ['11', 'Florida counties'], ['12,400', 'Passengers briefed in 2026'], ['0', 'Member fatalities since founding']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 34,
      fontWeight: 700,
      color: 'var(--gold-400)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#C8D2E4',
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 0'
    }
  }, /*#__PURE__*/React.createElement(SectionRule, {
    eyebrow: "Safety Programs",
    title: "What the Coalition does"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "certificate",
    eyebrow: "Certification",
    title: "Livery Safety Certification",
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Program details")
  }, "Annual vessel inspection, staff training, and pre-rental briefing standards for member operators."), /*#__PURE__*/React.createElement(Card, {
    variant: "certificate",
    eyebrow: "Education",
    title: "Passenger Briefing Standard",
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Read the standard")
  }, "A uniform briefing every renter receives \u2014 life jackets, kill switches, and local waterway rules."), /*#__PURE__*/React.createElement(Card, {
    variant: "certificate",
    eyebrow: "Reporting",
    title: "Incident Reporting Network",
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost"
    }, "Report an incident")
  }, "Members report incidents within 24 hours so hazards are shared across the coalition and with the FWC."))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
