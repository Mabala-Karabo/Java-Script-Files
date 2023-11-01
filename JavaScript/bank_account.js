const acctBalancelb1 = document.getElementById("acctBalancelbl");
const deposit = [];
const withdrawals = [];
let totalBalance = 20;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");

const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");

//Creating our number formatter
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits:2,});

//accept the deposit from the user and store it in an array
btnDeposit.addEventListener('click', ()=>{
    //check if deposit is a nu,ber
    if(isNull(userDeposit.value)){
        alert("Please enter a number: ");
        return userDeposit.value = '';
    }
    else{
        //check if deposit meets parameters
        if(userDeposit.value < 0.01 || userDeposit.value>1000){
            alert("Ypu can only deposit between R0.01 and R1000");
            return userDeposit = '';
        }
        else{
            //push deposit to array;
            deposit.push(Number(userDeposit.value));

            //calculate total balance
            totalBalance += (Number(userDeposit.value));

            //format totalBalance to show RXX.xx(2decimal)
            let totalBalanceFormatted = formatter.format(totalBalance);
            document.getElementById("acctBalancelbl").innerHTML = totalBalanceFormatted;

            //print deposit to console to verify success
            document.write("R" + userDeposit.value);
            return userDeposit.value = '';
        }
    }

});
btnWithdraw.addEventListener('click', ()=>{
    //check if withdraw is a nu,ber
    if(isNull(userWithdraw.value)){
        alert("Please enter a number: ");
        return userWithdraw.value = '';
    }
    else{
        //check if withdraw meets parameters
        if(userWithdraw.value <totalBalance-10){
            alert("Your Total balance it cannot drop below R10.");
            return userWithdraw.value = '';
        }
        else{
            //push withdraw to array;
            dwithdrawls.push(Number(userWithdraw.value));

            //calculate total balance
            totalBalance += (Number(userWithdraw.value));

            //format totalBalance to show RXX.xx(2decimal)
            let totalBalanceFormatted = formatter.format(totalBalance);
            document.getElementById("acctBalancelbl").innerHTML = totalBalanceFormatted;

            //print deposit to console to verify success
            document.write("R" + userWithdraw.value);
            return userWithdraw.value = '';
        }
    }
});

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalancelbl").innerHTML = totalBalanceFormatted;