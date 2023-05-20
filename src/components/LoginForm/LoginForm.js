import React from 'react';
import { Navigate } from 'react-router-dom';
import useStateStorage from '../../hooks/useStateSessionStorage';

export default function LoginForm() {
  const [loggedInStudent, setIsLoggedInStudent] = useStateStorage(
    'loggedInStudent',
    false
  );

  const handleButtonStudent = () => {
    setIsLoggedInStudent(true);
  };

  if (loggedInStudent) {
    return <Navigate to="/panelStudent" />;
  }

  return (
    <>
      <div class="flex items-center justify-center h-screen">
        <button
          type="button"
          onClick={handleButtonStudent}
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Wejdź do panelu ucznia
        </button>
      </div>
    </>
  );
}
