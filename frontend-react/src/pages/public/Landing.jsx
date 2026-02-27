import { Link } from 'react-router-dom'

const heroImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUJx03RL1hEA4wZ54aI72HTRNcqA8wWLq9LpMsRqyV3rThvrvCpIRy46MHUmGVkDcWYMWBQ22OQJ06-e91xms1bhjpN5yJEhPXJY7WQwsEaRQF-7K_t14HGGKE5WztFG5R5qnWuGKMkNSl8vYzQNN3Xu7bDIV8a4qkVtQb7QKo9rMHnqpET4uVgYsrz7kA3tuNlycAD0M0GGFJNDvmUxN58_UqkTQipAW2OOxrvUkHImlQ1PwiXXxb_kasQCPA1iP2NNV9UIbiUtM'
const mainImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnx2U_jCcBtHRFgcjHVlU3N04UCaHIeM7qBfExBoceJvHxh6Pxkj2EaZkjdeiDIQr8H8zpamS0VXWa8NAPXJPvPRVf-0q5TK8KjNOF5F0KiI79u1tWBeDn-JIAPrmPwlqiUh1Z6uxdCwup9nlguM2kcbJ9KKd1lSxTHn0_afpXCxfIZH_iy_8m-hiWmU58JNFJsB_HHtd94Y1bMkF9w1rr1sdBe-mP0mludoBA0iTF59R9sMvKUC8vJzcG_rrc4zFLLALQY1BAukM'
const thumb1 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDahAvjVvxD93wQldpho2LvhTde116JGWDwBwkoQNwaMnZuJRDBqbqGZ5zrac7-62fbvovBdykuKCAx4N79uo_NskljOZSD-nd1eZCSvp4zvsaRQQjMdtBCTJqDradidJUtqzn2X3E-9ic3vpkd1GNYcjxUwfHGSGdWPKh6y0eQI-W4tW0pvyEFjOj2Fp0nyLUSzaKJoYE9R4mq1_gCmY__lfz2WFJSjwa_9_sHyyD2y4P_P7A7hjZcyBWXZd2rT8goiXjSbs2BZGU'
const thumb2 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsCkNGZhGEevZqzBlaYFFxA57EhxKXLmmwvaQ_4JuBJMqyV3PwpIB1ZPHJDtjdFNuBKFYDQ53XWIeN8tm1Am2GAt8SbrwxendDs8A7fH5dJmjHAU8y9W7kGc9iMgFKIRXbV8_fu3s0mREwgv3hioJUXMk3b6npxyo4PHHHK3o0aPn62eZ4thAGH_hmTX8vh7pUnHU2XQC5JlZmVVj3vEhpJd6lzkUbXhMxBpQX-gPAZQ9HpCd0ZV2F7fq3lcqJM_UvTb8jbCobSrA'
const thumb3 = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe33fNAphi2lAIeb6-5Ua70z3zgBr1v3V2Y9bhWdmbUk5kyEZdt7eEA13_I9O8zOsPPkTWm8Ae-e8kCuTZtMbzGe2Ww77LuksEFe3PYr-Sz6IbF6TBSAGiIoTmECQyPyPfoHjV_AB3I--403sG6h-CvEnu8-Uab4lHo2xIdsDYq_eHcwZc6fsfNHk-OTMndUFHSsq0TSJj8Zupl33BskAVIeOY3x3vCC7MsDdD6kVG1tjCRWGeIQZc5YESUVBg7Mz8pIbyupLEYKQ'
const promoImg = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFCcE6eOp9OtLFMSZad00lRrDaxjkM-bYokMGkf6KRhLY8w8bUPb2h1wxEn0xn8sy8KX0phD3HLoJ70I0da01-icZM56BCswjF2eAphMvAr_HZB_LyDUDMc0zd8m71_0LzWER3iJEQZWW5vEoGEq3jRQEB02Aj_EGTX5ub0P3y31-VJBVKKfNFv7zuKEcOTcFPk3L2ai2Dc95Jud-vEzyHTluqNGtJOm2NCmk1k8EEuIY-X5U7eRAJAZX1niCTGHCF9LTxSIQK-AY'

