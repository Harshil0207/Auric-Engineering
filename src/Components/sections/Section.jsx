import React, { memo } from 'react';

const Section = memo(({
    children,
    dark = false,
    className = "",
    ...props
}) => {
    return (
        <section
            className={`
        relative py-16 md:py-24
        ${dark ? 'bg-neutral-950 text-white' : 'bg-white text-neutral-900'}
        ${className}
      `}
            {...props}
        >
            {children}
        </section>
    );
});

Section.displayName = 'Section';
export default Section;