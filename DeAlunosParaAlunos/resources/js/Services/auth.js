import api from "../api";

async function login(email, senha){
    try {
        const response = await api.post("/login", {email, senha})

        if(response.data.status == 'success'){
            return true   
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
        throw error
    }
}