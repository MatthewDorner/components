'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var React = require('react');
var React__default = _interopDefault(React);
var reactToastify = require('react-toastify');
var Spinners = require('react-spinners');
var ChartJs = _interopDefault(require('chart.js'));
var BootstrapButton = _interopDefault(require('react-bootstrap/Button'));
var reactFontawesome = require('@fortawesome/react-fontawesome');
var DropdownRB = _interopDefault(require('react-bootstrap/Dropdown'));
var DropdownButton = _interopDefault(require('react-bootstrap/DropdownButton'));
var BootstrapImage = _interopDefault(require('react-bootstrap/Image'));
var BootstrapBadge = _interopDefault(require('react-bootstrap/Badge'));
var reactBootstrap = require('react-bootstrap');
var FormCheck = _interopDefault(require('react-bootstrap/FormCheck'));
var NavbarRB = _interopDefault(require('react-bootstrap/Navbar'));
var Nav = _interopDefault(require('react-bootstrap/Nav'));
var Form = _interopDefault(require('react-bootstrap/Form'));
var FormControl = _interopDefault(require('react-bootstrap/FormControl'));
var NavDropdown = _interopDefault(require('react-bootstrap/NavDropdown'));
var BootstrapAlert = _interopDefault(require('react-bootstrap/Alert'));
var BootstrapModal = _interopDefault(require('react-bootstrap/Modal'));
var tinymceReact = require('@tinymce/tinymce-react');
require('tinymce/tinymce');
require('tinymce/themes/silver/theme.min');
require('tinymce/skins/ui/oxide/skin.min.css');
require('tinymce/skins/ui/oxide/content.min.css');
require('tinymce/plugins/autolink/plugin.min');
require('tinymce/plugins/lists/plugin.min');
require('tinymce/plugins/link/plugin.min');
require('tinymce/plugins/table/plugin.min');
require('tinymce/plugins/paste/plugin.min');
require('tinymce/plugins/charmap/plugin.min');
var ListGroup = _interopDefault(require('react-bootstrap/ListGroup'));
var ListGroupItem = _interopDefault(require('react-bootstrap/ListGroupItem'));
var DatePicker = require('react-datepicker');
var DatePicker__default = _interopDefault(DatePicker);
var InputGroup = _interopDefault(require('react-bootstrap/InputGroup'));
var locale = require('date-fns/locale');
require('react-datepicker/dist/react-datepicker.css');
var videoReact = require('video-react');
require('video-react/dist/video-react.css');
var BootstrapContainer = _interopDefault(require('react-bootstrap/Container'));
var BootstrapRow = _interopDefault(require('react-bootstrap/Row'));
var BoostrapColumn = _interopDefault(require('react-bootstrap/Col'));
var FormLabel = _interopDefault(require('react-bootstrap/FormLabel'));
var BootstrapBreadcrumb = _interopDefault(require('react-bootstrap/Breadcrumb'));
var BootstrapBreadcrumbItem = _interopDefault(require('react-bootstrap/BreadcrumbItem'));
var reactBootstrapTypeahead = require('react-bootstrap-typeahead');
var FullCalendar = _interopDefault(require('@fullcalendar/react'));
var dayGridPlugin = _interopDefault(require('@fullcalendar/daygrid'));
var interactionPlugin = _interopDefault(require('@fullcalendar/interaction'));
var timeGridPlugin = _interopDefault(require('@fullcalendar/timegrid'));
require('@fullcalendar/core/main.css');
require('@fullcalendar/daygrid/main.css');
require('@fullcalendar/timegrid/main.css');

var titleWithMessage = function titleWithMessage(title, message) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "titles",
    style: {
      fontSize: '1.1em',
      fontWeight: 600
    }
  }, title), React.createElement("div", null, message));
};
var titleWithoutMessage = function titleWithoutMessage(title) {
  return React.createElement("div", null, title);
};

