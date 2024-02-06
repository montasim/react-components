# Image Components

This folder contains various designs and styles of image components, each suited for different use cases in web development.

## Contents

1. [Basic Image Component](./BasicImageComponent.jsx)
2. [Responsive Image Component](./ResponsiveImageComponent.jsx)
3. [Lazy Loaded Image Component](./LazyLoadedImageComponent.jsx)
4. [Image with Overlay Component](./ImageWithOverlayComponent.jsx)
5. [Interactive Image Component](./InteractiveImageComponent.jsx)
5. [Multiple Sources Image Component](./MultiSrcImageComponent.jsx)

## Basic Image Component

```jsx
import PropTypes from 'prop-types';

/**
 * BasicImage displays an image with configurable properties.
 *
 * It allows setting of custom class names, source URL, dimensions, and alternative text,
 * making it versatile for various use cases where an image needs to be rendered.
 */
const BasicImageComponent = ({ className, src, width, height, alt }) => {
    return (
        <img
            className={className} // Applies custom CSS class for styling
            src={src}             // Image source URL
            width={width}         // Width of the image; can be a number (pixels) or string (e.g., '100%')
            height={height}       // Height of the image; can be a number (pixels) or string (e.g., 'auto')
            alt={alt}             // Alternative text for the image, important for accessibility
        />
    );
};

// Prop validation to ensure correct usage and to catch common errors during development
BasicImageComponent.propTypes = {
    className: PropTypes.string, // Optional CSS class to customize styling
    src: PropTypes.string.isRequired, // Image source URL, required
    width: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Width of the image, can be a string or number
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]), // Height of the image, can be a string or number
    alt: PropTypes.string.isRequired, // Alt text for accessibility, required
};

// Default props define default values for props that are not explicitly provided
BasicImageComponent.defaultProps = {
    className: "max-md:w-full", // Default class to make the image responsive
};

export default BasicImageComponent;

```

```jsx
<BasicImageComponent
    className="max-md:w-full"
    src={DemoImage}
    width={300}
    height={300}
    alt="Demo image"
/>
```

## Responsive Image Component

```jsx
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

```

```jsx
<ImageWithOverlayComponent
    src={DemoImage}
    alt="Demo image"
    overlayText="Demo overlay"
/>
```

## Lazy Loaded Image Component

```jsx
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
        onClick={onClick}     // Click handler for interactive behavior
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

```

```jsx
<InteractiveImageComponent
    className={}
    src={}
    width={}
    height={}
    alt={}
    onClick={}
/>
```

## Image with Overlay Component

```jsx
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

export default ImageWithOverlayComponent;

```

```jsx
<ImageWithOverlayComponent
    src={}
    alt={}
    overlayText={}
/>
```

## Interactive Image Component

```jsx
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

```

```jsx
<InteractiveImageComponent
    src={}
    alt={}
    width={}
    height={}
    className={}
    onClick={}
/>
```

## Multiple Sources Image Component

```jsx
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

```

```jsx
<MultiSrcImageComponent
    srcSet={}
    alt={}
    className={}
/>
```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
