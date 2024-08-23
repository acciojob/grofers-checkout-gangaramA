const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	   // Select all elements with the class 'price'
    const priceElements = document.querySelectorAll(".price");
    
    // Initialize a variable to store the total price
    let totalPrice = 0;

    // Loop through all selected elements and calculate the sum of prices
    priceElements.forEach(priceElement => {
        totalPrice += parseFloat(priceElement.textContent);
    });

    // Create a new row for the total price
    const newRow = document.createElement("tr");
    
    // Create a single cell spanning across all columns (in this case, 2 columns)
    const newCell = document.createElement("td");
    newCell.setAttribute("colspan", "2"); // Set colspan to 2 to span across both columns
    newCell.style.textAlign = "center"; // Center the text in the cell
    newCell.textContent = `Total Price: Rs ${totalPrice}`;

    // Append the cell to the row
    newRow.appendChild(newCell);

    // Append the new row to the table
    const table = document.querySelector("table");
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

