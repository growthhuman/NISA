 function check_birthday() {
  var birthday           = document.getElementById("birthday").value;
  var chk_digit          = /^\d{8}$/;
  var chk_yyyy           = /^(19|20)[0-9]{2}$/;
  var chk_mm             = /^0[1-9]|1[0-2]$/;
  var chk_dd             = /^0[1-9]|[12][0-9]|3[01]$/;
console.log(chk_digit.test(birthday));
  if(!(chk_digit.test(birthday))){
        window.alert('8桁数値で入力してください');
  return false;
  }
  if(!chk_yyyy.test((birthday.substr(0,4)))){
        window.alert('YYYYMMDDのYYYYを正しく入力してください');
  return false;
  }
  if(!chk_mm.test((birthday.substr(4,2)))){
        window.alert('YYYYMMDDのMMを正しく入力してください');
  return false;
  }
  if(!chk_dd.test((birthday.substr(6,2)))){
        window.alert('YYYYMMDDのDDを正しく入力してください');
  return false;
  }
 }
