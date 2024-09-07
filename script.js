// let namebox = document.getElementById('name').value;
// let emailbox = document.getElementById('email');
// let messagebox = document.getElementById('message');

function myfunc() {
    let promp = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    console.log(name);
    if (promp.email == "" && promp.message == "") {
        alert('please fill the  all details?')
    }
    else {
        emailjs.send('service_yyr7t6k', 'template_ehca4x1', promp);
        alert("Email sent")
        name.value = "";
        email.value = "";
        message.value = "";
    }
}
