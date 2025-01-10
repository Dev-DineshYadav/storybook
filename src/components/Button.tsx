import React from 'react';

type ButtonProps = {
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
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
  
  const typeClasses = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400',
    secondary: 'bg-gray-300 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-400'
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm min-w-[80px]',
    medium: 'px-6 py-2.5 text-base min-w-[100px]',
    large: 'px-8 py-3 text-lg min-w-[120px]'
  };

  const classes = `
    ${baseClasses}
    ${typeClasses[type]}
    ${sizeClasses[size]}
  `.trim();

  return (
    <div className="flex items-center justify-center">
      <button
        className={classes}
        disabled={disabled || loading}
        onClick={onClick}
        type="button"
        aria-busy={loading}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
    </div>
  );
};

export default Button;