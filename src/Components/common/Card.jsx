import React, { memo } from 'react';

const Card = memo(({ children, className = "", ...props }) => {
    return (
        <div
            className={`
        bg-gradient-to-br from-neutral-900/70 to-neutral-800/40
        border border-white/10 rounded-3xl p-6
        backdrop-blur-sm shadow-2xl
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
export default Card;