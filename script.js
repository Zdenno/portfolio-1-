function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_loz7sbk", "template_z13chvk",parms).then(alert("Email Sent!"));
}