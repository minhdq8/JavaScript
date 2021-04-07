function hien_thi(visible){
		var phivc = document.getElementById("phi_vc");
		phivc.style.display = visible ? "" : "none";
}


function kiem_tra(){
var kt1,kt2,kt3,kt4,kt5,kt6,kt7,kt8;

	var ho = document.getElementById("ho");
	if (ho.value.length == 0) {
		alert("Không để trống họ!");
		kt1 = false;
	}

	var ten = document.getElementById("ten");
	if (ten.value.length == 0) {
		alert("Không để trống tên!");
		kt2 = false;
	}

	var ngay = document.getElementById('ngay');
    if (ngay.value.length == 0) {
    	alert('Chưa chọn ngày sinh!');
    	kt5 = false;
    }else{
    	kt5 = true;
    }


    var thang = document.getElementById('thang');
    if (thang.value.length == 0) {
    	alert('Chưa chọn tháng sinh!');
    	kt6 = false;
    }else{
    	kt6 = true;
    }

    var nam = document.getElementById('nam');
    if (nam.value.length == 0) {
    	alert('Chưa chọn năm sinh!');
    	kt7 = false;
    }else{
    	kt7 = true;
    }

    var gt = document.getElementsByName("gioitinh");
	if(gt[0].checked || gt[1].checked){
		kt4 = true;
	}else{
		alert("Chưa chọn giới tính!")
		kt4 = false;
	}

	var sdt = document.getElementById("dienthoai");
	if (sdt.value.length == 0 || sdt.value.length >= 12 || isNaN(sdt.value) == true) {
		alert("Vui lòng nhập đúng số điện thoại!");
		kt3 = false;
	}

    var st = document.getElementsByName("sothich");
    if(st[0].checked && st[1].checked || st[4].checked && st[5].checked && st[6].checked){
        kt8 =  true;
    }else{
        alert("Chưa Check nhiều sở thích!");
        kt8 = false;
    }

}