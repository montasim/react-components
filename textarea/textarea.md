# Textarea Components

This folder contains various designs and styles of textarea components, each suited for different use cases in web development.


## Contents

1. [Basic Textarea Component](./BasicTextareaComponent.jsx)


## Textarea Component

```jsx
import PropTypes from 'prop-types';

/**
 * Textarea provides a customizable textarea field.
 * It supports custom styling, required field validation, and handles input changes.
 */
function BasicTextareaComponent({
  className,
  textareaName,
  textareaId,
  textareaValue,
  handleTextareaChange,
  isTextareaRequired,
}) {
    return (
        <textarea
            className={className} // Use className for custom styling
            name={textareaName}
            id={textareaId}
            value={textareaValue}
            onChange={handleTextareaChange}
            required={isTextareaRequired}
        />
    );
}

// Prop validation to ensure correct usage and to catch common errors during development
BasicTextareaComponent.propTypes = {
    className: PropTypes.string,
    textareaName: PropTypes.string.isRequired,
    textareaId: PropTypes.string.isRequired,
    textareaValue: PropTypes.string.isRequired,
    handleTextareaChange: PropTypes.func.isRequired,
    isTextareaRequired: PropTypes.bool,
};

// Default props define default values for props that are not explicitly provided
BasicTextareaComponent.defaultProps = {
    className: 'block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]',
    isTextareaRequired: true,
};

export default BasicTextareaComponent;

```

```jsx
<BasicTextareaComponent
    className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
    textareaName="description"
    textareaId="description"
    textareaValue={task.description}
    handleTextareaChange={handleInputChange}
    isTextareaRequired={true}
/>
```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
