"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="fixed top-4 left-4">
      <IoMdArrowRoundBack className="size-8" />
    </button>
  );
};

export default BackButton;