var Toast = function Toast(type, title, message) {
  var messageToShow = message ? titleWithMessage(title, message) : titleWithoutMessage(title);
  var toastToShow;

  switch (type) {
    case 'error':
      reactToastify.toast.error(messageToShow);
      break;

    case 'info':
      reactToastify.toast.info(messageToShow);
      break;

    case 'success':
      reactToastify.toast.success(messageToShow);
      break;

    case 'warning':
      reactToastify.toast.warn(messageToShow);
      break;

    default:
      reactToastify.toast.error(messageToShow);
  }

  return toastToShow;
};
var Toaster = function Toaster(props) {
  var autoClose = props.autoClose,
      hideProgressBar = props.hideProgressBar,
      draggable = props.draggable;
  return React.createElement(reactToastify.ToastContainer, {
    autoClose: autoClose || 5000,
    hideProgressBar: hideProgressBar !== false,
    draggable: draggable !== false,
    transition: reactToastify.Slide,
    draggablePercent: 35
  });
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var invalidSpinner = 'Invalid spinner';

var Spinner = function Spinner(props) {
  var loading = props.loading,
      color = props.color,
      margin = props.margin,
      size = props.size,
      sizeUnit = props.sizeUnit,
      type = props.type;
  var commonStyles = {
    loading: loading,
    color: color || 'grey',
    margin: margin || '2px'
  };

  var loaderStyles1 = _extends({}, commonStyles, {
    size: size ? size : 15,
    sizeUnit: sizeUnit ? sizeUnit : 'px'
  });

  var loaderStyles2 = _extends({}, commonStyles, {
    width: size ? size[0] : 5,
    height: size ? size[1] : 15,
    widthUnit: sizeUnit ? sizeUnit[0] : 'px',
    heightUnit: sizeUnit ? sizeUnit[1] : 'px'
  });

  switch (type) {
    case 'BarLoader':
      return React__default.createElement(Spinners.BarLoader, Object.assign({}, loaderStyles2));

    case 'BeatLoader':
      return React__default.createElement(Spinners.BeatLoader, Object.assign({}, loaderStyles1));

    case 'BounceLoader':
      return React__default.createElement(Spinners.BounceLoader, Object.assign({}, loaderStyles1));

    case 'ClimbingBoxLoader':
      return React__default.createElement(Spinners.ClimbingBoxLoader, Object.assign({}, loaderStyles1));

    case 'ClipLoader':
      return React__default.createElement(Spinners.ClipLoader, Object.assign({}, loaderStyles1));

    case 'DotLoader':
      return React__default.createElement(Spinners.DotLoader, Object.assign({}, loaderStyles1));

    case 'FadeLoader':
      return React__default.createElement(Spinners.FadeLoader, Object.assign({}, loaderStyles2));

    case 'PulseLoader':
      return React__default.createElement(Spinners.PulseLoader, Object.assign({}, loaderStyles1));

    case 'RotateLoader':
      return React__default.createElement(Spinners.RotateLoader, Object.assign({}, loaderStyles1));

    case 'ScaleLoader':
      return React__default.createElement(Spinners.ScaleLoader, Object.assign({}, loaderStyles2));

    case 'SyncLoader':
      return React__default.createElement(Spinners.SyncLoader, Object.assign({}, loaderStyles1));

    default:
      return React__default.createElement("div", null, invalidSpinner);
  }
};

function getAxisType(type) {
  if (type === 'category') {
    return 'category';
  }

  if (type === 'linear') {
    return 'linear';
  }

  if (type === 'time') {
    return 'time';
  }

  return 'category';
}
function getAxisLabel(item) {
  return {
    display: !!item.label,
    labelString: item.label
  };
}
function axisMapper(item) {
  var axis = {
    display: !!item.label,
    scaleLabel: getAxisLabel(item),
    type: getAxisType(item.type),
    ticks: {
      beginAtZero: true
    }
  };

  if (item.type === 'time') {
    var timeScale = {
      unit: item.timeFormat,
      stepSize: item.timeStepSize
    };
    axis.time = timeScale;
  }

  return axis;
}
function getAxes(axes, stacked) {
  var chartAxes = [];

  if (axes) {
    chartAxes = axes.map(axisMapper);
  }

  chartAxes.forEach(function (axis) {
    axis.stacked = stacked;
  });
  return chartAxes;
}
function getChartDataset(dataset) {
  var label = dataset.label;
  var data = [];
  var backgroundColor = [];
  var borderColor = [];
  dataset.data.forEach(function (d) {
    data.push(d.y);
    var background = d.backgroundColor ? d.backgroundColor : dataset.backgroundColor;
    var border = d.borderColor ? d.borderColor : dataset.borderColor;

    if (background !== undefined) {
      backgroundColor.push(background);
    }

    if (border !== undefined) {
      borderColor.push(border);
    }
  });
  var pointBackgroundColor = backgroundColor;
  var pointBorderColor = borderColor;
  return {
    label: label,
    data: data,
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    pointBackgroundColor: pointBackgroundColor,
    pointBorderColor: pointBorderColor,
    borderWidth: 1
  };
}
function getChartDatasets(datasets) {
  return datasets.map(getChartDataset);
}
function getLabelsFromDataset(datasets) {
  var labels = [];
  datasets.forEach(function (dataset) {
    return dataset.data.forEach(function (d) {
      if (!labels.includes(d.x)) {
        labels.push(d.x);
      }
    });
  });
  return labels;
}
function getChartData(datasets) {
  return {
    labels: getLabelsFromDataset(datasets),
    datasets: getChartDatasets(datasets)
  };
}
function getCommonChartOptions(title, titleFontSize, titleFontColor) {
  var options = {
    title: {
      display: !!title,
      text: title
    }
  };

  if (options.title) {
    if (titleFontSize) {
      options.title.fontSize = titleFontSize;
    }

    if (titleFontColor) {
      options.title.fontColor = titleFontColor;
    }
  }

  return options;
}
function getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets) {
  return {
    type: type,
    data: getChartData(datasets),
    options: getCommonChartOptions(title, titleFontSize, titleFontColor)
  };
}

