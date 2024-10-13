# Frontend Mentor - Expenses chart component solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Links

- Solution URL: [Github](https://github.com/EAguayodev/Expenses-chart-component)
- Live Site URL: [Vercel](https://expenses-chart-component-livid-delta.vercel.app/)

## My process

I started by analyzing the challenge, which required me to create a dynamic bar chart showing daily expenses from a JSON file. My first step was setting up the HTML structure with graph bars and labels for each day of the week. I added custom data-value attributes to these bars to hold the expense data dynamically.

Next, I wrote a JavaScript function to fetch data from a local JSON file. I made sure that when the data was retrieved, I updated the graph bars' heights based on the expense values and displayed the amounts on hover. I utilized CSS to style the bars, adjusting their heights with percentages to visualize the expenses proportionally.

After fetching the data, I focused on the hover effect, displaying the exact amount above the graph bars when hovered. I avoided using tooltips and instead implemented a smooth hover transition, ensuring the values appeared directly above each bar, making the interaction seamless.

Throughout the process, I refined my approach, optimizing how the data was handled and ensuring the visual elements aligned perfectly with the data provided in the JSON file. Finally, I tested the implementation across various scenarios to make sure the chart was fully responsive and that the data was presented accurately.

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Javascript
- Desktop-first workflow

### What I learned

Learned how to dynamically display json data with spending graphs accessing the json file through using the fetch method in Javascript.

To see how you can add code snippets, see below:

```html
 <div class="dashboard-chart__bar-chart-item">
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-1"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-2"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-3"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-4"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-5"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-6"></div>
    <div class="graph-bar dashboard-chart__bar-chart-item-bar-7"></div>
  </div>
```
```css
.graph-bar::after {
    content: attr(data-value);
    position: relative;
    top: -30px;
    /* Adjust positioning based on bar height */
    left: 5%;
    padding: 5px;
    background-color: hsl(25, 47%, 15%);
    color: white;
    border-radius: 5px;
    display: none;
    font-size: 0.8rem;
}
```
```js
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

```

### Continued development

As I am now working as Web Content Editor & Email Marketer on a contract basis, I will be using time off to continue my development in Javascript, json file fetching when needed, and learn what else is in demand in the current market I'm going into Front end web development.


## Author

- Website - [Eric Aguayo](https://www.ericaguayo.com)
- Frontend Mentor - [@EAguayodev](https://www.frontendmentor.io/profile/EAguayodev)