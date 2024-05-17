window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('button#transfer');
    const form = document.querySelector('form');

    btn.addEventListener('click', (event) => {
        event.preventDefault();

        const transId = genId();

        const accountName = document.getElementById('account-name').value;
        const accountNumber = document.getElementById('account-number').value;
        const bankName = document.getElementById('bank-name').value;
        const warning = document.querySelector('.warning');

        const parsedAccountNumber = parseInt(accountNumber);

        if (parsedAccountNumber <= 10 || isNaN(parsedAccountNumber)) {
            warning.textContent = 'Invalid Account Number';
            return false;
        }

        else if (accountName.trim() === "" || accountNumber.trim() === "" || bankName.trim() === "") {
            warning.textContent = "Inputs cannot be empty!";
            return false;
        }

        const payment = {
            transactionID: transId,
            accountName: accountName,
            accountNumber: parsedAccountNumber,
            bankName: bankName
        };

        let paymentHistory = JSON.parse(localStorage.getItem('paymentHistory')) || [];

        paymentHistory.push(payment);

        localStorage.setItem('paymentHistory', JSON.stringify(paymentHistory));

        alert('Payment submitted successfully!');

        setTimeout(() => {
            window.location.href = './slip.html';
        }, 1000); 

        form.reset();
        warning.textContent = "";
        return true;
    });
    
    function genId() {
        const timestamp = Date.now();
        const randomPart = Math.floor(Math.random() * 1000);
        const Id = (timestamp - randomPart) * Math.floor(Math.random() * 1000);

        return Id;
    }
});
