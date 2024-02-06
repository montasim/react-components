# Picture Components

This folder contains various designs and styles of picture components, each suited for different use cases in web development.

## Contents

1. [Basic Picture](./BasicPictureComponent.jsx)

## Basic Picture

```jsx
import PropTypes from 'prop-types';

/**
 * Picture component renders a responsive image with multiple sources to
 * allow the browser to select the most appropriate image based on the
 * current viewport size. It falls back to a default image if no source matches.
 */
const BasicPictureComponent = ({ className, sources, defaultImage, alt }) => (
    <picture>
        {sources.map((source, index) => (
            <source
                key={source.media || index} // Prefer using a stable unique identifier if possible
                media={source.media}
                srcSet={source.srcSet}
            />
        ))}
        <img
            className={className} // Use className for custom styling
            src={defaultImage}
            alt={alt}
        />
    </picture>
);

// Prop validation to ensure correct usage and to catch common errors during development
BasicPictureComponent.propTypes = {
    className: PropTypes.string,
    sources: PropTypes.arrayOf(
        PropTypes.shape({
            media: PropTypes.string.isRequired,
            srcSet: PropTypes.string.isRequired,
        })
    ).isRequired,
    defaultImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

// Default props define default values for props that are not explicitly provided
BasicPictureComponent.defaultProps = {
    className: "w-auto", // Ensures the image width scales with the container
};

export default BasicPictureComponent;

```

```jsx
<BasicPictureComponent
    className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
    sources={[]}
    defaultImage={}
    alt={}
/>
```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
