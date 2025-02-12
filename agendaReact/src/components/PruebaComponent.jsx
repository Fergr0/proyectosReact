import React, { useEffect, useState } from 'react'

function PruebaComponent(props) {

  const [user, setUser] = useState({}); // Obtiene el usuario del contexto
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      console.log(user);
    }
  }, [user]);

  return (
    <section>
        <div>
            Hola
        </div>
    </section>
  )
}

export default PruebaComponent