function validateForm() 
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     // Name validation
    if (name.trim() === "") {
        alert("Please enter your name.");
        return false;
    }
     // Email validation
    else if (email.trim() === "" || !emailRegex.test(email)) {
       alert("Please enter a valid email address.");
       return false;
    }
    // Message validation
    else if (message.trim() === "") {
       alert("Please enter your message.");
       return false;
    } 
    else if (message.length < 10) {
       alert("Your message must be at least 10 characters long.");
       return false;
    }
    else
    {
       true;
       alert("Form has been submitted successfully.");
    }
}



    