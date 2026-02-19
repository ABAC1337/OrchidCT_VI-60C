export default function ActiveRent() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-text-main font-display">Kamar Aktif</h2>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Room Image */}
                <div className="h-48 bg-gradient-to-r from-primary/20 to-purple-200/40 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-6xl opacity-30">meeting_room</span>
                    </div>
                    <div className="absolute bottom-4 left-6">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">Aktif</span>
                    </div>
                </div>

                <div className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-text-main mb-1 font-display">Kamar 102 — Lantai 1</h3>
                            <p className="text-text-muted">Tipe Standard • 3x4 meter</p>
                        </div>
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold text-primary font-display">Rp 1.200.000</span>
                            <span className="text-text-muted">/ bulan</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                        {[
                            { icon: 'calendar_today', label: 'Mulai Sewa', value: '25 Sep 2023' },
                            { icon: 'event', label: 'Berakhir', value: '25 Okt 2023' },
                            { icon: 'hourglass_top', label: 'Sisa Waktu', value: '12 Hari' },
                            { icon: 'payments', label: 'Total Bayar', value: 'Rp 1.2jt' },
                        ].map((item) => (
                            <div key={item.icon} className="bg-gray-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 text-text-muted mb-2">
                                    <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                    <span className="text-xs font-medium">{item.label}</span>
                                </div>
                                <p className="font-bold text-text-main">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="font-bold text-text-main mb-4 font-display">Fasilitas Termasuk</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {['WiFi Gratis', 'AC Dingin', 'Kamar Mandi Dalam', 'Kasur Springbed', 'Meja Kerja', 'Lemari Pakaian'].map((f) => (
                            <div key={f} className="flex items-center gap-2 text-sm text-text-muted">
                                <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                                {f}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
                        <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">autorenew</span>
                            Perpanjang Sewa
                        </button>
                        <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-text-main font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">support_agent</span>
                            Hubungi Pengelola
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
