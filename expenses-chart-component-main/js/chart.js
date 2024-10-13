document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const bars = document.querySelectorAll(".graph-bar");

      // Map each bar to corresponding day in data
      bars.forEach((bar, index) => {
        const dayData = data[index];
        const barHeight = dayData.amount * 2; // Scale amount for bar height

        // Update bar's height
        bar.style.height = `${barHeight}px`;

        // Set the data-value attribute to show the amount (for hover)
        bar.setAttribute("data-value", `$${dayData.amount}`);
      });
    })
    .catch((error) => console.error("Error fetching the data:", error));
});