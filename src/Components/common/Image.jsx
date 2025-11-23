import React, { memo } from 'react';

const LazyImage = memo(({
    src,
    alt,
    className = '',
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={className}
            {...props}
        />
    );
});

LazyImage.displayName = 'LazyImage';
export default LazyImage;