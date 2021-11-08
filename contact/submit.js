function submitForm() {
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  message = document.getElementById("message").value;

  if (firstName == "") {
    document.getElementById("firstName").style = "border: 1px solid red;";
    document.getElementById("firstNameSpan").innerHTML = "*Required";
  } else {
    document.getElementById("firstName").style = "border: 1px solid #ccc;";
    document.getElementById("firstNameSpan").innerHTML = "*";
  }

  if (lastName == "") {
    document.getElementById("lastName").style = "border: 1px solid red;";
    document.getElementById("lastNameSpan").innerHTML = "*Required";
  } else {
    document.getElementById("lastName").style = "border: 1px solid #ccc;";
    document.getElementById("lastNameSpan").innerHTML = "*";
  }

  if (email == "") {
    document.getElementById("email").style = "border: 1px solid red;";
    document.getElementById("emailSpan").innerHTML = "*Required";
  } else {
    document.getElementById("email").style = "border: 1px solid #ccc;";
    document.getElementById("emailSpan").innerHTML = "*";
  }

  if (phone == "") {
    document.getElementById("phone").style = "border: 1px solid red;";
    document.getElementById("phoneSpan").innerHTML = "*Required";
  } else {
    document.getElementById("phone").style = "border: 1px solid #ccc;";
    document.getElementById("phoneSpan").innerHTML = "*";
  }

  if (message == "") {
    document.getElementById("message").style = "border: 1px solid red;";
    document.getElementById("messageSpan").innerHTML = "*Required";
  } else {
    document.getElementById("message").style = "border: 1px solid #ccc;";
    document.getElementById("messageSpan").innerHTML = "*";
  }

  if (
    firstName != "" &&
    lastName != "" &&
    email != "" &&
    phone != "" &&
    message != ""
  ) {
    console.log(
      `{firstName: ${firstName}, lastName: ${lastName}, email: ${email}, phone: ${phone}, message: ${message}}`
    );

    mailToString = `mailto:estellespa.oakville@gmail.com?subject=Estelle Spa Contact&body=Hi, This is${firstName} ${lastName}. %0D%0A${message} %0D%0A%0D%0AReply back to: ${email}`;

    var mail = document.createElement("a");

    mail.href = mailToString;

    mail.click();

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";

    document.getElementById("firstName").style = "border: 1px solid #ccc;";
    document.getElementById("lastName").style = "border: 1px solid #ccc;";
    document.getElementById("email").style = "border: 1px solid #ccc;";
    document.getElementById("phone").style = "border: 1px solid #ccc;";
    document.getElementById("message").style = "border: 1px solid #ccc;";
  }
}
