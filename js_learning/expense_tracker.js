// ------------------------------
// Expense Tracker (CLI Version)
// ------------------------------

// Sample "inputs" (exam will give input like this)
const commands = [
  "add 200 food",
  "add 150 transport",
  "add 50 snacks",
  "list",
  "total"
];

// Data structure to store expenses
let expenses = [];

// Function to process a command
function processCommand(cmd) {
  const parts = cmd.split(" ");
  const action = parts[0];

  if (action === "add") {
    // TODO: Write code to add expense (amount + category)
    // if(parts[2]=="")
    let expense=[parts[1],parts[2]]
    expenses.push(expense)
  } else if (action === "list") {
    // TODO: Write code to print all expenses
    let id=1
    for( i of expenses){
        console.log(`expense: ${id} ${i}`)
        id++
    }

  } else if (action === "total") {
    // TODO: Write code to calculate and print total
    let sum=0
    for( i of expenses){
        sum+=Number(i[0])
    }
    console.log(sum)
  } else {
    console.log("❌ Unknown command: " + cmd);
  }
}

// Run all commands one by one (simulate exam input/output)
for (let cmd of commands) {
  console.log("\n> " + cmd); // show the command
  processCommand(cmd);        // run it
}
