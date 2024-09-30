import React from 'react'
import ProtectedRoute from '../components/ProtectedRoute'

export default function Home() {
  return (
    <ProtectedRoute>
        <div>Home</div>
    </ProtectedRoute>
  )
}