import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string | React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, content, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      if (!document.querySelector('#storybook-docs')) {
        document.body.style.overflow = 'hidden';
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      if (!document.querySelector('#storybook-docs')) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2.5 md:px-4">
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-50 w-full max-w-lg rounded-lg bg-white shadow-xl md:w-auto">
        <div className="flex items-center justify-between border-b border-gray-200 p-4 md:px-6 md:py-4">
          <h2 className="text-base font-semibold text-gray-900 md:text-lg">{title}</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="p-4 md:px-6 md:py-4">
          {typeof content === 'string' ? (
            <p className="text-sm text-gray-600 md:text-base lg:text-lg">{content}</p>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;