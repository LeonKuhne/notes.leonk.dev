const getItems = (table) => {
  // TODO uncompress before inserting/retrieving data
  return JSON.parse(localStorage.getItem(table)) || {};
}

const setItems = (table, items) => {
  // TODO compress before inserting/retrieving data
  localStorage.setItem(table, JSON.stringify(items));
}

const saveItem = (table, id, item) => {
  let items = getItems(table);
  items[id] = item;
  setItems(table, items);
}

const getItem = (table, id) => {
  return getItems(table)[id];
}

const deleteItem = (table, id) => {
  let items = getItems(table);
  delete items[id];
  setItems(table, items);
}