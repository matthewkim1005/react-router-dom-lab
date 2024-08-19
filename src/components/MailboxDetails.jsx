import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedMailbox = props.mailbox.find((box) => box._id === Number(mailboxId));

    // console.log('Mailbox Object:', selectedMailbox)

    return (
        <>
            <h1>Mailbox {selectedMailbox._id}</h1>
            <h2>Details</h2>
            <dl className='mail-box'>
                <dt>Mailbox Holder: {selectedMailbox.holder}</dt>
                <dt>Mailbox Size: {selectedMailbox.size}</dt>
            </dl>
        </>
    );
};

export default MailboxDetails;
