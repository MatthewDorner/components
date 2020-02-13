import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React__default, { createElement, Fragment, Component, useState } from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';
import { __assign, __extends, __rest, __awaiter, __generator } from 'tslib';
import { SyncLoader, ScaleLoader, RotateLoader, PulseLoader, FadeLoader, DotLoader, ClipLoader, ClimbingBoxLoader, BounceLoader, BeatLoader, BarLoader } from 'react-spinners';
import ChartJs from 'chart.js';
import BootstrapButton from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DropdownRB from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import BootstrapImage from 'react-bootstrap/Image';
import BootstrapBadge from 'react-bootstrap/Badge';
import { Card, Collapse, FormCheck as FormCheck$1, FormControl as FormControl$1 } from 'react-bootstrap';
import FormCheck from 'react-bootstrap/FormCheck';
import NavbarRB from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BootstrapAlert from 'react-bootstrap/Alert';
import BootstrapModal from 'react-bootstrap/Modal';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/tinymce';
import 'tinymce/themes/silver/theme.min';
import 'tinymce/skins/ui/oxide/skin.min.css';
import 'tinymce/skins/ui/oxide/content.min.css';
import 'tinymce/plugins/autolink/plugin.min';
import 'tinymce/plugins/lists/plugin.min';
import 'tinymce/plugins/link/plugin.min';
import 'tinymce/plugins/table/plugin.min';
import 'tinymce/plugins/paste/plugin.min';
import 'tinymce/plugins/charmap/plugin.min';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import InputGroup from 'react-bootstrap/InputGroup';
import { enUS, ptBR } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import BootstrapContainer from 'react-bootstrap/Container';
import BootstrapRow from 'react-bootstrap/Row';
import BoostrapColumn from 'react-bootstrap/Col';
import FormLabel from 'react-bootstrap/FormLabel';
import BootstrapBreadcrumb from 'react-bootstrap/Breadcrumb';
import BootstrapBreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

var titleWithMessage = function titleWithMessage(title, message) {
  return createElement(Fragment, null, createElement("div", {
    className: "titles",
    style: {
      fontSize: '1.1em',
      fontWeight: 600
    }
  }, title), createElement("div", null, message));
};
var titleWithoutMessage = function titleWithoutMessage(title) {
  return createElement("div", null, title);
};

