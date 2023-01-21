function validate(){
    validateForm();
}

let clickcount = 0;
let keypress = 0;
let charcount = 0;
let seconds = 0;
let minutes = 0;


function incrementClicks() {
    clickcount++;
    document.getElementById("clickCounter").innerText = "Number of mouse clicks: " + clickcount;
}

function incrementKeys() {
    keypress++;
    document.getElementById("keyCounter").innerText = "Total key presses: " + keypress;
}

function incrementCharacters() {
    charcount++
    document.getElementById("typedCounter").innerText = "Total number of characters typed: " + charcount;
}

function timer() {
    if(seconds == 59) {
        seconds = 0;
        minutes++;
    }
    else {
        seconds++;
    }
    document.getElementById("timeSpent").innerText = "Total time spent: " + minutes+ " minutes and " + seconds + " seconds";
}

function makeVisible() {
    document.getElementById("userData").style.visibility = "visible"
}


setInterval(timer, 1000)
document.addEventListener("click", incrementClicks)
document.addEventListener("keydown", incrementKeys)
document.addEventListener('input', incrementCharacters)

function validateForm(){
    let user = validateID();
    let psw = validatePassword();
    let name = validateName();
    let ctr = validateCountry();
    let sex = validateSex();
    let lang = validateLanguage();
    let zip = validateZIP();
    let email = validateEmail();
    let check = validateCheckbox();
    if(user && psw && name && ctr && sex && lang && zip && email && check){
        alertBox();
        makeVisible();
    }
}

function alertBox(){
    let text = "Your details:\n" +
        + "ID: " + document.getElementById("id").value + "\n" 
        +"Name: " + document.getElementById("name").value + "\n"
        +"Country: " + document.getElementById("country").value + "\n"
        +"Sex: " + document.getElementById("sex").value + "\n"
        +"Language: " + document.getElementById("lang").value + "\n"
        +"Address: " + document.getElementById("address").value + "\n"
        +"ZIP: " + document.getElementById("zip").value + "\n"
        +"Email: " + document.getElementById("email").value + "\n"
        +"Bio: " + document.getElementById("bio").value + "\n";
        let buy = document.getElementById("buy").checked
        let sell = document.getElementById("sell").checked
        if(buy && sell){
            text += "You are both a buyer and a seller"
        }
        else if(buy) text += "You are a buyer"
        else text += "You are a seller"
        alert(text)
}

function validateCheckbox(){
    let buy = document.getElementById("buy").checked
    let sell = document.getElementById("sell").checked
    let text
    if(buy || sell){
        text = "Valid choice"
        document.getElementById("boxMessage").classList.add("ValidMessage")
        document.getElementById("boxMessage").classList.remove("InvalidMessage")
    }
    else{
        text = "Select at least one option"
        document.getElementById("boxMessage").classList.remove("ValidMessage")
        document.getElementById("boxMessage").classList.add("InvalidMessage")
    }
    document.getElementById("boxMessage").innerHTML = text
    if(buy || sell) return true
    return false
}   

function validateEmail(){
    let email = document.getElementById("email").value
    let text
    let ok = true
    if(email.length < 3) ok = false
    else if(email.charAt(0) == "@" || email.charAt(email.length-1) == "@") ok = false
    else{
        let n = 0
        for(i=0; i<email.length;i++){
            let char = email.charAt(i)
            if(char == ' '){
                ok = false
                break
            }
            if(char == "@") n++;
            if(n > 1){
                ok = false
                break
            }   
        }
        if(n != 1) ok = false
    }
    if(ok){
        text = "Valid email"
        document.getElementById("emailMessage").classList.add("ValidMessage")
        document.getElementById("emailMessage").classList.remove("InvalidMessage")
    }
    else{
        text = "Please enter a valid email"
        document.getElementById("emailMessage").classList.remove("ValidMessage")
        document.getElementById("emailMessage").classList.add("InvalidMessage")
    }
    document.getElementById("emailMessage").innerHTML = text
    return ok

}

function validateZIP(){
    let zip = document.getElementById("zip").value
    let ok = true
    if(zip.length != 6) ok = false
    else{
        for(i=0;i<6;i++){
            let char = zip.charAt(i)
            if(i<4){
                if(isNaN(char)){
                    ok = false;
                    break;
                }
            }
            else{
                if(!(char <= "Z" && char >= "A")){
                    ok = false;
                    break;
                }
            }
        }
    }
    let text 
    if(ok){
        text = "Valid zip"
        document.getElementById("zipMessage").classList.add("ValidMessage")
        document.getElementById("zipMessage").classList.remove("InvalidMessage")
    }
    else{
        text = "Please enter a valid Netherlands ZIP Code"
        document.getElementById("zipMessage").classList.remove("ValidMessage")
        document.getElementById("zipMessage").classList.add("InvalidMessage")
    }
    document.getElementById("zipMessage").innerHTML = text
    return ok
}

