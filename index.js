var recipes = {
  Flour: '2 cups'
}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, Object, {[key]: value})
  return Object;
}
updateObjectWithKeyAndValue(recipes, 'Chocolate', '2');