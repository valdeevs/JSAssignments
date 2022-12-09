function Click(){
    alert("Button Clicked");
    var str = document.getElementById("heading3").innerHTML
    alert(str);
    document.getElementById("heading3").innerHTML = "CIS 124 DOM Manipulation";
}

function ShowText(){
    var str1 = document.getElementById("text1").value;
    alert ("value in textbox " + str1);
    var str2 = document.getElementById("text2").value;
    
    if (str1 !== "" & (str1 == str2)){
        alert("username and password match")
    }
    else {
        alert("username and password do not match");
    }
}

function Select(){
    var select = document.getElementById("s1");
    var str = select.options[select.selectedIndex].innerHTML;
    document.getElementById("demos").innerHTML = str;
    alert("selected " + str);
}

function Check(){
    var c1 = document.getElementById("c1");
    var c2 = document.getElementById("c2");
    var c3 = document.getElementById("c3");
    if(c1.checked == true){
        alert("color selected " + c1.value);
    }
    else if(c2.checked == true){
        alert("color checked " + c2.value);
    }
    else if(c3.checked == true){
        alert("color selected " + c3.value);
    }
}

function Toggle(){
    var r1 = document.getElementById("r1");
    var r2 = document.getElementById("r2");

    if (r1.checked == true){
        alert("r1 checked - unchecking" + r1.value);
        r1.checked = true;
        r2.checked = false;
    }
    else {
        r1.checked = false;
        r2.checked = true;
    }
}