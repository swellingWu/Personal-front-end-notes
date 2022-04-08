let user = {
    [Symbol.toStringTag]: "User"
  };
  
  alert( {}.toString.call(user) ); // [object User]





  function A() {}
  function B() {}
  
  A.prototype = B.prototype = {};
  
  let a = new A();
  
  alert( a instanceof B ); // true
  //根据 instanceof 的逻辑，真正决定类型的是 prototype，而不是构造函数。