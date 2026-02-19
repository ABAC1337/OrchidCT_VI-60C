const transactions = [
    { id: 1, tenant: 'Budi Santoso', initials: 'BS', room: '102', date: '25 Sep 2023', type: 'Sewa', amount: 'Rp 1.200.000', method: 'Transfer BCA', status: 'Verified' },
    { id: 2, tenant: 'Sarah Amelia', initials: 'SA', room: '205', date: '24 Sep 2023', type: 'Sewa', amount: 'Rp 1.200.000', method: 'Transfer Mandiri', status: 'Pending' },
    { id: 3, tenant: 'Rina Kartika', initials: 'RK', room: '108', date: '23 Sep 2023', type: 'Listrik', amount: 'Rp 150.000', method: 'Transfer BCA', status: 'Verified' },
    { id: 4, tenant: 'Ahmad Fauzi', initials: 'AF', room: '301', date: '22 Sep 2023', type: 'Sewa', amount: 'Rp 1.200.000', method: 'QRIS', status: 'Rejected' },
    { id: 5, tenant: 'Dewi Lestari', initials: 'DL', room: '204', date: '21 Sep 2023', type: 'Air', amount: 'Rp 75.000', method: 'Transfer BCA', status: 'Verified' },
]

export default function AdminMutations() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text-main font-display">Mutasi Keuangan</h2>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm text-sm font-medium text-text-muted hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filter
                    </button>
                    <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm text-sm font-medium text-text-muted hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export
                    </button>
                    <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 border border-gray-100 shadow-sm text-sm font-medium text-text-muted hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined text-lg">print</span>
                        Print
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="text-sm text-text-muted mb-1">Total Pemasukan</p>
                    <p className="text-2xl font-bold text-green-500 font-display">Rp 45.000.000</p>
                    <p className="text-xs text-text-muted mt-1">Oktober 2023</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="text-sm text-text-muted mb-1">Pending Verifikasi</p>
                    <p className="text-2xl font-bold text-yellow-500 font-display">5</p>
                    <p className="text-xs text-text-muted mt-1">Menunggu approval</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="text-sm text-text-muted mb-1">Transaksi Bulan Ini</p>
                    <p className="text-2xl font-bold text-text-main font-display">48</p>
                    <p className="text-xs text-text-muted mt-1">Dari 42 penghuni</p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Tenant</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Kamar</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Tanggal</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Tipe</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Jumlah</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Method</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((t) => (
                                <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{t.initials}</div>
                                            <span className="text-sm font-medium text-text-main">{t.tenant}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{t.room}</td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{t.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${t.type === 'Sewa' ? 'bg-primary/10 text-primary' : t.type === 'Listrik' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                                            }`}>{t.type}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-main">{t.amount}</td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{t.method}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.status === 'Verified' ? 'bg-green-100 text-green-700' : t.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                                            }`}>{t.status}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {t.status === 'Pending' ? (
                                            <div className="flex items-center gap-1">
                                                <button className="p-1 bg-green-100 hover:bg-green-200 rounded-lg transition-colors" title="Approve">
                                                    <span className="material-symbols-outlined text-green-600 text-lg">check</span>
                                                </button>
                                                <button className="p-1 bg-red-100 hover:bg-red-200 rounded-lg transition-colors" title="Reject">
                                                    <span className="material-symbols-outlined text-red-600 text-lg">close</span>
                                                </button>
                                            </div>
                                        ) : (
                                            <button className="text-text-muted hover:text-text-main">
                                                <span className="material-symbols-outlined">more_horiz</span>
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
