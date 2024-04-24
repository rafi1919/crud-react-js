import * as Yup from 'yup';

const userValidation = Yup.object().shape({
    user: Yup.string().required('username is required')
})

const passwordValidation = Yup.object().shape({
    password: Yup.string().required('password is required')
})

export {
    userValidation,
    passwordValidation
}