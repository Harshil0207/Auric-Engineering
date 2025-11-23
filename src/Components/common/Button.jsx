import React, { memo } from 'react';

const variants = {
    primary: 'bg-gradient-to-r from-sky-400 to-cyan-300 text-white',
    secondary: 'bg-white text-neutral-900',
    outline: 'border border-white/10 text-white/90',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
};

const Button = memo(({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    return (
        <button
            className={`
        rounded-full font-semibold transition-all
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
export default Button;