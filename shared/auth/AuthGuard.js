'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useRouter } from 'next/router';
import RegisterForm from './RegisterForm';
import Modal from '../ui/modal/Modal';

export default function AuthGuard({ children, onAuthorized }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const modalRef = useRef(null);
  const [pendingAction, setPendingAction] = useState(null);
  // const router = useRouter();

  const handleAction = (event) => {
    if (!isAuthenticated) {
      event.preventDefault();

      setPendingAction(() => () => {
        if (onAuthorized) {
          onAuthorized(event);
        }
      });

      modalRef.current?.open();
      return;
    }

    // If authenticated, call the action directly
    if (onAuthorized) {
      onAuthorized(event);
    }
  };

  useEffect(() => {
    if (isAuthenticated && pendingAction) {
      pendingAction();
      setPendingAction(null);
      modalRef.current?.close();
    }
  }, [isAuthenticated, pendingAction]);

  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="text-lg font-semibold mb-4">Пожалуйста, войдите в систему</h2>
        <RegisterForm />
      </Modal>

      {React.cloneElement(children, {
        onClick: handleAction,
      })}
    </>
  );
}
