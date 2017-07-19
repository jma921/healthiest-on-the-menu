// @flow
/**
 * 
 * 
 * @param {Object} menuItem 
 * @returns {Object} {calories: 122, carbs: 12}
 */

function reduceMenuItem(menuItem: Object): Object {
  let item = {};
  Object.keys(menuItem).forEach(i => {
    item = menuItem[i];
  });
  return item;
}

export { reduceMenuItem };
