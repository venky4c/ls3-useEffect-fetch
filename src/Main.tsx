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
        <div key={item.id} style={{boxShadow: '5px 5px 3px teal'}}>
          <p>Email: &nbsp;{item.email}</p>
          <p>FirstName: {item.first_name}</p>
          <img src={item.avatar} alt="none" />
        </div>
      ))}
    </div>
  )
}

export default Main
