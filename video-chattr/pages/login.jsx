import React from "react";
import LoginForm from "../componenets/LoginForm";
import Form from "../componenets/Form";
import { AiOutlineLogin } from "react-icons/ai";

export default function () {
  return (
    <div className="main center">
      <Form
        form={<LoginForm />}
        message="Welcome Back!"
        svg={<AiOutlineLogin size={55}/>}
      />
    </div>
  );
}
