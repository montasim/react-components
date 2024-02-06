import PropTypes from 'prop-types';

/**
 * ResponsiveImageComponent renders an image with responsive layout options.
 * It supports 'contain' and 'cover' layouts to control how the image fits within its container.
 *
 * Props:
 * - src: URL of the image to be displayed.
 * - alt: Alternative text for the image for accessibility.
 * - layout: Determines how the image should resize and fit its container.
 */
const ResponsiveImageComponent = ({ src, alt, layout }) => {
    // Ensure layout value is correctly applied in className
    const imageClass = `w-full object-${layout}`;

    return (
        <img
            className={imageClass}
            src={src}
            alt={alt}
        />
    );
};

// Prop validation to ensure correct usage and to catch common errors during development
ResponsiveImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(['contain', 'cover']), // Restricts layout to 'contain' or 'cover'
};

// Default props define default values for props that are not explicitly provided
ResponsiveImageComponent.defaultProps = {
    layout: 'cover', // Default layout if not specified
};

export default ResponsiveImageComponent;
