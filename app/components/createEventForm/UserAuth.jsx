"use Client";
import React, { useRef, useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMobileScreenButton, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
// import Button from "@/app/components/inputs/Button";
// import InputWrapper from "../inputs/InputWrapper";

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Add additional imports for other services you use here
import { getAuth, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from 'firebase/auth';
import { PhoneAuthProvider } from 'firebase/auth';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGWMLcuzFObF9q1oYP8l1b3fbtkYvZI3A",
    authDomain: "organizeapp-bb677.firebaseapp.com",
    projectId: "organizeapp-bb677",
    storageBucket: "organizeapp-bb677.appspot.com",
    messagingSenderId: "181661672402",
    appId: "1:181661672402:web:8261dcbac15d4be8b81e0b"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function GetUserAuth() {
  // const [code, setCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleSendCode = () => {
    // Configure reCAPTCHA
    const recaptchaVerifier = new RecaptchaVerifier('send-code-button', {
      size: 'invisible',
    }, auth);
  
    // Send verification code
    signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const handleVerifyCode = () => {
    // Verify the code entered by the user
    const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
  
    signInWithCredential(auth, credential)
      .then((userCredential) => {
        // User signed in successfully
        console.log('User signed in successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button id="send-code-button" onClick={handleSendCode}>
        Send Code
      </button>

      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Enter verification code"
      />
      <button onClick={handleVerifyCode}>
        Verify Code
      </button>
    </>
  );

  // // Call our callback when code = 6 chars
  // useEffect(() => {
  //     if (code.length === 5) {
  //        if (typeof callback === 'function') callback(code);
  //        resetCode();
  //    }
  // }, [code]); //eslint-disable-line

  // // Listen for external reset toggle
  // useEffect(() => {
  //    resetCode();
  //  }, [reset]); //eslint-disable-line

  // // Refs to control each digit input element
  // const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // // Reset all inputs and clear state
  // const resetCode = () => {
  //   inputRefs.forEach((ref) => {
  //     ref.current.value = "";
  //   });
  //   inputRefs[0].current.focus();
  //   setCode("");
  // };

  // // Handle input
  // function handleInput(e, index) {
  //   const input = e.target;
  //   const previousInput = inputRefs[index - 1];
  //   const nextInput = inputRefs[index + 1];

    // // Stacking up the user input
    // const newCode = [...code];
    // Convert lowercase letters to uppercase
    // if (/^[a-z]+$/.test(input.value)) {
    //   const uc = input.value.toUpperCase();
    //   newCode[index] = uc;
    //   inputRefs[index].current.value = uc;
    // } else {
    //   newCode[index] = input.value;
    // }
    // setCode(newCode.join(""));

    // input.select();

    // if (input.value === "") {
    // // If the value is deleted, select previous input, if exists
    //   if (previousInput) {
    //     previousInput.current.focus();
    //   }
    // } else if (nextInput) {
    // // Select next input on entry, if exists
    //   nextInput.current.select();
    // }
  //}

  // // Handle backspace key
  // function handleKeyDown(e, index) {
  //   const input = e.target;
  //   const previousInput = inputRefs[index - 1];
  //   const nextInput = inputRefs[index + 1];

  //   if ((e.keyCode === 8 || e.keyCode === 46) && input.value === "") {
  //     e.preventDefault();
  //     setCode((prevCode) => prevCode.slice(0, index) + prevCode.slice(index + 1));
  //     if (previousInput) {
  //       previousInput.current.focus();
  //     }
  //   }
  // }

  // // Capture pasted characters
  // const handlePaste = (e) => {
  //   const pastedCode = e.clipboardData.getData("text");
  //   if (pastedCode.length === 5) {
  //     setCode(pastedCode);
  //     inputRefs.forEach((inputRef, index) => {
  //       inputRef.current.value = pastedCode.charAt(index);
  //     });
  //   }
  // };

  // return (
  //   <div className="event-form">
  //     <h3 className=""> Please verify your phone number:</h3>
  //     <div className="my-2">
  //       We have sent a temporary verification code to your phone number. Enter the code to continue.
  //     </div>
  //     <InputWrapper>
  //       <div className="flex items-center my-2">
  //         <h4>Didn’t receive a code?</h4>
  //         <div className="flex items-center justify-center p-2">
  //           <Button
  //             onClick={resetCode} //should change to callback resend a new code!!!
  //           >
  //             <FontAwesomeIcon
  //               icon={faMobileScreenButton}
  //               className="text-white hover:cursor-pointer hover:text-blue-00"
  //               onClick={resetCode}
  //             />
  //             &nbsp;Text me a new code
  //           </Button>
  //         </div>
  //       </div>
  //       <div className="flex gap-2 relative items-center mb-4">
  //         {[0, 1, 2, 3, 4].map((index) => (
  //           <input
  //             className="text-2xl w-12 h-12 flex bg-blue-100  text-blue-60 rounded-full border-4 border-blueBrand  shadow-lg p-2 text-center mb-4 focus:border-princetonOrange  focus:ring focus:ring-orange-200"
  //             key={index}
  //             type="text"
  //             maxLength={1}
  //             onChange={(e) => handleInput(e, index)}
  //             ref={inputRefs[index]}
  //             autoFocus={index === 0}
  //             onFocus={(e) => e.target.select()}
  //             onKeyDown={(e) => handleKeyDown(e, index)}
  //             onPaste={handlePaste}
  //             // disabled={isLoading}
  //           />
  //         ))}
  //         {code.length ? (
  //           <div>
  //             <FontAwesomeIcon
  //               icon={faCircleXmark}
  //               className="text-red-600 hover:cursor-pointer hover:text-blue-00 m-2 "
  //               onClick={resetCode}
  //             />
  //           </div>
  //         ) : (
  //           <></>
  //         )}
  //       </div>
  //     </InputWrapper>
  //   </div>
  //);
}
