//// [jsxEntities.ts]
declare var React: any;

<div>&amp;</div>;

<div>&gt;</div>;

<div>&lt;</div>;

<div>&nbsp;</div>;

<div>&#250;</div>;

<div>&#x2297;</div>;



//// [jsxEntities.js]
React.createElement("div", null, "&" );
React.createElement("div", null, ">" );
React.createElement("div", null, "<" );
React.createElement("div", null, " " );
React.createElement("div", null, "ú" );
React.createElement("div", null, "⊗" );
