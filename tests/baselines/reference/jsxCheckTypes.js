//// [jsxCheckTypes.ts]
declare var React: {
    createElement(el: string, props: { attribute1: string; attribute2: boolean }, firstChild: string, ...children: string[]): { notAString: boolean };
}

class NotAString {
}

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

<div attribute1="hello" attribute2 />


//// [jsxCheckTypes.js]
var NotAString = (function () {
    function NotAString() {
    }
    return NotAString;
})();
React.createElement("div", { attribute1: "hello", attribute2: true }, " hello " );
React.createElement("div", { attribute1: "hello", attribute2: true }, " hello " );
React.createElement(NotAString, { attribute1: "hello", attribute2: true }, " hello " );
React.createElement("div", { attribute1: "hello", attribute2: true }, " ", true, " " );
React.createElement("div", { attribute1: "hello", attribute2: true }, " ", new NotAString(), " " );
React.createElement("div", { attribute1: "hello", attribute2: true }, React.createElement("div", { attribute1: "hello", attribute2: true }, " hey " ) );
React.createElement("div", { attribute1: 3, attribute2: true }, " hello " );
React.createElement("div", { attribute1: "hello", attribute2: 3 }, " hello " );
React.createElement("div", { attribute1: "hello" }, " hello " );
React.createElement("div", { attribute2: true }, " hello " );
React.createElement("div", { attribute1: "hello", attribute2: true });
