window.onload = function(){
  var d = new Date ();
  var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var month = d.getMonth();     //0-11
  var year = d.getFullYear();    //2018
  var first_date = month_name[month] + " " + 1 + " " + year;
  //February 1 2018
  var tmp = new Date(first_date). toDateString();
  //Fri Feb 01 2018 ...
  var first_day = tmp.substring(0, 3);    //Fri
  var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var day_no = day_name.index0f(first_day);  //1
}
