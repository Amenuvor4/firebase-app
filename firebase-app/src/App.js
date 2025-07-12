import React from 'react';
import AuthForm from './components/AuthForm';
import TaskManager from './components/TaskManager';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsub;
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 Firebase React App</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={() => auth.signOut()}>Logout</button>
          <TaskManager />
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
