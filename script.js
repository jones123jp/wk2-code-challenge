// Selecting elements
const list = document.querySelector('ul');
const inputs = document.querySelectorAll('input');
const addButton = document.querySelector('button');

// Function to add an item
addButton.onclick = function () {
    const itemName = inputs[0].value.trim();
    const itemPrice = inputs[1].value.trim();

    if (!itemName || !itemPrice || isNaN(itemPrice)) {
        alert('Please enter a valid item name and numeric price.');
        return;
    }

    // Reset inputs
    inputs[0].value = '';
    inputs[1].value = '';

    // Create list item
    const listItem = document.createElement('li');
    const itemText = document.createElement('span');
    const deleteButton = document.createElement('button');

    // Set content
    itemText.textContent = `${itemName} - Ksh ${itemPrice}`;
    deleteButton.textContent = 'Delete';

    // Append elements
    listItem.appendChild(itemText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    // Delete functionality
    deleteButton.onclick = function () {
        list.removeChild(listItem);
    };

    // Refocus on the first input
    inputs[0].focus();
};