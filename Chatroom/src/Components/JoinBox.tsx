
import { joinboxProps} from '../Interfaces/interface'
export default function JoinBox({userData,setUserData,registerUser}:joinboxProps) {
    function handleUserName(event:HTMLInputElement){
        setUserData({...userData,"username":event.value})
      console.log(event.value)
    }
  return (
    <div className='register'>
        <input
        id='user-name'
        placeholder='Enter your name'
        value={userData.username}
        onChange={(e)=>handleUserName(e.target)}>
        </input>
        <button type='button' onClick={registerUser}>
            CONNECT
        </button>
    </div>
  )
}
