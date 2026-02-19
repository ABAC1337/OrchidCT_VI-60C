import { useState } from 'react'

export default function Profile() {
    const [editing, setEditing] = useState(false)

    return (
        <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-text-main font-display">Profil Saya</h2>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                {/* Avatar */}
                <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gray-100">
                    <div className="size-20 rounded-full bg-gradient-to-br from-primary to-purple-400 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                        BS
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-text-main font-display">Budi Santoso</h3>
                        <p className="text-text-muted text-sm">budi.santoso@email.com</p>
                        <span className="inline-flex items-center gap-1 mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                            <span className="size-1.5 rounded-full bg-green-500" />
                            Tenant Aktif
                        </span>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="form-label">Nama Lengkap</label>
                            <input className="form-input" defaultValue="Budi Santoso" disabled={!editing} />
                        </div>
                        <div>
                            <label className="form-label">Email</label>
                            <input className="form-input" defaultValue="budi.santoso@email.com" disabled={!editing} />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="form-label">Nomor HP</label>
                            <input className="form-input" defaultValue="081234567890" disabled={!editing} />
                        </div>
                        <div>
                            <label className="form-label">Kamar</label>
                            <input className="form-input bg-gray-100" defaultValue="No. 102 - Lantai 1" disabled />
                        </div>
                    </div>
                    <div>
                        <label className="form-label">Alamat KTP</label>
                        <input className="form-input" defaultValue="Jl. Merdeka No. 10, Jakarta" disabled={!editing} />
                    </div>
                </div>

                <div className="flex gap-3 mt-8 pt-6 border-t border-gray-100">
                    {editing ? (
                        <>
                            <button onClick={() => setEditing(false)} className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all">
                                Simpan Perubahan
                            </button>
                            <button onClick={() => setEditing(false)} className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-text-main font-bold rounded-xl transition-all">
                                Batal
                            </button>
                        </>
                    ) : (
                        <button onClick={() => setEditing(true)} className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">edit</span>
                            Edit Profil
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
