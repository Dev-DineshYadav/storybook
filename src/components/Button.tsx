import React from 'react';

export type ButtonProps = {
  label: string;
  type?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  type = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onClick,
}) => {
  // Base classes that will always be applied
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  // Type-specific classes
  const typeStyles = {
    primary: 'bg-[#1DA1F2] hover:bg-[#1a91da] text-white focus:ring-blue-400',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500'
  };

  // Size-specific classes
  const sizeStyles = {
    small: 'px-6 py-2 text-sm min-w-[100px]',
    medium: 'px-8 py-2.5 text-base min-w-[120px]',
    large: 'px-10 py-3 text-lg min-w-[140px]'
  };

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${typeStyles[type]}
    ${sizeStyles[size]}
    shadow-sm hover:shadow
  `.trim();

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      type="button"
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