var BarGraph =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(BarGraph, _Component);

  function BarGraph(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  var _proto = BarGraph.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        stacked = _this$props.stacked,
        title = _this$props.title,
        titleFontSize = _this$props.titleFontSize,
        titleFontColor = _this$props.titleFontColor,
        datasets = _this$props.datasets,
        horizontal = _this$props.horizontal,
        xAxes = _this$props.xAxes,
        yAxes = _this$props.yAxes;
    var isStacked = !!stacked;
    var type = horizontal ? 'horizontalBar' : 'bar';
    var config = getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets);

    if (config && config.options) {
      var scales;

      if (!horizontal) {
        scales = {
          xAxes: getAxes(xAxes, isStacked),
          yAxes: getAxes(yAxes, isStacked)
        };
      } else {
        scales = {
          xAxes: getAxes(yAxes, isStacked),
          yAxes: getAxes(xAxes, isStacked)
        };
      }

      config.options.scales = scales;
    }

    this.graph = new ChartJs(this.chart, config);
  };

  _proto.render = function render() {
    var _this2 = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this2.chart = chart;
        return _this2.chart;
      }
    });
  };

  return BarGraph;
}(React.Component);

var LineGraph =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(LineGraph, _Component);

  function LineGraph(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  var _proto = LineGraph.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        title = _this$props.title,
        titleFontSize = _this$props.titleFontSize,
        titleFontColor = _this$props.titleFontColor,
        datasets = _this$props.datasets,
        stacked = _this$props.stacked,
        fill = _this$props.fill,
        yAxes = _this$props.yAxes,
        xAxes = _this$props.xAxes;
    var type = 'line';
    var isFill = false;

    if (fill) {
      isFill = fill;
    }

    var config = getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets);

    if (config && config.data && config.data.datasets) {
      for (var i = 0; i < datasets.length; i += 1) {
        config.data.datasets[i].fill = isFill;
        config.data.datasets[i].backgroundColor = datasets[i].backgroundColor;
        config.data.datasets[i].borderColor = datasets[i].borderColor;
      }
    }

    if (config && config.options) {
      var isStacked = !!stacked;
      var scales = {
        xAxes: getAxes(xAxes, false),
        yAxes: getAxes(yAxes, isStacked)
      };
      config.options.scales = scales;
    }

    this.graph = new ChartJs(this.chart, config);
  };

  _proto.render = function render() {
    var _this2 = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this2.chart = chart;
        return _this2.chart;
      }
    });
  };

  return LineGraph;
}(React.Component);

var PieGraph =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PieGraph, _Component);

  function PieGraph(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  var _proto = PieGraph.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        doughnut = _this$props.doughnut,
        title = _this$props.title,
        titleFontSize = _this$props.titleFontSize,
        titleFontColor = _this$props.titleFontColor,
        datasets = _this$props.datasets;
    var type = doughnut ? 'doughnut' : 'pie';
    var config = getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets);
    this.graph = new ChartJs(this.chart, config);
  };

  _proto.render = function render() {
    var _this2 = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this2.chart = chart;
        return _this2.chart;
      }
    });
  };

  return PieGraph;
}(React.Component);

var iconMap = {
  add: 'plus',
  admin: 'user-shield',
  appointment: 'calendar',
  'appointment-add': 'calendar-plus',
  'appointment-remove': 'calendar-minus',
  calendar: 'calendar-alt',
  dashboard: 'columns',
  'down-arrow': 'chevron-down',
  edit: 'edit',
  image: 'camera',
  incident: 'file-alt',
  lab: 'microscope',
  'left-arrow': 'chevron-left',
  medication: 'pills',
  patient: 'user',
  'patient-add': 'user-plus',
  'patient-remove': 'user-minus',
  patients: 'users',
  remove: 'minus',
  'right-arrow': 'chevron-right',
  save: 'save',
  setting: 'cog',
  'up-arrow': 'chevron-up'
};

function getFontAwesomeIcon(icon) {
  return iconMap[icon];
}

var Icon = function Icon(props) {
  var icon = props.icon,
      className = props.className,
      style = props.style,
      onClick = props.onClick;
  return React__default.createElement(reactFontawesome.FontAwesomeIcon, {
    onClick: onClick,
    icon: getFontAwesomeIcon(icon),
    className: className,
    style: style
  });
};

function getButtonSize(size) {
  if (size === 'small') {
    return 'sm';
  }

  if (size === 'large') {
    return 'lg';
  }

  return undefined;
}

var Button = function Button(props) {
  var size = props.size,
      iconLocation = props.iconLocation,
      outlined = props.outlined,
      color = props.color,
      icon = props.icon,
      block = props.block,
      disabled = props.disabled,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      style = props.style,
      iconClassName = props.iconClassName,
      iconStyle = props.iconStyle;
  var displayIconLeft = icon && iconLocation === 'left';
  var displayIconRight = icon && iconLocation === 'right';
  var variant = color;

  if (outlined) {
    variant = "outline-" + variant;
  }

  return React__default.createElement(BootstrapButton, {
    variant: variant,
    block: block,
    disabled: disabled,
    size: getButtonSize(size),
    onClick: onClick,
    className: className,
    style: style
  }, displayIconLeft && React__default.createElement(Icon, {
    icon: icon,
    className: iconClassName,
    style: iconStyle
  }), ' ', children, ' ', displayIconRight && React__default.createElement(Icon, {
    icon: icon,
    className: iconClassName,
    style: iconStyle
  }));
};

Button.defaultProps = {
  color: 'primary',
  iconLocation: 'left'
};

