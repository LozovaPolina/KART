"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import AuthGuard from "../auth/AuthGuard";

function ProfileIcon() {
  const router = useRouter();

  return (
    <AuthGuard onClickIfAuthorized={() => router.push("/profile")}>
      <button
        className="p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Go to Profile"
      >
        <User color="#262626" />
      </button>
    </AuthGuard>
  );
}

export default ProfileIcon;
