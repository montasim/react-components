import PropTypes from 'prop-types';

/**
 * ImageWithOverlay renders an image with a text overlay.
 * The overlay appears at the bottom of the image with a semi-transparent background.
 */
const ImageWithOverlayComponent  = ({ src, alt, overlayText }) => (
    <div className="relative">
        <img
            className="w-full"
            src={src}
            alt={alt}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
            {overlayText}
        </div>
    </div>
);

// Prop validation to ensure correct usage and to catch common errors during development
ImageWithOverlayComponent .propTypes = {
    src: PropTypes.string.isRequired, // URL of the image
    alt: PropTypes.string.isRequired, // Alternative text for the image for accessibility
    overlayText: PropTypes.string.isRequired // Text to display on the overlay
};

export default ImageWithOverlayComponent ;
