'use client'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(function Modal({ children }, ref) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const backdropRef = useRef(null)

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }))

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClickOutside = (e) => {
    if (e.target === backdropRef.current) {
      setIsOpen(false)
    }
  }

  if (!mounted || !isOpen) return null

  return createPortal(
    <div
      ref={backdropRef}
      onClick={handleClickOutside}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-xl"
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  )
})

export default Modal
