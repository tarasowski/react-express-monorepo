import Listing from "./components/Listing"
import { useState, useEffect } from "react"
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {

    async function fetchCars() {
      NProgress.start();
      const response = await fetch("http://localhost:3001/api/v1/cars?limit=15", { method: "GET", headers: { "Accept": "application/json" } })
      const data = await response.json()
      setCars(data)
      NProgress.done();
    }

    fetchCars()
  }, [])

  return (
    <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
      <div style={{ width: "500px" }}>
        <h1>Das ist meine Autohaus app</h1>
        <Listing data={cars} />
      </div>
    </div>
  )
}

export default App
