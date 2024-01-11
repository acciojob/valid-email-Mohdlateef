function validEmail(str) {
  //your JS code here.
	email_pattern = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    
    // # Using re.match() to check if the provided email matches the pattern
    if re.match(email_pattern, str){
        return True}
    else{
        return False}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
