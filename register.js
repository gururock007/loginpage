document.getElementById("Name").addEventListener("keyup",NameHandler);

function NameHandler(e) {

    if (parseInt(this.value.length) > 1) {
        document.getElementById("xcircle1").style.display = "none";
        document.getElementById("checkcircle1").style.display = "block";
    }
    else {
        document.getElementById("checkcircle1").style.display = "none";
        document.getElementById("xcircle1").style.display = "block";
    }
}

document.getElementById("Email").addEventListener("keyup",emailHand);

function emailHand(e) {

    if (parseInt(this.value.length) > 1) {
        document.getElementById("xcircle2").style.display = "none";
        document.getElementById("checkcircle2").style.display = "block";
    } else {
        document.getElementById("checkcircle2").style.display = "none";
        document.getElementById("xcircle2").style.display = "block";
    }
}

document.getElementById("UserName").addEventListener("keyup",UserNameHandler);

function UserNameHandler(e) {

    if (parseInt(this.value.length) > 1) {
        document.getElementById("xcircle3").style.display = "none";
        document.getElementById("checkcircle3").style.display = "block";
    } else {
        document.getElementById("checkcircle3").style.display = "none";
        document.getElementById("xcircle3").style.display = "block";
    }
}
document.getElementById("Password").addEventListener("keyup",PasswordHandler);

function PasswordHandler(e) {

    if (parseInt(this.value.length) >= 8) {
        document.getElementById("xcircle4").style.display = "none";
        document.getElementById("checkcircle4").style.display = "block";
    } else {
        document.getElementById("checkcircle4").style.display = "none";
        document.getElementById("xcircle4").style.display = "block";
    }
}

document.getElementById("Password").addEventListener("keyup",submit);
document.getElementById("Email").addEventListener("keyup",submit);
document.getElementById("Name").addEventListener("keyup",submit);
document.getElementById("UserName").addEventListener("keyup",submit);

function submit(){
    if(checkcircle1.style.display == "block" && checkcircle2.style.display == "block" && checkcircle3.style.display == "block"&& checkcircle4.style.display == "block"){
        document.getElementById("singnup").disabled = false;
    }else{
        document.getElementById("singnup").disabled = true;
    }
}
