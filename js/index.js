var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //REDUX________________________________________________________
var ADDTEXT = 'ADDTEXT';

//redux action creator_____________________________________________
var addingInput = function addingInput(markdown) {
  return {
    type: ADDTEXT,
    markdown: markdown };

};
//--------------------------------------------------------------------

//redux reducer function_____________________________________________
var reducer = function reducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { markdown: placeholder };var action = arguments[1];
  switch (action.type) {
    case ADDTEXT:return { markdown: action.markdown };
    default:return state;}
  ;
};
//----------------------------------------------------------------


//declaring redux store___________________________________________
var store = Redux.createStore(reducer);
//------------------------------------------------




//REACT----------------------------------------------------------

// enabling breaks on pressing enter-------------
marked.setOptions({
  breaks: true });



// dark color scheme object for dark theme ---------------------
var darkScheme = {
  '--body': 'black',
  '--font': 'white',
  '--back': 'linear-gradient(to right top, #0e04d1, #c90097, #fb0059, #ff5d27, #eba612)',
  '--toolbar': '#2d2d2d',
  '--textArea': '#212121',
  '--textFont': '#f2f2f2',
  '--tableColor': '#262626' };




// light color scheme object for light theme ---------------------

var lightScheme = {
  '--body': '#e6e6e6',
  '--font': 'black',
  '--back': 'linear-gradient(to left bottom, #0b0dc7, #bc007a, #d60032, #c06000, #989514)',
  '--toolbar': '#fdfdfd',
  '--textArea': 'white',
  '--textFont': '#0d0d0d',
  '--tableColor': '#e6e6e6' };



//placeholder String for Editor Component---------
var placeholder = '# Welcome to my React Markdown Previewer!\n\n// To find what this can do, view our sample text below or start editing in the editor and see the results rendered in the previewer.\n\n## For more information, click on the info icon at the top right corner of the screen\n### Here\'s the sample to show you some cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let\'s not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n';

















































//info string--------------------
var info = '\n # HI!\n ## You just found a Markdown Previewer\n\nMarkdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).\n \nTo see what this can do, \nStart writing plain text in the editor or load our sample text by clicking on the back icon at the top right corner of the screen and quickly see the text rendered in the Markdown Previewer.\n\nHere is a tip--\n\u2665 You can switch the theme using the toggle button at the top right corner of the screen \u2665\n\n\nRemember the editor does not save the text you enter.\n';
















//Background component ---------------
//render editor and previewer----
var
Background = function (_React$Component) {_inherits(Background, _React$Component);

  function Background(props) {_classCallCheck(this, Background);var _this = _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).call(this,
    props));
    _this.state = {
      markdown: placeholder };

    _this.props.markdown = _this.state.markdown;
    _this.handleChange = _this.handleChange.bind(_this);
    _this.switch = _this.switch.bind(_this);
    _this.toggleInfo = _this.toggleInfo.bind(_this);
    theme = 'dark';return _this;
  }

  //handle change of input in editor--------------
  _createClass(Background, [{ key: 'handleChange', value: function handleChange(e) {
      this.props.addText(e.target.value);
    }

    //toggle info --------------
  }, { key: 'toggleInfo', value: function toggleInfo() {
      if (this.props.markdown != info) {
        this.props.addText(info);
      } else
      this.props.addText(placeholder);

      $("#info").toggleClass("fa-info-circle");
      $("#info").toggleClass("fa-arrow-left");
    }

    //handle switch for theme change ------------------
  }, { key: 'switch', value: function _switch() {
      if (theme == 'dark') {
        for (var obj in lightScheme) {
          document.documentElement.style.setProperty(obj, lightScheme[obj]);
        }
        theme = 'light';
      } else {
        for (var _obj in darkScheme) {
          document.documentElement.style.setProperty(_obj, darkScheme[_obj]);
        }
        theme = 'dark';
      }
      //toggle icon for on and off -------------------------------
      $("#theme-switch").toggleClass("fa-toggle-on");
      $("#theme-switch").toggleClass("fa-toggle-off");
    } }, { key: 'render', value: function render()


    {
      return (
        React.createElement('div', { 'class': 'back' },
          React.createElement('i', { id: 'info', onClick: this.toggleInfo, 'class': 'fa fa-info-circle', 'aria-hidden': 'true' }),
          React.createElement('i', { id: 'theme-switch', onClick: this.switch, 'class': 'fa fa-toggle-on', 'aria-hidden': 'true' }),
          React.createElement('div', { 'class': 'parent' },
            React.createElement(Editor, { markdown: this.props.markdown, onChange: this.handleChange }),
            React.createElement(Preview, { markdown: this.props.markdown }))));



    } }]);return Background;}(React.Component);
;



//mapping state and props to Redux to manage state-------
var mapStateToProps = function mapStateToProps(state) {
  return {
    markdown: state.markdown };

};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addText: function addText(markdown) {
      dispatch(addingInput(markdown));
    } };

};


// Editor Component --------------------------------
var Editor = function (_React$Component2) {_inherits(Editor, _React$Component2);function Editor() {_classCallCheck(this, Editor);return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).apply(this, arguments));}_createClass(Editor, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { 'class': 'editor' },
          React.createElement(Toolbar, { id: 'edit-tool', text: 'Editor' }),
          React.createElement('textarea', { onChange: this.props.onChange, value: this.props.markdown, type: 'text' })));


    } }]);return Editor;}(React.Component);



//renderer for markdown--------
var renderer = new marked.Renderer();


//Preview Component ------------------------------
var Preview = function (_React$Component3) {_inherits(Preview, _React$Component3);function Preview() {_classCallCheck(this, Preview);return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));}_createClass(Preview, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', { 'class': 'preview' },
          React.createElement(Toolbar, { id: 'preview-tool', text: 'Previewer' }),
          React.createElement('div', { id: 'view', dangerouslySetInnerHTML: { __html: marked(
              this.props.markdown, { renderer: renderer }) } })));


    } }]);return Preview;}(React.Component);



//Toolbar Component--------------------------------
var Toolbar = function (_React$Component4) {_inherits(Toolbar, _React$Component4);function Toolbar() {_classCallCheck(this, Toolbar);return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));}_createClass(Toolbar, [{ key: 'render', value: function render()

    {
      return (
        React.createElement('div', { 'class': 'toolbar' },
          React.createElement('h3', null, this.props.text)));


    } }]);return Toolbar;}(React.Component);



//Create a redux react connected component---------------
var connect = ReactRedux.connect;

var Container = connect(mapStateToProps, mapDispatchToProps)(Background);

var Provider = ReactRedux.Provider;

//wrapping app to work with redux---------------
var AppWrapper = function (_React$Component5) {_inherits(AppWrapper, _React$Component5);function AppWrapper() {_classCallCheck(this, AppWrapper);return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).apply(this, arguments));}_createClass(AppWrapper, [{ key: 'render', value: function render()
    {
      return (
        React.createElement(Provider, { store: store },
          React.createElement(Container, null)));


    } }]);return AppWrapper;}(React.Component);


//Render the app----------

ReactDOM.render(React.createElement(AppWrapper, null), document.getElementById('app'));


//animations and trnasitions using jquery--------------------------


//toggle blink animation ----------------------------------------
document.getElementById('theme-switch').onclick = function () {
  $(".back").addClass('blinks');
  setTimeout(function () {
    $(".back").removeClass('blinks');
  }, 2000);
};