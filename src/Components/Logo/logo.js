import '../CSS/style.css'
import { Link } from 'react-router-dom'

function Logo(){
    return(
        <div className='logo'>
           <Link to='/Bollywood'><h3 className='therotate'>The</h3></Link>
            <Link to='/Bollywood'><h1 id='siren'>Siren</h1></Link>
        </div>
    )
}

export default Logo