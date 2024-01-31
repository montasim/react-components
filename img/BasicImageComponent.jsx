import PropTypes from 'prop-types';

const BasicImageComponent = ({ customClass, src, width, height, alt }) => {
    return (
        <img
            className={customClass}
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
    );
};

BasicImageComponent.propTypes = {
    customClass: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    alt: PropTypes.string.isRequired
};

BasicImageComponent.defaultProps = {
    customClass: "max-md:w-full"
};

export default BasicImageComponent;
