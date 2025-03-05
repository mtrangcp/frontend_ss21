let number, even = 0, odd = 0;

for (let i = 0; i < 5; i++) {
    number = +prompt("Nhập số: ");

    if (Number.isInteger(number)) {
        if (number % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    } else {
        alert(`Dữ liệu không phải số nguyên`);
    }
}

document.write(`Chẵn: ${even} <br/>`);
document.write(`Lẻ: ${odd}`);

