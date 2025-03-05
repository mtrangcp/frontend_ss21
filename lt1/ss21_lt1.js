let number, sum = 0;

for (let i = 0; i < 5; i++) {
    number = +prompt("Nhập số: ");

    if (Number.isInteger(number)) {
        if (number % 2 !== 0) {
            sum += number;
        }
    } else {
        alert(`Dữ liệu không phải số nguyên`);
    }
}

console.log(`sum: ${sum}`);