var Dropdown = function Dropdown(props) {
  var text = props.text,
      size = props.size,
      id = props.id,
      items = props.items,
      direction = props.direction,
      variant = props.variant,
      style = props.style,
      alignRight = props.alignRight;

  var getDropdownItem = function getDropdownItem(item, i) {
    return React__default.createElement(DropdownRB.Item, {
      style: item.style,
      key: item.key || "dropdown-item-" + i.toString(),
      eventKey: item.eventKey || "dropdown-event-" + i.toString()
    }, item.text);
  };

  return React__default.createElement(DropdownButton, {
    drop: direction,
    size: size,
    variant: variant,
    title: text,
    id: id,
    style: style,
    alignRight: alignRight
  }, items.map(function (item, i) {
    return getDropdownItem(item, i);
  }));
};

Dropdown.defaultProps = {
  id: "dropdown" +
  /*#__PURE__*/
  Math.floor(
  /*#__PURE__*/
  Math.random() * 10000),
  variant: 'light',
  size: 'sm',
  direction: 'down'
};

var Image = function Image(props) {
  var circle = props.circle,
      fluid = props.fluid,
      rounded = props.rounded,
      src = props.src,
      imgAttributes = _objectWithoutPropertiesLoose(props, ["circle", "fluid", "rounded", "src"]);

  return React__default.createElement(BootstrapImage, Object.assign({
    fluid: fluid,
    rounded: rounded,
    roundedCircle: circle,
    src: src
  }, imgAttributes));
};

var Badge = function Badge(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(BootstrapBadge, {
    variant: color,
    className: className,
    style: style
  }, children);
};

Badge.defaultProps = {
  color: 'primary'
};

var Panel = function Panel(props) {
  var color = props.color,
      children = props.children,
      footer = props.footer,
      title = props.title,
      collapsible = props.collapsible,
      collapsed = props.collapsed,
      className = props.className;

  var _useState = React.useState(!collapsed || !collapsible),
      open = _useState[0],
      setOpen = _useState[1];

  var collapseIcon = React__default.createElement("span", {
    style: {
      "float": 'right',
      cursor: 'pointer'
    }
  }, React__default.createElement(Icon, {
    icon: open ? 'up-arrow' : 'down-arrow',
    onClick: function onClick() {
      return setOpen(!open);
    },
    "aria-controls": "collapse-body",
    "aria-expanded": open
  }));
  return React__default.createElement(reactBootstrap.Card, {
    className: className,
    border: color
  }, title && React__default.createElement(reactBootstrap.Card.Header, {
    style: collapsible ? {
      cursor: 'pointer',
      textAlign: 'left'
    } : {
      textAlign: 'left'
    },
    onClick: function onClick() {
      return collapsible && setOpen(!open);
    }
  }, title, collapsible && collapseIcon), React__default.createElement(reactBootstrap.Card.Body, {
    style: {
      textAlign: 'left'
    }
  }, collapsible && !title && collapseIcon, React__default.createElement(reactBootstrap.Collapse, {
    "in": open
  }, React__default.createElement("div", {
    id: "collapse-body"
  }, children))), footer && React__default.createElement(reactBootstrap.Card.Footer, {
    style: {
      textAlign: 'left',
      fontSize: 'smaller'
    }
  }, footer));
};

var Pill = function Pill(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(BootstrapBadge, {
    pill: true,
    variant: color,
    className: className,
    style: style
  }, children);
};

Pill.defaultProps = {
  color: 'primary'
};

var Checkbox = function Checkbox(props) {
  var id = props.id,
      label = props.label,
      name = props.name,
      inline = props.inline,
      labelSide = props.labelSide,
      disabled = props.disabled,
      onChange = props.onChange,
      className = props.className,
      style = props.style,
      labelClassName = props.labelClassName,
      labelStyle = props.labelStyle;

  var getLabel = function getLabel() {
    return React__default.createElement(FormCheck.Label, {
      htmlFor: id,
      className: labelClassName,
      style: labelStyle
    }, label);
  };

  return React__default.createElement(FormCheck, {
    name: name,
    inline: inline,
    className: className,
    style: style
  }, labelSide === 'left' && getLabel(), React__default.createElement(FormCheck.Input, {
    id: id,
    type: "checkbox",
    disabled: disabled,
    onChange: onChange
  }), labelSide === 'right' && getLabel());
};

Checkbox.defaultProps = {
  labelSide: 'right'
};

