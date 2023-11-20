//your JS code here. If required.
// function popup()
// {
//      alert("First Name:Akhilesh");
// 	alert("Last Name:Yadav") ;
// 	 alert("Phone Number:6283724855");
// 	alert("Email ID:akhiyadav74085@gmail.com");
// }
  function submitForm() {
	   var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var email = document.getElementById("email").value;
     // const firstName ="Akhilesh";
     // const lastName = "Yadav";
     // const phoneNumber =6283724855;
     // const email = "akhiyadav74085@gmail.com";

     const result =( "First Name: " + firstName + "\nLast Name: " + lastName + "\nPhone Number: " + phoneNumber + "\nEmail ID: " + email);

      alert(result);
  }
