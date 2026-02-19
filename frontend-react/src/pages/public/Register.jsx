import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div className="bg-background-light text-text-main min-h-screen flex items-center justify-center p-4 py-12">
            <div className="w-full max-w-[480px] bg-white rounded-[12px] shadow-sm border border-gray-100 p-8 sm:p-10">
                <div className="flex flex-col items-center mb-8">
                    <Link to="/" className="flex items-center gap-2.5 mb-6">
                        <div className="flex items-center justify-center size-10 bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight font-display text-text-main">OrchidCT</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-text-main text-center mb-1 font-display">Daftar Akun Baru</h1>
                    <p className="text-text-secondary text-sm text-center">Mari bergabung dan temukan hunian kos terbaik Anda.</p>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="form-label" htmlFor="fullname">Nama Lengkap</label>
                        <input className="form-input" id="fullname" placeholder="Masukkan nama lengkap" type="text" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" id="email" placeholder="nama@email.com" type="email" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="phone">Nomor HP</label>
                        <input className="form-input" id="phone" placeholder="0812xxxx" type="tel" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">Password</label>
                        <input className="form-input" id="password" placeholder="••••••••" type="password" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="confirm-password">Konfirmasi Password</label>
                        <input className="form-input" id="confirm-password" placeholder="••••••••" type="password" />
                    </div>
                    <button className="w-full mt-2 py-3.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-[15px]" type="submit">
                        Daftar
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
                    <span>Daftar dengan Google</span>
                </button>
                <div className="text-center text-sm text-text-secondary">
                    Sudah punya akun? <Link to="/login" className="font-bold text-primary hover:text-primary-dark transition-colors">Masuk</Link>
                </div>
            </div>
        </div>
    )
}
