const stats = [
    { icon: 'people', label: 'Total Penghuni', value: '42', change: '+2%', color: 'text-blue-500 bg-blue-50' },
    { icon: 'door_front', label: 'Kamar Terisi', value: '38', change: '+5%', color: 'text-orange-500 bg-orange-50' },
    { icon: 'door_open', label: 'Kamar Kosong', value: '4', change: '-10%', changeColor: 'text-red-500', color: 'text-red-500 bg-red-50' },
    { icon: 'payments', label: 'Pendapatan Bulan Ini', value: 'Rp 45.000.000', change: '+8%', color: 'text-green-500 bg-green-50' },
]

const recentActivity = [
    { name: 'Budi Santoso', initials: 'BS', room: 'Room 101', date: 'Oct 24, 2023', status: 'Paid', amount: 'Rp 1.500.000' },
    { name: 'Sarah Amelia', initials: 'SA', room: 'Room 205', date: 'Oct 23, 2023', status: 'Pending', amount: 'Rp 1.200.000' },
    { name: 'Rina Kartika', initials: 'RK', room: 'Room 108', date: 'Oct 22, 2023', status: 'Paid', amount: 'Rp 1.500.000' },
]

const pendingTasks = [
    { color: 'bg-orange-400', text: 'Verify payment for Room 204' },
    { color: 'bg-red-400', text: 'Maintenance check: Room 105 AC' },
    { color: 'bg-blue-400', text: 'New contract renewal: Budi' },
]

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between min-h-[120px]">
                        <div className="flex items-center justify-between">
                            <div className={`size-11 rounded-xl flex items-center justify-center ${s.color}`}>
                                <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                            </div>
                            <span className={`text-xs font-bold flex items-center gap-0.5 ${s.changeColor || 'text-green-500'}`}>
                                <span className="material-symbols-outlined text-sm">{s.change.startsWith('+') ? 'trending_up' : 'trending_down'}</span>
                                {s.change}
                            </span>
                        </div>
                        <div className="mt-3">
                            <p className="text-sm text-text-muted">{s.label}</p>
                            <p className="text-2xl font-bold text-text-main font-display">{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Revenue Chart + Quick Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Chart */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-text-main font-display">Revenue Trends</h3>
                            <p className="text-sm text-text-muted">Income analysis over time</p>
                        </div>
                        <div className="flex bg-gray-100 rounded-lg p-1">
                            <button className="px-3 py-1.5 text-xs font-medium text-text-muted rounded-md">Last 6 Months</button>
                            <button className="px-3 py-1.5 text-xs font-bold text-text-main bg-white rounded-md shadow-sm">Yearly</button>
                        </div>
                    </div>
                    {/* Chart placeholder */}
                    <div className="h-64 bg-gradient-to-t from-primary/5 to-transparent rounded-lg flex items-end justify-center pb-8 relative">
                        <svg className="w-full h-full absolute inset-0 p-4" viewBox="0 0 600 200" fill="none">
                            <defs>
                                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#6C5CE7" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,180 C50,170 100,160 150,140 C200,120 250,130 300,100 C350,70 400,60 450,40 C500,50 550,35 600,30" stroke="#6C5CE7" strokeWidth="3" fill="none" />
                            <path d="M0,180 C50,170 100,160 150,140 C200,120 250,130 300,100 C350,70 400,60 450,40 C500,50 550,35 600,30 L600,200 L0,200 Z" fill="url(#chartGrad)" />
                            <circle cx="450" cy="40" r="5" fill="#6C5CE7" />
                        </svg>
                        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-8 text-xs text-text-muted">
                            <span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                        </div>
                        <div className="absolute top-10 left-[73%] bg-background-dark text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                            Rp 45M
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm flex flex-col gap-5">
                    <h3 className="text-lg font-bold text-text-main font-display">Quick Stats</h3>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-text-muted">Occupancy Rate</span>
                            <span className="text-sm font-bold text-text-main">90%</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-text-muted">Paid Invoices</span>
                            <span className="text-sm font-bold text-text-main">32/42</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '76%' }} />
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <h4 className="font-bold text-text-main mb-3">Pending Tasks</h4>
                        <div className="space-y-3">
                            {pendingTasks.map((t, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-text-muted">
                                    <span className={`size-2 rounded-full ${t.color}`} />
                                    {t.text}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all text-sm mt-auto">
                        View All Tasks
                    </button>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-text-main font-display">Recent Activity</h3>
                    <button className="text-sm font-semibold text-primary hover:text-primary-dark">View All Transactions</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Tenant Name</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Room No</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Date</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Status</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Amount</th>
                                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wider px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivity.map((r, i) => (
                                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">{r.initials}</div>
                                            <span className="text-sm font-medium text-text-main">{r.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{r.room}</td>
                                    <td className="px-6 py-4 text-sm text-text-muted">{r.date}</td>
                                    <td className="px-6 py-4">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                            }`}>
                                            {r.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-text-main">{r.amount}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-text-muted hover:text-text-main">
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </button>
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