const avatars = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDtI4IH_xrauYCG-wn9-DBjNyF1rfdLMLHqPdugXzlRaM6nQBajjHH-k4oMOQ6m4ud9zOv45tXDAsPUHUrKp4hfQ7W9eJqpFoR0S_Um0BcaAZ1sWmZB-0tASRJtSI9tppsTtkD_cqZR5bZIaYQld7-47s7M3LXjtm8F-KYpY4TZRlkWaiW_Lmt1_OsPxNQ6ZVVMPk5o-J6IWnQRHJVJpxsMCui80j7l37lMlLoy38GbwXmgdAdywxRX94Tvp6ullZoUmFiPyf7v5hQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDnY2x22WFohv7O-ZDP2UFwQC75Y2a8r1amlrBYWzunp0ZWgcAnSchg6Sf_7iGgCDuMFWuztk1dMbuVn39UqpV_o1Td8uBZQ8y8NQv5BdEC9R_gVPU2flEtZDRugxU7wnpFcTBULcNYqNZAUm9O4uHdeZP4EuDHwA70Zrwc1UBANmdf2CbfXD8MY-9LK_U78osxGKMw5fH8cOVxgugKbwD24DLBJICUNpld0TyJpbum7gPCC8Ak7lSjrsEvuFWQS_29dYycPp5VmhE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDg_CEP8NLafwBzgz623AZHfI3Zj3JgrqkiYwF6qUxtM_NL79n8lt-5RW3gfL13FelUxpHohQ1Z92uSYAXeZAJ-bDZYe3qukLpw_4aAnZXyze6wqtjgHHwr94YBAycVGvzQ5hKJ1_FInFE8Xcnx5b6sS5J-c0TVe6_lmEw77FkTxYrHE4BGIFUmc2l6lW2VOA4tOjH3C_GPDQYDqf9AYhSUrCSAOn3MCf3O1NyMSd30WOeKh1RNMY6J9Mpbyv7xAakEll8P1HMJV4w',
]

const facilities = [
    { icon: 'wifi', name: 'WI-FI' },
    { icon: 'bathtub', name: 'Kamar Mandi Dalam' },
    { icon: 'local_parking', name: 'Area Parkir' },
    { icon: 'security', name: 'Keamanan CCTV 24/7' },
    { icon: 'bolt', name: 'Listrik Token' },
    { icon: 'mode_fan', name: 'Kipas Angin' },
    { icon: 'ac_unit', name: 'Air Conditioner' },
    { icon: 'location_city', name: 'Dekat Fasilitas Umum' },
]

const testimonials = [
    { name: 'Sarah Amelia', role: 'Mahasiswi', text: '"Tempatnya super bersih dan nyaman banget buat WFH. Internetnya kenceng, gak pernah putus. Ibu kosnya juga ramah banget!"', rating: 5, avatar: 0 },
    { name: 'Budi Santoso', role: 'Karyawan Swasta', text: '"Lokasinya strategis banget, deket stasiun dan pusat perbelanjaan. Kamar mandi dalamnya bersih dan modern. Recommended!"', rating: 4.5, avatar: 1 },
    { name: 'Rina Kartika', role: 'Freelancer', text: '"Keamanan terjamin, parkiran luas, jadi gak was-was ninggalin motor. Suasana tenang, cocok buat istirahat."', rating: 5, avatar: 2 },
]

