const Validation=(values)=>{
  let errors = {}
  if(!values.name){
    errors.name = "Email Required"
  }else if(values.name.length < 5){
    errors.name = " Enter a Valid Email "
  }
  if(!values.password){
    errors.password = "Password Required"
  }else if(values.password.length < 5){
    errors.password = "Password should be more than 5 characters"
  }
  return errors
}
export default Validation