var Toast = function Toast(type, title, message) {
  var messageToShow = message ? titleWithMessage(title, message) : titleWithoutMessage(title);
  var toastToShow;

  switch (type) {
    case 'error':
      toast.error(messageToShow);
      break;

    case 'info':
      toast.info(messageToShow);
      break;

    case 'success':
      toast.success(messageToShow);
      break;

    case 'warning':
      toast.warn(messageToShow);
      break;

    default:
      toast.error(messageToShow);
  }

  return toastToShow;
};
var Toaster = function Toaster(props) {
  var autoClose = props.autoClose,
      hideProgressBar = props.hideProgressBar,
      draggable = props.draggable;
  return createElement(ToastContainer, {
    autoClose: autoClose || 5000,
    hideProgressBar: hideProgressBar !== false,
    draggable: draggable !== false,
    transition: Slide,
    draggablePercent: 35
  });
};

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

  var loaderStyles1 = __assign(__assign({}, commonStyles), {
    size: size ? size : 15,
    sizeUnit: sizeUnit ? sizeUnit : 'px'
  });

  var loaderStyles2 = __assign(__assign({}, commonStyles), {
    width: size ? size[0] : 5,
    height: size ? size[1] : 15,
    widthUnit: sizeUnit ? sizeUnit[0] : 'px',
    heightUnit: sizeUnit ? sizeUnit[1] : 'px'
  });

  switch (type) {
    case 'BarLoader':
      return React__default.createElement(BarLoader, __assign({}, loaderStyles2));

    case 'BeatLoader':
      return React__default.createElement(BeatLoader, __assign({}, loaderStyles1));

    case 'BounceLoader':
      return React__default.createElement(BounceLoader, __assign({}, loaderStyles1));

    case 'ClimbingBoxLoader':
      return React__default.createElement(ClimbingBoxLoader, __assign({}, loaderStyles1));

    case 'ClipLoader':
      return React__default.createElement(ClipLoader, __assign({}, loaderStyles1));

    case 'DotLoader':
      return React__default.createElement(DotLoader, __assign({}, loaderStyles1));

    case 'FadeLoader':
      return React__default.createElement(FadeLoader, __assign({}, loaderStyles2));

    case 'PulseLoader':
      return React__default.createElement(PulseLoader, __assign({}, loaderStyles1));

    case 'RotateLoader':
      return React__default.createElement(RotateLoader, __assign({}, loaderStyles1));

    case 'ScaleLoader':
      return React__default.createElement(ScaleLoader, __assign({}, loaderStyles2));

    case 'SyncLoader':
      return React__default.createElement(SyncLoader, __assign({}, loaderStyles1));

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
function (_super) {
  __extends(BarGraph, _super);

  function BarGraph(props) {
    var _this = _super.call(this, props) || this;

    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  BarGraph.prototype.componentDidMount = function () {
    var _a = this.props,
        stacked = _a.stacked,
        title = _a.title,
        titleFontSize = _a.titleFontSize,
        titleFontColor = _a.titleFontColor,
        datasets = _a.datasets,
        horizontal = _a.horizontal,
        xAxes = _a.xAxes,
        yAxes = _a.yAxes;
    var isStacked = !!stacked;
    var type = horizontal ? 'horizontalBar' : 'bar';
    var config = getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets);

    if (config && config.options) {
      var scales = void 0;

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

  BarGraph.prototype.render = function () {
    var _this = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this.chart = chart;
        return _this.chart;
      }
    });
  };

  return BarGraph;
}(Component);

var LineGraph =
/*#__PURE__*/
function (_super) {
  __extends(LineGraph, _super);

  function LineGraph(props) {
    var _this = _super.call(this, props) || this;

    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  LineGraph.prototype.componentDidMount = function () {
    var _a = this.props,
        title = _a.title,
        titleFontSize = _a.titleFontSize,
        titleFontColor = _a.titleFontColor,
        datasets = _a.datasets,
        stacked = _a.stacked,
        fill = _a.fill,
        yAxes = _a.yAxes,
        xAxes = _a.xAxes;
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

  LineGraph.prototype.render = function () {
    var _this = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this.chart = chart;
        return _this.chart;
      }
    });
  };

  return LineGraph;
}(Component);

