import {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {name}=useContext(UserContext)

    if(!name) return <div>please login</div>

    return <div> welome {name.username} </div>
  
}

export default Profile