import {useNavigate} from "react-router-dom"

function Navigation(){
    const navigate = useNavigate()
    return(<>
        <div>
            <button onClick={()=>{navigate("/sha256")}}>Hex</button>
            <button onClick={()=>{navigate("/hash")}}> Hashing</button>
        </div>
    
    </>)
}

export default Navigation