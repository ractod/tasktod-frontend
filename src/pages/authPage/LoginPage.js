import React, { useState, useEffect } from 'react';

// components
import { Grow, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import FormNotification from 'components/common/formNotification';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from "react-toastify"

//utilities
import { validateLoginForm } from 'utilities/functions';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/actions';

// custom hook
import useTitle from 'hooks/useTitle';


const classNames = {
    form: "w-full sm:w-[450px] mt-10",
    textFiled: "w-full mt-4 first:mt-0",
    textFiledInput: "h-[15px]",
    termsText: "mt-3 text-mute-dark",
    submitButton: "w-full mt-7",
}

// eye button for password Input
const PasswordInputAdornment = ({ showPassword, setShowPassword }) => (
    <InputAdornment position='end'>
        <IconButton onClick={() => setShowPassword(prevState => !prevState)}>
            { showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
    </InputAdornment>
)

const LoginPage = () => {

    useTitle("Login")

    // redux
    const dispatch = useDispatch()
    const authState = useSelector(state => state.authState)

    // states 
    const [showPassword, setShowPassword] = useState(false) 
    const [values, setValues] = useState({ email: "", password: ""  })
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})

    // functions
    const submitHandler = (event) => {
        event.preventDefault()

        // check if form has error
        Object.keys(errors).length ? 
        toast.error("Fill The Form Correctly") :
        dispatch(login(values))
    }

    // generating common input props
    const generateProps = (name) => ({ 
        name, 
        value: values[name], 
        className: classNames.textFiled,
        error: !!errors[name] && touched[name], 
        onBlur: () => setTouched(prevState => ({...prevState, [name]: true})), 
        onChange: (event) => setValues(prevState => ({...prevState, [name]: event.target.value})), 
    })

    useEffect(() => {
        setErrors(validateLoginForm(values))
    }, [values, touched])

    return (
        <Grow in>
            <form className={classNames.form} onSubmit={submitHandler}>
                {/* email input */}
                <TextField {...generateProps("email")} label="Email" />
                { errors.email && touched.email && <FormNotification text={errors.email} /> }
            
                {/* password input */}
                <TextField 
                    {...generateProps("password")} label="Password" type={showPassword ? "text" : "password"}
                    InputProps={{ endAdornment: <PasswordInputAdornment {...{showPassword, setShowPassword}} /> }}
                />
                { errors.password && touched.password && <FormNotification text={errors.password} /> }

                {/* submit Button */}
                <LoadingButton 
                    loading={authState.loading} className={classNames.submitButton} 
                    variant="contained" type="submit" size='large' 
                > 
                    Login 
                </LoadingButton>
            </form>
        </Grow>
    );
}

export default LoginPage;