var Navbar = function Navbar(props) {
  var bg = props.bg,
      variant = props.variant,
      navItems = props.navItems,
      className = props.className;

  var getNavListLink = function getNavListLink(link, index) {
    return React__default.createElement(NavDropdown.Item, {
      className: link.className,
      href: link.href ? link.href : '',
      key: index,
      onClick: link.onClick
    }, link.label);
  };

  var getNavSearch = function getNavSearch(search, index) {
    return React__default.createElement(Nav, {
      className: search.className,
      key: index
    }, React__default.createElement(Form, {
      inline: true
    }, React__default.createElement(FormControl, {
      type: "text",
      placeholder: search.placeholderText || 'Search',
      className: "mr-sm-2",
      onChange: search.onChangeInput
    }), React__default.createElement(Button, {
      color: search.buttonColor || 'primary',
      onClick: search.onClickButton
    }, search.buttonText || 'Search')));
  };

  var getNavLinkList = function getNavLinkList(list, index) {
    return React__default.createElement(NavDropdown, {
      className: list.className,
      title: list.label,
      id: "collasible-nav-dropdown",
      key: index
    }, list.children.map(function (listLink, i) {
      return getNavListLink(listLink, i);
    }));
  };

  var getNavHeader = function getNavHeader(header, index) {
    return React__default.createElement(NavbarRB.Brand, {
      className: header.className,
      onClick: header.onClick,
      style: {
        cursor: 'pointer'
      },
      key: index
    }, React__default.createElement("span", {
      style: {
        color: header.color
      }
    }, "" + header.label));
  };

  var getNavIcon = function getNavIcon(icon, index) {
    return React__default.createElement(NavbarRB.Brand, {
      className: icon.className ? icon.className.concat(' ', 'd-inline-block align-top') : 'd-inline-block align-top',
      onClick: icon.onClick,
      style: {
        cursor: 'pointer'
      },
      key: index
    }, React__default.createElement("img", {
      alt: icon.alt,
      src: icon.src,
      width: "28",
      height: "28"
    }));
  };

  var getNavLink = function getNavLink(link, index) {
    return React__default.createElement(Nav.Link, {
      className: link.className,
      onClick: link.onClick,
      key: index
    }, link.label);
  };

  return React__default.createElement(NavbarRB, {
    bg: bg,
    variant: variant
  }, React__default.createElement(NavbarRB.Collapse, {
    id: "responsive-navbar-nav"
  }, React__default.createElement(Nav, {
    className: className,
    style: {
      width: '100%'
    }
  }, navItems.map(function (item, index) {
    if (item.type === 'header') {
      return getNavHeader(item, index);
    }

    if (item.type === 'icon') {
      return getNavIcon(item, index);
    }

    if (item.type === 'link') {
      return getNavLink(item, index);
    }

    if (item.type === 'search') {
      return getNavSearch(item, index);
    }

    if (item.type === 'link-list') {
      return getNavLinkList(item, index);
    }

    return null;
  }))));
};

Navbar.defaultProps = {
  bg: 'light',
  variant: 'light'
};

var sizes = [{
  key: 'small',
  value: 'sm'
}, {
  key: 'large',
  value: 'lg'
}];
function getControlSize(size) {
  var controlSize = sizes.find(function (s) {
    return s.key === size;
  });
  return controlSize ? controlSize.value : undefined;
}

var TextField = function TextField(props) {
  var disabled = props.disabled,
      isInvalid = props.isInvalid,
      name = props.name,
      rows = props.rows,
      size = props.size,
      value = props.value,
      onChange = props.onChange,
      className = props.className,
      style = props.style;
  return React__default.createElement(Form.Control, {
    as: "textarea",
    disabled: disabled,
    isInvalid: isInvalid,
    name: name,
    rows: rows,
    size: getControlSize(size),
    value: value,
    onChange: onChange,
    className: className,
    style: style
  });
};

var Switch = function Switch(props) {
  var id = props.id,
      label = props.label,
      disabled = props.disabled,
      onChange = props.onChange,
      className = props.className,
      style = props.style;
  return React__default.createElement("div", null, React__default.createElement(FormCheck, {
    type: "switch",
    id: id,
    label: label,
    disabled: disabled,
    onChange: onChange,
    className: className,
    style: style
  }));
};

var Radio = function Radio(props) {
  var label = props.label,
      name = props.name,
      id = props.id,
      value = props.value,
      checked = props.checked,
      disabled = props.disabled,
      inline = props.inline,
      isInvalid = props.isInvalid,
      feedback = props.feedback,
      onChange = props.onChange,
      className = props.className,
      style = props.style;
  return React__default.createElement(reactBootstrap.FormCheck, {
    type: "radio",
    label: label,
    name: name,
    id: id,
    value: value,
    checked: checked,
    disabled: disabled,
    inline: inline,
    isInvalid: isInvalid,
    feedback: feedback,
    onChange: onChange,
    className: className,
    style: style
  });
};

var Alert =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Alert, _Component);

  function Alert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      show: true
    };
    return _this;
  }

  var _proto = Alert.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$color = _this$props.color,
        color = _this$props$color === void 0 ? 'primary' : _this$props$color,
        title = _this$props.title,
        message = _this$props.message,
        _this$props$dismissib = _this$props.dismissible,
        dismissible = _this$props$dismissib === void 0 ? false : _this$props$dismissib,
        _this$props$closeLabe = _this$props.closeLabel,
        closeLabel = _this$props$closeLabe === void 0 ? 'Dismiss' : _this$props$closeLabe,
        className = _this$props.className,
        style = _this$props.style,
        btnClassName = _this$props.btnClassName,
        btnStyle = _this$props.btnStyle;
    var show = this.state.show;

    if (show) {
      return React__default.createElement(BootstrapAlert, {
        variant: color,
        onClose: function onClose() {
          return _this2.setState({
            show: false
          });
        },
        dismissible: dismissible,
        closeLabel: closeLabel,
        className: className,
        style: style
      }, title && React__default.createElement(BootstrapAlert.Heading, null, title), message && React__default.createElement("div", null, message), dismissible && React__default.createElement(React__default.Fragment, null, React__default.createElement("hr", null), React__default.createElement("div", {
        className: "d-flex justify-content-end"
      }, React__default.createElement(Button, {
        outlined: true,
        onClick: function onClick() {
          return _this2.setState({
            show: false
          });
        },
        color: color,
        className: btnClassName,
        style: btnStyle
      }, closeLabel)), ' '));
    }

    return React__default.createElement(React__default.Fragment, null);
  };

  return Alert;
}(React.Component);

