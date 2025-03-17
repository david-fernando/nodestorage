import { writeFileSync, existsSync, readFileSync, unlink } from 'fs';

const loadItems = () => {
  if (existsSync('localStorage.json')) {
    const txt = readFileSync('localStorage.json');
    return JSON.parse(txt);
  }
  return {};
};

const writeItemsToLocalstorage = (items) => {
  try {
    writeFileSync('localStorage.json', JSON.stringify(items));
  } catch (error) {
    console.error('Error occurred during writing file');
  }
};

const localStorage = () => {
  let items = loadItems();

  const getItem = (key) => items[key];

  const setItem = async (key, value) => {
    items[key] = value;
    writeItemsToLocalstorage(items);
  };

  const removeItem = async (key) => {
    delete items[key];
    writeItemsToLocalstorage(items);
  };

  const key = (index) => {
    const keys = Object.keys(items);
    return items[keys[Number(index)]];
  };

  const clear = () => {
    items = {};
    unlink('localStorage.json', () => console.log('localStorage file is removed'));
  };

  const print = () => console.log(items);

  return {
    get length() {
      return Object.keys(items).length;
    },
    getItem,
    setItem,
    removeItem,
    key,
    clear,
    print
  };
};

export default localStorage
