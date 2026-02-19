import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    return (
        <div className="bg-background-light text-text-main h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-[480px] bg-white rounded-[12px] shadow-sm border border-gray-100 p-8 sm:p-10">
                <div className="flex flex-col items-center mb-8">
                    <Link to="/" className="flex items-center gap-2.5 mb-6">
                        <div className="flex items-center justify-center size-10 bg-primary/10 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight font-display text-text-main">OrchidCT</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-text-main text-center mb-2 font-display">Lupa Password?</h1>
                    <p className="text-text-secondary text-sm text-center max-w-[320px] leading-relaxed">
                        Masukkan email Anda untuk menerima instruksi pengaturan ulang password.
                    </p>
                </div>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-input" id="email" placeholder="nama@email.com" type="email" required />
                    </div>
                    <button className="w-full py-3.5 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-[15px]" type="submit">
                        Kirim Instruksi
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <Link to="/login" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors group">
                        <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Kembali ke Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
