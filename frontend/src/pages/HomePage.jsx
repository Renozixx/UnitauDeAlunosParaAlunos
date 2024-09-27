import React from "react";
import ProtectedRouter from "../components/PretectedRoute";
const HomePage = () => {
    return (
        <>
        <ProtectedRouter>
            <div>HomePage</div>
        </ProtectedRouter>
        </>
    )
}

export default HomePage