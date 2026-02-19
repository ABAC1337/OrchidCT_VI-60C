import { useState } from 'react'

const users = [
    { id: 1, name: 'Budi Santoso', email: 'budi@email.com', phone: '0812345678', room: '102', floor: 1, status: 'Aktif', joinDate: '1 Sep 2023' },
    { id: 2, name: 'Sarah Amelia', email: 'sarah@email.com', phone: '0812345679', room: '205', floor: 2, status: 'Aktif', joinDate: '15 Aug 2023' },
    { id: 3, name: 'Rina Kartika', email: 'rina@email.com', phone: '0812345680', room: '108', floor: 1, status: 'Aktif', joinDate: '1 Jul 2023' },
    { id: 4, name: 'Ahmad Fauzi', email: 'ahmad@email.com', phone: '0812345681', room: '301', floor: 3, status: 'Jatuh Tempo', joinDate: '10 Oct 2023' },
    { id: 5, name: 'Dewi Lestari', email: 'dewi@email.com', phone: '0812345682', room: '204', floor: 2, status: 'Aktif', joinDate: '5 Sep 2023' },
]

export default function AdminUsers() {
    const [search, setSearch] = useState('')
    const filtered = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text-main font-display">Data Penghuni</h2>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 border border-gray-100 shadow-sm">
                        <span className="material-symbols-outlined text-text-muted text-xl">search</span>
                        <input
                            type="text"
                            placeholder="Cari penghuni..."
                            className="bg-transparent outline-none text-sm w-40 text-text-main placeholder-text-muted"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-primary/20 transition-all">
                        <span className="material-symbols-outlined text-lg">person_add</span>
                        Tambah
                    </button>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-primary font-display">{users.length}</p>
                    <p className="text-xs text-text-muted mt-1">Total Penghuni</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-green-500 font-display">{users.filter(u => u.status === 'Aktif').length}</p>
                    <p className="text-xs text-text-muted mt-1">Aktif</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-yellow-500 font-display">{users.filter(u => u.status === 'Jatuh Tempo').length}</p>
                    <p className="text-xs text-text-muted mt-1">Jatuh Tempo</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-text-main font-display">4</p>
                    <p className="text-xs text-text-muted mt-1">Kamar Kosong</p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Nama</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Kontak</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Kamar</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Status</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Mulai</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-4">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((u) => (
                                <tr key={u.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-9 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white text-xs font-bold">
                                                {u.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-text-main">{u.name}</p>
                                                <p className="text-xs text-text-muted">{u.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{u.phone}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-text-main">Room {u.room} <span className="text-text-muted">• Lt.{u.floor}</span></td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${u.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {u.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{u.joinDate}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-1">
                                            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                                                <span className="material-symbols-outlined text-lg text-text-muted">edit</span>
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors" title="Detail">
                                                <span className="material-symbols-outlined text-lg text-text-muted">visibility</span>
                                            </button>
                                            <button className="p-1.5 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                                                <span className="material-symbols-outlined text-lg text-red-400">delete</span>
                                            </button>
                                        </div>
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
