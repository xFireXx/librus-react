import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import useStateStorage from '../../hooks/useStateSessionStorage';

export default function PanelStudent() {
  const [loggedInStudent] = useStateStorage(
    'loggedInStudent',
    false
  );

  if (loggedInStudent === false) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      Panel studenta
      <Link to="/">Strona główna</Link>
    </>
  );
}
