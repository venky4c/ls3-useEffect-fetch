import React from 'react'

function Main() {
  const [result, setResult] = React.useState([])
  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(res => {
        console.log('data is >>>>>', res.data)
        setResult(res.data)
      })
  }, [])

  return (
    <div>
      {result.map(item => (
        <div key={item.id}>
          <p>Email: &nbsp{item.email}</p>
          <p>FirstName: {item.first_name}</p>
        </div>
      ))}
    </div>
  )
}

export default Main
