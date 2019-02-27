document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });


//get todays date and break into d-m-y
var todaynow = new Date();
todaynow.setDate(todaynow.getDate());
var dn = todaynow.getDate();
var mn = todaynow.getMonth() + 1;
var yn = todaynow.getFullYear();
//get todays date and plus 7 days also breaking into d-m-y	
var today = new Date();
today.setDate(today.getDate() + 7);
var d = today.getDate();
var m = today.getMonth() +1;
var y = today.getFullYear();

if (m < 10) {
    var ms = "0" + m;
    }
    else
    var ms = m;

if (d< 10){
    var ds = "0" + d;
    }
    else
    var ds = d; 
//if day less than 10 add 0 before  REMEMEBER single months require the 0 to be added - 1- and above do NOT!!
var dateString = "calendar_" + y +"-" + ms +"-" + ds + "_day";

//if the month of +7 days is the same as todays month do this   
// if (mn == m) {
//     //window.alert (dateString);
//     setTimeout(function(){
//         document.getElementById(dateString).click();
//         }, 6000);
        
//         setTimeout(function(){
//         document.getElementById("modalConfirmationSubmit").click();
//         }, 10000);
// }

// //if the month of +7 days is in the next month do this              	
// else {
    
//     setTimeout(function(){
//         document.getElementById("calendar_nav-next").click();
//         }, 6000);

//     setTimeout(function(){
        
//         document.getElementById(dateString).click();
//         //window.alert (mn);
//        }, 9000);
        
//     setTimeout(function(){
//         document.getElementById("modalConfirmationSubmit").click();
//         }, 11000);

// }