function validEmail(str) {
  //your JS code here.
	
	mailformat= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
    
    // # Using re.match() to check if the provided email matches the pattern
if(str.match(mailformat))
{
   return true;
}
else
{
   return false;
}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
