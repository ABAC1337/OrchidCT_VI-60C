import { Link, useParams } from 'react-router-dom'

const packages = [
    { months: 1, price: 'Rp 1.200.000', perMonth: 'Rp 1.200.000', discount: null },
    { months: 3, price: 'Rp 3.420.000', perMonth: 'Rp 1.140.000', discount: '5%', popular: true },
    { months: 6, price: 'Rp 6.480.000', perMonth: 'Rp 1.080.000', discount: '10%' },
    { months: 12, price: 'Rp 12.240.000', perMonth: 'Rp 1.020.000', discount: '15%' },
]

export default function Renewal() {
    const { roomId } = useParams()

    return (
        <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-text-muted">
                <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
                <span className="material-symbols-outlined text-base">chevron_right</span>
                <span className="font-medium text-text-main">Perpanjang Sewa</span>
            </div>

            <h2 className="text-2xl font-bold text-text-main font-display">Perpanjang Sewa — Kamar {roomId}</h2>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-text-main mb-4 font-display">Pilih Paket Perpanjangan</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {packages.map((pkg) => (
                        <div key={pkg.months} className={`relative border rounded-xl p-5 cursor-pointer transition-all hover:shadow-md ${pkg.popular ? 'border-primary ring-2 ring-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'
                            }`}>
                            {pkg.popular && (
                                <span className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                    Populer
                                </span>
                            )}
                            {pkg.discount && (
                                <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                    -{pkg.discount}
                                </span>
                            )}
                            <p className="text-lg font-bold text-text-main font-display">{pkg.months} Bulan</p>
                            <p className="text-2xl font-bold text-primary mt-1 font-display">{pkg.price}</p>
                            <p className="text-sm text-text-muted mt-1">{pkg.perMonth} / bulan</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-text-main mb-4 font-display">Metode Pembayaran</h3>
                <div className="space-y-3">
                    {['Transfer Bank BCA', 'Transfer Bank Mandiri', 'QRIS / E-Wallet'].map((method) => (
                        <label key={method} className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
                            <input type="radio" name="payment" className="accent-primary w-4 h-4" />
                            <span className="text-sm font-medium text-text-main">{method}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/25 transition-all text-[15px] flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">lock</span>
                Bayar Sekarang
            </button>
        </div>
    )
}
