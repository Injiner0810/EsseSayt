"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  
  // Data from API
  const [resultData, setResultData] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAnalyze = async () => {
    if (!text && !fileInputRef.current?.files?.length) return;
    setIsAnalyzing(true);
    
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: text })
      });
      const data = await res.json();
      setResultData(data);
      setShowResult(true);
    } catch (e) {
      console.error(e);
      alert("Xatolik yuz berdi!");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearResult = () => {
    setShowResult(false);
    setResultData(null);
    setText('');
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center w-full">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-50 font-headline">EsseCheck</Link>
          <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] font-medium">
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/">Bosh sahifa</Link>
            <Link className="text-primary font-semibold border-b-2 border-primary pb-1" href="/upload">Esse tekshirish</Link>
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/gallery">Namunalar</Link>
          </div>
          <button onClick={clearResult} className="bg-gradient-to-br from-primary to-primary-fixed-dim text-white px-6 py-2.5 rounded-full font-bold hover:-translate-y-0.5 active:translate-y-0 active:scale-95 duration-200 hover:shadow-lg hover:shadow-primary/30 transition-all">
            Yangi esse yozish
          </button>
        </div>
      </nav>

      <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>

      {!showResult ? (
        <main className="min-h-screen pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-display-lg text-4xl md:text-6xl font-headline font-bold text-slate-50 mb-4 tracking-tight">
                Essengizni <span className="text-primary">mukammallashtiring</span>
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                AI yordamida esseingizni tahlil qiling, xatolarni tuzating va yuqori ball olish uchun tavsiyalar oling.
              </p>
            </div>

            <div className="space-y-12">
              <div className="relative group cursor-pointer hover:-translate-y-1 transition-transform duration-300" onClick={() => fileInputRef.current?.click()}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 opacity-10 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl"></div>
                <div className="relative glow-border glass-card p-12 flex flex-col items-center justify-center min-h-[320px] shadow-sm hover:shadow-lg transition-all">
                  <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-6 text-primary shadow-[0_10px_30px_rgba(37,99,235,0.1)] group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl">photo_camera</span>
                  </div>
                  <h3 className="text-headline-md font-headline font-bold text-slate-50 mb-2 group-hover:text-primary transition-colors">Rasmni yuklang yoki sudrab keling</h3>
                  <p className="text-slate-300 mb-8 text-center max-w-md">Max 5MB gacha rasm yoki PDF formatini qabul qilamiz.</p>
                  <button className="px-8 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-primary font-semibold hover:bg-slate-700/50 hover:shadow-md transition-all active:scale-95 duration-200">
                    Faylni tanlash
                  </button>
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputRef} 
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files?.length) setText("Rasm yuklandi: " + e.target.files[0].name);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200"></div>
                <span className="text-label-md font-bold text-slate-500 uppercase tracking-widest">Yoki</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200"></div>
              </div>

              <div className="space-y-4 group">
                <div className="flex justify-between items-end">
                  <label className="text-title-md font-semibold text-slate-50 ml-2 group-focus-within:text-primary transition-colors">Matnni kiriting</label>
                  <span className="text-label-md text-slate-300 bg-slate-800/50 border border-slate-700/50 px-3 py-1 rounded-full shadow-sm">{text.length > 5 ? text.split(' ').length : 0} so'z</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2 ml-2">
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-2 self-center">Tayyor mavzular:</span>
                  {["Ta'lim tizimi muammolari", "Raqamli texnologiyalar yoshlarni chalg'ityaptimi?", "Global isish va ekografiya", "Kitob mutolaasi ahamiyati"].map(topic => (
                    <button 
                      key={topic}
                      onClick={() => setText(text ? text + '\n\n' + topic + '\n' : topic + '\n')}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-600/50 text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-200 active:scale-95"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-slate-200 opacity-50 rounded-2xl group-focus-within:bg-primary/20 transition-colors duration-300 blur-sm"></div>
                  <textarea 
                    className="relative w-full min-h-[400px] bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 text-slate-50 placeholder:text-slate-500 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all resize-none outline-none text-lg leading-relaxed shadow-sm hover:shadow-md" 
                    placeholder="Essengizni shu yerga yozing yoki nusxa ko'chirib o'tkazing..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <button 
                  onClick={handleAnalyze}
                  disabled={isAnalyzing || (!text && text.indexOf('Rasm yuklandi') === -1)}
                  className="relative group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {!isAnalyzing && <div className="absolute -inset-2 bg-primary blur-xl opacity-20 group-hover:opacity-40 transition duration-300 rounded-full"></div>}
                  <div className="relative bg-gradient-to-br from-primary to-primary-fixed-dim text-white font-headline font-extrabold text-xl px-12 py-5 rounded-full flex items-center gap-3 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)]">
                    <span className={`material-symbols-outlined font-bold ${isAnalyzing ? 'animate-pulse' : ''}`}>bolt</span>
                    {isAnalyzing ? "Tahlil qilinmoqda..." : "Tekshirish va Baholash"}
                  </div>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <span className="material-symbols-outlined text-primary mb-4 p-3 bg-blue-50 rounded-full">spellcheck</span>
                <h4 className="text-slate-50 font-bold mb-2">Grammatika tahlili</h4>
                <p className="text-sm text-slate-300">Murakkab sintaktik va punktuatsion xatolarni aniqlash.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-100">
                <span className="material-symbols-outlined text-secondary mb-4 p-3 bg-violet-50 rounded-full">psychology</span>
                <h4 className="text-slate-50 font-bold mb-2">Mantiqiy izchillik</h4>
                <p className="text-sm text-slate-300">Fikrlarning bog'liqligi va esse strukturasini baholash.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-200">
                <span className="material-symbols-outlined text-tertiary mb-4 p-3 bg-pink-50 rounded-full">grade</span>
                <h4 className="text-slate-50 font-bold mb-2">IELTS/CEFR Mezonlari</h4>
                <p className="text-sm text-slate-300">Xalqaro standartlar asosida taxminiy ballni hisoblash.</p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-8 animate-fade-in relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="glass-panel p-8 rounded-xl flex flex-col items-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-primary">
                  <span className="material-symbols-outlined text-6xl">auto_awesome</span>
                </div>
                <h3 className="font-headline text-lg font-semibold text-slate-300 mb-6 group-hover:text-primary transition-colors">Umumiy natija</h3>
                
                <div className="relative w-48 h-48 flex items-center justify-center hover:scale-105 transition-transform duration-500">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-slate-200" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                    <circle cx="96" cy="96" fill="transparent" r="88" stroke="url(#scoreGradient)" strokeDasharray="552" strokeDashoffset={`${552 - (552 * ((resultData?.totalScore || 0) / 24))}`} strokeLinecap="round" strokeWidth="12" style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)" }}></circle>
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#2563eb"}}></stop>
                        <stop offset="100%" style={{stopColor:"#3b82f6"}}></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-5xl font-extrabold font-headline text-slate-50 tracking-tighter drop-shadow-sm">{resultData?.totalScore || 0}<span className="text-2xl text-slate-500">/24</span></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mt-1 bg-blue-50 px-2 py-1 rounded">Excellent</span>
                  </div>
                </div>
                
                <div className="w-full mt-6 space-y-4 px-2">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider"><span>Mavzu yoritilishi</span><span className="text-primary">{resultData?.criteriaScores?.mavzu || 0}/6</span></div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50"><div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${((resultData?.criteriaScores?.mavzu || 0) / 6) * 100}%`, transition: 'width 1s ease-out' }}></div></div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider"><span>Mantiqiy izchillik</span><span className="text-primary">{resultData?.criteriaScores?.mantiq || 0}/6</span></div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50"><div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${((resultData?.criteriaScores?.mantiq || 0) / 6) * 100}%`, transition: 'width 1s ease-out 0.2s' }}></div></div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider"><span>Lug'at va uslub</span><span className="text-primary">{resultData?.criteriaScores?.lugat || 0}/6</span></div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50"><div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${((resultData?.criteriaScores?.lugat || 0) / 6) * 100}%`, transition: 'width 1s ease-out 0.4s' }}></div></div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider"><span>Imlo / Punktuatsiya</span><span className="text-primary">{resultData?.criteriaScores?.imlo || 0}/6</span></div>
                    <div className="w-full h-2 bg-slate-800/80 rounded-full overflow-hidden shadow-inner border border-slate-700/50"><div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: `${((resultData?.criteriaScores?.imlo || 0) / 6) * 100}%`, transition: 'width 1s ease-out 0.6s' }}></div></div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-slate-500 mb-1">So'zlar soni</div>
                    <div className="text-xl font-bold font-headline text-slate-50">{text.split(' ').length || 284}</div>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-xs text-slate-500 mb-1">Daraja</div>
                    <div className="text-xl font-bold font-headline text-secondary">C1</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-headline text-sm font-bold text-slate-500 px-2 uppercase tracking-widest">Kriteriyalar bo'yicha tahlil</h4>
                
                {resultData?.feedbackList?.map((fb: any, idx: number) => (
                  <div key={idx} className={`glass-panel p-5 rounded-xl flex flex-col gap-3 group hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 ${fb.type==='warning' ? 'hover:border-red-300' : 'hover:border-blue-300'}`}>
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${fb.type==='warning' ? 'bg-red-50 text-error border border-red-100' : 'bg-blue-50 text-primary border border-blue-100'} group-hover:scale-110 transition-transform duration-300`}>
                          <span className="material-symbols-outlined">{fb.type==='warning' ? 'error' : 'task_alt'}</span>
                        </div>
                        <span className="font-headline font-semibold text-slate-50">{fb.title.split('(')[0]}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{fb.message}</p>
                  </div>
                ))}

              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="glass-panel px-6 py-4 rounded-xl flex flex-wrap items-center justify-between gap-4 sticky top-28 z-20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-error text-[10px] font-bold uppercase tracking-wider hover:bg-error hover:text-white transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-error"></span> Imlo
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-wider hover:bg-orange-600 hover:text-white transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span> Uslubiy
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-[10px] font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-primary"></span> Punktuatsiya
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 text-yellow-600 text-[10px] font-bold uppercase tracking-wider hover:bg-yellow-500 hover:text-white transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span> Harf xatosi
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={clearResult} className="flex gap-2 px-6 py-2.5 font-bold text-sm bg-slate-100 text-slate-200 hover:bg-slate-800/50 border border-transparent hover:border-slate-600/50 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all rounded-full">
                    Qayta ishlash
                  </button>
                </div>
              </div>

              <div className="bg-slate-800/50 p-10 md:p-14 rounded-xl shadow-lg border border-slate-700/50 relative min-h-[600px] transition-all hover:shadow-xl">
                <h1 className="font-headline text-3xl font-bold text-slate-50 mb-8 border-l-4 border-primary pl-6">Sun'iy intellekt Tahlil Natijasi</h1>
                <div 
                  className="font-body text-lg leading-loose text-slate-100 space-y-6"
                  dangerouslySetInnerHTML={{ __html: resultData?.htmlHighlightedText || "" }} 
                />
              </div>

              {resultData?.idealVersion && (
                <div className="glass-panel p-10 md:p-14 rounded-xl border border-yellow-500/30 relative mt-8 shadow-xl overflow-hidden group bg-slate-800/80">
                  <div className="absolute -top-10 -right-10 text-yellow-500/5 group-hover:text-yellow-500/10 transition-colors duration-700">
                    <span className="material-symbols-outlined text-[200px]">workspace_premium</span>
                  </div>
                  <h2 className="font-headline text-2xl font-bold text-yellow-500 mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined bg-yellow-500/20 p-2 rounded-full text-yellow-400">auto_fix_high</span>
                    Ideal Tahrirlangan Variant
                  </h2>
                  <div className="font-body text-lg leading-relaxed text-slate-300 italic whitespace-pre-wrap relitive z-10">
                    {resultData.idealVersion}
                  </div>
                </div>
              )}

            </div>
          </div>
        </main>
      )}
    </>
  );
}
