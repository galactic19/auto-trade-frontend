'use client';
import React from 'react';

interface ErrorMessageProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  showIcon?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  title = '연결 오류',
  message,
  onRetry,
  showIcon = true
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center max-w-md mx-auto">
        {showIcon && (
          <svg 
            className="mx-auto h-12 w-12 text-red-500 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" 
            />
          </svg>
        )}
        
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-red-600 mb-6">{message}</p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
};