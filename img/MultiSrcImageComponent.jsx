import PropTypes from 'prop-types';

/**
 * MultiSrcImage renders an image that can adapt to different viewport or device
 * pixel densities by providing a set of source URLs with specified widths.
 * This component allows for responsive image loading, improving performance
 * and user experience.
 */
const MultiSrcImageComponent = ({ className, srcSet, alt }) => (
    <img
        className={className} // Apply custom styles to the image
        srcSet={srcSet}       // Define multiple sources for responsive loading
        alt={alt}             // Provide descriptive text for accessibility
    />
);

// Prop validation to ensure correct usage and to catch common errors during development
MultiSrcImageComponent.propTypes = {
    className: PropTypes.string, // Custom CSS class for styling the image
    srcSet: PropTypes.string.isRequired, // Specifies the source set for the image for responsive loading
    alt: PropTypes.string.isRequired, // Descriptive text for the image, essential for accessibility
};

// Default props define default values for props that are not explicitly provided
MultiSrcImageComponent.defaultProps = {
    className: "w-full", // Default class to ensure the image is responsive
};

export default MultiSrcImageComponent;
