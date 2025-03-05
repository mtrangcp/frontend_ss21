let number = +prompt("Nhập số: ");

if (Number.isInteger(number)) {
    if (number < 2) {
        document.write(`Số ${number} không nguyên tố`);
    } else {
        let check = 0;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                check = 1;
                break;
            }
        }
        if (check === 0) {
            document.write(`Số ${number} là số nguyên tố`);
        } else {
            document.write(`Số ${number} không nguyên tố`);
        }
    }

} else {
    alert(`Dữ liệu không hợp lệ!`);
}