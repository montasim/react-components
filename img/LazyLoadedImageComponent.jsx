import PropTypes from 'prop-types';

/**
 * BasicImage renders an image with specified source, alternative text, dimensions, and custom styling.
 * It employs lazy loading to improve performance and user experience by loading images as they enter the viewport.
 */
const LazyLoadedImageComponent = ({ className, src, width, height, alt }) => (
    <img
        className={className} // Custom CSS class for styling the image
        src={src}             // Source URL of the image
        width={width}         // Optional width, can be a string (e.g., '100px') or a number
        height={height}       // Optional height, can be a string (e.g., 'auto') or a number
        alt={alt}             // Alternative text for the image, for accessibility
        loading="lazy"        // Enables lazy loading of the image
    />
);

// Prop validation to ensure correct usage and to catch common errors during development
LazyLoadedImageComponent.propTypes = {
    className: PropTypes.string, // Custom CSS class for styling
    src: PropTypes.string.isRequired, // Source URL of the image, required
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Optional width of the image
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Optional height of the image
    alt: PropTypes.string.isRequired, // Alternative text for accessibility, required
};

// Default props define default values for props that are not explicitly provided
LazyLoadedImageComponent.defaultProps = {
    className: "max-md:w-full", // Default styling class
};

export default LazyLoadedImageComponent;
