import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'
    const { user } = useAuth()
    const dashboardPath = user?.role === 'admin' ? '/admin' : '/dashboard'
    const initials = user?.name?.split(' ').map(n => n[0]).join('') || ''

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300 ${scrolled || !isHome
            ? 'glass-nav border-white/40'
            : 'bg-transparent border-transparent'
            }`}>
            <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="flex items-center justify-center size-9 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight font-display text-text-main">OrchidCT</span>
                </Link>

                <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    <Link to="/" className={location.pathname === '/' ? 'nav-link-active' : 'nav-link'}>Beranda</Link>
                    <Link to="/rooms" className={location.pathname === '/rooms' ? 'nav-link-active' : 'nav-link'}>Kamar</Link>
                    <a href={isHome ? '#fasilitas' : '/#fasilitas'} className="nav-link">Fasilitas</a>
                    <a href={isHome ? '#tentang' : '/#tentang'} className="nav-link">Tentang</a>
                </div>

                <div className="flex items-center gap-4">
                    {user ? (
                        <Link
                            to={dashboardPath}
                            className="hidden md:flex items-center gap-3"
                        >
                            <span className="text-sm font-bold text-text-main">{user.name}</span>
                            <div className="size-10 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                                {initials}
                            </div>
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="hidden md:flex items-center justify-center rounded-xl h-11 px-8 bg-primary hover:bg-primary/90 transition-all text-white text-[15px] font-bold tracking-wide shadow-lg shadow-primary/25 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Login
                        </Link>
                    )}
                    <button
                        className="md:hidden p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-2">
                    <Link to="/" className="block py-2 font-medium text-text-main" onClick={() => setMobileOpen(false)}>Beranda</Link>
                    <Link to="/rooms" className="block py-2 font-medium text-text-main" onClick={() => setMobileOpen(false)}>Kamar</Link>
                    <a href="#fasilitas" className="block py-2 font-medium text-text-muted" onClick={() => setMobileOpen(false)}>Fasilitas</a>
                    <a href="#tentang" className="block py-2 font-medium text-text-muted" onClick={() => setMobileOpen(false)}>Tentang</a>
                    {user ? (
                        <Link to={dashboardPath} className="block w-full text-center py-3 bg-primary text-white font-bold rounded-xl mt-2" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                    ) : (
                        <Link to="/login" className="block w-full text-center py-3 bg-primary text-white font-bold rounded-xl mt-2" onClick={() => setMobileOpen(false)}>Login</Link>
                    )}
                </div>
            )}
        </nav>
    )
}
