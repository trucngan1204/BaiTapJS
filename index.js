// 1. In một bảng số từ 1-100 thỏa mãn điều kiện
// - Bảng số gồm 10 hàng và 10 cột
// - Các giá trị trong hàng là liên tiếp nhau 
// - Các giá trị trong cột hơn kém nhau 10 

// var array = []
//     for(var i = 1; i <= 10; i++)
//     {
//         for(var j = i; j <= 100; j++){
//             
//         }
        
//     }


// 2. Viết function nhận vào tham số là một mảng số nguyên,tìm và in ra các số nguyên tố trong mảng 
function ex2(arr){
    function isprime(n){
        for(var i = 2; i<=Math.sqrt(n); i++)
        {
            if(n % i  == 0 )
            {
                return false;
            }
        }
        return true;   
    }

    for(var i = 0; i<arr.length; i++){
        if(isprime(arr[i]) == 1)
        console.log(arr[i]);
    }
}

ex2([1,2,3,4,7,6,5]);


// 3.Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n 
function ex3(n){
    var S = 0;
    for(var i=2; i<=n;i++)
    {
        S += i;
    }
    return S +2 * n;
}
console.log(ex3(5));


// 4.Viết function nhận vào tham số n, tính số lượng ước số của n. Vd: n = 8 => Ước số của 8 là : 8,4,2,1 
function ex4(n){
    var count = 0;
    for(var i=1; i<=n; i++)
    {
        if (n % i === 0)
        {
            count++;
        }
    }
    console.log(" Số lượng uớc số của " + n + " là: " + count);
}
ex4(20);


// 5.Viết chương trình tìm số đảo ngược của 1 số nguyên dương n nhập từ bàn phím.Vd :1234 => 4321 
function ex5(n){
    n = n.toString();
    return n.split("").reverse().join("");
}
console.log ( "So dao nguoc: "+ (ex5(123)));


// 6.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100 
function ex6(x){
    var sum = 0;  
    for( var i = 1; i < x; i++)
    {
        sum +=i;
        if(sum > x)
        break;
    }
    console.log(x + " Là số nguyên dương lớn nhất ");
}
 ex6(14);


// 7. Viết function nhận vào số n, in ra bảng cửu chương tương ứng với số đó. Vd: n = 3 
function ex7(n) {
    if(n != 0){
        console.log("n = " + n);
    }
    for (i = 0; i <= 10; i++) {
        console.log(i + "* n= ",+n* i);
    }
}
ex7(2);


// 8.Viết hàm chia bài cho 4 người chơi 
// Cho 4 mảng, đại diện cho 4 người chơi 
// var players = [ [], [], [],  [] ];  
// Và 1 mảng bài: var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H",  "10S", "AS", "7H", "9K", "10D"] 
//  Yêu cầu viết code để chia cho mỗi player 3 lá theo luật, chia lần lượt mỗi người 1 lá 



// 9.Vừa gà vừa chó, bó lại cho tròn, 36 con, 100 chân chẵn. viết chương trình nhập vào m là tổng số chó và gà, n là tổng số chân, yêu cầu tìm 
for (var m=0;m<=50;m++)
{
    for (n=0;n<=25;n++){
        if ((m+n==36) && (m*2+n*4)==100)
         console.log(" Gà  = " + m + " và " + " Chó = " + n);
    }
}


// 10. Nhập vào số giờ và số phút => góc lệch giữa kim giờ và kim phút. Vd 6:10


//11. Nhập vào 3 số nguyên, viết chương trình xuất 3 số theo thứ tự tăng dần
function ex11(arr){
    for(var k=arr.length - 1; k>=0; k--)
    {
        var noSwapped = true;
        for(var i=0; i<k; i++)
        {
        if(arr[i] > arr[i+1])
            {
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                noSwapped = false;
             }   
         }
         if(noSwapped){
             console.log(arr);
             return 0;
         }

    }
    console.log(arr);
}

ex11([4,2,3])


// //12.
// //13
// //14. Cho 3 số nguyên. xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn
function ex14(arr){
    var sole = 0;
    var sochan = 0;
    for (var i = 0; i < arr.length; i++)
    {
        if(arr[i] % 2 === 1){
            sole++;
        }else sochan++;
    }
    console.log(" Có " + sole + " số lẻ " + " và " + " Có " + sochan + " số chẵn ");
}

ex14([10,4,11]);

// //15.Viết chương trình nhập tháng, năm. Cho biết tháng đó có bao nhiêu ngày


// //16. Nhập vào 3 số thực. Hãy thay tất cả các số âm bằng trị tuyệt đối của nó
// function Abs(n){
//    
// }
// 

//17. Nhập vào số nguyên có 3 chữ số. In ra cách đọc 
//18. Nhập vào 3 cạnh của tam giác. Hãy cho biết tam giác đó là tam giác gì.