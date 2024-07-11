import { useState } from "react"
import { auth, provider, facebookProvider } from "./config"
import { signInWithPopup } from "firebase/auth"
import { useEffect } from "react"
import Home from "./Home"

function SignIn() {

    const [value, setValue] = useState([])

    const handleGoogleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            console.log(data.user)
            setValue(data.user.email)
            localStorage.setItem("email", data.user)
        })
    }

    const handleFacebookClick = () => {
        signInWithPopup(auth, facebookProvider).then((data) => {
            console.log(data.user)
            setValue(data.user)
            localStorage.setItem("email", data.user)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [setValue])

    return (
        <div>
            {value ? <Home /> : <button onClick={handleGoogleClick}>Signin with Google</button>}
            {value ? <Home /> : <button onClick={handleFacebookClick}>Signin with FaceBook</button>}

        </div>
    )
}

export default SignIn
