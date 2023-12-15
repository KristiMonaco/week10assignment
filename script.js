

function addFoodItem() {
    // Prevent the default form submission
    event.preventDefault();

    // Get the value from the input field
    let newFoodItem = document.getElementById('newFood').value;

    // Get the table body where the new row will be appended
    let tableBody = document.querySelector('#foodTable tbody');

    // Create a new table row
    let newRow = document.createElement('tr');

    // Create a cell for the new row and set its content to the new food item
    let cell = document.createElement('th');
    cell.setAttribute('scope', 'row');
    cell.textContent = newFoodItem;

    // Append the cell to the new row
    newRow.appendChild(cell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the input field after adding the new row
    document.getElementById('newFood').value = '';
}


  