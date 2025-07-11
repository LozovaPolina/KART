"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";

function ProfileIcon() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/profile")}
      className="p-2 rounded-full hover:bg-gray-100 transition"
      aria-label="Go to Profile"
    >
      <User color="#262626" />
    </button>
  );
}

export default ProfileIcon;
