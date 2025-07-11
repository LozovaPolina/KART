"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Modal from "../ui/modal/Modal";
import { useSelector } from "react-redux";

export default function AuthGuard({ children, onClickIfAuthorized }) {
  const t = useTranslations("AuthGuard");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const modalRef = useRef(null);
  const [pendingAction, setPendingAction] = useState(null);
  const [authMode, setAuthMode] = useState("login");

  // Открываем модалку, если не авторизован при первом рендере или при изменении статуса
  useEffect(() => {
    if (!isAuthenticated) {
      modalRef.current?.open?.();
    } else {
      modalRef.current?.close?.();
    }
  }, [isAuthenticated]);

  const handleClick = (event) => {
    if (!isAuthenticated) {
      event.preventDefault();

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

  const toggleAuthMode = () => {
    setAuthMode((prev) => (prev === "login" ? "register" : "login"));
  };

  if (!React.isValidElement(children)) {
    console.warn("AuthGuard expects a single valid React element as a child.");
    return children;
  }

  if (!isAuthenticated) {
    return (
      <>
        <Modal ref={modalRef}>
          <div className="p-4">
            {authMode === "login" ? (
              <LoginForm toggleAuthMode={toggleAuthMode} />
            ) : (
              <RegisterForm toggleAuthMode={toggleAuthMode} />
            )}

            {authMode !== "login" && (
              <p className="text-sm text-center mt-2">
                {t("alreadyHaveAccount")}{" "}
                <button
                  className="text-[#49BA4A] underline cursor-pointer"
                  onClick={toggleAuthMode}
                >
                  {t("login")}
                </button>
              </p>
            )}
          </div>
        </Modal>
      </>
    );
  }

  return (
    <>
      <Modal ref={modalRef}>
        <div className="p-4">
          {authMode === "login" ? (
            <LoginForm toggleAuthMode={toggleAuthMode} />
          ) : (
            <RegisterForm toggleAuthMode={toggleAuthMode} />
          )}

          {authMode !== "login" && (
            <p className="text-sm text-center mt-2">
              {t("alreadyHaveAccount")}{" "}
              <button
                className="text-[#49BA4A] underline cursor-pointer"
                onClick={toggleAuthMode}
              >
                {t("login")}
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