var Modal = function Modal(props) {
  var show = props.show,
      toggle = props.toggle,
      title = props.title,
      body = props.body,
      verticallyCentered = props.verticallyCentered,
      buttonsAlignment = props.buttonsAlignment,
      showHeaderCloseButton = props.showHeaderCloseButton,
      closeButton = props.closeButton,
      middleButton = props.middleButton,
      successButton = props.successButton;
  return React__default.createElement(BootstrapModal, {
    autoFocus: true,
    centered: verticallyCentered,
    keyboard: true,
    restoreFocus: true,
    show: show,
    onHide: function onHide() {
      return toggle();
    }
  }, (showHeaderCloseButton === false ? title : true) && React__default.createElement(BootstrapModal.Header, {
    closeButton: showHeaderCloseButton !== false
  }, title && React__default.createElement(BootstrapModal.Title, null, title)), body && React__default.createElement(BootstrapModal.Body, null, body), React__default.createElement(BootstrapModal.Footer, {
    style: {
      justifyContent: buttonsAlignment === 'left' ? 'flex-start' : buttonsAlignment === 'right' ? 'flex-end' : buttonsAlignment === 'center' ? 'center' : 'space-between'
    }
  }, closeButton && React__default.createElement(Button, Object.assign({}, closeButton, {
    color: closeButton.color || 'secondary'
  }), closeButton.children || 'Close'), middleButton && React__default.createElement(Button, Object.assign({}, middleButton, {
    color: middleButton.color || 'info'
  }), middleButton.children || 'Retry'), successButton && React__default.createElement(Button, Object.assign({}, successButton, {
    color: successButton.color || 'primary'
  }), successButton.children || 'Confirm')));
};

var TextInput = function TextInput(props) {
  var type = props.type,
      name = props.name,
      id = props.id,
      placeholder = props.placeholder,
      onChange = props.onChange,
      disabled = props.disabled,
      isInvalid = props.isInvalid,
      isValid = props.isValid,
      value = props.value,
      size = props.size,
      className = props.className,
      style = props.style;
  return React__default.createElement(Form.Control, {
    as: "input",
    type: type,
    name: name,
    id: id,
    placeholder: placeholder,
    onChange: onChange,
    disabled: disabled,
    isInvalid: isInvalid,
    isValid: isValid,
    value: value,
    size: size,
    className: className,
    style: style
  });
};

TextInput.defaultProps = {
  type: 'text'
};

var Select = function Select(props) {
  var value = props.value,
      multiple = props.multiple,
      isInvalid = props.isInvalid,
      disabled = props.disabled,
      size = props.size,
      onChange = props.onChange,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(reactBootstrap.FormControl, {
    as: "select",
    value: value,
    multiple: multiple,
    isInvalid: isInvalid,
    disabled: disabled,
    size: getControlSize(size),
    onChange: onChange,
    className: className,
    style: style
  }, children);
};

var RichText = function RichText(props) {
  var id = props.id,
      value = props.value,
      disabled = props.disabled,
      height = props.height,
      onChange = props.onChange;
  return React__default.createElement(tinymceReact.Editor, {
    id: id,
    initialValue: value,
    init: {
      height: height || 500,
      menubar: true,
      statusbar: false,
      skin: false,
      content_css: false,
      plugins: ["autolink lists link table paste charmap"],
      toolbar: ["undo redo | formatselect fontselect fontsizeselect | bold italic underline sub sup backcolor |\n        alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | table link removeformat"],
      branding: false
    },
    disabled: disabled,
    onEditorChange: function onEditorChange(content) {
      return onChange && onChange(content);
    }
  });
};

var List = function List(props) {
  var layout = props.layout,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(ListGroup, {
    variant: layout,
    className: className,
    style: style
  }, children);
};

var ListItem = function ListItem(props) {
  var color = props.color,
      action = props.action,
      active = props.active,
      disabled = props.disabled,
      href = props.href,
      onClick = props.onClick,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(ListGroupItem, {
    variant: color,
    action: action,
    active: active,
    disabled: disabled,
    href: href,
    onClick: onClick,
    className: className,
    style: style
  }, children);
};

DatePicker.registerLocale('enUS', locale.enUS);
DatePicker.registerLocale('ptBR', locale.ptBR);
DatePicker.setDefaultLocale('enUS');

