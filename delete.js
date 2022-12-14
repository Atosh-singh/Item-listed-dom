var form = document.getElementById("addForm");
console.log(form);

var itemList = document.getElementById("items");
console.log(itemList);

var filter = document.getElementById("filter");
console.log(filter);
// Form Submit Event

form.addEventListener("submit", addItem);

// Delete event

itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);
// Add Item

function addItem(e) {
  e.preventDefault();

  // Get input Value

  var newItem = document.getElementById("item").value;

  // create new li element

  var li = document.createElement("li");

  // Add class
  li.className = "list-group-item";

  // Add text Node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create delete button element
  var deleteBtn = document.createElement("button");

  //

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  console.log(deleteBtn);

  // Append TextNode
  deleteBtn.appendChild(document.createTextNode("X"));

  // Append delete button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter items

function filterItems(e) {
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // get li's
  var items = itemList.getElementsByTagName("li");
  // convert to an ARRAY
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
