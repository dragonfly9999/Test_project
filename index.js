// Bài tập in số chẵn và lẻ ra cho người dùng thấy
function cacSoChanLe(){
    // input 
    var soChan = '';
    var soLe = '';
    for(var i = 1; i<100; i++ ){
        // xử lí kết quả cho người dùng
        console.log(i)
        if(i % 2 == 0){
            soChan += i + ' '
        } else{
            soLe += i + ' '
        }
    }
    
    console.log(soChan)
    console.log(soLe)
    document.getElementById('hienSoChan').innerHTML = `Các số chẵn là ${soChan}`
    document.getElementById('hienSoLe').innerHTML = `Các số lẻ là ${soLe}`
}
document.getElementById('inSo').onclick = cacSoChanLe;

//Bài tập tính tổng số nhập vào ô input
function tongSoNhap(){
    // input 
   var soN = document.getElementById('soN').value * 1;
    tongSoN = 0;
    for(n = 1; n <= soN; n++){
        //các bước xử lí tính tổng
        tongSoN += n

    }
    console.log(tongSoN)
    
    
}
document.getElementById('tongSo').onclick = tongSoNhap;


// bài tập đếm có bao nhiêu số chia hết cho 3
// input: giới hạn từ 0 đến 1000
// output: cần lấy ra giá trị (string) là có bao nhiêu số chia hết cho 3
// progress: cần lặp số từ 0 đến 1000 và lấy được bao nhiêu số chia hết cho 3 bằng cách sử dụng vòng lặp for
// input :
function soChiaHetCho3(){
    var chiaHetCho3 = 0;
    for(var soNhay = 0; soNhay <=1000; soNhay++){
        if(soNhay % 3 == 0){
            chiaHetCho3++ 
        }
        
    }
    console.log(chiaHetCho3)
    document.getElementById('hienSoHet3').innerHTML = `Có tổng cộng ${chiaHetCho3} số chia hết cho 3`
}
document.getElementById('nutDem').onclick = soChiaHetCho3;


// tìm số nhỏ nhất
function timSoNhoNhat(){
    var sum = 0;
    for(var number = 1; sum <= 1000; number++){
        sum += number 
    }
    console.log(number - 1)

}
document.getElementById('soNhoNhat').onclick = timSoNhoNhat;
