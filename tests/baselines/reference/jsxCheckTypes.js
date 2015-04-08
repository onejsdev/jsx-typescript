//// [jsxCheckTypes.ts]
/// <JSX factory="React.createElement" />
declare var React: {
    createElement(el: string, props: { attribute1: string; attribute2: boolean }, firstChild: string, ...children: string[]): { notAString: boolean };
}

class NotAString {
}

declare var alert: any;

<div attribute1="hello" attribute2 > hello </div>;

<div attribute1="hello" attribute2={true}> hello </div>;

<NotAString attribute1="hello" attribute2> hello </NotAString>;

<div attribute1="hello" attribute2 > {true} </div>;

<div attribute1="hello" attribute2 > {new NotAString()} </div>;

<div attribute1="hello" attribute2 ><div attribute1="hello" attribute2 > hey </div></div>;


<div attribute1={3} attribute2 > hello </div>;

<div attribute1="hello" attribute2={3} > hello </div>;

<div attribute1="hello"> hello </div>;

<div attribute2> hello </div>;

<div attribute1="hello" attribute2 />;

<div {...{attribute1: 'hello', attribute2: true}}> hello </div>; 

<div {...{attribute1: 3}} > hello </div>;

<div {...(() =>({attribute1: 'hello', attribute2: true}))()}> hello </div>;

<div {...(alert('hello'), {attribute1: 'hello', attribute2: true})}  > hello </div>;

<div {...(alert('hello'), {attribute1: 3})}> hello </div>;
    
<div attribute1={3} {...{attribute1: 'hello', attribute2: true}}> hello </div>; 

<div  {...{attribute1: 'hello', attribute2: true}} attribute1={3} > hello </div>; 

<div  {...{attribute1: 'hello', attribute2: 3}} attribute2 > hello </div>; 

<div  {...{attribute1: 'hello', attribute2: 3}} attribute2 {...{ attribute2: 'hello' }} > hello </div>; 


//// [jsxCheckTypes.js]
var NotAString = (function () {
    function NotAString() {
    }
    return NotAString;
})();
<div attribute1="hello" attribute2 > hello </div>;
<div attribute1="hello" attribute2={true} > hello </div>;
<NotAString attribute1="hello" attribute2 > hello </NotAString>;
<div attribute1="hello" attribute2 > {true} </div>;
<div attribute1="hello" attribute2 > {new NotAString()} </div>;
<div attribute1="hello" attribute2 ><div attribute1="hello" attribute2 > hey </div></div>;
<div attribute1={3} attribute2 > hello </div>;
<div attribute1="hello" attribute2={3} > hello </div>;
<div attribute1="hello" > hello </div>;
<div attribute2 > hello </div>;
<div attribute1="hello" attribute2 />;
<div {...{ attribute1: 'hello', attribute2: true }} > hello </div>;
<div {...{ attribute1: 3 }} > hello </div>;
<div {...(function () { return ({ attribute1: 'hello', attribute2: true }); })()} > hello </div>;
<div {...(alert('hello'), { attribute1: 'hello', attribute2: true })} > hello </div>;
<div {...(alert('hello'), { attribute1: 3 })} > hello </div>;
<div attribute1={3} {...{ attribute1: 'hello', attribute2: true }} > hello </div>;
<div {...{ attribute1: 'hello', attribute2: true }} attribute1={3} > hello </div>;
<div {...{ attribute1: 'hello', attribute2: 3 }} attribute2 > hello </div>;
<div {...{ attribute1: 'hello', attribute2: 3 }} attribute2 {...{ attribute2: 'hello' }} > hello </div>;
