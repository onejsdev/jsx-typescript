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
    
    
