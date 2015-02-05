//// [jsxReactHasNoCreateElement.ts]
module React {
    export var foo;
}


<div/>  

//// [jsxReactHasNoCreateElement.js]
var React;
(function (React) {
    React.foo;
})(React || (React = {}));
React.createElement("div", null);
