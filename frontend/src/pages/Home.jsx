import ProtectedRoute from '../components/ProtectedRoute'
import React, { Component } from 'react'

// Promessa é divida, Olá, eu venho explicar para vocês porque não faz sentido usa classe. 
// O uso da classe até pouco tempo atrás era necessario por conta de algumas funções que a classe "Component" tinhe.
// Porem nos tempos recentes essas funções foram basicamente "Emancipadas" assim não é mais necessario o uso de
// Componentes baseados em Classe
const Home = () => {
  return (
    <ProtectedRoute>
      <div>
        Home
      </div>
    </ProtectedRoute>
  )
}

export default Home