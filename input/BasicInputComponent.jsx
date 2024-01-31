import PropTypes from 'prop-types';

function BasicInputComponent({
     customClass,
     inputType,
     inputName,
     inputId,
     inputValue,
     handleInputChange,
     isInputRequired,
 }) {
    return (
        <input
            className={customClass}
            type={inputType}
            name={inputName}
            id={inputId}
            value={inputValue}
            onChange={handleInputChange}
            required={isInputRequired}
        />
    );
}

BasicInputComponent.propTypes = {
    customClass: PropTypes.string,
    inputType: PropTypes.oneOf(['text', 'password', 'email', 'number']), // Adjust the allowed input types as needed
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    handleInputChange: PropTypes.func.isRequired,
    isInputRequired: PropTypes.bool,
};

BasicInputComponent.defaultProps = {
    customClass: 'block w-full rounded-md bg-[#2D323F] px-3 py-2.5',
    inputType: 'text',
    isInputRequired: false,
};

export default BasicInputComponent;
