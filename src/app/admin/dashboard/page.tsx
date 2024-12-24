import DashboardLayout from "@/admin_components/layouts/dashboardLayout";
import React from "react";
import dynamic from 'next/dynamic'
const AdminDashboard = dynamic(() => import('@/admin_components/pages/dashboard'))
const Page = () => {
  return (
    <DashboardLayout title="Dashboard">
      <AdminDashboard />
    </DashboardLayout>
  );
};

export default Page;

