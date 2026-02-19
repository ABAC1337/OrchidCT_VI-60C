import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const menuItems = [
    { label: 'Overview', icon: 'dashboard', path: '/dashboard' },
    { label: 'Kamar Aktif', icon: 'meeting_room', path: '/dashboard/active-rent' },
    { label: 'Mutasi', icon: 'receipt_long', path: '/dashboard/mutations' },
]

const accountItems = [
    { label: 'Profil', icon: 'person', path: '/dashboard/profile' },
    { label: 'Pengaturan', icon: 'settings', path: '/dashboard/profile' },
]

export default function DashboardLayout() {
    const location = useLocation()
    const navigate = useNavigate()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { user, logout } = useAuth()
    const initials = user?.name?.split(' ').map(n => n[0]).join('') || '?'

    const isActive = (path) => location.pathname === path

    const SidebarContent = () => (
        <>
            <div className="flex items-center gap-3 px-4 py-2 mb-8">
                <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-2xl">apartment</span>
                </div>
                <div>
                    <h1 className="text-lg font-bold tracking-tight text-white font-display">OrchidCT</h1>
                    <p className="text-xs text-gray-500">Tenant Portal</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-1 px-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">Menu Utama</p>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={isActive(item.path) ? 'sidebar-link-active' : 'sidebar-link'}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}

                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2 mt-6">Akun</p>
                {accountItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.path}
                        className={isActive(item.path) ? 'sidebar-link-active' : 'sidebar-link'}
                        onClick={() => setSidebarOpen(false)}
                    >
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </div>

            <div className="px-2 mt-auto pt-4 border-t border-white/10">
                <button
                    onClick={() => { logout(); navigate('/login') }}
                    className="sidebar-link w-full text-left text-red-400 hover:text-red-300"
                >
                    <span className="material-symbols-outlined text-xl">logout</span>
                    Logout
                </button>
            </div>
        </>
    )

    return (
        <div className="flex min-h-screen bg-background-light">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 bottom-0 w-[260px] bg-background-dark flex flex-col py-6 z-50 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <SidebarContent />
            </aside>

            {/* Main */}
            <div className="flex-1 lg:ml-[260px] flex flex-col min-h-screen">
                {/* Topbar */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setSidebarOpen(true)}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                        <div>
                            <h2 className="text-xl font-bold text-text-main font-display">Dashboard Overview</h2>
                            <p className="text-sm text-text-muted">Selamat datang kembali di panel tenant.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-green-200 text-green-700 text-sm font-medium bg-green-50">
                            Status: <span className="font-bold">Aktif</span>
                        </span>
                        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                            <span className="material-symbols-outlined text-text-muted">notifications</span>
                            <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-text-main">{user?.name || 'Tenant'}</p>
                                <p className="text-xs text-text-muted">Kamar {user?.room || '-'}</p>
                            </div>
                            <div className="size-10 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white font-bold text-sm">
                                {initials}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
