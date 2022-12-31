import toast from "react-hot-toast"

// validate login page username
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values)

    return errors;
}

// validate password
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)

    return errors;
}

export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values)

    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error("Password not match!")
    }

    return errors
}

// validate register form
export async function registerValidation(values) {
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors;
}

// validate profile page
export async function profileValidation(values) {
    const errors = emailVerify({}, values)
    return errors
}

/* ================================================================================= */

// validate email
function emailVerify(error = {}, value) {
    if (!value.email) {
        error.email = toast.error('Email required!')
    } else if (value.email.includes(" ")) {
        error.email = toast.error("Wrong email!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        error.email = toast.error("Invalid email address!")
    }

    return error;
}

// validate password
function passwordVerify(error = {}, value) {
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!value.password) {
        error.password = toast.error('Password required!')
    } else if (value.password.includes(" ")) {
        error.password = toast.error('Wrong password!')
    } else if (value.password.length < 4) {
        error.password = toast.error('Password must be more than 4 characters!')
    } else if (!specialChars.test(value.password)) {
        error.password = toast.error('Password must have special character!')
    }

    return error
}

// validate username
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username required!')
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid username!')
    }

    return error;
}