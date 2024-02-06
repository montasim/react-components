import PropTypes from 'prop-types';

/**
 * BasicInputComponent renders an input field with configurable properties.
 * It supports various input types and requires essential attributes like name and id
 * to be specified. Change handlers and required state can also be configured.
 */
function BasicInputComponent({
 className,
 inputType,
 inputPlaceholder,
 inputName,
 inputId,
 inputValue,
 handleInputChange,
 isInputRequired,
}) {
    return (
        <input
            className={className}
            type={inputType}
            placeholder={inputPlaceholder}
            name={inputName}
            id={inputId}
            value={inputValue}
            onChange={handleInputChange}
            required={isInputRequired}
        />
    );
}

// Prop validation to ensure correct usage and to catch common errors during development
BasicInputComponent.propTypes = {
    className: PropTypes.string,
    inputType: PropTypes.oneOf(['text', 'password', 'email', 'number', 'search']), // Restricts to specific input types
    inputPlaceholder: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleInputChange: PropTypes.func.isRequired,
    isInputRequired: PropTypes.bool,
};

// Default props define default values for props that are not explicitly provided
BasicInputComponent.defaultProps = {
    className: 'block w-full rounded-md bg-[#2D323F] px-3 py-2.5',
    inputType: 'text',
    isInputRequired: false,
};

export default BasicInputComponent;
