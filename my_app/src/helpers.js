// choice(items): returns a randomly selected item from array of items
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// remove(items, item): removes the first matching item from items, if item exists, and returns it.Otherwise returns undefined.
function remove(items, item) {
  const index = items.indexOf(item);
  if (index > -1) {
    items.splice(index, 1);
    return item;
  }
}

export { choice, remove };
