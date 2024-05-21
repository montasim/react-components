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
