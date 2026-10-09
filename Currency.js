let usdAmount = +prompt("Enter USD Amount");

if (isNaN(usdAmount)) {
    alert("Invalid input! Please enter a number.");
} else if (usdAmount <= 0) {
    alert("Invalid amount! Please enter an amount greater than 0.");
} else {

    const exchangeRate = 52.5;      // 48 EGP? 2024 was in the past, now its 52.5 :D  
    const commissionRate = 0.03;

    let egpAmount = usdAmount * exchangeRate;

    console.log(`Amount before commission: ${egpAmount} EGP`);

    let commission = commissionRate * egpAmount;

    console.log(`Commission (3%): ${commission} EGP`);

    let finalAmount = egpAmount - commission;

    console.log(`Final Amount: ${finalAmount} EGP`);
    
    // Exchange results 

    document.getElementById("results").innerHTML = `        
        <p>USD Entered: ${usdAmount} USD</p>
        <p>Amount before commission: ${egpAmount} EGP</p>
        <p>Commission (3%): ${commission} EGP</p>
        <h3>Final Amount: ${finalAmount} EGP</h3>
    `;
}