//// [jsxAndTypeAssertion.ts]
/// <JSX factory="createElement" />

declare var createElement: any;

class foo {}

var x: any;
x = <any> { test: <any></any> };

x = <any><any></any>;
 
x = <foo>hello {<foo>{}} </foo>;

x = <foo test={<foo>{}}>hello</foo>;

x = <foo test={<foo>{}}>hello{<foo>{}}</foo>;

x = <foo>x</foo>, x = <foo/>;

<foo>{<foo><foo>{/foo/.test(x) ? <foo><foo></foo> : <foo><foo></foo>}</foo>}</foo>

    


//// [jsxAndTypeAssertion.js]
/// <JSX factory="createElement" />
var foo = (function () {
    function foo() {
    }
    return foo;
})();
var x;
x = { test: <any></any> };
x = <any></any>;
x = <foo>hello {{}} </foo>;
x = <foo test={{}} >hello</foo>;
x = <foo test={{}} >hello{{}}</foo>;
x = <foo>x</foo>, x = <foo/>;
<foo>{<foo>{/foo/.test(x) ? <foo></foo> : <foo></foo>}</foo>}</foo>;
