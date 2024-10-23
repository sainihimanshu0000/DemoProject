export const VALIDATE = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    ALPHABET_ONLY: /^[a-zA-Z \s]*$/,
    NUMBER: /^[0-9]+$/,
    MOBILE: /^[0-9]{1,20}$/,
    STREET: /^[a-zA-Z0-9 '-.~!@#$%^&*()_+={}[\];':"<>.\s]*$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
    USERNAME: /^[a-zA-Z0-9_.-]*$/,
    URL: /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i,
    BACKSPACE: /^(?:[a-zA-Z0-9._]|[\b])+$/,
};
import { strings } from "../locales/Localization";
const Validation = {
    checkUsername: (name, value, min = 2, max = 30) => {
        if (value) {
            if (!VALIDATE.USERNAME.test(value)) {
                return `${name} ${strings["field_is_invalid"]}`;
            } else if (value.length < min || value.length > max) {
                return `${name} ${strings["field_is_invalid"]} ${min} ${strings["to"]} ${max} ${strings["characters"]}.`;
            }
            return null;
        } else {
            return `${name} ${strings["field_is_required"]}`;
        }
    },

    checkEmail: (name, value) => {
        if (value) {
            if (!VALIDATE.EMAIL.test(value)) {
                return `${name} ${strings["is_invalid"]}`;
            }
            return null;
        } else {
            return `${name} ${strings["field_is_required"]}`;
        }
    },

    // checkEmail:  (name, value) => {
    //     if (value) {
    //           if (!VALIDATE.EMAIL.test(value)) {
    //               return `${name} is invalid.`;
    //           } else {
    //               return null;
    //           }
    //       } else {
    //           return `${name} field is required.`;
    //       }
          
    //   },

    checkPassword: (name, value) => {
        if (value) {
            if (!VALIDATE.PASSWORD.test(value)) {
                return `${name} ${strings["password_invalid"]}`;
            }
            return null;
        } else {
            return `${name} ${strings["field_is_required"]}`;
        }
    },

    checkPhoneNumberWithFixLength: (name, max = 10, value) => {
        if (value) {
            if (!VALIDATE.MOBILE.test(value)) {
                return `${name} ${strings["phone_invalid"]}`;
            } else if (value.length != max) {
                return `${name} ${strings["phone_length"]} ${max} ${strings["digits"]}.`;
            }
            return null;
        } else {
            // return `${name} ${strings["field_is_required"]}`;
        }
    },

    validateConfirmPassword: (password, confirmPassword) => {
        return password === confirmPassword ? null : strings["passwords_do_not_match"];
    },
};

export default Validation;
