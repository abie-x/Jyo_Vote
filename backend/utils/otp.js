import otpgenerator from "otp-generator"

const otpLength = 6
const otpConfig = {
    upperCaseAlphabets: false,
    specialChars: false,
}

const generateOtp = () => {
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    return otp;
}

export {
    generateOtp
}