"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Modal from "../ui/modal/Modal";
import { useSelector } from "react-redux";
import ForgotPassword from "./ForgotPassword";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children, onClickIfAuthorized }) {
  const t = useTranslations("AuthGuard");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const modalRef = useRef(null);
  const [pendingAction, setPendingAction] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // 'login', 'register', 'forgotPassword'
  const router = useRouter();
  const [previousPath, setPreviousPath] = useState(null);

  const handleClick = (event) => {
    if (!isAuthenticated) {
      event.preventDefault();
      setPreviousPath(window.location.pathname);
      setPendingAction(() => () => {
        if (onClickIfAuthorized) {
          onClickIfAuthorized(event);
        }
      });
      modalRef.current?.open?.();
      return;
    }
    onClickIfAuthorized?.(event);
  };

  useEffect(() => {
    if (isAuthenticated && pendingAction) {
      pendingAction();
      setPendingAction(null);
      modalRef.current?.close?.();
    }
  }, [isAuthenticated, pendingAction]);

  const handleModalClose = () => {
    if (!isAuthenticated && previousPath) {
      router.replace(previousPath);
    }
  };

  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  if (!React.isValidElement(children)) {
    console.warn("AuthGuard expects a single valid React element as a child.");
    return children;
  }

  return (
    <>
      <Modal ref={modalRef} onClose={handleModalClose}>
        <div className="p-4">
          {authMode === "login" && (
            <LoginForm
              toggleAuthMode={(mode = "register") => toggleAuthMode(mode)}
              openForgotPassword={() => toggleAuthMode("forgotPassword")}
            />
          )}

          {authMode === "register" && (
            <RegisterForm toggleAuthMode={() => toggleAuthMode("login")} />
          )}

          {authMode === "forgotPassword" && (
            <ForgotPassword toggleAuthMode={() => toggleAuthMode("login")} />
          )}

          {authMode !== "login" && authMode !== "forgotPassword" && (
            <p className="text-sm text-center mt-2">
              {t("alreadyHaveAccount")}{" "}
              <button
                className="text-[#49BA4A] underline cursor-pointer"
                onClick={() => toggleAuthMode("login")}
              >
                {t("login")}
              </button>
            </p>
          )}

          {authMode === "forgotPassword" && (
            <p className="text-sm text-center mt-2">
              <button
                className="text-[#49BA4A] underline cursor-pointer"
                onClick={() => toggleAuthMode("login")}
              >
                {t("backToLogin")}
              </button>
            </p>
          )}
        </div>
      </Modal>

      {React.cloneElement(children, {
        onClick: handleClick,
      })}
    </>
  );
}
