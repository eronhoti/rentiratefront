import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UpdateUserDataContext } from '../../Contexts/UpdateUserData/UpdateUserData';

export default function DeleteProfile() {
    const [[name, setName], [phone, setPhone], [email, setEmail]] = useContext(UpdateUserDataContext);
    const history = useHistory();

    const handleDeleteAccount = async () => {
        try {
            // Call your API endpoint to delete the user account
            await axios.delete('your-delete-account-api-url');

            // Clear any user data from local storage or context
            localStorage.clear(); // Clear all localStorage data (or only the necessary keys)
            setName(''); // Clear user name in context
            setPhone(''); // Clear user phone in context
            setEmail(''); // Clear user email in context

            // Redirect to signup page
            history.push('/signup');

            toast.success('Your account has been deleted successfully.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error('Error deleting account:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <>
            <div className="modal fade" id="deleteProfileModal" tabIndex="-1" aria-labelledby="deleteProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="deleteProfileModalLabel">Delete Account</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete your account?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-danger" onClick={handleDeleteAccount}>Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
