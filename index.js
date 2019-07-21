var recipes = {
  Flour: '2 cups'
}
function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  return Object.assign({}, Object, {[key]: value})
}
updateObjectWithKeyAndValue(obj, 'prop 2', 2);