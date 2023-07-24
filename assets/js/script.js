// Main function to validate the form

function validate(e) {
    e.preventDefault();

    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;

    var lang = [];
    var checkOpt = document.getElementsByName('lang[]');
    for(var i=0; i<checkOpt.length; i++) {
        if(checkOpt[i].checked) {
            lang.push(checkOpt[i].value);
        }
    }

    var nameErr = emailErr = mobileErr = cityErr = genderErr = langErr = true;

    /* name validation */
    if(name === "") {
        printError("nameErr", "Name Field cannot be empty");
    } else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please Enter Valid Name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    /* email validation */
    if(email === "") {
        printError("emailErr", "Email Field cannot be empty");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Invalid Email Id");
        } else {
            printError("emailErr","");
            emailErr = false;
        }
    }

    /* mobile validation */
    if(mobile === "") {
        printError("mobileErr", "Mobile Field cannot be empty");
    } else {
        let regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Invalid Mobile Number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    /* city validation */
    if(city === "null") {
        printError("cityErr", "Select city name");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    /* gender validation */
    if(gender === "") {
        printError("genderErr", "Select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    /* language validation */
    if(lang.length === 0) {
        printError("langErr", "Select language");
    } else {
        printError("langErr", "");
        langErr = false;
    }
}

/* Defining the function to display error message */
function printError(eleId, msg) {
    document.getElementById(eleId).innerText = msg;
}