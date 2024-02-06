import PropTypes from 'prop-types';

/**
 * BasicButton renders a button with customizable type, additional CSS classes, and an event handler.
 * It is designed to be reusable and adaptable for various parts of the application.
 *
 * @param {Object} props - The props for the BasicButton component.
 * @param {string} props.type - The type of button ('button', 'submit', or 'reset').
 * @param {string} props.className - Additional CSS classes for custom styling.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 */
function BasicButtonComponent({ buttonType, className, handleButtonClick, children }) {
    return (
        <button
            type={buttonType} // Specifies the button's type attribute.
            className={className} // Combines base and custom classes for styling.
            onClick={handleButtonClick} // Registers the click event handler.
        >
            {children} // Displays the button's label or content.
        </button>
    );
}

// Define the prop types to ensure proper usage of the BasicButton component.
BasicButtonComponent.propTypes = {
    buttonType: PropTypes.oneOf(['button', 'submit', 'reset']), // Restricts button to specific types.
    className: PropTypes.string, // Allows for additional styling with CSS classes.
    handleButtonClick: PropTypes.func.isRequired, // Ensures a function is provided for click events.
    children: PropTypes.node.isRequired, // Allows any React node to be used as content.
};

// Set default props to ensure the component has sensible defaults.
BasicButtonComponent.defaultProps = {
    buttonType: 'button', // Defaults the button type to 'button' if not specified.
    className: 'rounded-md', // Provides an empty string if no additional classes are specified.
};

export default BasicButtonComponent;
