  
const addExpenseBtn = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const incomeInput = document.getElementById("income");
const totalExpenseDisplay = document.getElementById("total-expense");
const totalBalanceDisplay = document.getElementById("total-balance");
let totalExpense = 0;

addExpenseBtn.addEventListener("click", function() {
  const category = document.getElementById("category").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const date = document.getElementById("date").value;
  const income = parseFloat(incomeInput.value);

  if (isNaN(income) || income < 0) {
    alert("Please enter a valid income.");
    return;
  }

  if (amount && date) {
    totalExpense = totalExpense + amount;

    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");

    expenseItem.innerHTML = `
      <span>Category: ${category}</span>
      <span>Amount: $${amount.toFixed(2)}</span>
      <span>Date: ${date}</span>
      <button class="delete-btn">Delete</button>
    `;

    expenseList.appendChild(expenseItem);

    totalExpenseDisplay.textContent = "$" + totalExpense.toFixed(2);
    totalBalanceDisplay.textContent = "$" + (income - totalExpense).toFixed(2);

    // if field is empty
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
  } else {
    alert("Please fill in all fields.");
  }

});

// Delete 
expenseList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btn")) {
    const expenseItem = event.target.parentElement;
    const amount = parseFloat(expenseItem.querySelector('span:nth-child(2)').textContent.split(':')[1].trim().slice(1));
    totalExpense = totalExpense - amount;
    totalExpenseDisplay.textContent = "$" + totalExpense.toFixed(2);
    totalBalanceDisplay.textContent = "$" + (parseFloat(incomeInput.value) - totalExpense).toFixed(2);
    expenseItem.remove();
  }
});