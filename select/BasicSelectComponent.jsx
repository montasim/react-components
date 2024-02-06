import PropTypes from 'prop-types';

/**
 * Select renders a dropdown list with customizable selectOptions.
 * It allows for selection to be required, and it can be styled with a custom class.
 * The component also handles changes via a provided handleSelectChange function.
 */
function BasicSelectComponent({
    className,
    selectName,
    selectId,
    selectValue,
    selectOptions,
    handleSelectChange,
    isSelectRequired,
}) {
    return (
        <select
            className={className} // Use className for custom styling
            name={selectName}
            id={selectId}
            value={selectValue}
            onChange={handleSelectChange}
            required={isSelectRequired}
        >
            <option value="">Select Priority</option>
            {selectOptions.map((selectOption) => (
                <option key={selectOption} value={selectOption}>
                    {selectOption}
                </option>
            ))}
        </select>
    );
}

// Prop validation to ensure correct usage and to catch common errors during development
BasicSelectComponent.propTypes = {
    className: PropTypes.string,
    selectName: PropTypes.string.isRequired,
    selectId: PropTypes.string.isRequired,
    selectValue: PropTypes.string.isRequired,
    selectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleSelectChange: PropTypes.func.isRequired,
    isSelectRequired: PropTypes.bool,
};

// Default props define default values for props that are not explicitly provided
BasicSelectComponent.defaultProps = {
    className: 'block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5',
    isSelectRequired: true,
};

export default BasicSelectComponent;
