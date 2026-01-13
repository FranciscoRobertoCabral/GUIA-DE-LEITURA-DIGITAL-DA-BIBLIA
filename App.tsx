import React from 'react';
import { CheckCircle, Navigation, ArrowRight, BookCheck, Info, Layout, Target, Zap, Pencil } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section - Problem (Dark Background) */}
      <section className="bg-brand-dark text-white pt-20 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
            Você abre a Bíblia com boas intenções.<br />
            <span className="text-orange-500 font-medium">Mas fecha com mais perguntas do que respostas.</span>
          </h1>
          <div className="space-y-4 text-lg md:text-xl font-light text-slate-300">
            <p>O texto parece difícil.</p>
            <p>A rotina atrapalha.</p>
            <p>E o que você leu de manhã… já não lembra à noite.</p>
          </div>
        </div>
      </section>

      {/* 2. Pivot Section - Reframing (Light Gray Background) */}
      <section className="bg-brand-accent py-16 px-6 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block p-3 bg-white rounded-full shadow-sm">
            <Navigation className="w-8 h-8 text-brand-dark" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Isso não significa falta de fé.
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-brand-dark opacity-90">
            Significa falta de direção.
          </p>
          <div className="mt-8 h-1 w-20 bg-brand-dark mx-auto rounded-full"></div>
        </div>
      </section>

      {/* 3. The Reframe (White Background) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-medium text-slate-600 mb-8 italic">
            "A Bíblia não foi feita para confundir, cansar ou gerar culpa. <br className="hidden md:block"/> Ela foi feita para transformar a vida real."
          </p>
          
          <div className="mt-16 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-10 text-center md:text-left">
              Agora imagine isso:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-2xl shrink-0">📖</div>
                <div>
                  <h4 className="font-bold text-lg">Leituras curtas e organizadas</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl shrink-0">🧭</div>
                <div>
                  <h4 className="font-bold text-lg">Explicações claras, sem linguagem complicada</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl shrink-0">💡</div>
                <div>
                  <h4 className="font-bold text-lg">Um ponto central para refletir</h4>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-2xl shrink-0">❤️</div>
                <div>
                  <h4 className="font-bold text-lg">Uma aplicação prática para viver naquele dia</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Methodology (Dark Blue Gradient) */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 gap-6 mb-12">
            <p className="text-lg md:text-xl font-light text-slate-300 border-l-4 border-slate-500 pl-6 text-left max-w-2xl mx-auto">
              Sem se perder nos textos. <br />
              Sem pular dias e desistir. <br />
              Sem sentir que está “lendo por ler”.
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-12">
            Esse guia foi criado para cristãos que querem mais do que informação — <span className="text-amber-400">querem transformação.</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center items-center">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full md:w-auto">
              <p className="font-bold text-xl mb-1">Poucos minutos</p>
              <p className="text-slate-400">por dia</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full md:w-auto">
              <p className="font-bold text-xl mb-1">Um plano</p>
              <p className="text-slate-400">simples</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 w-full md:w-auto">
              <p className="font-bold text-xl mb-1">Fé que entra</p>
              <p className="text-slate-400">na rotina</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Audience Checklist (Light Cream/White Background) */}
      <section className="bg-brand-light py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">Para quem é</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-lg text-slate-700 font-medium">Para quem já tentou ler a Bíblia e não conseguiu manter</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-lg text-slate-700 font-medium">Para quem sente dificuldade de entender o que lê</p>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
              <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
              <p className="text-lg text-slate-700 font-medium">Para quem quer viver a Palavra no trabalho, na família e nas decisões diárias</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BONUS SECTION - Digital Guide Card */}
      <section className="bg-brand-dark py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100">
            <div className="flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/50 rounded-lg text-brand-dark font-bold text-sm mb-8 uppercase tracking-wider">
                <BookCheck className="w-5 h-5" />
                Guia Digital
              </div>
              
              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-black text-brand-dark leading-[1.1] mb-8 max-w-2xl">
                Entenda a Bíblia de Capa a Capa de forma simples e sem complicação
              </h2>
              
              {/* Updated Description: Changed "pontos" to "pontos dos livros" */}
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-12 max-w-3xl text-center">
                O <span className="text-brand-dark font-bold underline decoration-orange-500 decoration-4">guia digital em PDF imprimível</span> explica em uma linguagem simples e de fácil entendimento os seguintes pontos dos livros <span className="font-bold text-brand-dark italic">da Bíblia:</span>
              </p>

              {/* Grid of Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full text-left">
                {[
                  { icon: <Info className="w-5 h-5 text-amber-500" />, text: "Contexto Histórico" },
                  { icon: <Layout className="w-5 h-5 text-amber-500" />, text: "Estrutura do Livro" },
                  { icon: <Target className="w-5 h-5 text-amber-500" />, text: "Assunto Central" },
                  { icon: <Zap className="w-5 h-5 text-amber-500" />, text: "Resumo Prático" },
                  { icon: <Pencil className="w-5 h-5 text-amber-500" />, text: "Exercício de Reflexão" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-brand-light p-4 rounded-xl hover:bg-brand-accent/30 transition-colors border border-transparent hover:border-slate-200">
                    {item.icon}
                    <span className="font-bold text-brand-dark text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="bg-brand-dark text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
            Comece hoje a entender, praticar e permanecer na Palavra — com leveza e constância.
          </h2>

          {/* Pricing Display */}
          <div className="mb-10 inline-block border-4 border-orange-500 rounded-3xl p-8 md:p-12 shadow-[0_0_30px_rgba(249,115,22,0.3)] bg-orange-500/5">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-xs md:text-sm font-black mb-2">Por apenas</p>
            <p className="text-6xl md:text-8xl font-black text-orange-500 drop-shadow-sm">R$ 10,00</p>
          </div>
          
          <button className="group relative bg-white text-brand-dark px-10 py-6 rounded-full text-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-3 mx-auto mb-10 shadow-2xl hover:scale-105 active:scale-95 w-full md:w-auto">
            QUERO COMEÇAR AGORA
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <p className="text-slate-400 text-lg md:text-xl italic font-light">
            📌 Não é sobre ler mais. É sobre ler melhor.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-10 px-6 text-center text-sm border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4 font-medium">&copy; {new Date().getFullYear()} Bíblia com Direção. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-6 opacity-60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
          <p className="mt-8 text-xs opacity-40 leading-relaxed">Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;