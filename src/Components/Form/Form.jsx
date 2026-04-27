import React, { useState } from 'react'
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const Form = () => {

    // firstName
    let [firstName, setFirstName] = useState("")
    let [firstNameError, setFirstNameError] = useState("")
    let [firstNameborder, setFirstNameborder] = useState(false);
    let [firstNamelabel, setFirstNamelabel] = useState(false);

    // email
    let [email, setEmail] = useState("")
    let [emailError, setEmailError] = useState("")
    let [emailredborder, setIEmailredborder] = useState(false);
    let [emailredlabel, setEmailredlabel] = useState(false);

    // password
    let [password, setPassword] = useState("")
    let [passwordError, setPasswordError] = useState("")
    let [passredborder, setPassredborder] = useState(false);
    let [passredlabel, setPassredlabel] = useState(false);

    // reaptepassword
    let [reaptepassword, setReaptepassword] = useState("")
    let [reapetpasswordError, setReapetpasswordError] = useState("")
    let [reapetpassredborder, setReapetpassredborder] = useState(false);
    let [reapetpassredlabel, setReapetpassredlabel] = useState(false);


    let [show, setShow] = useState(false)

    let hanleClick = (e) => {
        e.preventDefault()

        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (firstName == "") {
            setFirstNameError("Firstname is required");
            setFirstNameborder(true);
            setFirstNamelabel(true);
        }
        if (email == "") {
            setEmailError("Please enter a valid email address")
            setIEmailredborder(true);
            setEmailredlabel(true);
        } else if (!regex.test(email)) {
            setEmailError("Invalid email format (example: test@gmail.com)")
            setIEmailredborder(true);
            setEmailredlabel(true);
        }
        if (password == "" || password.length < 8 || password.length > 16) {
            setPasswordError("Password must be 8-16 characters long")
            setPassredborder(true);
            setPassredlabel(true);
        }
        if (!reaptepassword) {
            setReapetpasswordError("Repeat password is required!");
            setReapetpassredborder(true);
            setReapetpassredlabel(true);
        } else if (password !== reaptepassword) {
            setReapetpasswordError("Passwords do not match!");
            setReapetpassredborder(true);
            setReapetpassredlabel(true);
        }

    }

    let handleEye = () => {
        setShow(!show);
    }

    return (
        <div className='mt-15'>
            <div className="bg-white p-6 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-black uppercase mb-2">Signup</h1>
                <form className="w-full max-w-100 mt-5 mb-10 flex flex-col items-center gap-3">

                    {/* FirstName */}
                    <div className='w-full flex group'>
                        <label htmlFor="text" className={`group-focus-within:bg-[#2E2B41]  transition w-12.5 h-12.5 bg-[#8672FF] flex items-center justify-center rounded-l-lg ${firstNamelabel ? "bg-[#f06272]" : ""} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M367-527q-47-47-47-113t47-113q47-47 113-47t113 47q47 47 47 113t-47 113q-47 47-113 47t-113-47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                        </label>
                        <input onChange={(e) => {
                            setFirstName(e.target.value);
                            setFirstNameError("");
                            setFirstNameborder(false);
                            setFirstNamelabel(false)
                        }}
                            type="text" placeholder="FirstName" className={` grow h-12.5 p-3 border-2 border-[#8672FF] border-l-0 bg-[#F3F0FF] rounded-r-lg focus:outline-none focus:border-[#2E2B41] ${firstNameborder ? "border border-[#f06272]" : ""}`} />
                    </div>
                    <p className='text-red-500'>{firstNameError}</p>

                    {/* email */}
                    <div className='w-full flex group'>
                        <label htmlFor="email" className={`group-focus-within:bg-[#2E2B41]  transition w-12.5 h-12.5 bg-[#8672FF] flex items-center justify-center rounded-l-lg ${emailredlabel ? "bg-[#f06272]" : ""} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm85-315q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Z" /></svg>
                        </label>
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                            setIEmailredborder(false);
                            setEmailredlabel(false)
                        }}
                            type="email" id="email" placeholder="email" className={` grow h-12.5 p-3 border-2 border-[#8672FF] border-l-0 bg-[#F3F0FF] rounded-r-lg focus:outline-none focus:border-[#2E2B41] ${emailredborder ? "border border-[#f06272]" : ""}`} />
                    </div>
                    <p className='text-red-500'>{emailError}</p>

                    {/* password */}
                    <div className="w-full flex group">
                        <label htmlFor="password" className={`group-focus-within:bg-[#2E2B41] w-12.5 h-12.5 bg-[#8672FF] flex items-center justify-center rounded-l-lg ${passredlabel ? "bg-[#f06272]" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm296.5-223.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" /></svg>
                        </label>
                        <div className='relative w-full'>
                            <input onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError("");
                                setPassredborder(false);
                                setPassredlabel(false)
                            }}
                                type={show ? "text" : "password"}
                                id="password" className={`w-full grow h-12.5 p-3 border-2 border-[#8672FF]  border-l-0 bg-[#F3F0FF] rounded-r-lg focus:outline-none focus:border-[#2E2B41] ${passredborder ? "border border-[#f06272]" : ""}`} placeholder="password" />
                            {
                                show ?
                                    <IoEyeOutline onClick={handleEye} className='absolute top-4 right-3 cursor-pointer' />
                                    :
                                    <FaRegEyeSlash onClick={handleEye} className='absolute top-4 right-3 cursor-pointer' />
                            }
                        </div>
                    </div>
                    <p className='text-red-500'>{passwordError}</p>

                    {/* reapet-password */}
                    <div className="w-full flex group">
                        <label htmlFor="password" className={`group-focus-within:bg-[#2E2B41] w-12.5 h-12.5 bg-[#8672FF] flex items-center justify-center rounded-l-lg ${reapetpassredlabel ? "bg-[#f06272]" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm296.5-223.5Q560-327 560-360t-23.5-56.5Q513-440 480-440t-56.5 23.5Q400-393 400-360t23.5 56.5Q447-280 480-280t56.5-23.5ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" /></svg>
                        </label>
                        <div className='relative w-full'>
                            <input onChange={(e) => {
                                setReaptepassword(e.target.value);
                                setReapetpasswordError("");
                                setReapetpassredborder(false);
                                setReapetpassredlabel(false);
                            }}
                                type="password" className={`w-full grow h-12.5 p-3 border-2 border-[#8672FF]  border-l-0 bg-[#F3F0FF] rounded-r-lg focus:outline-none focus:border-[#2E2B41] ${reapetpassredborder ? "border border-[#f06272]" : ""}`} placeholder="Reapet password" />
                        </div>
                    </div>
                    <p className='text-red-500'>{reapetpasswordError}</p>

                    <button onClick={(e) => { hanleClick(e) }} type="submit" className="mt-3 px-10 py-3 rounded-full bg-[#8672FF] text-white font-semibold hover:bg-[#2E2B41] transition">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Form
