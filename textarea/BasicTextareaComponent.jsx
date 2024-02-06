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