export default function Landing() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${heroImg}')` }} />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
                <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center gap-6 mt-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium tracking-wider uppercase mb-2">
                        Premium Kos Living
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-4xl drop-shadow-sm font-display">
                        Kos Nyaman di <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-indigo-200">Jantung Kota</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl font-normal max-w-2xl leading-relaxed">
                        Rasakan kenyamanan tinggal dengan fasilitas lengkap dan lokasi strategis. Hunian tenang untuk profesional muda dan mahasiswa.
                    </p>
                    <div className="flex flex-col items-center gap-2 mt-4">
                        <p className="text-white text-2xl md:text-3xl font-bold font-display">Rp 1.200.000 <span className="text-lg font-normal text-gray-300">/ bulan</span></p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center">
                        <Link to="/rooms" className="h-14 px-8 rounded-xl bg-white text-primary text-base font-bold hover:bg-gray-100 transition-colors shadow-xl w-full sm:w-auto min-w-[180px] flex items-center justify-center">
                            Booking Sekarang
                        </Link>
                        <a href="#kamar" className="h-14 px-8 rounded-xl border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm text-base font-bold hover:bg-white/20 transition-colors w-full sm:w-auto min-w-[180px] flex items-center justify-center">
                            Lihat Kamar
                        </a>
                    </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70">
                    <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
                </div>
            </section>

            {/* Room Spotlight */}
            <div className="max-w-[1280px] mx-auto w-full px-6 py-24 flex flex-col gap-24">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="kamar">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-200 relative group">
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${mainImg}')` }} />
                            <div className="absolute bottom-4 left-4">
                                <span className="bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm">Foto Utama</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${thumb1}')` }} />
                            <div className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${thumb2}')` }} />
                            <div className="aspect-square rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity bg-gray-200 bg-cover bg-center relative" style={{ backgroundImage: `url('${thumb3}')` }}>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg hover:bg-black/50 transition-colors">+5 Foto</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-primary text-xl">star</span>
                                <span className="text-text-main font-medium">4.8 (120 Review)</span>
                            </div>
                            <h2 className="text-4xl font-bold text-text-main mb-2 font-display">Kamar Standard Plus</h2>
                            <p className="text-primary text-3xl font-bold font-display">Rp 1.200.000 <span className="text-lg text-gray-500 font-normal">/ bulan</span></p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-lg">straighten</span>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wide">Ukuran</p>
                                    <p className="font-bold text-text-main">3 x 4 Meter</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl bg-primary/10 p-2 rounded-lg">person</span>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase tracking-wide">Kapasitas</p>
                                    <p className="font-bold text-text-main">1 Orang</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Kamar yang didesain untuk kenyamanan maksimal dengan pencahayaan alami yang baik. Dilengkapi dengan furnitur minimalis modern, kasur springbed kualitas hotel, dan meja kerja ergonomis yang cocok untuk WFH.
                        </p>
                        <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                                <span>Termasuk Listrik &amp; Air</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                                <span>Pembersihan Kamar 1x Seminggu</span>
                            </div>
                        </div>
                        <Link to="/rooms" className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                            <span>Booking Kamar Ini</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                {/* Facilities */}
                <section id="fasilitas">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4 font-display">Fasilitas Unggulan</h2>
                        <p className="text-gray-500 max-w-xl mx-auto">Kami menyediakan fasilitas lengkap untuk menunjang gaya hidup modern Anda, tanpa biaya tambahan tersembunyi.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {facilities.map((f) => (
                            <div key={f.icon} className="group p-6 bg-white border border-gray-100 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-4 text-center">
                                <div className="size-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                                </div>
                                <h3 className="font-bold text-lg text-text-main">{f.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Promo CTA */}
                <section className="relative rounded-3xl overflow-hidden py-20 px-6 md:px-20 text-center shadow-2xl">
                    <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url('${promoImg}')` }} />
                    <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/90 to-purple-900/90" />
                    <div className="relative z-20 max-w-3xl mx-auto">
                        <div className="glass-card p-10 rounded-2xl text-text-main">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Penawaran Spesial</h3>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">Booking Hari Ini, <br />Dapat Diskon 10%</h2>
                            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto">
                                Dapatkan harga spesial untuk pembayaran 3 bulan pertama. Slot kamar sangat terbatas!
                            </p>
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <span className="font-medium">Tanpa Deposit</span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <span className="font-medium">Bebas Biaya Admin</span>
                                </div>
                            </div>
                            <Link to="/rooms" className="inline-block bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:scale-105 transition-transform text-lg">
                                Ambil Promo Sekarang
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="overflow-hidden" id="tentang">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-bold text-text-main mb-2 font-display">Kata Penghuni</h2>
                            <p className="text-gray-500">Pengalaman nyata dari mereka yang tinggal di OrchidCT</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined">arrow_back</span>
                            </button>
                            <button className="size-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-6 pb-4 overflow-x-auto snap-x">
                        {testimonials.map((t, i) => (
                            <div key={i} className="min-w-[320px] md:min-w-[380px] p-6 bg-white border border-gray-100 rounded-xl shadow-sm snap-start">
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[...Array(Math.floor(t.rating))].map((_, j) => (
                                        <span key={j} className="material-symbols-outlined text-xl">star</span>
                                    ))}
                                    {t.rating % 1 !== 0 && <span className="material-symbols-outlined text-xl">star_half</span>}
                                </div>
                                <p className="text-gray-600 mb-6 italic">{t.text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-full bg-gray-200 bg-cover bg-center" style={{ backgroundImage: `url('${avatars[t.avatar]}')` }} />
                                    <div>
                                        <p className="font-bold text-text-main text-sm">{t.name}</p>
                                        <p className="text-xs text-gray-500">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}
