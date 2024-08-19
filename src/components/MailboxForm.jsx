import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialState = {
    _id: 0,
    holder: '',
    size: '',
};

const MailboxForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailbox');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value });
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="holder">Mailbox Holder:</label>
                <input
                    type="text"
                    id="holder"
                    name="holder"
                    value={formData.holder}
                    onChange={handleChange}
                />
                <label htmlFor="size">Size:</label>
                <select id="size" name="size" value={formData.size} onChange={handleChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;
