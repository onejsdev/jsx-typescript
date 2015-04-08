//// [jsxTypeInferences.ts]
///<jsx factory="test" />

declare function test<P>(p1: P, p2: P): void;

var Comp = { items: "foo" };
test(Comp, {});
<Comp />;
<Comp items />;
<Comp items="foo" />;

//// [jsxTypeInferences.js]
///<jsx factory="test" />
var Comp = { items: "foo" };
test(Comp, {});
<Comp/>;
<Comp items />;
<Comp items="foo" />;
