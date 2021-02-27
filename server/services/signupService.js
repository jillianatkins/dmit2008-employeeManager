/* 
  Signup Service Will Authenticate an username, email and password
  return a true or false response.
  false returns will keep users on the signup page with errors
  true will redirect user to the login page
*/

const fileService = require('./fileService')

exports.authenticate = (data)=>{
 
    const {username, email, password} = {...data}
    // trim leading/trailing whitespace
    // username = username.trim();
    // email = email.trim();
    // password = password.trim();

    const users = fileService.getFileContents('../data/users.json', data);
    // flush the authentication
    
  const authSignup =  users.reduce((authObj, user)=>{
      // check if the email entered already has an existing user attached to it
     if(user.email === email){
       authObj.validEmail = false;
     }
          
     return authObj
 
    }, {validEmail:false, user:null})
 
     // ternary opertoar   ()?true:false
     // if() else
     // truthy falsy
    // const auth0 = authSignup.user.email ? {user:authUser.user}: formatErrors(authUser);
    // return auth0
 
 }
  
 const formatErrors = function(authObj){
   let emailWarning = ""
 
   if(user.validEmail === false){ emailWarning= `a user with that email already exists`}
 
   return emailWarning
 }