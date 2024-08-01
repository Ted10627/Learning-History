
var time = "0617";
var c_name = "王蕭明";
var c_age = 26;
var en_sm_text = "true";
var c_is_man = true;
document.write(time);
document.write("</br>");
document.write("姓名:" + c_name  + "</br>" + "年齡:" + c_age + "</br>");
// .length 的作用是將指定的變數裡的字串數用數字呈現
document.write(c_name + "-的字串長度是:" + c_name.length + "</br>");
// .toUpperCase() 轉換英文字母為大寫 .toLowerCase() 轉換英文字母為小寫
document.write(en_sm_text.toUpperCase() + "</br>");
// .charAt(0) 回傳指定字串
document.write(".charAt指定:0</br>"+ "字串為:" + en_sm_text.charAt(0) + "</br>" +
".charAt指定:1</br>"+ "字串為:" + en_sm_text.charAt(1) + "</br>" +
".charAt指定:2</br>"+ "字串為:" + en_sm_text.charAt(2) + "</br>" +
".charAt指定:3</br>"+ "字串為:" + en_sm_text.charAt(3) + "</br>")
// .indexOF() 回傳指定字串首個出現的位置
document.write(".indexOF()找尋u字母在第:" + en_sm_text.indexOf("u") + "位</br>");

// 數字應用
var test_num_0 = -9;
var test_num_1 = 9.2;
// Math.abs()取絕對值
document.write("絕對值:" + Math.abs(test_num_0) + "</br>");
// Math.max()多數取最大數 Math.min()最小數
document.write("最大值:" + Math.max(test_num_0,test_num_1) + "</br>");
// Math.round()四捨五入取整數
document.write("四捨五入:" + Math.round(test_num_1) + "</br>");
// Math.pow()平方
document.write(test_num_1 + "的二次方為:" + Math.pow(test_num_0,2) + "</br>");
// Math.sqrt()開根號
document.write(test_num_1 + "開根號為:" + Math.sqrt(test_num_1) + "</br>");
// Math.random()回傳隨機數預設為0~1的值，曾值需要用乘算方式增加，例如...()*10為0~10。
document.write("0~10隨機數回傳:" + Math.random() * 10 + "</br>");
document.write("整數0~10隨機數回傳:" + Math.round(Math.random() * 10) + "</br>");