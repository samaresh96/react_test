import "../Styles/App.css"
import { lazy, Suspense, useState } from "react"

const Product = lazy(() => import("./Product"))


const App = () => {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(() => count + 1)
  }
  return (
    <>
      <button onClick={handleClick}>Click {count}</button>
      <div>
        <h1 style={{ color: "green" }}>This is a Lazy component Updated second time 10</h1>
      </div>
      {
        count > 5 && (
          <Suspense fallback="Loading....">
            <Product />
          </Suspense>
        )
      }
    </>
  )
}

export default App
