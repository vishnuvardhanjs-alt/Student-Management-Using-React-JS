import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faPercent, faEthernet, faUser, faTableColumns, faFileLines } from '@fortawesome/free-solid-svg-icons'


function Icons(props) {
  return (
    <div className="opt">
      <FontAwesomeIcon size={"2x"} icon={props.icon }/>
      <p>{props.name}</p>
    </div>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-cont'>
      <div className="left-bar">
        <img src={Logo} alt="logo" className='logo' />
        <div className="left-opt">
          
          <Icons name="Regular Enrollment" icon={faUsers}/>
          <Icons name="Regular Enrollment" icon={faEthernet}/>
          <Icons name="Regular Enrollment" icon={faPercent}/>
          <Icons name="Regular Enrollment" icon={faTableColumns}/>
          <Icons name="Regular Enrollment" icon={faFileLines}/>
        </div>
      </div>
      <div className="right-cont">
        <div className="header">
          <p>Student Management</p>
        </div>
        <div className="cards">
          <div className="card">
            <FontAwesomeIcon size={"3x"} icon={faUser} />
            <div className="card-right">
              <p>8</p>
              <p>Regular</p>
            </div>
          </div>
          <div style={{ backgroundColor: "purple" }} className="card">
            <FontAwesomeIcon size={"3x"} icon={faUser} />
            <div className="card-right">
              <p>8</p>
              <p>Regular</p>
            </div>
          </div>
          <div style={{ backgroundColor: "green" }} className="card">
            <FontAwesomeIcon size={"3x"} icon={faUser} />
            <div className="card-right">
              <p>8</p>
              <p>Regular</p>
            </div>
          </div>
        </div>
        <div className="right-icons">
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        <Icons name="Regular Enrollment" icon={faUsers}/>
        </div>
      </div>
    </div>
  )
}

export default App
