"use client"

import React, { useRef, useState, useEffect } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Modal from "../ui/modal/Modal";
import { useSelector } from "react-redux";

export default function AuthGuard({ children, onClickIfAuthorized }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const modalRef = useRef(null);
  const [pendingAction, setPendingAction] = useState(null);
  const [authMode, setAuthMode] = useState("login"); // "login" or "register"

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

  return (
    <>
      <Modal ref={modalRef}>
        <div className="p-4 space-y-4">
          {authMode === "login" ? <LoginForm /> : <RegisterForm />}
          <p className="text-sm text-center">
            {authMode === "login" ? (
              <>
                Не зарегистрированы?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={toggleAuthMode}
                >
                  Зарегистрируйтесь здесь
                </button>
              </>
            ) : (
              <>
                Уже есь аккаунт?{" "}
                <button
                  className="text-blue-600 underline"
                  onClick={toggleAuthMode}
                >
                  Войти
                </button>
              </>
            )}
          </p>
        </div>
      </Modal>

      {React.cloneElement(children, {
        onClick: handleClick,
      })}
    </>
  );
}
