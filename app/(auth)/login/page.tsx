import React from "react";
import AuthCard from "../components/authCard";
import LoginForm from "./components/LoginForm";

function page() {
  return (
    <AuthCard
      title="Welcome back!"
      subTitle="Provide your credentials."
      redirectText="Don't have an account?"
      redirect="register"
    >
     
        <LoginForm />

    </AuthCard>
  );
}

export default page;
