import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function App() {
  const [data, setData] = useState([])
  const MyShal = withReactContent(Swal)
  console.log(data)

  const array = [
    { title: 'Ola', day: 'hoje', user: 'brendo' },
  ]

  useEffect(() => {
    loadDataFromAPI()
  }, [])

  function loadDataFromAPI() {
    const apiURL = import.meta.env.VITE_APIURL;
    axios
      .get(`${apiURL}/todosa`)
      .then(({ dataerror }) => {
        setData(data);
      })
      .catch(() => {
        MyShal.fire({
          title: "Ooops!",
          text: "Something went wrong... 😢"
        })
      });
  }


  return (
    <>
      <div>
        <h1>{array.title}</h1>
        <h2>{array.day}</h2>
        <h2>{array.user}</h2>
      </div>
    </>
  )
}

export default App
