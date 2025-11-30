import React, { useEffect, useState } from 'react'

function App() {

  const [ backendData, setBackendData ] = useState([{}])
  
  useEffect(() => {
    fetch("/api/applications")
    .then(response => response.json())
    .then(data => {
      setBackendData(data);
    })
  }, [])

  return (
    <div>
      {
        (typeof backendData.applications === 'undefined') ? (
          <p>loading...</p>
        ) : (
          backendData.applications.map((application, i) => (
            <p key={i}>{application.company}</p>
          ))
        )
      }
    </div>
  )
}

export default App