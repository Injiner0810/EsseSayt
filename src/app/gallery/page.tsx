"use client";

import Link from 'next/link';
import { useState } from 'react';
export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  
  const esselar = [
    {
      id: 1,
      title: "Global isish va uning kelajakdagi oqibatlari",
      desc: "Ushbu inshoda iqlim o'zgarishining ekotizimga ta'siri va insoniyat oldidagi mas'uliyat haqida chuqur tahlil yuritiladi...",
      score: 24,
      b_color: "bg-primary",
      t_color: "text-primary",
      level: "B2+"
    },
    {
      id: 2,
      title: "Sun'iy intellektning ta'lim sohasidagi roli",
      desc: "Zamonaviy texnologiyalarning o'quv jarayoniga integratsiyasi va uning ijobiy hamda salbiy tomonlari yoritilgan...",
      score: 21,
      b_color: "bg-secondary",
      t_color: "text-secondary",
      level: "B1"
    },
    {
      id: 3,
      title: "Iqtisodiy barqarorlik va raqamli valyutalar",
      desc: "Kriptovalyutalar bozorining an'anaviy moliya tizimiga ta'siri va kelajakdagi moliyaviy prognozlar tahlili...",
      score: 23,
      b_color: "bg-primary",
      t_color: "text-primary",
      level: "C1"
    },
    {
      id: 4,
      title: "Shahar hayoti va stress boshqaruvi",
      desc: "Megapolislarda yashashning inson ruhiyatiga ta'siri va zamonaviy yechimlar haqida fikrlar...",
      score: 17,
      b_color: "bg-tertiary",
      t_color: "text-tertiary",
      level: "A2+"
    },
    {
      id: 5,
      title: "Ekologik turizmning rivojlanishi",
      desc: "Tabiatni asrash va sayohat madaniyatini yuksaltirishda ekoturizmning ahamiyati bo'yicha insho...",
      score: 19,
      b_color: "bg-secondary",
      t_color: "text-secondary",
      level: "B2"
    }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-50 font-headline">EsseCheck</Link>
          <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-medium">
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/">Bosh sahifa</Link>
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/upload">Esse tekshirish</Link>
            <Link className="text-primary font-semibold border-b-2 border-primary pb-1" href="/gallery">Namunalar</Link>
          </div>
          <Link href="/upload">
            <button className="bg-gradient-to-br from-primary to-primary-fixed-dim text-white px-6 py-2.5 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0 active:scale-95 transition-all duration-300">
              Boshlash
            </button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen hero-glow animate-fade-in">
        <header className="mb-16 text-center md:text-left">
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-slate-50 mb-4">
            Esse <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">Namunalari</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl font-body leading-relaxed">
            Yuqori ball to'plagan esse namunalarini ko'ring va o'z yozish ko'nikmalaringizni tahlil qiling. Sun'iy intellekt tomonidan baholangan eng yaxshi ishlar.
          </p>
        </header>
        
        <section className="mb-12 flex flex-wrap gap-3 items-center justify-center md:justify-start">
          <button onClick={() => setFilter('all')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 active:translate-y-0 active:scale-95 hover:-translate-y-1 ${filter === 'all' ? 'bg-primary text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)]' : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-slate-50 shadow-sm hover:shadow-md'}`}>Barchasi</button>
          <button onClick={() => setFilter('high')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 active:translate-y-0 active:scale-95 hover:-translate-y-1 ${filter === 'high' ? 'bg-primary text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)]' : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-slate-50 shadow-sm hover:shadow-md'}`}>20-24 ball</button>
          <button onClick={() => setFilter('medium')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 active:translate-y-0 active:scale-95 hover:-translate-y-1 ${filter === 'medium' ? 'bg-primary text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)]' : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-slate-50 shadow-sm hover:shadow-md'}`}>15-19 ball</button>
          <button onClick={() => setFilter('low')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 active:translate-y-0 active:scale-95 hover:-translate-y-1 ${filter === 'low' ? 'bg-primary text-white shadow-[0_5px_15px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)]' : 'bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:text-slate-50 shadow-sm hover:shadow-md'}`}>10-14 ball</button>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {esselar.filter(item => {
            if (filter === 'all') return true;
            if (filter === 'high') return item.score >= 20;
            if (filter === 'medium') return item.score >= 15 && item.score <= 19;
            if (filter === 'low') return item.score >= 10 && item.score <= 14;
            return true;
          }).map((item) => (
            <div key={item.id} className="glass-card p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group bg-slate-800/50 border-slate-700/50">
              <div className="absolute top-0 right-0 p-4">
                <span className={`${item.b_color}/10 ${item.t_color} px-3 py-1 rounded-full text-sm font-bold border border-${item.t_color.replace('text-', '')}/20 bg-opacity-10 shadow-sm`}>
                  {item.score} / 24
                </span>
              </div>
              <div className="mb-6 mt-4">
                <h3 className={`font-headline text-xl font-bold text-slate-50 leading-snug mb-3 pr-10 group-hover:${item.t_color} transition-colors duration-300`}>{item.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-error">
                    <span className="material-symbols-outlined text-lg">error</span>
                    <span className="text-xs font-semibold">4</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary">
                    <span className="material-symbols-outlined text-lg">auto_fix_high</span>
                    <span className="text-xs font-semibold">2</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-lg">menu_book</span>
                    <span className="text-xs font-semibold">{item.level}</span>
                  </div>
                </div>
                <button className={`w-8 h-8 rounded-full flex items-center justify-center ${item.b_color}/10 ${item.t_color} group-hover:scale-110 active:scale-95 transition-transform`}>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}

          <div className="glass-card p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 hover:bg-slate-700/50 transition-all duration-500 relative overflow-hidden group bg-slate-800/50 border-dashed border-2 border-slate-600/50 flex flex-col items-center justify-center text-center cursor-pointer">
            <span className="material-symbols-outlined text-5xl text-slate-500 group-hover:text-primary mb-4 transition-colors duration-300 group-hover:scale-110">add_circle</span>
            <h3 className="font-headline text-xl font-bold text-slate-50 mb-2">O'z inshongizni yuklang</h3>
            <p className="text-slate-500 text-sm mb-6 max-w-[200px]">AI tahlilini oling va namunalar qatoriga qo'shiling</p>
            <Link href="/upload">
              <button className="bg-slate-800/50 border border-slate-700/50 text-slate-200 shadow-sm px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95">Hoziroq boshlash</button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900/50 w-full py-12 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1.5 text-center md:text-left w-full justify-center md:justify-start">
            <div className="text-lg font-bold text-slate-50 font-headline">Muallif: Hatamova Diyora</div>
            <div className="font-['Inter'] text-sm text-slate-400 flex items-center justify-center md:justify-start gap-1.5">
              <span className="material-symbols-outlined text-sm text-primary">call</span>
              +998 (94) 123 45 67
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
