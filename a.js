function ShowLength( idn, birthday ) {
	var y;
  var chk_digit          = /^\d{8}$/;
  var chk_yyyy           = /^(18|19|20)[0-9]{2}$/;
  var chk_mm             = /^0[1-9]|1[0-2]$/;
  var chk_dd             = /^0[1-9]|[12][0-9]|3[01]$/;
  if(!(chk_digit.test(birthday))){
   	document.getElementById(idn).innerHTML = '8桁数値で入力してください';
  }

  if(birthday.length >= 8){
  if(!chk_dd.test((birthday.substr(6,2)))){
   	document.getElementById(idn).innerHTML = 'YYYYMMDDのDDを正しく入力してください';
	return false;
  }
  }

  if(birthday.length >= 6){
  if(!chk_mm.test((birthday.substr(4,2)))){
   	document.getElementById(idn).innerHTML = 'YYYYMMDDのMMを正しく入力してください';
	return false;
  }
  }

  if(birthday.length >= 4){
  if(!chk_yyyy.test((birthday.substr(0,4)))){
   	document.getElementById(idn).innerHTML = 'YYYYMMDDのYYYYを正しく入力してください';
	return false;
  }else{
		y = parseInt(birthday.substr(0,4));
		var s;
		if (y > 1988) { 
		    s = "平成"+(y-1988)+"年";
		} else if (y > 1925) {
		    s = "昭和"+(y-1925)+"年";
		} else if (y > 1911) {
		    s = "大正"+(y-1911)+"年";
		} else if (y > 1867) {
		    s = "明治"+(y-1867)+"年";
		}
   	document.getElementById(idn).innerHTML = s ;
	return false;
  }
  }
}
