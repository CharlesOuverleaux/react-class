// choice(items): returns a randomly selected item from array of items
// function choice(items) {
//   return items[Math.floor(Math.random() * items.length)];
// }
// we can refactor in a 1 liner, w. the new syntax for functions

const choice = items => items[Math.floor(Math.random() * items.length)];

// remove(items, item): removes the first matching item from items, if item exists, and returns it.Otherwise returns undefined.
const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    return item;
  }
}

export { choice, remove };
