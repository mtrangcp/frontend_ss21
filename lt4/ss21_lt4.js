let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let c = +prompt("Nhập c: ");

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert(`Dữ liệu không hợp lệ!`);

} else {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                document.write(`Phương trình vô số nghiệm!`);
            } else {
                document.write(`Phương trình vô nghiệm!`);
            }

        } else {
            let x = -c / b;
            document.write(`Phương trình có 1 nghiệm: x = ${x}`);
        }

    } else {
        let delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            document.write(`Phương trình vô nghiệm!`);

        } else if (delta === 0) {
            let x = -b / (2 * a);
            document.write(`Phương trình có nghiệm kép: x = ${x}`);

        } else {
            let x1 = (-b - Math.sqrt(delta)) / (2 * a);
            let x2 = (-b + Math.sqrt(delta)) / (2 * a);

            document.write(`Phương trình có 2 nghiệm: x1 = ${x1} , x2 = ${x2}`);
        }
    }
}

