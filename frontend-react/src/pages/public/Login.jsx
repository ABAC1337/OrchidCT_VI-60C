import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const result = login(email, password)
        if (result.success) {
            navigate(result.user.role === 'admin' ? '/admin' : '/dashboard')
        } else {
            setError(result.message)
        }
    }

    return (
        <div className="bg-background-light text-text-main min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-[480px] bg-white rounded-[12px] shadow-sm border border-gray-100 p-8 sm:p-10">
                <div className="flex flex-col items-center mb-8">
                    <Link to="/" className="flex items-center gap-2.5 mb-6">
                        <div className="flex items-center justify-center size-10 bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight font-display text-text-main">OrchidCT</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-text-main text-center mb-1 font-display">Selamat Datang Kembali</h1>
                    <p className="text-text-secondary text-sm text-center">Masuk untuk mengelola hunian kos Anda.</p>
                </div>

                {/* Temporary credentials hint */}
                <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-xl text-sm">
                    <p className="font-bold text-primary mb-2">Demo Accounts:</p>
                    <p className="text-text-muted"><span className="font-semibold text-text-main">Admin:</span> admin@orchidct.com / admin123</p>
                    <p className="text-text-muted"><span className="font-semibold text-text-main">Tenant:</span> budi@orchidct.com / tenant123</p>
                </div>

                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-medium flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">error</span>
                        {error}
                    </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" id="email" placeholder="nama@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-text-main font-body" htmlFor="password">Password</label>
                            <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary-dark">Lupa Password?</Link>
                        </div>
                        <input className="form-input" id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button className="w-full py-3.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-[15px]" type="submit">
                        Masuk
                    </button>
                </form>
                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-500">Atau</span>
                    </div>
                </div>
                <button className="social-btn group mb-8">
                    <img alt="Google logo" className="w-5 h-5 group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFp1V_cFOl7tCSj38nWDHnNm_o6uKHy3v1bZWFNXaeHaJ6etfQ8bmtskVhgq0OMhDETEeDf8_w9yxlUW8pck4iQZZIvTAft-nJiAd7hxwWxerMhnzw-MFBnDnBR8jjLEj9yUeB8KjXO4N8k9XfBwlmnF-HBm3d--cYIlFxtXOoiuwAcZx5uq3J4vIhMDcdyawjsmR9cxOGRyJBVhyObOZphSjXpAJ_lt70S7AhXnCJagnd1qurnEPFsdGzBxl5aKRiKkxLfza49Cw" />
                    <span>Lanjutkan dengan Google</span>
                </button>
                <div className="text-center text-sm text-text-secondary">
                    Belum punya akun? <Link to="/register" className="font-bold text-primary hover:text-primary-dark transition-colors">Daftar</Link>
                </div>
            </div>
        </div>
    )
}
