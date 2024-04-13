document.getElementById('taxForm').addEventListener('submit', function (e) {
    e.preventDefault();

    
    const age = document.getElementById('age').value;
    const income = parseFloat(document.getElementById('income').value);
    const extraIncome = parseFloat(document.getElementById('extraIncome').value);
    const deductions = parseFloat(document.getElementById('deductions').value);
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    const taxResult = document.getElementById('taxResult');

    let taxRate = 0;
    let taxableIncome = income + extraIncome - deductions;
    let taxAmount = 0;

    if(taxableIncome <= 800000){
        taxAmount = taxableIncome;  
    }else if (age <40) {
        taxRate = 0.3;
        taxAmount = taxRate * (taxableIncome - 800000);
    }else if(age >= 40  && age < 60) {
        taxRate = 0.4;
        taxAmount = taxRate * (taxableIncome - 800000);
    } else if ( age >= 60 && age <= 99) {
        taxRate = 0.1;
        taxAmount = taxRate * (taxableIncome - 800000);
    }
    
   
    if (taxAmount != taxableIncome) {
        taxResult.textContent =` Your all over income will be : ${taxAmount.toFixed(2)}  after deductions`;
        modal.style.display = 'block';
    }else{
         taxResult.textContent =`no taxes,Your all over income will be : ${taxAmount.toFixed(2)}  after deductions`;
        modal.style.display = 'block';
    }

     span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
