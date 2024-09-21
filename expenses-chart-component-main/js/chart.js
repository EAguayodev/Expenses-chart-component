let expenseData = []; // Global variable to fetch json data containing 

 // Function to update the UI with the expense fetched data
function showExpenses(period) {
    // Show monthly expenses when hovered over graph bars
    const graphData = document.querySelectorAll('.dashboard-chart__bar-chart-item');

    graphData.forEach((graph, index) => {
        const graphShow = graphData.querySelector('.graph-data');

        graphData.innerText = `${period.graph}`;
    })
}

// Fetch data from the local JSON file
 function fetchData() {
   fetch("./data.json") // Assuming the file is in the same directory
     .then((response) => response.json())
     .then((data) => {
       expenseData = data; // Store fetched expense data
       dayData = data; // Store fetched day data
       updateData("amount"); // Initialize with amount data by default
     })
     .catch((error) => console.error("Error fetching the data:", error));
 }

//  Event listeners for display of day chart expenses
document.querySelectorAll('.graph-data').addEventListener('mouseover', function (e) {
  // body
  e.preventDefault();
  updateData('amount')
});



window.onload = fetchData;