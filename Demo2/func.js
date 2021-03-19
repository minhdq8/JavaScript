 // kiểu 1
 function tong(x, y) {
     tong = x + y
     return tong
     // console.log(tong)
 }
 // console.log("Kết quả: " + tong(10,4))

 // kiểu 2
 var hieu = function (x, y) {
     return x - y
 }
 // console.log(typeof(hieu))

 // console.log(hieu(10,5))

 function checkNumber(x) {
     if (x == 0) {
         console.log('x là số 0')
     } else if (x > 0) {
         console.log('x là số dương')
     } else {
         console.log('x là số âm')
     }
 }