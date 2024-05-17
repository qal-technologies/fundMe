window.addEventListener('DOMContentLoaded', () => {
    let accountName = document.getElementById('account-name');
    let accountNumber = document.getElementById('account-number');
    let bankName = document.getElementById('bank-name');
    let transactionID = document.getElementById('transId');
    let payment = JSON.parse(localStorage.getItem('paymentHistory'));   
   

    let paymentHistory = payment[payment.length - 1];

    accountName.textContent = paymentHistory.accountName;
    accountNumber.textContent = paymentHistory.accountNumber;
    bankName.textContent = paymentHistory.bankName;
    transactionID.textContent = paymentHistory.transactionID;
});