//// [jsxAndTypeAssertion.ts]
declare var React: any;

class div {}
class foo {}
class bar {}


var x: any;
x = <any> {
    test: <any></any>
};

x = <any><any></any>;
 
x = <div>hello {<div>{}}</div>;

x = <div test={<div>{}}>hello</div>;

x = <div test={<div>{}}>hello {<div>{}}</div>;

x = <foo>x</foo>, x = <img/>;

<foo>{<foo><foo>{/foo/.test(x) ? <foo><foo></foo> : <bar><bar></bar>}</foo>}</foo>
    
    


//// [jsxAndTypeAssertion.js]
var div = (function () {
    function div() {
    }
    return div;
})();
var foo = (function () {
    function foo() {
    }
    return foo;
})();
var bar = (function () {
    function bar() {
    }
    return bar;
})();
var x;
x = {
    test: React.createElement("any", null)
};
x = React.createElement("any", null);
x = React.createElement("div", null, "hello ", {} );
x = React.createElement("div", { test: {} }, "hello" );
x = React.createElement("div", { test: {} }, "hello ", {} );
x = React.createElement("foo", null, "x" ), x = React.createElement("img", null);
React.createElement("foo", null, React.createElement("foo", null, /foo/.test(x) ? React.createElement("foo", null) : React.createElement("bar", null) ) );
