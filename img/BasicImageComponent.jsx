import PropTypes from 'prop-types';

/**
 * BasicImage displays an image with configurable properties.
 *
 * It allows setting of custom class names, source URL, dimensions, and alternative text,
 * making it versatile for various use cases where an image needs to be rendered.
 */
const BasicImageComponent = ({ className, src, width, height, alt }) => {
    return (
        <img
            className={className} // Applies custom CSS class for styling
            src={src}             // Image source URL
            width={width}         // Width of the image; can be a number (pixels) or string (e.g., '100%')
            height={height}       // Height of the image; can be a number (pixels) or string (e.g., 'auto')
            alt={alt}             // Alternative text for the image, important for accessibility
        />
    );
};

// Prop validation to ensure correct usage and to catch common errors during development
BasicImageComponent.propTypes = {
    className: PropTypes.string, // Optional CSS class to customize styling
    src: PropTypes.string.isRequired, // Image source URL, required
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Width of the image, can be a string or number
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Height of the image, can be a string or number
    alt: PropTypes.string.isRequired, // Alt text for accessibility, required
};

// Default props define default values for props that are not explicitly provided
BasicImageComponent.defaultProps = {
    className: "max-md:w-full", // Default class to make the image responsive
};

export default BasicImageComponent;
