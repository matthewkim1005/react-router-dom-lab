import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
      <>
        <h2>Mailboxes</h2>
        <ul>
          {props.mailbox.map((currentMailbox, index) => (
            <li key={index}>
                <Link to={`/mailbox/${currentMailbox._id}`}>
                    Mailbox: {currentMailbox._id}
                </Link>
          </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;
  