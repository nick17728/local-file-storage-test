"use strict";var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=MyNewWormhole;var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="C:\\Users\\nickb\\Downloads\\test.jsx";function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n["default"]=e,t&&t.set(e,n),n;}function CustomButton(){return React.createElement(_reactNative.TouchableOpacity,{onPress:function onPress(){return _reactNative.Alert.alert('Hello!');},__self:this,__source:{fileName:_jsxFileName,lineNumber:6,columnNumber:5}},React.createElement(_reactNative.Animated.Text,{children:"Click here!",__self:this,__source:{fileName:_jsxFileName,lineNumber:7,columnNumber:7}}));}function MyNewWormhole(){var message=React.useMemo(function(){return'Hello, world!';},[]);return React.createElement(_reactNative.Animated.View,{style:{flex:1,backgroundColor:'red'},__self:this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:5}},React.createElement(_reactNative.Animated.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:7}},message),React.createElement(CustomButton,{__self:this,__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:7}}));}
