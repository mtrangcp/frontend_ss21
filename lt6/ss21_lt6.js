let number = +prompt('Nhập số: ');

if (Number.isInteger(number)) {
    document.write(`Nghiệm của ${number} là: `);
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            document.write(` ${i} , -${i} ,`);
        }
    }

} else {
    alert(`Dữ liệu không hợp lệ!`);
}

