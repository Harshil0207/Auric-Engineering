import React, { memo } from 'react';

const Container = memo(({
    fluid = false,
    className = '',
    children,
    ...props
}) => {
    return (
        <div
            className={`
        ${fluid ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
});

Container.displayName = 'Container';
export default Container;