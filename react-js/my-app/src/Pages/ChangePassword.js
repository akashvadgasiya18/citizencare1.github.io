import React from 'react'
import '../css/Registration.css'
import '../css/Login1.css'
// import Footer from '../Components/Footer/Footer' 
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const ChangePassword = () => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('New Password is mendatory')
            .min(5, 'Password must be at 3 char long')
            .max(16, 'Maximum 16 char allowed'),
        // .pattern('Must 8 char,1 uppercase,1 special char & Number'),
        oldpassword: Yup.string()
            .required('Old Password is mendatory'),

        cpassword: Yup.string()
            .required('Confirm Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),

    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState;

    const onSubmit = (data) => {
        swal("Password Change Successfully.!!", "clicked the button!", "success");
        console.log(data);
        reset();
    }

    const [state, setState] = useState(false);
    const [state1, setState1] = useState(false);

    const toggleBtn = () => {
        setState(prevState => !prevState);
    }
    const toggleBtn2 = () => {
        setState1(prevState => !prevState);
    }


    const click = () => {
        console.log();
    };


    return (
        <>
            <div className="regi-container">
                <div className="forms">
                    <div className="form">
                        <span className="title">Change Password</span>
                        <form onSubmit={handleSubmit(onSubmit)} action="" name="loginForm" className="form1">
                            <div className="input-field">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="Old password"
                                    {...register('oldpassword')}
                                    className={`oldpassword ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <i className="fa-solid fa-lock icon"></i>
                            </div>
                            {errors.oldpassword && (<div className="err2">{errors.oldpassword.message}</div>)}


                            <div className="input-field">
                                <input
                                    type={state ? "text" : "password"}
                                    // type="password"
                                    name="password"
                                    {...register('password')}
                                    className={`password ${errors.password ? 'is-invalid' : ''}`}
                                    placeholder="New password"
                                />
                                <i className="fa-solid fa-lock icon"></i>
                                <i className={`fa-solid ${state ? "fa-eye" : "fa-eye-slash"} showhidepw`} onClick={toggleBtn}></i>
                            </div>
                            {errors.password && (<div className="err2">{errors.password.message}</div>)}


                            <div className="input-field" >
                                <input
                                    type={state1 ? "text" : "password"}
                                    // type="password"
                                    name="cpassword"
                                    {...register('cpassword')}
                                    className={`password ${errors.cpassword ? 'is-invalid' : ''}`}
                                    placeholder="Confirm New password"
                                />
                                <i className="fa-solid fa-lock icon"></i>
                                <i className={`fa-solid ${state1 ? "fa-eye" : "fa-eye-slash"} showhidepw`} onClick={toggleBtn2}></i>
                            </div>
                            {errors.cpassword && (<div className="err2">{errors.cpassword.message}</div>)}

                            <div className="input-field button">
                                <input type="submit" value="Change" onClick={click()} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}

export default ChangePassword
