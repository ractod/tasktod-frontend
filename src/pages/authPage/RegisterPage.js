import React, { useState, useEffect } from 'react';

// components
import { Grow, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { register } from 'redux/auth/actions';

// utilities
import { validateRegisterForm } from 'utilities/functions';
import FormNotification from 'components/common/formNotification';
import { toast } from 'react-toastify';

// custom hook
import useTitle from 'hooks/useTitle';


const classNames = {
    form: "w-full sm:w-[450px] mt-10",
    textFiled: "w-full mt-6 first:mt-0",
    termsText: "mt-3 text-mute",
    submitButton: "w-full mt-7"
}

// eye icon for password input
const PasswordInputAdornment = ({ showPassword, setShowPassword }) => (
    <InputAdornment position='end'>
        <IconButton onClick={() => setShowPassword(prevState => !prevState)}>
            { showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>
)

const RegisterPage = () => {

    useTitle("Register")

    // redux 
    const authState = useSelector(state => state.authState)
    const dispatch = useDispatch()

    // states
    const [showPassword, setShowPassword] = useState(false) 
    const [values, setValues] = useState({ name: "", lastName: "", password: "", email: ""  })
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})

    // functions
    const submitHandler = (event) => {
        event.preventDefault()

        // check if form has error
        Object.keys(errors).length ? 
        toast.error("Fill The Form Correctly"):
        dispatch(register(values))
    }

    // generating common input props
    const generateProps = (name) => ({ 
        name, 
        value: values[name], 
        error: !!errors[name] && touched[name], 
        className: classNames.textFiled,
        onBlur: () => setTouched(prevState => ({...prevState, [name]: true})), 
        onChange: (event) => setValues(prevState => ({...prevState, [name]: event.target.value})), 
    })

    useEffect(() => {
        setErrors(validateRegisterForm(values))
    }, [values, touched])
    

    return (
        <Grow in>
            <form onSubmit={submitHandler} className={classNames.form}>
                {/* name input */}
                <TextField {...generateProps("name")} label="Name" />
                { errors.name && touched.name && <FormNotification text={errors.name} /> }

                {/* lastName Input */}
                <TextField {...generateProps("lastName")} label="Last Name" />
                { errors.lastName && touched.lastName && <FormNotification text={errors.lastName} /> }

                {/* email input */}
                <TextField {...generateProps("email")} label="Email" />
                { errors.email && touched.email && <FormNotification text={errors.email} /> }

                {/* password input */}
                <TextField
                    {...generateProps("password")} label="Password" type={showPassword ? "text" : "password"} 
                    InputProps={{ endAdornment: <PasswordInputAdornment {...{showPassword, setShowPassword}} /> }}
                />
                { errors.password && touched.password && <FormNotification text={errors.password} /> }

                {/* submit button */}
                <LoadingButton 
                    className={classNames.submitButton} loading={authState.loading}
                    type="submit" size='large' variant="contained" 
                > 
                    Register 
                </LoadingButton>
            </form>
        </Grow>
    );
}

export default RegisterPage;
