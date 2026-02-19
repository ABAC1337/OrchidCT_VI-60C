import { Link } from 'react-router-dom'

export default function TenantOverview() {
    return (
        <div className="flex flex-col gap-6">
            {/* Active Rent Banner */}
            <div className="bg-gradient-to-r from-primary to-purple-400 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="size-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-sm font-semibold uppercase tracking-wider text-white/80">Status Sewa Aktif</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3 font-display">Kamar 102 - Lantai 1</h2>
                        <p className="text-white/80 max-w-md">Masa sewa Anda akan berakhir dalam 12 hari. Lakukan perpanjangan segera untuk menghindari denda keterlambatan.</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center min-w-[140px] self-start">
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/80 mb-1">Jatuh Tempo</p>
                        <p className="text-3xl font-bold font-display">25 Okt 2023</p>
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
                    <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                        <span className="material-symbols-outlined text-2xl">meeting_room</span>
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Kamar Aktif</p>
                        <p className="text-2xl font-bold text-text-main font-display">No. 102</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
                    <div className="size-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                        <span className="material-symbols-outlined text-2xl">hourglass_top</span>
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Sisa Durasi</p>
                        <p className="text-2xl font-bold text-orange-500 font-display">12 Hari</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
                    <div className="size-12 rounded-xl bg-purple-50 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-2xl">payments</span>
                    </div>
                    <div>
                        <p className="text-sm text-text-muted">Total Tagihan</p>
                        <p className="text-2xl font-bold text-text-main font-display">Rp 1.2jt</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions + Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Quick Actions */}
                <div className="lg:col-span-3 flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-text-main font-display">Aksi Cepat</h3>
                    <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between gap-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-2xl">autorenew</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main">Perpanjang Sewa</h4>
                                <p className="text-sm text-text-muted">Segera lakukan pembayaran untuk perpanjangan sewa bulan depan sebelum tanggal 25.</p>
                            </div>
                        </div>
                        <Link to="/dashboard/renew/102" className="shrink-0 bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 transition-all">
                            Perpanjang Sekarang
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-5 flex items-center justify-between gap-4 shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                <span className="material-symbols-outlined text-2xl">receipt_long</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main">Riwayat &amp; Mutasi</h4>
                                <p className="text-sm text-text-muted">Cek detail tagihan listrik, air, dan pembayaran sewa bulanan Anda.</p>
                            </div>
                        </div>
                        <Link to="/dashboard/mutations" className="shrink-0 bg-gray-100 hover:bg-gray-200 text-text-main text-sm font-bold py-2.5 px-5 rounded-xl flex items-center gap-2 transition-all">
                            Lihat Detail
                            <span className="material-symbols-outlined text-lg">visibility</span>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-text-main font-display">Aktivitas Terakhir</h3>
                        <Link to="/dashboard/mutations" className="text-sm font-semibold text-primary hover:text-primary-dark">Lihat Semua</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        {[
                            { icon: 'check_circle', color: 'text-green-500 bg-green-50', label: 'Sewa Oktober', date: '25 Sep 2023', badge: 'LUNAS', badgeColor: 'bg-green-100 text-green-700' },
                            { icon: 'warning', color: 'text-orange-500 bg-orange-50', label: 'Tagihan Listrik', date: '01 Okt 2023', badge: 'PENDING', badgeColor: 'bg-yellow-100 text-yellow-700' },
                            { icon: 'check_circle', color: 'text-green-500 bg-green-50', label: 'Sewa September', date: '25 Agu 2023', badge: 'LUNAS', badgeColor: 'bg-green-100 text-green-700' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className={`size-10 rounded-xl flex items-center justify-center ${item.color}`}>
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm text-text-main">{item.label}</p>
                                        <p className="text-xs text-text-muted">{item.date}</p>
                                    </div>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                            </div>
                        ))}
                    </div>

                    {/* Info Card */}
                    <div className="bg-background-dark rounded-xl p-5 text-white">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-blue-400">info</span>
                            <div>
                                <h4 className="font-bold mb-1">Info Pemeliharaan</h4>
                                <p className="text-sm text-gray-400">Akan ada pemadaman air sementara pada tanggal 28 Oktober jam 10:00 - 12:00 WIB.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
