let number = +prompt("Nhập số: ");

if (!Number.isInteger(number) || number < 1) {
    alert(`Số không hợp lệ`);

} else {
    let count = 0;
    let i = 2;
    let check;

    document.write(`${number} số ngto: `)
    while (count < number) {
        check = 0;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                check = 1;
            }
        }

        if (check === 0) {
            document.write(`${i} `);
            count++;
        }
        i++;
    }
}
