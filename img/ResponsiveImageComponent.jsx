import PropTypes from 'prop-types';

const ResponsiveImageComponent = ({ src, alt, layout }) => {
    return (
        <img
            className={`w-full object-${layout}`}
            src={src}
            alt={alt}
        />
    );
};

ResponsiveImageComponent.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    layout: PropTypes.oneOf(['contain', 'cover']) // 'contain' or 'cover'
};

ResponsiveImageComponent.defaultProps = {
    layout: 'cover'
};

export default ResponsiveImageComponent;
