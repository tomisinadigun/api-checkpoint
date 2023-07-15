import axios from 'axios'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [users, setUsers] = useState([])
  const [savedUsers, setSavedUsers] = useState([])

  // setting the api url from which data is fetched 
  const url = "https://jsonplaceholder.typicode.com/users"
  // const jsonplaceholderUrl = "http://localhost:3000/users"


  // function to fetch data from the api 
  const fetchUsers = async() => {
    try {
      const response = await axios.get(url)
      setUsers(response?.data)
    } catch (error) {

    }

  }

  // function to post data to the jsonplaceholder
  const saveUsers = async() => {
    try{
      axios.post("http://localhost:3000/users", [users])
    }catch(error) {

    }
  }

  

  // const fetchSaveUsers = async() => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/users")
  //     setSavedUsers(response?.data)

  //   }catch (error){

  //   }

  // }
  console.log(users)

  // calling the fetchUsers and saveUsers using useEffect 
  useEffect(() => {
    fetchUsers()
    saveUsers()
    // fetchSaveUsers()
  }, [])




  
  return (
    <>
      <div className="personList">

        {
          users? 
            users.map((person) => {
              return(
                <div className="personCard" key={person.id}>
                  <div>
                    <span><span className='label'>Username:</span> <span className='username'>{person.username}</span></span>
                  </div>
                  <p>{person.name}</p>
                  <p>{person.email}</p>
                  <p>{person.address.city}</p>
                  <p>{person.phone}</p>
                  <p>{person.website}</p>

                </div>
              )
            })
          :
          <h1>List not available</h1>
        }

      </div>
      
    </>
  )
}

export default App
