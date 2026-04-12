import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 shadow-sm">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-50 font-headline">
            EsseCheck
          </Link>
          <div className="hidden md:flex items-center gap-8 font-['Plus_Jakarta_Sans'] font-medium">
            <Link className="text-primary font-semibold border-b-2 border-primary pb-1" href="/">Bosh sahifa</Link>
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/upload">Esse tekshirish</Link>
            <Link className="text-slate-500 hover:text-primary transition-colors duration-200 border-b-2 border-transparent hover:border-slate-600/50 pb-1" href="/gallery">Namunalar</Link>
          </div>
          <Link href="/upload">
            <button className="bg-gradient-to-br from-primary to-primary-fixed-dim text-white px-6 py-2 rounded-full font-semibold hover:-translate-y-0.5 active:translate-y-0 active:scale-95 duration-300 ease-out cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Boshlash
            </button>
          </Link>
        </div>
      </nav>
      
      <main className="relative overflow-hidden pt-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] nebula-glow rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] nebula-glow rounded-full pointer-events-none"></div>
        
        <section className="relative max-w-7xl mx-auto px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 shadow-sm">
            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
            <span className="text-xs font-semibold tracking-wider uppercase text-primary font-label">Sun'iy Intellekt Tahlili</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-headline mb-8 leading-[1.1] max-w-4xl tracking-tight text-slate-50">
            Esselaringizni <span className="gradient-text">Sun'iy Intellekt</span> yordamida baholang!
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-12 font-body leading-relaxed">
            Milliy sertifikat topshiriqlari bo'yicha to'liq tahlil va aniq natijalar. O'z xatolaringizni real vaqt rejimida ko'ring va mahoratingizni oshiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link href="/upload">
              <button className="bg-gradient-to-br from-primary to-primary-fixed-dim text-white px-10 py-4 rounded-full font-bold text-lg hover:-translate-y-1 active:translate-y-0 active:scale-95 duration-300 ease-out cursor-pointer shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.5)] transition-all">
                Esseni yuklash
              </button>
            </Link>
            <Link href="/gallery">
              <button className="bg-slate-800/50 text-slate-200 px-10 py-4 rounded-full font-bold text-lg border border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-700/50 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 active:scale-95 shadow-sm">
                Namunaviy esselarni ko'rish
              </button>
            </Link>
          </div>

        </section>
        
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="mb-16 text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-slate-50">Kelajak ta'limi bugun</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 group relative glass-panel rounded-xl p-8 hover:-translate-y-1 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-lg">
              <div className="absolute top-0 right-0 p-12 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 shadow-none border border-blue-100">
                  <span className="material-symbols-outlined text-primary text-3xl">camera_enhance</span>
                </div>
                <h3 className="text-2xl font-bold font-headline mb-4 text-slate-50">Rasmdan matn o'qish (OCR)</h3>
                <p className="text-slate-300 font-body leading-relaxed max-w-md">
                  Qog'ozdagi esseni suratga oling. Bizning ilg'or OCR texnologiyamiz uni bir necha soniya ichida raqamli matnga aylantiradi va tahlil qilishga tayyorlaydi.
                </p>
              </div>
              <div className="absolute bottom-[-10%] right-[-5%] w-1/2 opacity-5 text-primary group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">document_scanner</span>
              </div>
            </div>
            
            <div className="md:col-span-5 glass-panel rounded-xl p-8 hover:-translate-y-1 hover:border-secondary/50 transition-all duration-500 shadow-sm hover:shadow-lg">
              <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mb-6 shadow-none border border-violet-100">
                <span className="material-symbols-outlined text-secondary text-3xl">vitals</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4 text-slate-50">24-ballik aniq mezon</h3>
              <p className="text-slate-300 font-body leading-relaxed">
                Milliy sertifikatning barcha talablariga muvofiq: Grammatika, Lug'at, Mantiq va Struktura bo'yicha to'liq 24 ballik tahlil tizimi.
              </p>
              <div className="mt-8 flex items-end gap-2">
                <div className="w-8 h-12 bg-slate-200 rounded-t-lg"></div>
                <div className="w-8 h-24 bg-secondary rounded-t-lg"></div>
                <div className="w-8 h-16 bg-slate-200 rounded-t-lg"></div>
                <div className="w-8 h-20 bg-secondary/60 rounded-t-lg"></div>
              </div>
            </div>
            
            <div className="md:col-span-12 glass-panel rounded-xl p-10 hover:-translate-y-1 hover:border-tertiary/50 transition-all duration-500 flex flex-col md:flex-row items-center gap-12 shadow-sm hover:shadow-lg">
              <div className="flex-1">
                <div className="w-14 h-14 bg-pink-50 rounded-xl flex items-center justify-center mb-6 border border-pink-100">
                  <span className="material-symbols-outlined text-tertiary text-3xl">forum</span>
                </div>
                <h3 className="text-3xl font-bold font-headline mb-4 text-slate-50">Interaktiv feedback</h3>
                <p className="text-slate-300 text-lg font-body leading-relaxed">
                  Xatolaringizni shunchaki ko'rmang, ulardan dars oling. Bizning AI har bir xato uchun mukammal variantni va nima uchun xato ekanligini batafsil tushuntirib beradi. Shaxsiy repetitoringiz har doim yoningizda.
                </p>
              </div>
              <div className="flex-1 w-full flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border-l-4 border-error text-red-300 font-label border border-red-500/20 shadow-sm hover:-translate-y-1 transition-transform">
                  "Bu jumlada imlo xatosi bor. 'Qanaqa' so'zi o'rniga adabiy uslubda 'qanday' bo'lishi lozim."
                </div>
                <div className="p-4 rounded-xl bg-blue-500/10 border-l-4 border-primary text-blue-300 font-label ml-8 border border-blue-500/20 shadow-sm hover:-translate-y-1 transition-transform">
                  "Uslubni kuchaytirish uchun oddiy so'zlar o'rniga ko'chma ma'noli o'xshatishlar qatnashtiring."
                </div>
                <div className="p-4 rounded-xl bg-violet-500/10 border-l-4 border-secondary text-violet-300 font-label border border-violet-500/20 shadow-sm hover:-translate-y-1 transition-transform">
                  "Keltirilgan dalillar va xulosa o'rtasidagi bog'liqlik juda mantiqiy shakllangan!"
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="max-w-5xl mx-auto px-8 py-24">
          <div className="relative glass-panel rounded-[2rem] p-12 md:p-20 text-center shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 mix-blend-multiply opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold font-headline mb-8 text-slate-50">Tayyormisiz?</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Minglab talabalar kabi siz ham o'z darajangizni oshiring. Hoziroq birinchi essenizni yuklang va tahlil oling.
              </p>
              <Link href="/upload">
                <button className="bg-gradient-to-br from-primary to-primary-fixed-dim text-white px-12 py-5 rounded-full font-bold text-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 duration-300 ease-out cursor-pointer shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                  Hoziroq boshlash
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full py-12 border-t border-slate-700/50 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1.5 text-center md:text-left w-full justify-center md:justify-start">
            <div className="text-lg font-bold text-slate-50 font-headline">Muallif: Hotamova Diyora</div>
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
