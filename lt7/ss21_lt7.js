let deposit = +prompt("Nhập tiền gửi: ");
let interest = +prompt("Nhập lãi: ");
let month = +prompt("Nhập tháng gửi: ");

let maturity_amount = 0;
let interest_earned = 0;

if (Number.isInteger(deposit) && Number.isInteger(month) && !isNaN(interest)) {
    maturity_amount = deposit * Math.pow((1 + (interest / 100)), month);
    interest_earned = maturity_amount - deposit;

    document.write(`Lãi:  ${interest_earned} <br/>`);
    document.write(`Tiền nhận được:  ${maturity_amount}`);

} else {
    alert(`Dữ liệu không hợp lệ!`);
}
