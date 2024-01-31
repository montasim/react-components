import PropTypes from 'prop-types';

function BasicTextareaComponent({
   customClass,
   inputName,
   inputId,
   inputValue,
   handleInputChange,
   isInputRequired,
}) {
    return (
        <textarea
            className={customClass}
            name={inputName}
            id={inputId}
            value={inputValue}
            onChange={handleInputChange}
            required={isInputRequired}
        />
    );
}

BasicTextareaComponent.propTypes = {
    customClass: PropTypes.string,
    inputName: PropTypes.string.isRequired,
    inputId: PropTypes.string.isRequired,
    inputValue: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    isInputRequired: PropTypes.bool,
};

BasicTextareaComponent.defaultProps = {
    customClass: 'block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]',
    isInputRequired: true,
};

export default BasicTextareaComponent;
