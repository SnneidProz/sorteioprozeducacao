import React, { useState, useEffect } from 'react';
import { Gift, Smartphone, CheckCircle, ShieldCheck, Star, AlertCircle, Camera, Sparkles, GraduationCap, IdCard } from 'lucide-react';
import { UserData } from '../types';
import { maskCPF, maskPhone } from '../utils/formatters';
import { isValidPhone } from '../utils/validators';

interface LandingPageProps {
  onSubmit: (data: UserData) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    cpf: '',
    phone: '',
    email: '',
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-12-19T12:00:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initial set
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'cpf') finalValue = maskCPF(value);
    if (name === 'phone') finalValue = maskPhone(value);

    setFormData((prev) => ({ ...prev, [name]: finalValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.cpf || !formData.phone || !formData.email) {
      alert("Por favor, preencha todos os campos para validar sua inscrição.");
      return;
    }
    
    if (!isValidPhone(formData.phone)) {
      alert("Por favor, insira um número de telefone válido.");
      return;
    }

    if (formData.cpf.length < 14) {
      alert("Por favor, insira um CPF válido para validação da matrícula.");
      return;
    }

    onSubmit(formData);
  };

  return (
    <div className="bg-white">
      {/* Top Banner - Urgency RED BLINKING */}
      <div className="bg-red-600 text-white text-center py-2 px-4 font-bold text-xs md:text-sm border-b border-red-800 shadow-xl flex flex-col md:flex-row items-center justify-center gap-2 animate-pulse sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 fill-white text-red-600" />
          <span className="uppercase tracking-widest text-yellow-300">Encerramento das Inscrições:</span>
        </div>
        <div className="font-mono text-lg md:text-xl bg-red-800/50 px-3 py-0.5 rounded-lg border border-red-400/30 shadow-inner flex items-center gap-1">
           <span>{timeLeft.days.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">d</span> : 
           <span>{timeLeft.hours.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">h</span> : 
           <span>{timeLeft.minutes.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">m</span> : 
           <span>{timeLeft.seconds.toString().padStart(2, '0')}</span><span className="text-[10px] opacity-70">s</span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-proz-dark via-proz-primary to-proz-light text-white overflow-hidden">
        {/* Background Overlay Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col justify-start h-full text-center lg:text-left space-y-6 lg:space-y-8 lg:pt-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-proz-orange text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider transform -rotate-2 shadow-lg mb-4 border border-white/20">
                <GraduationCap className="w-4 h-4 text-white" />
                Exclusivo para Alunos Proz
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
                Sorteio de Final de Ano: <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">IPHONE 16 PRO</span>
              </h1>
              
              <p className="text-base md:text-lg text-purple-100 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                A Proz Educação valoriza seu esforço! Participe do sorteio exclusivo para <strong>alunos com matrícula ativa</strong>. 
                Preencha seus dados para validar sua participação e concorra a tecnologia de ponta para seus estudos em 2026.
              </p>

               {/* iPhone Composition */}
              <div className="relative w-full max-w-[220px] md:max-w-[260px] perspective-1000 mx-auto mt-6 lg:mt-8 group">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-proz-orange/40 blur-[50px] rounded-full animate-pulse pointer-events-none"></div>
                  <div className="relative flex justify-center items-center">
                      <div className="relative z-20 transform rotate-[-5deg] lg:rotate-[-10deg] hover:rotate-0 transition duration-700 ease-out">
                          <img 
                              src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg" 
                              alt="iPhone 16 Pro Traseira Titanio" 
                              className="w-full drop-shadow-2xl rounded-[2.5rem] border-4 border-white/10 shadow-black/50" 
                          />
                          <div className="absolute top-20 -right-6 bg-white/90 backdrop-blur-md text-proz-dark font-bold text-xs px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1 border border-purple-100 animate-bounce">
                              <Sparkles className="w-3 h-3 text-proz-primary" />
                              <span>Sorteio Oficial</span>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col items-center justify-start h-full w-full">
            <div className="relative w-full max-w-md group perspective-1000 z-20 mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-proz-orange to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800">
                <div className="text-center mb-6 border-b border-gray-100 pb-4">
                  <h2 className="text-2xl font-bold text-proz-dark">Validação de Inscrição</h2>
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    Sorteio dia 19/12/2025
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Nome Completo do Aluno</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Nome igual ao da chamada"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-proz-primary focus:ring-4 focus:ring-proz-primary/10 outline-none transition font-medium"
                      required
                    />
                  </div>
                  
                  {/* CPF FIELD HIGHLIGHTED */}
                  <div className="relative">
                    <div className="flex justify-between">
                        <label className="block text-xs font-bold text-proz-primary uppercase mb-1 ml-1">CPF (Obrigatório)</label>
                        <span className="text-[10px] text-gray-400 flex items-center gap-1"><IdCard className="w-3 h-3"/> Validação de Matrícula</span>
                    </div>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      placeholder="000.000.000-00"
                      className="w-full px-4 py-3 rounded-lg border-2 border-proz-light/50 bg-purple-50 focus:bg-white focus:border-proz-primary focus:ring-4 focus:ring-proz-primary/10 outline-none transition font-medium tracking-wide text-gray-900"
                      required
                      maxLength={14}
                    />
                    <p className="text-[10px] text-gray-500 mt-1 ml-1">Necessário para conferência no sistema acadêmico.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">WhatsApp para Contato</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-proz-primary focus:ring-4 focus:ring-proz-primary/10 outline-none transition font-medium"
                      required
                      maxLength={15}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">E-mail Institucional ou Pessoal</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.nome@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-proz-primary focus:ring-4 focus:ring-proz-primary/10 outline-none transition font-medium"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start mt-4 bg-gray-50 p-3 rounded border border-gray-100">
                    <input type="checkbox" required className="mt-1 w-4 h-4 text-proz-primary rounded border-gray-300 focus:ring-proz-primary cursor-pointer" />
                    <label className="ml-2 block text-xs text-gray-500 leading-tight cursor-pointer">
                      Declaro que sou aluno regularmente matriculado na Proz e concordo com os termos do sorteio.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-proz-orange to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-500/30 transform transition hover:-translate-y-1 text-lg flex items-center justify-center gap-2 uppercase tracking-wide"
                  >
                    <Gift className="w-6 h-6 animate-bounce" />
                    Confirmar Inscrição
                  </button>
                </form>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
                  <ShieldCheck className="w-3 h-3 text-green-500" />
                  <span>Site Seguro • Proz Educação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border-b-4 border-proz-primary group">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-proz-primary transition duration-300">
                <Smartphone className="w-8 h-8 text-proz-primary group-hover:text-white transition duration-300" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Desempenho Máximo</h3>
              <p className="text-gray-600 text-sm">Chip A18 Pro: Velocidade incomparável para rodar apps pesados de edição e estudo sem travamentos.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border-b-4 border-proz-orange group">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-proz-orange transition duration-300">
                <CheckCircle className="w-8 h-8 text-proz-orange group-hover:text-white transition duration-300" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Oficial Proz</h3>
              <p className="text-gray-600 text-sm">Campanha oficial de encerramento de semestre. Válido para todas as unidades com cursos técnicos.</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition border-b-4 border-green-500 group">
               <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition duration-300">
                <ShieldCheck className="w-8 h-8 text-green-600 group-hover:text-white transition duration-300" />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">Retirada na Secretaria</h3>
              <p className="text-gray-600 text-sm">O vencedor deverá apresentar documento com foto e comprovante de matrícula para retirar o prêmio.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};