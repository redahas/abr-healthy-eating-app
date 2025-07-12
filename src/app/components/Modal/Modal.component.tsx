'use client';

import { type FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="modal__overlay">
      <div
        className="modal__backdrop"
        onClick={onClose}
      />

      <div className="modal__container">
        {children}
      </div>
    </div>
  );

  // Use portal to render modal at the end of document.body
  return createPortal(modalContent, document.body);
};
