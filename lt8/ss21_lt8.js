let hundred = 0, ten = 0, unit = 0;
document.write(`Số Armstrong: `);

for (let i = 100; i <= 999; i++) {
    hundred = Math.floor(i / 100);
    ten = Math.floor((i / 10) % 10);
    unit = i % 10;

    if ((Math.pow(hundred, 3) + Math.pow(ten, 3) + Math.pow(unit, 3)) === i) {
        document.write(`  ${i}  `);
    }
}

