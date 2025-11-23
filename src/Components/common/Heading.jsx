import React, { memo } from 'react';

const variants = {
    h1: "text-4xl md:text-5xl lg:text-6xl font-docade",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
    h4: "text-xl md:text-2xl lg:text-3xl",
};

const Heading = memo(({
    variant = "h1",
    gradient = true,
    children,
    className = "",
    ...props
}) => {
    const Tag = variant;

    return (
        <Tag
            className={`
        tracking-tight
        ${gradient ? 'bg-gradient-to-r from-sky-400/95 to-cyan-300/80 bg-clip-text text-transparent' : ''}
        ${variants[variant]}
        ${className}
      `}
            {...props}
        >
            {children}
        </Tag>
    );
});

Heading.displayName = 'Heading';
export default Heading;