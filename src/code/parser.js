export let parser = str => {
  let obj = {};
  str.replace(/([^&=]*)=([^&=]*)/g, function() {
    obj[arguments[1]] = arguments[2];
  });
  return obj;
};

export let stringify = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`);
  }
  return arr.join("&");
};
