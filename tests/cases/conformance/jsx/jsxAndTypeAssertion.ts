declare var React: any;

class div {}


var x: any;
x = <any> {
    test: <any></any>
};

x = <any><any></any>;
 
x = <div>hello {<div>{}}</div>;

x = <div test={<div>{}}>hello</div>;

x = <div test={<div>{}}>hello {<div>{}}</div>;