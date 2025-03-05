let month = +prompt("Nhập tháng: ");
let day = +prompt("Nhập ngày: ");

if (Number.isInteger(month) && Number.isInteger(day)) {
    if (month < 1 || month > 12) {
        alert(`Tháng không hợp lệ!`);
    } else {
        let check = 0;
        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11: {
                if (day < 1 || day > 30) {
                    alert(`Ngày không hợp lệ!`);
                    check = 1;
                }
                break;
            }
            case 2: {
                if (day < 1 || day > 29) {
                    alert(`Ngày không hợp lệ!`);
                    check = 1;
                }
                break;
            }
            default: {
                if (day < 1 || day > 31) {
                    alert(`Ngày không hợp lệ!`);
                    check = 1;
                }
                break;
            }
        }

        if (check === 0) {
            if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) {
                alert(`Cung bạch dương`);

            } else if ((day >= 21 && month === 4) || (day <= 20 && month === 5)) {
                alert(`Cung kim ngưu`);

            } else if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) {
                alert(`Cung song tử`);

            } else if ((day >= 22 && month === 6) || (day <= 22 && month === 7)) {
                alert(`Cung cự giải`);

            } else if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) {
                alert(`Cung sư tử`);

            } else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
                alert(`Cung xử nữ`);

            } else if ((day >= 23 && month === 9) || (day <= 23 && month === 10)) {
                alert(`Cung thiên bình`);

            } else if ((day >= 24 && month === 10) || (day <= 22 && month === 11)) {
                alert(`Cung bọ cạp`);

            } else if ((day >= 23 && month === 11) || (day <= 21 && month === 12)) {
                alert(`Cung nhân mã`);

            } else if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) {
                alert(`Cung ma kết`);

            } else if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) {
                alert(`Cung bảo bình`);
            } else {
                alert(`Cung song ngư`);
            }
        }
    }

} else {
    alert(`Dữ liệu không hợp lệ!`);
}
