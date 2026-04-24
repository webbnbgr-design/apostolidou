import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Shield, 
  Scale, 
  Globe, 
  Star, 
  Menu, 
  X, 
  ChevronRight,
  User,
  Gavel,
  Languages,
  ArrowRight
} from 'lucide-react';

type Language = 'EL' | 'RO';

const translations = {
  EL: {
    nav: {
      home: 'Αρχική',
      about: 'Η Δικηγόρος',
      criminal: 'Ποινικό Δίκαιο',
      asylum: 'Άσυλο & Μετανάστευση',
      civil: 'Αστικό Δίκαιο',
      contact: 'Επικοινωνία'
    },
    hero: {
      tag: 'Κορυφαία Ποινικολόγος με Διεθνή Προσανατολισμό',
      title: 'Αουρέλια Αλεξάνδρα Αποστολίδου',
      subtitle: 'Νομική Προστασία με Ήθος – Η Σύμμαχός σας στο Ποινικό και Διεθνές Δίκαιο',
      cta: 'Ζητήστε Άμεση Νομική Υποστήριξη'
    },
    stats: {
      reviews: '5/5 Αστέρια',
      count: '138+ Κριτικές',
      motto: 'Ήθος - Συνέπεια - Αφοσίωση'
    },
    about: {
      title: 'Η Δικηγόρος',
      content: 'Η Αουρέλια - Αλεξάνδρα Αποστολίδου είναι δικηγόρος Σερρών με πάθος για την απόδοση δικαιοσύνης. Με φήμη "κορυφαίας ποινικολόγου", επικεντρώνεται στην ουσιαστική υποστήριξη του εντολέα.'
    },
    services: {
      title: 'Πυλώνες Εξειδίκευσης',
      criminal: {
        title: 'Ποινικό Δίκαιο',
        desc: 'Υπεράσπιση με έμφαση στην απόδειξη της αθωότητας. Ψάχνουμε και βρίσκουμε τον τρόπο.'
      },
      asylum: {
        title: 'Άσυλο & Διεθνείς Υπηρεσίες',
        desc: 'Asylum in Greece & υποστήριξη Ρουμάνων υπηκόων (Avocat Grecia).'
      },
      civil: {
        title: 'Αστικό & Διοικητικό',
        desc: 'Συνολική νομική κάλυψη για κάθε σας υπόθεση με συνέπεια.'
      }
    },
    defense: {
      title: 'The Power of Defense',
      subtitle: 'Η Υπεράσπιση ως Τέχνη',
      text: 'Στο Ποινικό Δίκαιο, κάθε λεπτομέρεια μετράει. Η στρατηγική μας βασίζεται στην εξαντλητική έρευνα και στην ακλόνητη πίστη στο τεκμήριο της αθωότητας.'
    },
    contact: {
      title: 'Άμεση Επικοινωνία',
      address: 'Δημοσθένους Φλωριά 8-10, Σέρρες',
      call: 'Καλέστε τώρα',
      footer: 'Δικηγορικό Γραφείο Αποστολίδου © 2026'
    }
  },
  RO: {
    nav: {
      home: 'Acasă',
      about: 'Avocatul',
      criminal: 'Drept Penal',
      asylum: 'Azil și Imigrare',
      civil: 'Drept Civil',
      contact: 'Contact'
    },
    hero: {
      tag: 'Avocat Penalist de Top cu Orientare Internațională',
      title: 'Aurelia Alexandra Apostolidou',
      subtitle: 'Protecție Juridică cu Integritate – Aliatul dumneavoastră în Drept Penal și Internațional',
      cta: 'Solicitați Asistență Juridică Imediată'
    },
    stats: {
      reviews: '5/5 Stele',
      count: '138+ Recenzii',
      motto: 'Etică - Consecvență - Dedicare'
    },
    about: {
      title: 'Avocatul',
      content: 'Aurelia - Alexandra Apostolidou este un avocat din Serres cu o pasiune pentru actul de justiție. Cu reputația de "avocat penalist de top", se concentrează pe sprijinul substanțial al clientului.'
    },
    services: {
      title: 'Piloni de Expertiză',
      criminal: {
        title: 'Drept Penal',
        desc: 'Apărare cu accent pe dovedirea nevinovăției. Căutăm și găsim calea.'
      },
      asylum: {
        title: 'Azil și Servicii Internaționale',
        desc: 'Asylum in Greece & asistență pentru cetățenii români (Avocat Roman în Grecia).'
      },
      civil: {
        title: 'Drept Civil și Administrativ',
        desc: 'Acoperire juridică completă pentru fiecare caz cu consecvență.'
      }
    },
    defense: {
      title: 'Puterea Apărării',
      subtitle: 'Apărarea ca Artă',
      text: 'În Dreptul Penal, fiecare detaliu contează. Strategia noastră se bazează pe cercetări exhaustive și credință neclintită în prezumția de nevinovăție.'
    },
    contact: {
      title: 'Contact Imediat',
      address: 'Dimosthenous Floria 8-10, Serres',
      call: 'Sunați acum',
      footer: 'Cabinet de Avocat Apostolidou © 2026'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('EL');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(prev => prev === 'EL' ? 'RO' : 'EL');

  return (
    <div className="min-h-screen selection:bg-burgundy/10 selection:text-burgundy">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-burgundy rounded-xl flex items-center justify-center text-gold shadow-lg">
              <Scale size={20} />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-semibold tracking-tight text-slate-900 leading-none">APOSTOLIDOU</h1>
              <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold mt-1">Law Office</p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="text-sm font-medium text-slate-600 hover:text-burgundy transition-colors">
                {value}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-burgundy/50 text-xs font-bold text-slate-700 transition-all bg-white/50"
            >
              <Languages size={14} className="text-burgundy" />
              {lang === 'EL' ? 'RO' : 'EL'}
            </button>
            <a 
              href="tel:6942457600"
              className="hidden md:flex items-center gap-2 bg-burgundy text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-burgundy/20"
            >
              <Phone size={16} />
              6942457600
            </a>
            <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-burgundy">MENU</span>
              <button onClick={() => setIsMenuOpen(false)}><X size={28} /></button>
            </div>
            <div className="flex flex-col gap-8">
              {Object.entries(t.nav).map(([key, value]) => (
                <a 
                  key={key} 
                  href={`#${key}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-serif font-medium text-slate-900"
                >
                  {value}
                </a>
              ))}
            </div>
            <div className="mt-auto pt-12 border-t border-slate-100">
              <a href="tel:6942457600" className="flex items-center gap-4 text-2xl font-bold text-burgundy">
                <Phone size={24} />
                6942457600
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/5 to-transparent -z-10" />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-burgundy/5 rounded-full blur-[100px] -z-10" 
        />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold tracking-wider uppercase mb-6">
              {t.hero.tag}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 leading-[0.9] mb-8">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:6942457600" 
                className="group flex items-center justify-center gap-3 bg-burgundy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-900 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-burgundy/20"
              >
                {t.hero.cta}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 px-6 py-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-gold">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">{t.stats.count}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070" 
                alt="Representative Legal Imagery" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                <p className="text-burgundy font-serif italic text-2xl mb-2">"{t.stats.motto}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-burgundy/30" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Professional Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section id="services" className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">{t.services.title}</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Criminal Law - Feature Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 md:row-span-2 bento-card relative overflow-hidden group border-burgundy/10"
            >
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-16 h-16 bg-burgundy/10 rounded-2xl flex items-center justify-center text-burgundy mb-8 group-hover:bg-burgundy group-hover:text-white transition-colors">
                  <Gavel size={32} />
                </div>
                <h3 className="text-4xl font-serif mb-4 text-slate-900">{t.services.criminal.title}</h3>
                <p className="text-lg text-slate-600 max-w-md mb-8">{t.services.criminal.desc}</p>
                <ChevronRight className="text-burgundy group-hover:translate-x-4 transition-transform" />
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Shield size={200} />
              </div>
            </motion.div>

            {/* Asylum - Vertical Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:row-span-2 bento-card bg-burgundy text-white group"
            >
              <div className="h-full flex flex-col">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-auto">
                  <Globe size={24} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif mb-4 text-gold">{t.services.asylum.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-6">
                    {t.services.asylum.desc}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase font-bold tracking-widest text-white">EU LAW</span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase font-bold tracking-widest text-white">HUMAN RIGHTS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Civil Law - Wide Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-3 bento-card flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-serif mb-4">{t.services.civil.title}</h3>
                <p className="text-slate-600">{t.services.civil.desc}</p>
              </div>
              <div className="flex gap-4">
                <div className="px-8 py-4 bg-beige rounded-2xl text-burgundy font-bold text-sm">Real Estate</div>
                <div className="px-8 py-4 bg-beige rounded-2xl text-burgundy font-bold text-sm hidden sm:block">Inheritance</div>
                <div className="px-8 py-4 bg-beige rounded-2xl text-burgundy font-bold text-sm hidden lg:block">Admin Cases</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Power of Defense Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold text-sm font-bold tracking-[0.3em] uppercase mb-6 block"
            >
              {t.defense.subtitle}
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              {t.defense.title}
            </h2>
            <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-12">
              {t.defense.text}
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-serif text-gold mb-2">100%</p>
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Dedication</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-gold mb-2">24/7</p>
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Support Availability</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square max-w-md mx-auto border border-white/10 rounded-full flex items-center justify-center relative">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-white/5 rounded-full border-dashed" 
              />
              <div className="p-12 text-center bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl">
                <Shield size={64} className="text-gold mx-auto mb-6" />
                <p className="text-sm font-bold uppercase tracking-widest leading-loose">
                  Absolute <br />
                  Confidentiality <br />
                  & Trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-serif mb-6">Social Proof & Trust</h2>
              <p className="text-slate-600 text-lg">
                The voices of our clients are our greatest endorsement. Over 138 individuals have shared their gratitude for the results we achieved.
              </p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={28} fill="currentColor" className="text-gold" />)}
              </div>
              <p className="text-3xl font-display font-medium">5.0 / 5.0</p>
              <p className="text-sm uppercase tracking-widest text-slate-400 font-bold italic">Google Maps Certified</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Η καλύτερη ποινικολόγος. Ήθος και συνέπεια. Ουσιαστική υποστήριξη σε κάθε βήμα.",
                author: "Client A.",
                tag: "Criminal Law"
              },
              {
                text: "Φιλική και ανθρώπινη προσέγγιση. Με βοήθησε σε μια πολύ δύσκολη περίπτωση ασύλου.",
                author: "Client B.",
                tag: "Asylum Services"
              },
              {
                text: "Un avocat de nota 10 în Grecia! Recomand cu toată încrederea pentru seriozitate.",
                author: "Client C.",
                tag: "Avocat Roman"
              }
            ].map((r, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative"
              >
                <div className="opacity-10 absolute top-8 right-10">
                  <Star size={60} fill="currentColor" className="text-gold" />
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">"{r.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{r.author}</p>
                  <p className="text-[10px] uppercase tracking-widest text-burgundy font-bold mt-1">{r.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-burgundy rounded-xl flex items-center justify-center text-gold">
                  <Scale size={24} />
                </div>
                <span className="text-2xl font-display font-medium tracking-tighter">APOSTOLIDOU <br /> LAW</span>
              </div>
              <h3 className="text-4xl font-serif text-gold mb-8 max-w-sm">
                Ready to protect your rights, globally.
              </h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                  <Globe size={18} />
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                  <User size={18} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white/50">{t.nav.contact}</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <MapPin size={20} className="text-gold mt-1" />
                  <span className="text-white/70 group-hover:text-white transition-colors">
                    {t.contact.address}
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={20} className="text-gold" />
                  <a href="tel:6942457600" className="text-white/70 group-hover:text-white transition-colors text-xl font-bold">
                    6942457600
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-white/50">Office Hours</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 20:00</span></li>
                <li className="flex justify-between"><span>Sat</span> <span>Appointment Only</span></li>
                <li className="flex justify-between text-gold"><span>Emergency</span> <span>24/7 Support</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold tracking-widest uppercase">
            <p>{t.contact.footer}</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Legal Mentions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <motion.a 
        href="tel:6942457600"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-burgundy text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group"
      >
        <span className="hidden md:block font-bold text-sm tracking-wide">{t.hero.cta}</span>
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse group-hover:bg-gold transition-colors">
          <Phone size={20} />
        </div>
      </motion.a>
    </div>
  );
}