var PieGraph =
/*#__PURE__*/
function (_super) {
  __extends(PieGraph, _super);

  function PieGraph(props) {
    var _this = _super.call(this, props) || this;

    _this.graph = null;
    _this.chart = null;
    return _this;
  }

  PieGraph.prototype.componentDidMount = function () {
    var _a = this.props,
        doughnut = _a.doughnut,
        title = _a.title,
        titleFontSize = _a.titleFontSize,
        titleFontColor = _a.titleFontColor,
        datasets = _a.datasets;
    var type = doughnut ? 'doughnut' : 'pie';
    var config = getCommonChartConfigurations(type, title, titleFontSize, titleFontColor, datasets);
    this.graph = new ChartJs(this.chart, config);
  };

  PieGraph.prototype.render = function () {
    var _this = this;

    return React__default.createElement("canvas", {
      ref: function ref(chart) {
        _this.chart = chart;
        return _this.chart;
      }
    });
  };

  return PieGraph;
}(Component);

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
  return React__default.createElement(FontAwesomeIcon, {
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
      imgAttributes = __rest(props, ["circle", "fluid", "rounded", "src"]);

  return React__default.createElement(BootstrapImage, __assign({
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

  var _a = useState(!collapsed || !collapsible),
      open = _a[0],
      setOpen = _a[1];

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
  return React__default.createElement(Card, {
    className: className,
    border: color
  }, title && React__default.createElement(Card.Header, {
    style: collapsible ? {
      cursor: 'pointer',
      textAlign: 'left'
    } : {
      textAlign: 'left'
    },
    onClick: function onClick() {
      return collapsible && setOpen(!open);
    }
  }, title, collapsible && collapseIcon), React__default.createElement(Card.Body, {
    style: {
      textAlign: 'left'
    }
  }, collapsible && !title && collapseIcon, React__default.createElement(Collapse, {
    "in": open
  }, React__default.createElement("div", {
    id: "collapse-body"
  }, children))), footer && React__default.createElement(Card.Footer, {
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
  return React__default.createElement(FormCheck$1, {
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
function (_super) {
  __extends(Alert, _super);

  function Alert(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      show: true
    };
    return _this;
  }

  Alert.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        _b = _a.color,
        color = _b === void 0 ? 'primary' : _b,
        title = _a.title,
        message = _a.message,
        _c = _a.dismissible,
        dismissible = _c === void 0 ? false : _c,
        _d = _a.closeLabel,
        closeLabel = _d === void 0 ? 'Dismiss' : _d,
        className = _a.className,
        style = _a.style,
        btnClassName = _a.btnClassName,
        btnStyle = _a.btnStyle;
    var show = this.state.show;

    if (show) {
      return React__default.createElement(BootstrapAlert, {
        variant: color,
        onClose: function onClose() {
          return _this.setState({
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
          return _this.setState({
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
}(Component);

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
  }, closeButton && React__default.createElement(Button, __assign({}, closeButton, {
    color: closeButton.color || 'secondary'
  }), closeButton.children || 'Close'), middleButton && React__default.createElement(Button, __assign({}, middleButton, {
    color: middleButton.color || 'info'
  }), middleButton.children || 'Retry'), successButton && React__default.createElement(Button, __assign({}, successButton, {
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
  return React__default.createElement(FormControl$1, {
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
  return React__default.createElement(Editor, {
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

registerLocale('enUS', enUS);
registerLocale('ptBR', ptBR);
setDefaultLocale('enUS');

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
  }))), React__default.createElement(DatePicker, {
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
  return React__default.createElement(Player, {
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
React__default.createElement(FontAwesomeIcon, {
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

var BreadcrumbItem = function BreadcrumbItem(_a) {
  var children = _a.children,
      active = _a.active,
      onClick = _a.onClick,
      className = _a.className,
      style = _a.style;
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
  var _a = useState([]),
      options = _a[0],
      setOptions = _a[1];

  var _b = useState(false),
      isLoading = _b[0],
      setIsLoading = _b[1];

  var id = props.id,
      searchAccessor = props.searchAccessor,
      placeholder = props.placeholder,
      onSearch = props.onSearch,
      onChange = props.onChange,
      renderMenuItemChildren = props.renderMenuItemChildren,
      minLength = props.minLength,
      value = props.value;

  var search = function search(query) {
    return __awaiter(void 0, void 0, void 0, function () {
      var results;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setIsLoading(true);
            return [4, onSearch(query)];

          case 1:
            results = _a.sent();
            setOptions(results);
            setIsLoading(false);
            return [2];
        }
      });
    });
  };

  var selectedValues = [];

  if (value) {
    selectedValues.push(value);
  }

  return React__default.createElement(AsyncTypeahead, {
    id: id,
    labelKey: searchAccessor,
    options: options,
    placeholder: placeholder,
    isLoading: isLoading,
    minLength: minLength,
    onSearch: search,
    onChange: onChange,
    renderMenuItemChildren: renderMenuItemChildren,
    defaultSelected: selectedValues
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

library.add(fas);

export { Alert, Badge, BarGraph, Breadcrumb, BreadcrumbItem, Button, Calendar, Checkbox, Column, Container, DateTimePicker, Dropdown, Icon, Image, Label, LineGraph, List, ListItem, Modal, Navbar, Panel, PieGraph, Pill, Radio, RichText, Row, Select, Spinner, Switch, Tab, TabsHeader, TextField, TextInput, Toast, Toaster, Typeahead, VideoPlayer };
//# sourceMappingURL=components.esm.js.map
