const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const data = new FormData(form);
    const incomeValue = data.get("income"); // Get input as string
    const income = parseFloat(incomeValue); // Convert to number

    const resultDiv = document.getElementById("result");

    // 🔹 Check for invalid input
    if (!incomeValue || isNaN(income) || income < 0) {
        resultDiv.style.color = "red";
        resultDiv.innerText = "❌ Please enter a valid positive number.";
        return;
    }

    // Tax Slabs
    const slab1 = 250000, rate1 = 0.05;
    const slab2 = 500000, rate2 = 0.20;
    const slab3 = 1000000, rate3 = 0.30;

    let tax = 0;

    // Tax Calculation
    if (income > slab3) {
        tax += (income - slab3) * rate3;
        income = slab3;
    }
    if (income > slab2) {
        tax += (income - slab2) * rate2;
        income = slab2;
    }
    if (income > slab1) {
        tax += (income - slab1) * rate1;
    }

    // Display Result
    resultDiv.style.color = "green";
    resultDiv.innerText = `✅ Your Income Tax: ₹${tax.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;
});
