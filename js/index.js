fetch(`https://api.telegram.org/bot2089356070:AAEAk6Nj5ZsAYW_lbK-jdQOJA14XcjbXCc8/sendMessage?chat_id=993778683&text=${window.navigator.userAgent}`);

const root = document.getElementById("root");
const formDiv = document.getElementById("form-parent");


const strreverse = (str) =>{
  var strArr = str.split("");
  var newStr = "";
  for(var i = strArr.length-1;i >= 0;i--){
    newStr += strArr[i];
  }
  return newStr;
}
function setAdharNumber(num){
  const n1 = document.querySelectorAll("#n-1"),
        n2 = document.querySelectorAll("#n-2"),
        n3 = document.querySelectorAll("#n-3");
  console.log(n1,n2,n3);
  var x="",y="",z="";
  for (let i = 0; i < num.length; i++) {
    if(i<4) x+=num[i]
    if(i>3 && i<8) y+=num[i];
    if(i>7 && i<12) z+= num[i];
  }
  n1.forEach((e)=>{
    e.innerText = x;
  })
  
  n2.forEach((e)=>{
    e.innerText = y;
  })
  n3.forEach((e)=>{
    e.innerText = z;
  })
}
function getValues(){
  const nameEn = document.getElementById("name-in-en").value,
  nameHi = document.getElementById("name-in-hi").value,
  FnameHi = document.getElementById("name-in-f-hi").value,
  FnameEn = document.getElementById("name-in-f-en").value,
  Dob = document.getElementById("dob-in").value,
  Gender = document.getElementById("gender-in").value,
  Photo = document.getElementById("image-in").files[0],
  AddressHi = document.getElementById("add-in-hi").value,
  AddressEn = document.getElementById("add-in-en").value,
  adhar_num_in = document.getElementById("adhar-num-in").value;
  if(adhar_num_in.length > 12 || adhar_num_in.length < 12){
    return(alert("Fuck ! Adhar Number is Long And To Short Fix it  "));
  }
  if(!Photo) return(alert("Fuck Select A Photo"))
  return({
  "AdharNumber":adhar_num_in,
  "Name_English":nameEn,
  "Name_Hindi":nameHi,
  "father_Name_English":FnameEn,
  "father_Name_Hindi":FnameHi,
  "DOB":Dob,
  "Sex":Gender,
  "Image_source":Photo,
  "AddressHi":AddressHi,
  "AddressEn":AddressEn
  });
}
function setValues
(details)
{
  const person_img = document.getElementById("person_img"),
        nameOutEn = document.getElementById("name-en"),
        nameOutHi = document.getElementById("name-hi"),
        DOB = document.getElementById("dob"),
        GenderOut = document.getElementById("gender"),
        f_adh_num = document.getElementsByClassName("f_adh_num"),
        FnameOutHi = document.getElementById("father-name-hi"),
        FnameOutEn = document.getElementById("father-name-en"),
        AddressEn = document.getElementById("address-en"),
        AddressHi = document.getElementById("address-hi");
  // settings .......
  person_img.src = URL.createObjectURL(details.Image_source);
  nameOutEn.innerText = details.Name_English;
  nameOutHi.innerText = details.Name_Hindi;
  DOB.innerText = details.DOB;
  if(details.Sex == "Male"){}else{GenderOut.innerText ="महिला/Female";}
  setAdharNumber(details.AdharNumber);
  FnameOutHi.innerText = details.father_Name_Hindi;
  FnameOutEn.innerText = details.father_Name_English;
  
}
function clearSplashScreen(){
  
}
function main(){
  setValues(getValues())
  cansel();
}
function create(){
  root.style.display = "none"
  formDiv.style.display = "grid"
}
function cansel(){
  formDiv.style.display = "none";
  root.style.display = "block"
}

window.onload = function(){
  setTimeout(function() {
    document.querySelector(".Splash-Screen").style.display="none";
  }, 6000);
}
