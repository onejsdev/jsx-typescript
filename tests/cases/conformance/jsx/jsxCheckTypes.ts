declare var React: {
    createElement(el: string, props: { attribute1: string; attribute2: boolean }, firstChild: string, ...children: string[]);
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
