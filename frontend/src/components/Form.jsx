import React from 'react'
import api from '../api'
import { Link, useNavigate } from 'react-router-dom'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants'

const Form = ({route, method}) => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()

    const name = method === "login" ? "Login" : "Register"
    const ver = method === "login" ? true : false

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {   
            const res = await api.post(route, { username, password })
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                localStorage.setItem("Username", username)
                navigate("/")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 form-container">
            <div className='style_logo flex justify-center items-center'>
            <img src="png-logo_principal.png" className="logo-register w-3/6 lg:w-24 justify-center" alt="logo-register" />
            </div>
            <h1>{name}</h1>
            <div className='styles-forms'>
            <input 
                className='form-input text-black'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
            />
            <input
                className='form-input text-black' 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
            <input className="form-submit" type="submit" value="Submit" />
            <div className='mt-2'>
                {method === 'login' ? "Ainda não possui cadastro" : "Já possui cadastro" }
                {ver && 
                    <Link to={"/register"}> cadastre-se já.</Link>
                }
                {!ver &&
                    <Link to={"/login"}> faça seu login aqui.</Link>
                }
            </div>
            </div>
        </form>
    )
}

export default Form