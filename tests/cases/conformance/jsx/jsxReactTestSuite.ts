declare var Component:any;
declare var Composite:any;
declare var Composite2:any;
declare var Namespace:any;
declare var foo: any;
declare var bar: any;
declare var y:any;
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


/* Need Spread Attribute
 *   
  it('wraps props in React.__spread for spread attributes', function() {
    var code =
      '<Component { ... x } y\n' +
      '={2 } z />';
    var result =
      'React.createElement(Component, React.__spread({},    x , {y: \n' +
      '2, z: true}))';

    expect(transform(code).code).toBe(result);
  });

  it('adds appropriate newlines when using spread attribute', function() {
    var code =
      '<Component\n' +
      '  {...this.props}\n' +
      '  sound="moo" />';
    var result =
      'React.createElement(Component, React.__spread({}, \n' +
      '  this.props, \n' +
      '  {sound: "moo"}))';

    expect(transform(code).code).toBe(result);
  });
  */

<font-face />;

<Component x={y} />;

<x-component />;


/* Need Spread Attribute
 * 
  it('calls assign with a new target object for spreads', function() {
    expectObjectAssign(
      '<Component {...x} />'
    ).toBeCalledWith({}, x);
  });
  
  it('calls assign with an empty object when the spread is first', function() {
    expectObjectAssign(
      '<Component { ...x } y={2} />'
    ).toBeCalledWith({}, x, { y: 2 });
  });

  it('coalesces consecutive properties into a single object', function() {
    expectObjectAssign(
      '<Component { ... x } y={2} z />'
    ).toBeCalledWith({}, x, { y: 2, z: true });
  });

  it('avoids an unnecessary empty object when spread is not first', function() {
    expectObjectAssign(
      '<Component x={1} {...y} />'
    ).toBeCalledWith({x: 1}, y);
  });

  it('passes the same value multiple times to React.__spread', function() {
    expectObjectAssign(
      '<Component x={1} y="2" {...z} {...z}><Child /></Component>'
    ).toBeCalledWith({x: 1, y: "2"}, z, z);
  });

  it('evaluates sequences before passing them to React.__spread', function() {
    expectObjectAssign(
      '<Component x="1" {...(z = { y: 2 }, z)} z={3}>Text</Component>'
    ).toBeCalledWith({x: "1"}, { y: 2 }, {z: 3});
  });
 */
