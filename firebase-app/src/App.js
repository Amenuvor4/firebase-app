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
     <div>
      {user ? (
        <div className="p-5 min-h-screen bg-gray-50">
          {/* p-5 = padding: 1.25rem (20px) */}
          {/* min-h-screen = full height */}
          {/* bg-gray-50 = light gray background */}
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">🚀 Firebase React App</h1>
          <p className="text-gray-600 mb-4">Welcome, {user.email}!</p>
          
          <button 
            onClick={() => auth.signOut()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mb-6 transition-colors"
          >
            Logout
          </button>
          
          <TaskManager />
        </div>
      ) : (
        <AuthForm />
      )}
    </div>
  );
}

export default App;
