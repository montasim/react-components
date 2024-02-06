# Anchor Components

This folder contains various designs and styles of anchor components, each suited for different use cases in web development.


## Contents

1. [Basic Anchor Component](./BasicAnchorComponent.jsx)


## Basic Anchor Component

```jsx
import PropTypes from 'prop-types';

/**
 * Renders a customizable anchor element.
 * @param {string} className - CSS classes to apply for custom styling.
 * @param {string} to - The URL that the anchor element points to.
 * @param {React.ReactNode} children - The content to be rendered within the anchor.
 */
function BasicAnchorComponent({ className, href, children }) {
    // Use className for CSS classes to align with React standard
    // Use href directly to match the native HTML attribute for clarity and consistency
    return (
        <a
            className={className} // Incorporate a base class for default styling
            href={href}
            rel="noopener noreferrer" // Good practice for external links (adjust if not needed)
            target="_blank" // Same as above, use judiciously based on link's nature
        >
            {children}
        </a>
    );
}

// Define propTypes for props validation
BasicAnchorComponent.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired, // 'href' aligns with the native HTML attribute
    children: PropTypes.node.isRequired,
};

// Define defaultProps for default values
BasicAnchorComponent.defaultProps = {
    className: 'flex items-center gap-x-4 text-white',
};

export default BasicAnchorComponent;

```

```jsx
<BasicAnchorComponent
    className="hover:bg-blue-500"
    href="/example-page"
>
    Go to Example Page
</BasicAnchorComponent>
```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
