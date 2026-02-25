export const checkValidData=(email,password)=>{

    const isEmailValid=/^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

    console.log(email); 
    if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";

    return null;
};