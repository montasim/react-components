import PropTypes from 'prop-types';

const MultiSrcImageComponent = ({ customClass, srcSet, alt }) => {
    return (
        <img
            className={customClass}
            srcSet={srcSet}
            alt={alt}
        />
    );
};

MultiSrcImageComponent.propTypes = {
    customClass: PropTypes.string,
    srcSet: PropTypes.string.isRequired, // Format: "url1 300w, url2 600w, url3 1000w"
    alt: PropTypes.string.isRequired
};

MultiSrcImageComponent.defaultProps = {
    customClass: "w-full"
};

export default MultiSrcImageComponent;
