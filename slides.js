var slides = [
  {
    feature: true,
    content: "<h1 class=''><span class='green'>ES6</span> Feature Transpilation</h1>"
  },
  {
    title: "README.md",
    p: [
      "Kyle Hill (<strong class='blue'>@kylehill</strong>)",
      "Washington, DC",
      "Front End at <span class='purple'>Upside Travel</span>",
      "We're hiring! (of course)"
    ]
  },
  {
    feature: true,
    image: "images/biscoff.jpg"
  },
  {
    title: "tl;dw",
    content: "<h2>Don't use <span class='mono'>class</span> right now"
  },
  {
    title: "tl;dw",
    content: "<h2>Don't use <span class='mono'>class</span> right now<br/>or maybe ever</h2>"
  },
  {
    title: "JavaScript",
    p: [
      "<span class='red'>1995</span>",
      "Prototype written by Brendan Eich in ten days",
      "Shows up in Netscape Navigator 2.2 in September",
      "Microsoft creates JScript for IE in <span class='red'>1996</span>"
    ]
  },
  {
    title: "ECMAScript v1",
    p: [
      "<span class='red'>1997</span>",
      "Published standard",
      "Largely conformed to by browser vendors"
    ]
  },
  {
    title: "ECMAScript v2",
    p: [
      "<span class='red'>1998</span>",
      "Small editorial changes"
    ]
  },
  {
    title: "ECMAScript v3",
    p: [
      "<span class='red'>1999</span>",
      "<span class='mono'>try</span> / <span class='mono'>catch</span>",
      "Useful errors",
      "Regular expressions",
      "Improved formatting and string handling"
    ]
  },
  {
    title: "<span class='strike'>ECMAScript v4</span>",
    p: [
      "<span class='red'>nope</span>",
    ]
  },
  {
    feature: true,
    image: "images/reasons.jpg"
  },
  {
    title: "ECMAScript <span class='blue'>v5</span> New Features",
    p: [
      "<span class='red'>2009</span>",
      "Strict mode",
      "Native JSON",
      "Array <span class='mono'>.map</span> / <span class='mono'>.filter</span> / <span class='mono'>.reduce</span> / <span class='mono'>.forEach</span>",
      "Function <span class='mono'>.bind</span>",
      "Very few syntactical/operator changes"
    ]
  },
  {
    title: "<span class='blue'>ES5</span> Adoption",
    p: [
      "IE: <span class='red'>2011</span>, v9",
      "Firefox: <span class='red'>2011</span>, v4",
      "Chrome: <span class='red'>2011</span>, v13",
      "Safari: <span class='red'>2012</span>, v5.1.4"
    ]
  },
  {
    title: "<span class='blue'>ES5</span> \"Solutions\"",
    p: [
      "Arbitrary minimum browser requirements",
      "Polyfills",
      "Dependencies on jQuery/underscore/lodash"
    ]
  },
  {
    title: "ECMAScript <span class='green'>v6</span> New Features",
    p: [
      "<span class='red'>2015</span>",
      "New types: <span class='mono'>Map</span>, <span class='mono'>Set</span>, <span class='mono'>Promise</span>, <span class='mono'>Symbol</span>, etc",
      "<span class='mono'>Object.assign</span>",
      "<span class='mono'>Array.from</span>",
      "<span class='mono'>String.includes</span>"
    ]
  },
  {
    title: "<span class='green'>ES6</span> Syntactical Changes",
    p: [
      "<span class='mono'>() => {}</span>",
      "<span class='mono'>function *(){ yield 1; yield 2; }</span>",
      "<span class='mono'>class</span>, <span class='mono'>extends</span>, and <span class='mono'>super</span>",
      "<span class='mono'>...</span> operator",
      "destructuring / left-hand assignment"
    ]
  },
  {
    title: "yeah don't worry there's more",
    p: [
      "<span class='mono'>function (a, ...b) {}",
      "<span class='mono'>function (a = 1) {}",
      "<span class='mono'>`template ${'literals'}`</span>",
      "<span class='mono'>const</span> and <span class='mono'>let</span>",
      "<span class='mono'>for (x of y)</span>"
    ]
  },
  {
    feature: true,
    content: "<h2>Polyfills won't work for syntactical changes</h2>"
  },
  {
    title: "<span class='blue'>compile</span> <em>(v.)</em>",
    p: [
      "the act of using an automated program",
      "to convert code from one (human-readable) programming language",
      "to another, lower-level language or machine code"
    ]
  },
  {
    title: "Compilation",
    p: [
      "<span class='green'>Static code analysis prevents some runtime errors</span>",
      "<span class='green'>Compiler optimizes for performance</span>"
    ]
  },
  {
    title: "Compilation",
    p: [
      "Static code analysis prevents some runtime errors",
      "Compiler optimizes for performance",
      "<span class='red'>Initial setup costs can be prohibitive</span>",
      "<span class='red'>Debugging can be onerous</span>",
      "<span class='red'>Output difficult/impossible to understand</span>"
    ]
  },
  {
    title: "<span class='blue'>transpile</span> <em>(v.)</em>",
    p: [
      "the act of using an automated program",
      "to convert code from one (human-readable) programming language",
      "to another language at relatively <span class='blue'>the same level of abstraction</span>"
    ]
  },
  {
    feature: true,
    content: "<h2>There are so, so many<br/>transpile-to-JavaScript languages</h2>"
  },
  {
    feature: true,
    image: "images/languages.png"
  },
  {
    feature: true,
    content: "<h2>Let's just transpile <span class='green'>ES6</span> into <span class='blue'>ES5</span>"
  },
  {
    feature: true,
    image: "images/babel.png"
  },
  {
    feature: true,
    content: "<h1>Two Big Important Assumptions</h1>"
  },
  {
    feature: true,
    content: "<h2>#1<br/><span class='purple'>All things being equal, it is a better practice to write JS code in JavaScript than an adjunct language.</h2>"
  },
  {
    title: "JS > transpilation",
    p: [
      "Complexity is reduced",
      "Dependencies are removed",
      "Easier to hire for/onboard"
    ]
  },
  {
    feature: true,
    content: "<h2>#2<br/><span class='purple'>Page weight inflation is bad.</h2>"
  },
  {
    title: "Large page weight",
    p: [
      "Makes your page less performant",
      "Murders mobile data plans",
      "Reduces accessibility"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "<span class='purple'>Q: How can we transpile <es6 /> into <es5 /> without seeing substantial page weight inflation?</span>"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "Q: How can we transpile <es6/> into <es5/> without seeing substantial page weight inflation?",
      "<span class='purple'>A: Find features that transpile well and embrace them first.</span>"
    ]
  },
  {
    title: "Finally getting around to my thesis",
    p: [
      "Q: How can we transpile <es6/> into <es5/> without seeing substantial page weight inflation?",
      "A: Find features that transpile well and embrace them first.",
      "<span class='purple'>And watch out for economies of scale!</span>"
    ]
  },
  {
    title: "Let's do science!",
    p: [
      "Step 1: Write <es6/> code that includes a single feature",
      "Step 2: Write code that includes a hundred instances of that same feature",
      "Step 3: Transpile both into <es5/>"
    ]
  },
  {
    title: "Let's do science!",
    p: [
      "For each feature:",
      "<span class='purple'>Raw</span>: ((es6 / es5) + (es6-at-scale / es5-at-scale))",
      "<span class='purple'>Impact</span>: Math.min((es5 / 250), 1)",
      "<span class='purple'>Feature</span>: 100 - (50 * ((2 - <em>raw</em>) * <em>impact</em>))",
      "Produces a score between 0-100"
    ]
  },
  {
    title: "const/let - <es6/>",
    hasCode: true,
code: function() {
  const a = 123
  let b = 456

  function c () {
    const a = 789
  }
}
  },
  {
    title: "const/let - <es5/>",
    score: 100,
    hasCode: true,
code: function() {
  var a = 123
  var b = 456
  
  function c () {
    var _a = 789
  }
}
  },
  {
    title: "spread (array merging) - <es6/>",
    hasCode: true,
code: function () {
  var x = [1, 2, ...[3, 4, 5], 6, 7]
}
  },
  {
    title: "spread (array merging) - <es5/>",
    score: 99,
    hasCode: true,
code: function () {
  var x = [1, 2].concat([3, 4, 5], [6, 7]);
}
  },
  {
    title: "spread (function calls) - <es6/>",
    hasCode: true,
code: function () {
  var x = function(){}
  x(...[1,2,3])
}
  },
  {
    title: "spread (function calls) - <es5/>",
    score: 98,
    hasCode: true,
code: function () {
  var x = function x(){}
  x.apply(undefined,[1,2,3]);
}
  },
  {
    title: "spread (string) - <es6/>",
    slideClass: "bad",
    hasCode: true,
code: function () {
  var a = ["a", ..."bcd", "e"]
}
  },
  {
    title: "spread (string) - <es5/>",
    score: 31,
    slideClass: "bad",
    hasCode: true,
code: function () {
  function _toConsumableArray(arr){
    if(Array.isArray(arr)){
      for(var i=0,arr2=Array(arr.length);i<arr.length;i++){
        arr2[i]=arr[i];
      }
      return arr2;
    }
    else{
      return Array.from(arr);
    }
  }
  var x=["a"].concat(_toConsumableArray("bcd"),["e"]);
}
  },
  {
    title: "spread (unknown) - <es6/>",
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  return [...a]
}
  },
  {
    title: "spread (unknown) - <es5/>",
    score: 31,
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  function _toConsumableArray(arr){
    if(Array.isArray(arr)){
      for(var i=0,arr2=Array(arr.length);i<arr.length;i++){
        arr2[i]=arr[i];
      }
      return arr2;
    }
    else{
      return Array.from(arr);
    }
  }
  return [].concat(_toConsumableArray(a));
}
  },
  {
    title: "object (destructuring) - <es6/>",
    hasCode: true,
code: function () {
  var a = "b"
  var c = "d"
  var e = { a, c }
}
  },
  {
    title: "object (destructuring) - <es5/>",
    score: 93,
    hasCode: true,
code: function () {
  var a = "b";
  var c = "d";
  var e = { a: a, c: c };
}
  },
  {
    title: "object (shorthand methods) - <es6/>",
    hasCode: true,
code: function () {
  var a = { b() { return "c" } }
}
  },
  {
    title: "object (shorthand methods) - <es5/>",
    score: 92,
    hasCode: true,
code: function () {
  var a = { 
    b: function b(){
      return"c";
    }
  };
}
  },
  {
    title: "object (variable properties) - <es6/>",
    hasCode: true,
code: function () {
  var a = "b"
  var c = { [a]: "d" }
}
  },
  {
    title: "object (shorthand methods) - <es5/>",
    score: 24,
    slideClass: "bad",
    hasCode: true,
code: function () {
  function _defineProperty(obj,key,value){
    if(key in obj){
      Object.defineProperty(obj,key,{
        value:value,
        enumerable:true,
        configurable:true,
        writable:true
      });
    }
    else{
      obj[key]=value;
    }
    return obj;
  }
  var a="b";var c=_defineProperty({},a,"d");
}
  },
  {
    title: "params (rest) - <es6/>",
    hasCode: true,
code: function (a, ...b) {
  return b
}
  },
  {
    title: "params (rest) - <es5/>",
    score: 53,
    slideClass: "iffy",
    hasCode: true,
code: function (a) {
  for(var _len=arguments.length, b = Array(_len>1?_len-1:0), _key=1;
      _key<_len;
      _key++){
    b[_key-1]=arguments[_key];
  }
  return b;
}
  },
  {
    title: "params (defaults) - <es6/>",
    hasCode: true,
code: function (a = 1, b = 2) {
  return a + b
}
  },
  {
    title: "params (default) - <es5/>",
    score: 44,
    slideClass: "iffy",
    hasCode: true,
code: function () {
  var a=(arguments.length<=0||arguments[0]===undefined)
    ? 1
    : arguments[0];
  var b=(arguments.length<=1||arguments[1]===undefined)
    ? 2
    : arguments[1];
  return a+b;
}
  },
  {
    title: "for-of (inline) - <es6/>",
    hasCode: true,
code: function () {
  for (var i of [1, 2, 3]) {
    console.log(i)
  }
}
  },
  {
    title: "for-of (inline) - <es5/>",
    score: 77,
    hasCode: true,
code: function () {
  var _arr=[1,2,3];
  for(var _i=0;_i<_arr.length;_i++){
    var i=_arr[_i];
    console.log(i);
  }
}
  },
  {
    title: "for-of (variable) - <es6/>",
    hasCode: true,
code: function (a) {
  for (var i of a) {
    console.log(i)
  }
}
  },
  {
    title: "for-of (variable) - <es5/>",
    score: 7,
    slideClass: "bad",
    hasCode: true,
code: function (a) {
  var _iteratorNormalCompletion=true;
  var _didIteratorError=false;
  var _iteratorError=undefined;
  try{
    for(var _iterator=a[Symbol.iterator](),_step;
        !(_iteratorNormalCompletion=(_step=_iterator.next()).done);
        _iteratorNormalCompletion=true){
      var i=_step.value;
      console.log(i);
    }
  }
  catch(err){
    _didIteratorError=true;
    _iteratorError=err;
  }
  finally{
    try{
      if(!_iteratorNormalCompletion&&_iterator.return){
        _iterator.return();
      }
    }
    finally{
      if(_didIteratorError){
        throw _iteratorError;
      }
    }
  }
}
  },

]


