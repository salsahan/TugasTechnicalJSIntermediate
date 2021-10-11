export default function validateLoginData(email,password) {
    const emailValidator = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        const passwordValidator = new RegExp(/[A-Za-z\d\!\@\#\$\%\^\&\*]{8,}/);
        if (emailValidator.test(email)) {
            if (passwordValidator.test(password)) {
                return `Welcome to The Jungle`
            } else {
                return `tolong masukan password sesuai ketentuan`
            }
        } return `tolong masukan email yang valid`
}