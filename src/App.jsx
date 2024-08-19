import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import { Route, Routes } from 'react-router-dom';

const initialState = [
  { _id: 1, holder: 'Alex', size: 'small' },
  { _id: 2, holder: 'Jason', size: 'medium' },
  { _id: 3, holder: 'Kat', size: 'large' }
];

const App = () => {
  const [mailbox, setMailbox] = useState(initialState);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailbox.length + 1;
    setMailbox([...mailbox, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <main>Post Office</main>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailbox" element={<MailboxList mailbox={mailbox} />} />
        <Route path="/mailbox/:mailboxId" element={<MailboxDetails mailbox={mailbox} />}/> 
        <Route path="/mailbox/new" element={<MailboxForm addMailbox={addMailbox} />} />
      </Routes>
    </>
  );
};

export default App;
