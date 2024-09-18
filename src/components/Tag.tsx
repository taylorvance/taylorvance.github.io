import React from 'react';

interface TagProps {
  size?: 'xs'|'sm'|'md'|'lg';
  color?: 'primary'|'secondary'|'accent'|'info'|'success'|'warning'|'error';
  active: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({size='md', color='accent', active=true, onClick, children}) => {
  const sizeClasses = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
  };
  const activeClasses = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    accent: 'badge-accent',
    info: 'badge-info',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
  };
  const clickableClass = onClick ? 'cursor-pointer' : 'cursor-default';

  return (
    <div className={`select-none badge ${sizeClasses[size]} ${active?activeClasses[color]:'badge-neutral'} ${clickableClass}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Tag;
