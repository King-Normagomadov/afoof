function sendEmail(){ 
    document.getElementById("sub").innerText="Sending...";
    var params = {
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };

    
const serviceID= "service_vdd2nl8";
const templateID= "template_xd4ubmg";

emailjs.send(serviceID,templateID,params)
.then((res)=>{
    document.getElementById("sub").innerText="Send Message";
    alert('Message Sent.')
    })
    .catch(console.log('Email is Sending...'));
}

