//// [jsxInvalidEsprimaTestSuite.ts]
/// <JSX factory="React.createElement" />
declare var React: any;

</>;
<a: />;
<:a />;
<a b=d />;
<a>;
<a></b>;
<a foo="bar;
<a:b></b>;
<a:b.c></a:b.c>;
<a.b:c></a.b:c>;
<a.b.c></a>;
<.a></.a>;
<a.></a.>;
<a[foo]></a[foo]>;
<a['foo']></a['foo']>;
<a><a />;
<a b={}>;
var x = <div>one</div><div>two</div>;;
var x = <div>one</div> /* intervening comment */ <div>two</div>;;
<a>{"str";}</a>;
<span className="a", id="b" />;
<div className"app">;
<div {props} />;

<div>stuff</div {...props}>;
<div {...props}>stuff</div {...props}>;

<a>></a>;
<a> ></a>;
<a b=}>;
<a b=<}>;
<a>}</a>;
<a .../*hai*/asdf/>;

//// [jsxInvalidEsprimaTestSuite.js]
</>;
<a/>;
< a />;
<a b={d /  > } ><a>;
<a></b>;
<a foo="bar; ><a b ></b>;
<a b c ></a></></></>;
b.c > ;
<a.b c ></a.b>;
c > ;
<a.b.c></a>;
<.a></.a>;
<a.></a.>;
foo;
 > </>;
a[foo] > ;
'foo';
 > </>;
a['foo'] > ;
<a/>;
<a b={} >;
var x = <div>one</div><div>two</div>;;
var x = <div>one</div> /* intervening comment */ /* intervening comment */ <div>two</div>;;
<a>{"str"}</></>;
</>;
a > ;
<span className="a" id="b" />;
<div className ></>;
"app" > ;
<div {...props} />;
<div>stuff</div>;
{
    props;
}
 > ;
<div {...props} >stuff</div>;
{
    props;
}
 > ;
<a>></a>;
<a> ></a>;
<a b={} >;
<a b=<>;
<a></></> ></></></>;
a > ;
<a asdf />;
