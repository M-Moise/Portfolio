const form= document.getElementById("contactForm");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    const email= document.getMyElementId("email").value;
    const phone= document.getMyElementId("phone").value;
    const message= document.getMyElementId("message").value;

    if(email !=="" || phone !== "" && message===""){
        alert('Please fill the message area and one of the email or phone.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address."); 
    return;
  }
  const customerData = {
    email: email,
    phone: phone,
    message: message,
  };
  console.log("costumer  submitted:", customerData);
  alert("Thanks! Your message has been received.");
  form.reset(); // clears the form fields
});
