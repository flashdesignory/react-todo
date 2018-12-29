function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
}

function addItem(key, value) {
  const current = getItem(key);
  let updated;
  if (current) {
    updated = [value, ...current];
  } else {
    updated = value;
  }
  return localStorage.setItem(key, JSON.stringify(updated));
}

function updateItem(key, value) {
  const current = getItem(key);
  const updated = current.map((item) => {
    if (item.id === value.id) {
      return value;
    }
    return item;
  });
  return localStorage.setItem(key, JSON.stringify(updated));
}

function removeItem(key, id) {
  const current = getItem(key);
  const updated = current.filter(item => item.id !== id);
  return localStorage.setItem(key, JSON.stringify(updated));
}

export {
  getItem,
  removeItem,
  updateItem,
  addItem,
};
