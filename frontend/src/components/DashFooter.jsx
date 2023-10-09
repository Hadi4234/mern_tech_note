import {useNavigator, useLocation} from 'react-router-dom'
import {HiHome} from 'react-icons/hi'

const DashFooter = () => {


  const navigate = useNavigator()
  const {pathname} = useLocation()
  const onGoHomeClick =()=> navigate("/dash")
  let goHomeButton = null
  if(pathname !== "/dash"){
    goHomeButton = <button className='dash-footer__button icon-button' title="Home" onClick={onGoHomeClick}>
      <HiHome/>
    </button>
  }
  const content =(
  <footer className='dash-footer'>
      {goHomeButton}
      <p>Current User:</p>
      <p>Status:</p>
    </footer>

  )
  return content
}

export default DashFooter
