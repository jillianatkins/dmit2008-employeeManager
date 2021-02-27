/* 
  Signup Service Will Authenticate an username, email and password
  return a true or false response.
  false returns will keep users on the signup page with errors
  true will redirect user to the login page
*/

const fileService = require('./fileService')

exports.authenticate = (data)=>{
    const email = data.newEmail
    const users = fileService.getFileContents('../data/users.json', data);

  const authSignup =  users.reduce((authObj, user)=>{
      // check if the email entered already has an existing user attached to it
     if(user.email === email){
       authObj.validEmail = false;
     }
     return authObj
    }, {validEmail:true})

    // ternary opertoar   ()?true:false
    // if() else
    // truthy falsy
    const auth0 = authSignup.validEmail ? authSignup.validEmail: formatErrors(authSignup);
    // return TRUE if email does not exist, or return error message
    return auth0

    //return authSignup
 } 

 const formatErrors = function(authObj){
   let emailWarning = ""
 
   if(authObj.validEmail === false){ 
       emailWarning= "a user with that email already exists"
    }
 
   return emailWarning
 }