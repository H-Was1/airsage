"use client";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";

function Toast({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </>
  );
}

export default Toast;
