import { createContext, useContext, useState } from 'react'

// Temporary mock users
const MOCK_USERS = [
    { id: 1, email: 'admin@orchidct.com', password: 'admin123', name: 'Admin User', role: 'admin' },
    { id: 2, email: 'budi@orchidct.com', password: 'tenant123', name: 'Budi Santoso', role: 'tenant', room: '102' },
]

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('orchidct_user')
        return saved ? JSON.parse(saved) : null
    })

    const login = (email, password) => {
        const found = MOCK_USERS.find(u => u.email === email && u.password === password)
        if (!found) return { success: false, message: 'Email atau password salah.' }
        const { password: _, ...userData } = found
        setUser(userData)
        localStorage.setItem('orchidct_user', JSON.stringify(userData))
        return { success: true, user: userData }
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('orchidct_user')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === 'admin', isTenant: user?.role === 'tenant' }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
