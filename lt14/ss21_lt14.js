let m = +prompt("Nhập chiều dài: ");
let n = +prompt("Nhập chiều rộng: ");

if (Number.isInteger(n) || Number.isInteger(m)) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || j === 0 || i === n - 1 || j === m - 1) {
                document.write(`*`);
            } else {
                document.write(`&#160;&#160;`);
            }
        }
        document.write(` <br/> `);
    }

} else {
    alert(`Dữ liệu không hợp lệ`);
}

