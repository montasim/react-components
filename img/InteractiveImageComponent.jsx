import PropTypes from 'prop-types';

/**
 * InteractiveImage renders an image that responds to user clicks.
 * It accepts standard image attributes like source, dimensions, and alt text,
 * along with a custom click handler for interactive behavior.
 * The component also supports custom styling through className.
 */
const InteractiveImageComponent = ({ className, src, width, height, alt, onClick }) => (
    <img
        className={className} // Apply custom styles and interaction cues
        src={src}             // Image source URL
        width={width}         // Optional width, can be a string (e.g., '100%') or number
        height={height}       // Optional height, can be a string (e.g., 'auto') or number
        alt={alt}             // Descriptive text for accessibility
        onClick={handClick}     // Click handler for interactive behavior
    />
);

// Prop validation to ensure correct usage and to catch common errors during development
InteractiveImageComponent.propTypes = {
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
    onClick: PropTypes.func.isRequired, // Function to call on image click, required
};

// Default props define default values for props that are not explicitly provided
InteractiveImageComponent.defaultProps = {
    className: "w-full cursor-pointer hover:opacity-75", // Default class for full width and interactive cursor
};

export default InteractiveImageComponent;
