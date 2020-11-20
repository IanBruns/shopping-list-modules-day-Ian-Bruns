import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    return items.find(element => element.id === id);
}

function addItem(name) {
    try {
        item.validateName(name);
        let newItem = item.create(name);
        items.push(newItem);
    }
    catch (error) {
        console.log(`Cannot add item: ${error.message}`);
    }
}

function findAndToggleChecked(id) {
    let toggleItem = findById(id);
    toggleItem.checked = !toggleItem.checked;
}

function findAndUpdateName(id, newName) {
    try {
        item.validateName(name);
        itemNameChange = findById(id);
        itemNameChange.name = newName;
    }
    catch {
        console.log(`Cannot update name: ${error.message}`);
    }
}

function findAndDelete(id) {
    let targetIndex = items.findIndex(element => element.id === id);
    items.splice(targetIndex, 1);
}

function toggleCheckedFilter() {
    hideCheckedItems = !hideCheckedItems;
    console.log(hideCheckedItems);
}

export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};