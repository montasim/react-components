# Loading Components

This folder contains various designs and styles of Loading components, each suited for different use cases in web development.

## Contents

1. [Basic Loading](./BasicLoadingComponent.jsx)

## Basic Loading

```jsx
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

/**
 * LoadingSpinner component to display a loading spinner using SweetAlert2.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.text='Please wait, the system is preparing necessary data.'] - The text to display in the loading spinner.
 * @param {boolean} props.isVisible - A boolean indicating whether the loading spinner is visible.
 * @returns {null} The component does not render any HTML itself.
 */
const BasicLoadingComponent = ({ text = 'Please wait, the system is preparing necessary data.', isVisible }) => {
    useEffect(() => {
        if (isVisible) {
            MySwal.fire({
                width: '550px',
                html: (
                    <div className="bg-transparent flex flex-col items-center justify-center gap-4">
                        <img className="w-20" src="../media/gifs/lightBlueLoadingSpinner.gif" alt="Loading gif" />
                        <strong>{text}</strong>
                    </div>
                ),
                color: '#014766',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showConfirmButton: false,
                didOpen: () => {
                    Swal.showLoading();
                    Swal.getActions().style.display = 'none'; // Hide the action bar as it's not needed
                },
            });
        } else {
            Swal.close();
        }
    }, [isVisible, text]);

    return null;
};

export default BasicLoadingComponent;

```

```jsx
import React, { useState } from 'react';
import BasicLoadingComponent from './BasicLoadingComponent';

/**
 * App component demonstrating the usage of the LoadingSpinner component.
 *
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
    const [loadingVisible, setLoadingVisible] = useState(false);

    /**
     * Function to show the loading spinner.
     */
    const showLoadingSpinner = () => {
        setLoadingVisible(true);
        setTimeout(() => {
            setLoadingVisible(false);
        }, 5000); // Hide the spinner after 5 seconds
    };

    return (
        <div>
            <button onClick={showLoadingSpinner}>Show Loading Spinner</button>
            <BasicLoadingComponent
                isVisible={loadingVisible}
                text="Loading data, please wait..."
            />
        </div>
    );
};

export default App;

```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
