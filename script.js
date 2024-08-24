 const getSumBtn = document.getElementById("getSumBtn");

        // Function to calculate and display total price
        const getSum = () => {
            // Get all price elements
            const priceElements = document.querySelectorAll(".price");

            // Initialize total price
            let totalPrice = 0;

            // Loop through price elements and sum their values
            priceElements.forEach(priceElement => {
                totalPrice += parseFloat(priceElement.textContent);
            });

            // Create a new row for total price
            const newRow = document.createElement("tr");

            // Create a single cell spanning both columns
            const newCell = document.createElement("td");
            newCell.setAttribute("colspan", "2");
            newCell.style.textAlign = "center";
            newCell.textContent = `Total Price: Rs ${totalPrice.toFixed(2)}`; // Format to two decimal places

            // Append the cell to the row and the row to the table
            newRow.appendChild(newCell);
            const table = document.querySelector("table");
            table.appendChild(newRow);
        };

        // Add event listener to button for click
        getSumBtn.addEventListener("click", getSum);