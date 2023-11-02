import { useEffect, useState } from "react";
import '../App.css'

function FormValidation() {

   const initionval = {
      fname : "",
      email : "",
      number : "",
      password : "",
      cnfPass  : "",
   }
   
   const Error = {
    fnameError : "",
    Emailerror : "",
    PhoneError : "",
    passError : "",
    cnfpassword : "",
   }


   const [details , setDetails] = useState(initionval)
   const [ ErrorDetails, setErrorDetails] = useState(Error)

   const HandleName = (e) =>{
    console.log(e.target.name)
       let val = e.target.name
       setDetails({...details , [e.target.name ]: e.target.value})

       if (details.fname.length < 3){
        addError ("fnameError", "*Name is Too Short")
      }
      else if (details.fname.includes("0") || details.fname.includes("1") || details.fname.includes("2") || details.fname.includes("3") || details.fname.includes("4") || details.fname.includes("5") || details.fname.includes("6") || details.fname.includes("7") || details.fname.includes("8") || details.fname.includes("9")){
          addError("fnameError" , "*Entered Name is not Valid")
      }
      else {
        RemoveError ("fnameError" , "")
     } 
       console.log(details)
   }



   const HandleEmail  = (e) =>{
    setDetails( 
    {...details , [e.target.name ]: e.target.value}
    )

    if (!details.email.includes("@")){
        addError("Emailerror" , "*Email must include '@' symbol")
    }
    else {
       RemoveError("Emailerror")
    }

    if (details.email.endsWith(".")  || details.email.endsWith("@")){
        addError("Emailerror" , "*Email must not ends with '.' or '@' " )
    }
    console.log(details)
   }


   const HandlePhone  = (e) =>{
    setDetails( 
    {...details , [e.target.name ]: e.target.value}
    )

      if (details.number.length != 10){
        addError("PhoneError" , "*Number must be of 10 digits")
  }
  
  else {
     RemoveError("PhoneError")
  }
}

   const HandlePassword  = (e) =>{
    setDetails( 
    {...details , [e.target.name ]: e.target.value}
    )
  
    if (details.password.length < 6){
        addError("passError" , "*Password must be of 6 characters")
    }
    else {
        RemoveError("passError")
    }
    console.log(details)
    
}
   const HandleCnfPassword  = (e) =>{
    setDetails( 
    {...details , [e.target.name ]: e.target.value}
    )
  
    if (details.cnfPass !== details.password){
        addError("cnfpassword" , "*Confirm Password Should Match with above password")
    }
    else {
      RemoveError("cnfpassword")
    }
    // console.log(ErrorDetails)
    console.log(details)
    
}


 const addError = (id , error) =>{
      console.log(id)
     
      console.log("Setted the Value")
      setErrorDetails ({...ErrorDetails , [id] : error})

 }

 const RemoveError = (id) =>{
   
      setErrorDetails ({...ErrorDetails , [id] : ""})

      
 }
  const CheckValidation = (e) => 
  {
     
    e.preventDefault()
    console.log("Check It's working or not")

    //  CHECK FOR NAME  :-


    console.log(details.fname.length)
    // if (details.fname.length == 0){
    //     addError ("fnameError", "*Name Field can not be blank")
    // }
    
//      if (details.fname.length < 3){
//       addError ("fnameError", "*Name is Too Short")
//     }
//     else if (details.fname.includes("0") || details.fname.includes("1") || details.fname.includes("2") || details.fname.includes("3") || details.fname.includes("4") || details.fname.includes("5") || details.fname.includes("6") || details.fname.includes("7") || details.fname.includes("8") || details.fname.includes("9")){
//         addError("fnameError" , "*Entered Name is not Valid")
//     }
//     else {
//       RemoveError ("fnameError" , "")
//    } 



     //  CHECK FOR EMAIL   :-

    //  if (!details.email.includes("@")){
    //      addError("Emailerror" , "*Email must include '@' symbol")
    //  }
    //  else {
    //     RemoveError("Emailerror")
    //  }

    //  if (details.email.endsWith(".")  || details.email.endsWith("@")){
    //      addError("Emailerror" , "*Email must not ends with '.' or '@' " )
    //  }


    
 // Check for phone Number :-
//   if (details.number.length != 10){
//         addError("PhoneError" , "*Number must be of 10 digits")
//   }
  
//   else {
//      RemoveError("PhoneError")
//   }
    //  Check for Password :-
    // if (details.password.length < 6){
    //     addError("passError" , "*Password must be of 6 characters")
    // }
    // else {
    //     RemoveError("passError")
    // }


    // Check for Confirm Password :-
    // if (details.cnfPass !== details.password){
    //     addError("cnfpassword" , "*Confirm Password Should Match with above password")
    // }
    // else {
    //   RemoveError("cnfpassword")
    // }
    // console.log(ErrorDetails)
} 

  return (
    <>

<div className="container">
       <h1>Form Validation </h1>
       <form name="RegistrationForm"  >
        
        <div>
            <label htmlFor="fname">Name : </label>
            <input type="text" id="fname" name="fname" placeholder="Enter you Name" onChange={(e) => HandleName(e)}/>
            <div className="error" id="fnameError">{ErrorDetails.fnameError}</div>
        </div>
        <div>
            <label htmlFor="fname">Email : </label>
            <input type="email" id="email" name="email" placeholder="Enter you Email" onChange={(e) => HandleEmail(e)}/>
            <div className="error" id="Emailerror">{ErrorDetails.Emailerror}</div>
        </div>
        <div>
            <label htmlFor="fname">Phone Number : </label>
            <input type="number" id="number" name="number" placeholder="Enter you Number" onChange={(e) => HandlePhone(e)}/>
            <div className="error" id="PhoneError">{ErrorDetails.PhoneError}</div>
        </div>
        <div>
            <label htmlFor="fname">Password : </label>
            <input type="password" id="password" name="password" placeholder="Enter you Password" onChange={(e) => HandlePassword(e)}/>
            <div className="error" id="passError">{ErrorDetails.passError}</div>
        </div>
        <div>
            <label htmlFor="fname">Confirm Password : </label>
            <input type="password" id="cnfPass" name="cnfPass" placeholder="Confirm Your Password Here" onChange={(e) => HandleCnfPassword(e)}/>
            <div className="error" id="cnfpassword">{ErrorDetails.cnfpassword}</div>
        </div>
          <div className="btnStyle">
           <button className="btn btn-success  btn-sm" id="btnSubmit" onClick={CheckValidation}>Submit</button>
          </div>
       </form>

   </div>
    </>
  );
}

export default FormValidation;
