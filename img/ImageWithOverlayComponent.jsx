import PropTypes from 'prop-types';

const ImageWithOverlayComponent = ({ src, alt, overlayText }) => {
    return (
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
};

ImageWithOverlayComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    overlayText: PropTypes.string.isRequired
};

export default ImageWithOverlayComponent;
