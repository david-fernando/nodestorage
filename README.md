# NodeStorage

A simple Node.js library for local storage without external dependencies, similarly to the `localStorage` of the browsers.

## 📦 Installation

To install, use one of the following commands
```
npm install @david-fernando/nodelocalstorage
or
yarn add @david-fernando/nodelocalstorage
```

## 🚀 Usage

### Importing the Module

Since this library uses ES Modules, import it as follows:
```javascript
import { localStorage } from '@david-fernando/nodelocalstorage';
```

### Available Methods

- **`getItem(key)`** - Retrieves the value associated with the specified key.
- **`setItem(key, value)`** - Stores a value under the specified key.
- **`removeItem(key)`** - Deletes the specified key and its value.
- **`key(index)`** - Retrieves the value stored under the key located at the specified index.
- **`clear()`** - Deletes all keys and removes the JSON file.
- **`print()`** - Logs all items to the console.
- **`length`** (Property) - Returns the number of stored items.

### Example Usage
```javascript
import { localStorage } from '@david-fernando/nodelocalstorage';

const { setItem, getItem, removeItem, key, clear } = localStorage();

// Setting items
setItem('username', 'David');
setItem('age', 28);

// Retrieving items
console.log(getItem('username')); // Output: David

// Print all items
print(); // Output: { username: 'David', age: 28 }

// Checking length
console.log(localStorage().length); // Output: 2

// Removing an item
removeItem('age');

// Getting keys by index
console.log(key(0)); // Output: David

// Clearing all data
clear();
```

## 📁 How Data is Stored
Data is saved in a file called `localStorage.json` in the root directory of this library

## 🔒 Note
This library only works in Node.js environments, as it uses the `fs` module.

## 📜 License
This project is licensed under the MIT License.