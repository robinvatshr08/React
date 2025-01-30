import { useParams } from "react-router-dom"

const User = () => {
    const {id} =useParams()
  return (
    <div className="justify-center p-4 text-center bg-gray-400 text-white text-3xl ">
        <h1>Robin {id} </h1>
    </div>
  )
}

export default User