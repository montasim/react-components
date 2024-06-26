# Notification Components

This folder contains various designs and styles of Notification components, each suited for different use cases in web development.

## Contents

1. [Basic Notification](./BasicNotificationComponent.jsx)

## Basic Notification

```jsx
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

/**
 * Notification component to display custom notifications using SweetAlert2.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.title='You are offline'] - The title of the notification.
 * @param {string} [props.message='It seems like you have lost your internet connection. Please check your network settings and try again.'] - The message body of the notification.
 * @param {number} [props.visibleTimeInMilliseconds=2500] - The duration for which the notification is visible, in milliseconds.
 * @param {boolean} props.isVisible - A boolean indicating whether the notification is visible.
 * @param {Function} [props.onClose] - A callback function to execute when the notification closes.
 * @returns {null} The component does not render any HTML itself.
 */
const Notification = ({
      title = 'You are offline',
      message = 'It seems like you have lost your internet connection. Please check your network settings and try again.',
      visibleTimeInMilliseconds = 2500,
      isVisible,
      onClose
  }) => {
    useEffect(() => {
        let timerInterval;
        if (isVisible) {
            MySwal.fire({
                toast: true,
                position: 'top-end',
                width: '550px',
                html: (
                    <div className="bg-transparent flex flex-col text-start gap-4 text-[#014766]">
                        <strong className="text-xl">{title}</strong>
                        {message && <p>{message}</p>}
                    </div>
                ),
                color: '#014766',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showCancelButton: false,
                showConfirmButton: false,
                timer: visibleTimeInMilliseconds,
                timerProgressBar: true,
                willClose: () => {
                    clearInterval(timerInterval);
                    if (onClose) onClose();
                },
            });
        }
    }, [isVisible, title, message, visibleTimeInMilliseconds, onClose]);

    return null;
};

export default Notification;

```

```jsx
import React, { useState } from 'react';
import BasicNotificationComponent from './BasicNotificationComponent';

/**
 * App component demonstrating the usage of the Notification component.
 *
 * @returns {JSX.Element} The rendered component.
 */
const App = () => {
    const [notificationVisible, setNotificationVisible] = useState(false);

    /**
     * Function to show the notification.
     */
    const showNotification = () => {
        setNotificationVisible(true);
        setTimeout(() => {
            setNotificationVisible(false);
        }, 3000);
    };

    return (
        <div>
            <button onClick={showNotification}>Show Notification</button>
            <BasicNotificationComponent
                isVisible={notificationVisible}
                title="Connection Restored"
                message="Your internet connection is back online."
                visibleTimeInMilliseconds={3000}
                onClose={() => console.log('Notification closed')}
            />
        </div>
    );
};

export default App;
```

---

Feel free to contribute by adding more designs or enhancing the existing ones. Refer to the main [README](../README.md) for contribution guidelines.
