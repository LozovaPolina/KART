import ProfilePage from "../../../../appPages/ProfilePage";
import AuthGuard from "../../../../shared/auth/AuthGuard";
import React from "react";

function page(props) {
  return (
    <AuthGuard>
      <ProfilePage />
    </AuthGuard>
  );
}

export default page;
