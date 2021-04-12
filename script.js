// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';

var uprCase = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';

var numbr = "0,1,2,3,4,5,6,7,8,9";

var spcl = "`,!,@,#,$,%,^,&,*";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Make code work

function generatePassword(){


 generatePassword =  prompt ("What length do you want on your password Must be between 8-128")
}

if (generatePassword  >=8 || generatePassword <= 128) {
;
} else if (generatePassword >= 8 || generatePassword <= 128){
  generatePassword = prompt ("Choose between 8 and 128")
}


// options for password