function validateSex(){
    let text
    let sex = document.getElementById("sex").value
    let ok = true
    if(sex === "") ok = false
    if(ok){
        text = "Valid sex"
        document.getElementById("sexMessage").classList.remove("InvalidMessage")
        document.getElementById("sexMessage").classList.add("ValidMessage")
    }
    else{
        text = "Sex is a required field"
        document.getElementById("sexMessage").classList.add("InvalidMessage")
        document.getElementById("sexMessage").classList.remove("ValidMessage")
    }
    document.getElementById("sexMessage").innerHTML = text
    return ok
}
function validateLanguage(){
    let text
    let language = document.getElementById("lang").value
    let ok = true
    if(language === "") ok = false
    if(ok){
        text = "Valid language"
        document.getElementById("langMessage").classList.remove("InvalidMessage")
        document.getElementById("langMessage").classList.add("ValidMessage")
    }
    else{
        text = "Language is a required field"
        document.getElementById("langMessage").classList.add("InvalidMessage")
        document.getElementById("langMessage").classList.remove("ValidMessage")
    }
    document.getElementById("langMessage").innerHTML = text
    return ok
}
function validateCountry(){
    let text
    let country = document.getElementById("country").value
    let ok = true
    if(country === "") ok = false
    if(ok){
        text = "Valid country"
        document.getElementById("countryMessage").classList.remove("InvalidMessage")
        document.getElementById("countryMessage").classList.add("ValidMessage")
    }
    else{
        text = "Country is a required field"
        document.getElementById("countryMessage").classList.add("InvalidMessage")
        document.getElementById("countryMessage").classList.remove("ValidMessage")
    }
    document.getElementById("countryMessage").innerHTML = text
    return ok

}

function validateName(){
    let text
    let name = document.getElementById("name").value
    let ok = true
    for(i = 0; i<name.length; i++){
        let char = name.charAt(i)
        if(char == " ") continue
        if(!(char>="a" && char<="z") && !(char <= "Z" && char >= "A")){
            ok = false
            break;
        }
    }
    if(name === "") ok = false
    if(ok){
        text = "Valid name"
        document.getElementById("nameMessage").classList.remove("InvalidMessage")
        document.getElementById("nameMessage").classList.add("ValidMessage")
    }
    else{
        text = "Name must contain the alphabet only"
        document.getElementById("nameMessage").classList.add("InvalidMessage")
        document.getElementById("nameMessage").classList.remove("ValidMessage")
    }
    document.getElementById("nameMessage").innerHTML = text
    return ok

}

function pswContains(psw){
    let upper = false;
    let lower = false;
    let special = false;
    let number = false;
    for(i=0; i<psw.length;i++){
        let character = psw.charAt(i);
        if(character>="A" && character<="Z") upper = true;
        if(character>="a" && character<="z") lower = true;
        if(character>="0" && character <="9") number = true;
        if(character >= "!" && character <= "/") special = true;
    }
    if(upper && lower && special && number) return false
    return true
}


function validatePassword(){
    let psw = document.getElementById("psw").value;
    let text;
    if(psw.length < 12
    || pswContains(psw)){
        text = "Password must have at least 12 characters long, but 14 or more is better. A combination of uppercase letters, lowercase letters, numbers, and symbols"
        document.getElementById("pswMessage").classList.remove("ValidMessage")
        document.getElementById("pswMessage").classList.remove("MediumMessage")
        document.getElementById("pswMessage").classList.add("InvalidMessage")
    }
    else if (psw.length < 14){
        text = "Valid password, but 14 or more chracters are better"
        document.getElementById("pswMessage").classList.remove("InvalidMessage")
        document.getElementById("pswMessage").classList.remove("ValidMessage")
        document.getElementById("pswMessage").classList.add("MediumMessage")
    }
    else{
        text = "Valid password"
        document.getElementById("pswMessage").classList.remove("InvalidMessage")
        document.getElementById("pswMessage").classList.remove("MediumMessage")
        document.getElementById("pswMessage").classList.add("ValidMessage")
    }
    document.getElementById("pswMessage").innerHTML = text;
    if(text == "Password must have at least 12 characters long, but 14 or more is better. A combination of uppercase letters, lowercase letters, numbers, and symbols") return false
    return true
}

function validateID(){
    let user = document.getElementById("id").value;
    let text;
    if(user === ''
    || user.length < 5 
    || user.length > 12
    || user.charAt(0) != user.charAt(0).toUpperCase()
    || checkLast(user)){
        text = "Username  must be of length 5 to 12, must start with a capital letter and end with a number or special character";
        document.getElementById("idMessage").classList.add("InvalidMessage")
        document.getElementById("idMessage").classList.remove("ValidMessage")
    }
    else{
        text = "Valid Username";
        document.getElementById("idMessage").classList.add("ValidMessage")
        document.getElementById("idMessage").classList.remove("InvalidMessage")
    }
    document.getElementById("idMessage").innerHTML = text;
    if(text == "Valid Username") return true
    else return false
}

function checkLast(str){
    let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if(!isNaN(str.charAt(str.length-1))) return false;
    if(format.test(str.charAt(str.length-1))) return false;
    return true;
}