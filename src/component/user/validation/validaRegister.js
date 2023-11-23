import * as yup from 'yup'
export const registerSchema = yup.object({

    userName:yup.string().required("user name is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
    email:yup.string().required("user email is required").email(),
    password:yup.string().required("password name is required").min(3,"must be at least 3 char").max(30,"max is 30 char"),
})