var recipes = {
  Flour: '2 cups'
}
function updateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  return Object.assign({}, object, {[key]: value})
}
updateObjectWithKeyAndValue(obj, 'prop 2', 2);
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object.
}