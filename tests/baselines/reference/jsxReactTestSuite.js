//// [jsxReactTestSuite.ts]
declare var React: any;
declare var Component:any;
declare var Composite:any;
declare var Composite2:any;
declare var Child:any;
declare var Namespace:any;
declare var foo: any;
declare var bar: any;
declare var y:any;
declare var x:any;
declare var z:any;
declare var hasOwnProperty:any;

<div>text</div>;

<div>
  {this.props.children}
</div>;

<div>
  <div><br /></div>
  <Component>{foo}<br />{bar}</Component>
  <br />
</div>;



<Composite>
    {this.props.children}
</Composite>;


<Composite>
    <Composite2 />
</Composite>;


var x =
  <div
    attr1={
      "foo" + "bar"
    }
    attr2={
      "foo" + "bar" +
      
      "baz" + "bug"
    }
    attr3={
      "foo" + "bar" +
      "baz" + "bug"
      // Extra line here.
    }
    attr4="baz">
  </div>;

(
  <div>
    {/* A comment at the beginning */}
    {/* A second comment at the beginning */}
    <span>
      {/* A nested comment */}
    </span>
    {/* A sandwiched comment */}
    <br />
    {/* A comment at the end */}
    {/* A second comment at the end */}
  </div>
);


(
  <div
    /* a multi-line
       comment */
    attr1="foo">
    <span // a double-slash comment
      attr2="bar"
    />
  </div>
);


<div>&nbsp;</div>;

<div>&nbsp; </div>;

<hasOwnProperty>testing</hasOwnProperty>;


<Component constructor="foo" />;

<Namespace.Component />;


<Namespace.DeepNamespace.Component />;

<Component { ... x } y
={2 } z />;


<Component
    {...this.props} sound="moo" />;


<font-face />;

<Component x={y} />;

<x-component />;

<Component {...x} />;

<Component { ...x } y={2} />;

<Component { ... x } y={2} z />;

<Component x={1} {...y} />;


<Component x={1} y="2" {...z} {...z}><Child /></Component>;

<Component x="1" {...(z = { y: 2 }, z)} z={3}>Text</Component>;




//// [jsxReactTestSuite.js]
React.createElement("div", null, "text" );
React.createElement(
    "div",
    null,
    this.props.children
);
React.createElement(
    "div",
    null,
    React.createElement("div", null, React.createElement("br", null) ),
    React.createElement(Component, null, foo, React.createElement("br", null), bar ),
    React.createElement("br", null)
);
React.createElement(
    Composite,
    null,
    this.props.children
);
React.createElement(
    Composite,
    null,
    React.createElement(Composite2, null)
);
var x = React.createElement(
    "div",
    {
        attr1: "foo" + "bar",
        attr2: "foo" + "bar" + "baz" + "bug",
        attr3: "foo" + "bar" + "baz" + "bug",
        attr4: "baz"
    }
);
(React.createElement(
    "div",
    null,
    React.createElement(
        "span",
        null
    ),
    React.createElement("br", null)
));
(React.createElement(
    "div",
    {
        attr1: "foo"
    },
    React.createElement(
        "span",
        {
            attr2: "bar"
        }
    )
));
React.createElement("div", null, " " );
React.createElement("div", null, "  " );
React.createElement("hasOwnProperty", null, "testing" );
React.createElement(Component, { constructor: "foo" });
React.createElement(Namespace.Component, null);
React.createElement(Namespace.DeepNamespace.Component, null);
React.createElement(
    Component,
    React.__spread({
    },
    x,
    {
        y: 2,
        z: true
    })
);
React.createElement(
    Component,
    React.__spread({
    },
    this.props,
    {
        sound: "moo"
    })
);
React.createElement("font-face", null);
React.createElement(Component, { x: y });
React.createElement("x-component", null);
React.createElement(Component, React.__spread({ }, x ));
React.createElement(Component, React.__spread({ }, x, { y: 2 }));
React.createElement(Component, React.__spread({ }, x, { y: 2, z: true }));
React.createElement(Component, React.__spread({ x: 1 }, y ));
React.createElement(Component, React.__spread({ x: 1, y: "2" }, z, z ), React.createElement(Child, null) );
React.createElement(Component, React.__spread({ x: "1" }, (z = { y: 2 }, z), { z: 3 }), "Text" );