var DateTimePicker = function DateTimePicker(props) {
  var children = props.children,
      className = props.className,
      dateFormat = props.dateFormat,
      dateFormatCalendar = props.dateFormatCalendar,
      disabled = props.disabled,
      dropdownMode = props.dropdownMode,
      endDate = props.endDate,
      excludeDates = props.excludeDates,
      includeDates = props.includeDates,
      inline = props.inline,
      locale = props.locale,
      maxDate = props.maxDate,
      maxTime = props.maxTime,
      minDate = props.minDate,
      minTime = props.minTime,
      monthsShown = props.monthsShown,
      onChange = props.onChange,
      selected = props.selected,
      selectsEnd = props.selectsEnd,
      selectsStart = props.selectsStart,
      showMonthDropdown = props.showMonthDropdown,
      showTimeSelect = props.showTimeSelect,
      showYearDropdown = props.showYearDropdown,
      showTimeSelectOnly = props.showTimeSelectOnly,
      timeFormat = props.timeFormat,
      timeIntervals = props.timeIntervals,
      timeCaption = props.timeCaption,
      todayButton = props.todayButton,
      startDate = props.startDate,
      withPortal = props.withPortal;
  return React__default.createElement(InputGroup, {
    className: className
  }, React__default.createElement(InputGroup.Prepend, null, React__default.createElement(InputGroup.Text, null, React__default.createElement(Icon, {
    icon: "calendar"
  }))), React__default.createElement(DatePicker__default, {
    className: "form-control",
    dateFormat: dateFormat,
    dateFormatCalendar: dateFormatCalendar,
    disabled: disabled,
    dropdownMode: dropdownMode,
    endDate: endDate,
    excludeDates: excludeDates,
    includeDates: includeDates,
    inline: inline,
    locale: locale,
    maxDate: maxDate,
    maxTime: maxTime,
    minDate: minDate,
    minTime: minTime,
    monthsShown: monthsShown,
    onChange: onChange,
    selected: selected,
    selectsEnd: selectsEnd,
    selectsStart: selectsStart,
    showMonthDropdown: showMonthDropdown,
    showTimeSelect: showTimeSelect,
    showYearDropdown: showYearDropdown,
    showTimeSelectOnly: showTimeSelectOnly,
    timeFormat: timeFormat,
    timeIntervals: timeIntervals,
    timeCaption: timeCaption,
    todayButton: todayButton,
    startDate: startDate,
    withPortal: withPortal
  }, children));
};

DateTimePicker.defaultProps = {
  dateFormat: 'MM/dd/yyyy',
  locale: 'enUS',
  dateFormatCalendar: 'LLLL yyyy',
  dropdownMode: 'scroll',
  timeIntervals: 30,
  withPortal: false
};

var VideoPlayer = function VideoPlayer(props) {
  var src = props.src,
      poster = props.poster,
      preload = props.preload,
      fluid = props.fluid,
      width = props.width,
      height = props.height,
      muted = props.muted,
      playsInline = props.playsInline,
      aspectRatio = props.aspectRatio,
      autoPlay = props.autoPlay,
      startTime = props.startTime,
      children = props.children;
  return React__default.createElement(videoReact.Player, {
    src: src,
    poster: poster,
    preload: preload,
    fluid: fluid,
    width: width,
    height: height,
    muted: muted,
    playsInline: playsInline,
    aspectRatio: aspectRatio,
    autoPlay: autoPlay,
    startTime: startTime
  }, children);
};

var Container = function Container(props) {
  var as = props.as,
      fluid = props.fluid,
      className = props.className,
      children = props.children,
      style = props.style;
  return React__default.createElement(BootstrapContainer, {
    as: as,
    fluid: fluid,
    className: className,
    style: style
  }, children);
};

var Row = function Row(props) {
  var as = props.as,
      noGutters = props.noGutters,
      className = props.className,
      children = props.children,
      style = props.style;
  return React__default.createElement(BootstrapRow, {
    as: as,
    noGutters: noGutters,
    className: className,
    style: style
  }, children);
};

var Column = function Column(props) {
  var as = props.as,
      lg = props.lg,
      md = props.md,
      sm = props.sm,
      xl = props.xl,
      xs = props.xs,
      children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(BoostrapColumn, {
    as: as,
    lg: lg,
    md: md,
    sm: sm,
    xl: xl,
    xs: xs,
    className: className,
    style: style
  }, children);
};

var asterisk =
/*#__PURE__*/
React__default.createElement('i', {
  style: {
    color: 'red'
  }
}, [
/*#__PURE__*/
React__default.createElement(reactFontawesome.FontAwesomeIcon, {
  icon: "asterisk",
  key: "asterisk",
  style: {
    height: '7px',
    verticalAlign: 'top',
    marginLeft: '2px'
  }
})]);

var Label = function Label(props) {
  var text = props.text,
      htmlFor = props.htmlFor,
      isRequired = props.isRequired,
      title = props.title,
      className = props.className,
      style = props.style;

  if (isRequired) {
    return React__default.createElement("div", null, React__default.createElement(FormLabel, {
      htmlFor: htmlFor,
      title: title || 'This is a required input',
      className: className,
      style: style
    }, text, asterisk));
  }

  return React__default.createElement(FormLabel, {
    htmlFor: htmlFor,
    title: title,
    className: className,
    style: style
  }, text);
};

Label.defaultProps = {
  title: undefined,
  htmlFor: undefined
};

var Breadcrumb = function Breadcrumb(props) {
  var children = props.children,
      className = props.className,
      style = props.style;
  return React__default.createElement(BootstrapBreadcrumb, {
    className: className,
    style: style
  }, children);
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var children = _ref.children,
      active = _ref.active,
      onClick = _ref.onClick,
      className = _ref.className,
      style = _ref.style;
  return React__default.createElement(BootstrapBreadcrumbItem, {
    active: active,
    onClick: onClick,
    className: className,
    style: style
  }, children);
};

