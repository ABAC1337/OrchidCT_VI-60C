import { Link } from 'react-router-dom'
import { useState } from 'react'

const rooms = [
    { no: '101', floor: 'Lantai 1', available: false },
    { no: '102', floor: 'Lantai 1', available: true },
    { no: '103', floor: 'Lantai 1', available: false },
    { no: '104', floor: 'Lantai 1', available: true },
    { no: '105', floor: 'Lantai 1', available: true, highlighted: true },
    { no: '106', floor: 'Lantai 1', available: false },
    { no: '107', floor: 'Lantai 1', available: false },
    { no: '108', floor: 'Lantai 1', available: true },
    { no: '109', floor: 'Lantai 1', available: false },
    { no: '110', floor: 'Lantai 1', available: false },
]

export default function RoomAvailability() {
    const [selectedRoom, setSelectedRoom] = useState(null)

    return (
        <div className="pt-20 min-h-screen bg-background-light">
            <main className="flex-grow flex flex-col items-center py-8 px-4 sm:px-6">
                <div className="w-full max-w-[1000px] flex flex-col gap-6">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-[#686487]">
                        <Link to="/" className="hover:text-primary">Beranda</Link>
                        <span className="material-symbols-outlined text-base">chevron_right</span>
                        <span className="font-medium text-[#121117]">Ketersediaan Kamar</span>
                    </div>

                    {/* Room Type Header */}
                    <section className="bg-white rounded-xl border border-[#ecebed] p-6 sm:p-8 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="bg-primary/10 text-primary text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">Best Seller</span>
                                    <span className="flex items-center gap-1 text-xs text-[#686487]">
                                        <span className="material-symbols-outlined text-base">star</span>
                                        4.8 (120 Ulasan)
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#121117] font-display">Tipe Kamar Standard</h2>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl font-bold text-primary">Rp 1.200.000</span>
                                    <span className="text-[#686487] font-medium">/ bulan</span>
                                </div>
                            </div>
                            <Link to="/#fasilitas" className="w-full md:w-auto h-11 flex items-center justify-center gap-2 rounded-lg bg-[#f1f0f4] text-[#121117] text-sm font-bold hover:bg-[#e8e7eb] transition-colors px-6">
                                <span className="material-symbols-outlined text-lg">info</span>
                                Lihat Detail Fasilitas
                            </Link>
                        </div>
                        <div className="h-px w-full bg-[#f1f0f4] my-6" />
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[
                                { icon: 'wifi', label: 'WiFi Gratis' },
                                { icon: 'ac_unit', label: 'AC Dingin' },
                                { icon: 'bathtub', label: 'Kamar Mandi Dalam' },
                                { icon: 'bed', label: 'Kasur Springbed' },
                            ].map((item) => (
                                <div key={item.icon} className="flex items-center gap-3">
                                    <div className="size-8 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#686487]">
                                        <span className="material-symbols-outlined text-lg">{item.icon}</span>
                                    </div>
                                    <span className="text-sm font-medium text-[#121117]">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Legend */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-2">
                        <h3 className="text-xl font-bold text-[#121117] font-display">Daftar Unit Kamar</h3>
                        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-[#ecebed]">
                            <div className="flex items-center gap-2">
                                <span className="size-3 rounded-full bg-emerald-500" />
                                <span className="text-sm font-medium text-[#686487]">Tersedia</span>
                            </div>
                            <div className="w-px h-4 bg-[#ecebed]" />
                            <div className="flex items-center gap-2">
                                <span className="size-3 rounded-full bg-slate-300" />
                                <span className="text-sm font-medium text-[#686487]">Terisi</span>
                            </div>
                        </div>
                    </div>

                    {/* Room Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {rooms.map((room) => (
                            <div
                                key={room.no}
                                onClick={() => room.available && setSelectedRoom(room)}
                                className={`group relative flex flex-col rounded-xl overflow-hidden shadow-sm transition-all ${room.available
                                        ? room.highlighted
                                            ? 'bg-white border border-emerald-100 shadow-md ring-2 ring-primary scale-[1.02] z-10 cursor-pointer'
                                            : 'bg-white border border-emerald-100 hover:shadow-md cursor-pointer ring-1 ring-emerald-100 hover:ring-emerald-300'
                                        : 'bg-white border border-[#ecebed] opacity-70 grayscale-[0.5]'
                                    }`}
                            >
                                <div className={`h-2 w-full ${room.available ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                <div className="p-4 flex flex-col items-center gap-2">
                                    <span className={`text-xs font-semibold uppercase tracking-wider ${room.available ? 'text-emerald-600' : 'text-[#686487]'}`}>{room.floor}</span>
                                    <h4 className={`font-bold ${room.available ? 'text-3xl text-[#121117]' : 'text-2xl text-[#686487]'}`}>{room.no}</h4>
                                    {room.available ? (
                                        <>
                                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                                                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                Tersedia
                                            </span>
                                            <button className={`w-full mt-1 h-8 bg-primary text-white text-xs font-bold rounded-lg flex items-center justify-center transition-opacity ${room.highlighted ? 'shadow-lg shadow-primary/30' : 'opacity-0 group-hover:opacity-100'}`}>
                                                Sewa
                                            </button>
                                        </>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">Terisi</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Room Detail Popup */}
            {selectedRoom && (
                <div className="fixed top-24 right-4 sm:right-10 z-50 w-80">
                    <div className="bg-white rounded-xl shadow-2xl border border-primary/20 p-5 relative overflow-hidden">
                        <button className="absolute top-3 right-3 text-[#686487] hover:text-[#121117]" onClick={() => setSelectedRoom(null)}>
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="size-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-2xl">meeting_room</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#121117]">Kamar {selectedRoom.no}</h3>
                                    <p className="text-sm text-[#686487]">{selectedRoom.floor} • Standard</p>
                                </div>
                            </div>
                            <div className="bg-[#f6f6f8] rounded-lg p-3 text-sm text-[#686487]">
                                <p className="flex gap-2 mb-1"><span className="material-symbols-outlined text-sm pt-0.5">sunny</span> Jendela hadap timur</p>
                                <p className="flex gap-2"><span className="material-symbols-outlined text-sm pt-0.5">wifi</span> Sinyal WiFi Kuat</p>
                            </div>
                            <div className="flex items-center justify-between border-t border-[#f1f0f4] pt-4">
                                <div className="flex flex-col">
                                    <span className="text-xs text-[#686487]">Harga</span>
                                    <span className="text-sm font-bold text-primary">Rp 1.2jt</span>
                                </div>
                                <Link to="/login" className="bg-primary hover:bg-primary/90 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all">
                                    Booking Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
