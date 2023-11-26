import React, {useState, useRef, useEffect} from "react"

const App = () => {
  const[count, setCount] = useState(0)
  const render = useRef(0)

  useEffect(() => {
     render.current = render.current + 1
  })

  
  return (
   <div className=" ml-56 py-40 space-y-2" >

      <div className="space-x-2 text-4xl">
         <button onClick={() => setCount(count+1)}>+</button>
         <span>{count}</span>
         <button onClick={() => setCount(count-1)}>-</button>
      </div>

          <div className="space-x-2 text-4xl">
            <span> rendered {render.current} times</span>
          </div>
  </div>
  )
}

export default App