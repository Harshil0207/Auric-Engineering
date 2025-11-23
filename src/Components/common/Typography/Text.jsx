import React, { memo } from 'react';
import PropTypes from 'prop-types';

const variants = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-semibold',
    h3: 'text-2xl md:text-3xl font-semibold',
    body: 'text-base md:text-lg',
    small: 'text-sm',
};

const Text = memo(({
    variant = 'body',
    as: Component = 'div',
    className = '',
    gradient,
    children,
    ...props
}) => {
    const classes = [
        variants[variant],
        gradient && 'bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent',
        className
    ].filter(Boolean).join(' ');

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
});

Text.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'body', 'small']),
    as: PropTypes.string,
    className: PropTypes.string,
    gradient: PropTypes.bool,
    children: PropTypes.node.isRequired
};

Text.defaultProps = {
    variant: 'body',
    as: 'div',
    className: '',
    gradient: false
};

Text.displayName = 'Text';
export default Text;