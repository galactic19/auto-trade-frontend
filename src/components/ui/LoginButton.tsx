'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

interface LoginButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const LoginButton: React.FC<LoginButtonProps> = ({ 
  className = '',
  variant = 'primary',
  size = 'md'
}) => {
  const router = useRouter();
  const { isLoading } = useAuth();

  const handleLoginClick = () => {
    if (isLoading) return;
    router.push('/login');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-emerald-600 hover:bg-emerald-700 text-white';
      case 'secondary':
        return 'bg-slate-600 hover:bg-slate-700 text-white';
      case 'outline':
        return 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent';
      default:
        return 'bg-emerald-600 hover:bg-emerald-700 text-white';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      type="button"
      onClick={handleLoginClick}
      disabled={isLoading}
      className={`
        font-medium rounded-md transition-colors duration-200 
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      aria-disabled={isLoading}
    >
      로그인
    </button>
  );
};

export default LoginButton;