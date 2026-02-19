const rooms = [
    { no: '101', floor: 1, tenant: 'Budi Santoso', status: 'occupied', dueDate: '25 Okt 2023', daysLeft: 12 },
    { no: '102', floor: 1, tenant: 'Sarah Amelia', status: 'occupied', dueDate: '15 Nov 2023', daysLeft: 33 },
    { no: '103', floor: 1, tenant: null, status: 'available', dueDate: null, daysLeft: null },
    { no: '104', floor: 1, tenant: 'Rina Kartika', status: 'occupied', dueDate: '10 Nov 2023', daysLeft: 28 },
    { no: '105', floor: 1, tenant: null, status: 'maintenance', dueDate: null, daysLeft: null },
    { no: '201', floor: 2, tenant: 'Ahmad Fauzi', status: 'overdue', dueDate: '18 Okt 2023', daysLeft: -5 },
    { no: '202', floor: 2, tenant: null, status: 'available', dueDate: null, daysLeft: null },
    { no: '203', floor: 2, tenant: 'Dewi Lestari', status: 'occupied', dueDate: '1 Dez 2023', daysLeft: 49 },
    { no: '204', floor: 2, tenant: null, status: 'available', dueDate: null, daysLeft: null },
    { no: '205', floor: 2, tenant: 'Lisa Surya', status: 'occupied', dueDate: '20 Nov 2023', daysLeft: 38 },
]

const statusConfig = {
    occupied: { label: 'Terisi', bg: 'bg-blue-50 border-blue-100', badge: 'bg-blue-100 text-blue-700', bar: 'bg-blue-500' },
    available: { label: 'Tersedia', bg: 'bg-emerald-50 border-emerald-100', badge: 'bg-emerald-100 text-emerald-700', bar: 'bg-emerald-500' },
    maintenance: { label: 'Maintenance', bg: 'bg-orange-50 border-orange-100', badge: 'bg-orange-100 text-orange-700', bar: 'bg-orange-500' },
    overdue: { label: 'Jatuh Tempo', bg: 'bg-red-50 border-red-100', badge: 'bg-red-100 text-red-700', bar: 'bg-red-500' },
}

export default function AdminMonitoring() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-2xl font-bold text-text-main font-display">Monitoring Kamar</h2>
                <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                    {Object.entries(statusConfig).map(([key, cfg]) => (
                        <div key={key} className="flex items-center gap-2">
                            <span className={`size-3 rounded-full ${cfg.bar}`} />
                            <span className="text-sm font-medium text-text-muted">{cfg.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-text-main font-display">{rooms.length}</p>
                    <p className="text-xs text-text-muted mt-1">Total Kamar</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-blue-500 font-display">{rooms.filter(r => r.status === 'occupied').length}</p>
                    <p className="text-xs text-text-muted mt-1">Terisi</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-emerald-500 font-display">{rooms.filter(r => r.status === 'available').length}</p>
                    <p className="text-xs text-text-muted mt-1">Tersedia</p>
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm text-center">
                    <p className="text-2xl font-bold text-red-500 font-display">{rooms.filter(r => r.status === 'overdue').length}</p>
                    <p className="text-xs text-text-muted mt-1">Jatuh Tempo</p>
                </div>
            </div>

            {/* Room Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {rooms.map((room) => {
                    const cfg = statusConfig[room.status]
                    return (
                        <div key={room.no} className={`flex flex-col rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer ${cfg.bg}`}>
                            <div className={`h-2 w-full ${cfg.bar}`} />
                            <div className="p-4 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Lantai {room.floor}</span>
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>{cfg.label}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-text-main font-display">{room.no}</h4>
                                {room.tenant && (
                                    <p className="text-xs text-text-muted truncate">{room.tenant}</p>
                                )}
                                {room.dueDate && (
                                    <p className={`text-xs font-medium ${room.daysLeft && room.daysLeft < 0 ? 'text-red-500' : room.daysLeft && room.daysLeft < 14 ? 'text-orange-500' : 'text-text-muted'}`}>
                                        {room.daysLeft && room.daysLeft < 0 ? `Overdue ${Math.abs(room.daysLeft)} hari` : `${room.daysLeft} hari lagi`}
                                    </p>
                                )}
                                {room.status === 'available' && (
                                    <button className="mt-1 h-7 bg-primary text-white text-xs font-bold rounded-lg flex items-center justify-center">
                                        Assign Tenant
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