var Tab = function Tab(props) {
  var label = props.label,
      onClick = props.onClick,
      active = props.active,
      icon = props.icon,
      disabled = props.disabled,
      iconLocation = props.iconLocation;
  var className = "nav-link btn-link " + (active ? ' active' : '') + " " + (disabled ? ' disabled' : '');
  return React__default.createElement("li", {
    className: "nav-item",
    role: "tab"
  }, React__default.createElement(Button, {
    style: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    color: "link",
    className: className,
    onClick: disabled ? undefined : onClick,
    icon: icon,
    iconLocation: iconLocation
  }, label));
};

Tab.defaultProps = {
  iconLocation: 'left'
};

var TabsHeader = function TabsHeader(props) {
  var children = props.children;
  return React__default.createElement("ul", {
    className: "nav nav-tabs",
    role: "tablist"
  }, children);
};

var Typeahead = function Typeahead(props) {
  var _useState = React.useState([]),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = React.useState(false),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var id = props.id,
      searchAccessor = props.searchAccessor,
      placeholder = props.placeholder,
      onSearch = props.onSearch,
      onChange = props.onChange,
      renderMenuItemChildren = props.renderMenuItemChildren,
      minLength = props.minLength,
      value = props.value,
      disabled = props.disabled;

  var search = function search(query) {
    try {
      setIsLoading(true);
      return Promise.resolve(onSearch(query)).then(function (results) {
        setOptions(results);
        setIsLoading(false);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var selectedValues = [];

  if (value) {
    selectedValues.push(value);
  }

  return React__default.createElement(reactBootstrapTypeahead.AsyncTypeahead, {
    id: id,
    labelKey: searchAccessor,
    options: options,
    placeholder: placeholder,
    isLoading: isLoading,
    minLength: minLength,
    onSearch: search,
    onChange: onChange,
    renderMenuItemChildren: renderMenuItemChildren,
    defaultSelected: selectedValues,
    disabled: disabled
  });
};

Typeahead.defaultProps = {
  minLength: 3
};

var viewToCalendarViewMap = {
  month: 'dayGridMonth',
  week: 'timeGridWeek',
  day: 'timeGridDay'
};

var getEventFromFullCalendarEventApi = function getEventFromFullCalendarEventApi(e) {
  return {
    id: e.id,
    start: e.start,
    end: e.end,
    title: e.title,
    allDay: e.allDay
  };
};

var getCalendarViewFromViewProp = function getCalendarViewFromViewProp(view) {
  return viewToCalendarViewMap[view];
};

var getViewsFromViewsProp = function getViewsFromViewsProp(views) {
  var viewsString = '';
  views.forEach(function (view) {
    viewsString += getCalendarViewFromViewProp(view) + ",";
  });
  return viewsString.slice(0, viewsString.length - 1);
};

var Calendar = function Calendar(props) {
  var view = props.view,
      views = props.views,
      events = props.events,
      disabled = props.disabled,
      onDateClick = props.onDateClick,
      onDateRangeSelected = props.onDateRangeSelected,
      onEventClick = props.onEventClick;
  var fullCalendarRef = React__default.createRef();
  return React__default.createElement(FullCalendar, {
    events: events,
    ref: fullCalendarRef,
    selectable: !disabled,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: getViewsFromViewsProp(views)
    },
    defaultView: getCalendarViewFromViewProp(view),
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    themeSystem: "bootstrap",
    dateClick: function dateClick(arg) {
      if (onDateClick) {
        onDateClick(arg.date, arg.allDay);
      }
    },
    select: function select(arg) {
      if (onDateRangeSelected) {
        onDateRangeSelected(arg.start, arg.end, arg.allDay);
      }
    },
    eventClick: function eventClick(arg) {
      if (onEventClick) {
        onEventClick(getEventFromFullCalendarEventApi(arg.event));
      }
    }
  });
};

Calendar.defaultProps = {
  view: 'week',
  events: [],
  views: ['day', 'week', 'month']
};

fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas);

exports.Alert = Alert;
exports.Badge = Badge;
exports.BarGraph = BarGraph;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.Calendar = Calendar;
exports.Checkbox = Checkbox;
exports.Column = Column;
exports.Container = Container;
exports.DateTimePicker = DateTimePicker;
exports.Dropdown = Dropdown;
exports.Icon = Icon;
exports.Image = Image;
exports.Label = Label;
exports.LineGraph = LineGraph;
exports.List = List;
exports.ListItem = ListItem;
exports.Modal = Modal;
exports.Navbar = Navbar;
exports.Panel = Panel;
exports.PieGraph = PieGraph;
exports.Pill = Pill;
exports.Radio = Radio;
exports.RichText = RichText;
exports.Row = Row;
exports.Select = Select;
exports.Spinner = Spinner;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabsHeader = TabsHeader;
exports.TextField = TextField;
exports.TextInput = TextInput;
exports.Toast = Toast;
exports.Toaster = Toaster;
exports.Typeahead = Typeahead;
exports.VideoPlayer = VideoPlayer;
//# sourceMappingURL=components.cjs.development.js.map
