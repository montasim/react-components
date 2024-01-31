import PropTypes from 'prop-types';

const BasicPictureComponent = ({ customClass, sources, defaultImage, alt }) => {
    return (
        <picture>
            {sources.map((source, index) => (
                <source
                    key={index}
                    media={source.media}
                    srcSet={source.srcSet}
                />
            ))}
            <img
                className={customClass} // Tailwind class for width:auto
                src={defaultImage}
                alt={alt}
            />
        </picture>
    );
};

BasicPictureComponent.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired
        })
    ).isRequired,
    defaultImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

BasicPictureComponent.defaultProps = {
    customClass: "w-auto"
};

export default BasicPictureComponent;
