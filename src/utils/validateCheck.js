 const validateCheck = (email,password) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   // const isFullnameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/.test(fullname);
    //if(!isFullnameValid) return "FullName is not valid";
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "password is not valid";
    return null;
}
export default validateCheck;