var obj = {
  foo: 0,
  bar: 1
};

Object.observe(obj, function(changes) {
  console.log(changes);
});

obj.liu = 3;obj.bsdfaz = 23;obj.sd = 123;obj.sdfsff = 23;obj.asd = 3;
