import AppWrapper from "@/components/layouts/appWrapper";
import AuthLayout from "@/components/layouts/authLayout";
import React from "react";
import dynamic from 'next/dynamic'
const Login = dynamic(() => import('@/components/pages/login'))

const Page = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default Page;
