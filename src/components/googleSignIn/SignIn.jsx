import { useState } from "react"
import { auth, provider } from "./config"
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import Home from "./Home"

function SignIn() {

    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user)
            setValue(data.user.email)
            localStorage.setItem("email", data.user)
        })
    }
    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [setValue])

    return (
        <div>
            {value ? <Home /> : <button onClick={handleClick}>Signin with Google</button>}

        </div>
    )
}

export default SignIn
