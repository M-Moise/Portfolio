const form= document.getElementById("contactForm");
form.addEventListener("submit", function(event) {

    event.preventDefault();
    const emaill= document.getElementById("email").value;
    const phonee= document.getElementById("phone").value;
    const messagee= document.getElementById("message").value;

    if (!emaill || !phonee || !messagee){
        alert('Please fill out the missing the fields');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address."); 
    return;
  }
  const customerData = {
    email: emaill,
    phone: phonee,
    message: messagee,
  };
  console.log("costumer  submitted:", customerData);
  alert("Thanks! Your message has been received.");
  form.reset(); // clears the form fields
});

