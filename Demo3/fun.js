function tinh() {
    // Lấy 3 ô input
    var a = document.getElementById("a");
    var b = document.getElementById("b");
    var result = document.getElementById("result");

    // Tính tổng hai ô đầu tiên
    var tong = parseInt(a.value) + parseInt(b.value);

    // Gán giá trị vào ô thứ ba
    // Phải kiểm tra tổng hai số này có bị lỗi hay không
    if (!isNaN(tong)) {
        result.value = tong;
    }
}