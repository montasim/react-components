import PropTypes from 'prop-types';

const InteractiveImageComponent = ({ customClass, src, width, height, alt, onClick }) => {
    return (
        <img
            className={customClass}
            src={src}
            width={width}
            height={height}
            alt={alt}
            onClick={onClick}
        />
    );
};

InteractiveImageComponent.propTypes = {
    customClass: PropTypes.string,
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onClick: PropTypes.func.isRequired
};

InteractiveImageComponent.defaultProps = {
    customClass: "w-full cursor-pointer hover:opacity-75"
};

export default InteractiveImageComponent;
