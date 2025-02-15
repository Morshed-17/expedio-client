import React from "react";
import AuthCard from "../components/authCard";
import RegisterForm from "./components/RegisterForm";

function page() {
  return (
    <AuthCard
      title="Create an account"
      subTitle="Provide your information!"
      redirectText="Already have an account?"
      redirect="login"
    >
      <RegisterForm />
    </AuthCard>
  );
}

export default page;
