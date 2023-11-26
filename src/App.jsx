import React, {useState} from 'react'
import Register from './components/register'
import LogIn from './components/logIn'

const App = () => {
  const[activePage, setActivePage] = useState('register');

  const change_page = (page_change) => {
        setActivePage(page_change)
  }

  return (
    <main >
       <div className='' >
           {(activePage == "register" ? <Register onFormSwitch={change_page} /> : <LogIn onFormSwitch={change_page} />)}
       </div>

    </main>
  )
}

export default App