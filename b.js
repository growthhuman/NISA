function calc_nenreihou_birthday() {
    var birthday           = document.getElementById("birthday").value;
    console.log(birthday);
    myYear  = birthday.substr(0,4);
   myMonth = birthday.substr(4,2);
    myDate  = birthday.substr(6,2);
    console.log(myDate);
    var date = new Date(myYear+'/'+myMonth+'/'+myDate);
    // 前日を求める
    date.setDate(date.getDate() - 1);
   myYear_nenreihou  = date.getFullYear();
    myMonth_nenreihou = date.getMonth() + 1;
    myDate_nenreihou  = date.getDate();
 
    if ( myMonth_nenreihou < 10 ) {
   　　myMonth_nenreihou = '0' + myMonth_nenreihou;
     }
    if ( myDate_nenreihou < 10 ) {
   　　myDate_nenreihou = '0' + myDate_nenreihou;
    }
    form.birthday_nenreihou.value = myYear_nenreihou+""+myMonth_nenreihou+""+myDate_nenreihou;
 }
