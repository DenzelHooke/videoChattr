import { useEffect, useState } from "react";
import Form from "../componenets/Form";
import { BsFillPersonPlusFill } from "react-icons/bs";
import RegisterForm from "../componenets/RegisterForm";
import { toast } from 'react-nextjs-toast';

function Register() {

  useEffect(() => {
    toast.notify("Hello")
    console.log("Loaded componenet")
  }, [])

  return (
    <div className="main center">
      {
        <Form
          message="Register Now"
          form={<RegisterForm />}
          svg={<BsFillPersonPlusFill size={55} />}
        />
      }
    </div>
  );
}

export default Register;
