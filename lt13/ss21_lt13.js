let n = +prompt("Nhập độ dài: ");

if (Number.isInteger(n)) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) <= (n - 1)) {
                document.write(`*`);
            }
        }
        document.write(` <br/> `);
    }
    document.write(` <br/> `);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i >= j) {
                document.write(`*`);
            }
        }
        document.write(` <br/> `);
    }
    document.write(` <br/> `);


    //   hiển thị không đều
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) >= (n - 1)) {
                document.write(`*`);
            } else {
                document.write(`&#160;&#160;`);
            }
        }
        document.write(` <br/> `);
    }
    document.write(` <br/> `);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i <= j) {
                document.write(`*`);
            } else {
                document.write(`&#160;&#160`);
            }
        }
        document.write(` <br/> `);
    }
    //   hiển thị không đều

} else {
    alert(`Dữ liệu không hợp lệ`);
}


