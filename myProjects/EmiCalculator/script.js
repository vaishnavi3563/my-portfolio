function calculateEMI() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('interestRate').value);
  const tenureYears = parseFloat(document.getElementById('loanTenure').value);

  if (isNaN(principal) || isNaN(annualRate) || isNaN(tenureYears)) {
    alert('Please fill all fields with valid numbers.');
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const tenureMonths = tenureYears * 12;

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;

  // Display results
  document.getElementById('emi').innerText = `EMI: ₹${emi.toFixed(2)}`;
  document.getElementById('totalInterest').innerText = `Total Interest: ₹${totalInterest.toFixed(2)}`;
  document.getElementById('totalPayment').innerText = `Total Payment: ₹${totalPayment.toFixed(2)}`;
  document.getElementById('result').style.display = 'block';
}
