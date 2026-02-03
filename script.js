//your code here!

const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to add items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Infinite scroll on the list itself
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
