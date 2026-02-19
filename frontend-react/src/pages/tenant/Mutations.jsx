const mutations = [
    { id: 1, date: '25 Sep 2023', type: 'Sewa Bulanan', desc: 'Sewa Kamar 102 - Oktober 2023', amount: 'Rp 1.200.000', method: 'Transfer BCA', status: 'Lunas' },
    { id: 2, date: '01 Okt 2023', type: 'Tagihan Listrik', desc: 'Pemakaian listrik September 2023', amount: 'Rp 150.000', method: '-', status: 'Pending' },
    { id: 3, date: '25 Agu 2023', type: 'Sewa Bulanan', desc: 'Sewa Kamar 102 - September 2023', amount: 'Rp 1.200.000', method: 'Transfer BCA', status: 'Lunas' },
    { id: 4, date: '01 Sep 2023', type: 'Tagihan Air', desc: 'Pemakaian air Agustus 2023', amount: 'Rp 75.000', method: 'Transfer BCA', status: 'Lunas' },
    { id: 5, date: '25 Jul 2023', type: 'Sewa Bulanan', desc: 'Sewa Kamar 102 - Agustus 2023', amount: 'Rp 1.200.000', method: 'Transfer Mandiri', status: 'Lunas' },
]

export default function Mutations() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text-main font-display">Riwayat Mutasi</h2>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm">
                        <span className="material-symbols-outlined text-text-muted text-xl">search</span>
                        <input type="text" placeholder="Cari transaksi..." className="bg-transparent outline-none text-sm w-40 text-text-main placeholder-text-muted" />
                    </div>
                    <button className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm text-sm font-medium text-text-muted hover:bg-gray-50 transition-colors">
                        <span className="material-symbols-outlined text-lg">filter_list</span>
                        Filter
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Tanggal</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Tipe</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Deskripsi</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Jumlah</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mutations.map((m) => (
                                <tr key={m.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm text-text-muted">{m.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.type.includes('Sewa') ? 'bg-primary/10 text-primary' : m.type.includes('Listrik') ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {m.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-main">{m.desc}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-main">{m.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${m.status === 'Lunas' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            <span className={`size-1.5 rounded-full ${m.status === 'Lunas' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                                            {m.status}
                                        </span>
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
