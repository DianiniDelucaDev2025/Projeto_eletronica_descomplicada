const { useState, useEffect } = React;

const conteudos = {
  0: { titulo: "Introdução", sub: "O Início da sua Jornada Técnica", texto: "Neste portal, transformaremos teorias complexas em conceitos práticos. Você aprenderá a eletrônica de forma descomplicada, focando no que realmente importa para a prática.", detalhes: "Prepare seu multímetro e sua protoboard. A eletrônica é 10% teoria e 90% prática!" },
  1: { titulo: "Fundamentos", sub: "A Tríade da Eletricidade", texto: "Tensão (V), Corrente (A) e Resistência (Ω) são as três grandezas que governam o universo eletrônico. Sem entender a relação entre elas, não há como avançar.", detalhes: "<b>Lei de Ohm:</b> V = R * I. A regra fundamental para não queimar componentes." },
  2: { titulo: "Resistores", sub: "Controlando o Fluxo", texto: "Resistores limitam a passagem de corrente elétrica. Eles são os protetores de componentes sensíveis como os LEDs.", detalhes: "Lembre-se: <b>Marrom, Preto, Vermelho</b> indica um resistor de 1kΩ." },
  3: { titulo: "Capacitores", sub: "Reserva de Energia", texto: "Capacitores armazenam carga e a liberam conforme o circuito necessita. Essenciais para filtragem de ruído em fontes.", detalhes: "<b>Cuidado:</b> Capacitores eletrolíticos têm polaridade. Se inverter, eles podem explodir!" },
  4: { titulo: "Indutores", sub: "Campos Magnéticos", texto: "Indutores armazenam energia em campos magnéticos. Eles se opõem a mudanças bruscas de corrente no circuito.", detalhes: "Muito usados em filtros de áudio e fontes chaveadas." },
  5: { titulo: "Transformadores", sub: "Conversão de Tensão", texto: "Eles aumentam ou diminuem tensões alternadas (AC) por indução magnética, isolando o circuito da rede elétrica.", detalhes: "O transformador é vital para segurança na sua bancada." },
  6: { titulo: "Diodos", sub: "Válvula Eletrônica", texto: "Diodos permitem que a corrente flua em apenas uma direção. O primeiro passo para converter AC em DC.", detalhes: "Diodos Zener são ótimos para estabilizar tensões em valores fixos." },
  7: { titulo: "Transistores", sub: "A Chave Eletrônica", texto: "Transistores podem amplificar sinais ou funcionar como interruptores ultra-rápidos.", detalhes: "A base da eletrônica digital e de todos os processadores modernos." },
  8: { titulo: "Esquemas Elétricos", sub: "O Mapa do Circuito", texto: "Aprender a interpretar símbolos é fundamental para montar projetos a partir de diagramas técnicos.", detalhes: "Sempre identifique o VCC e o GND antes de alimentar o circuito." },
  9: { titulo: "Circuitos", sub: "União e Funcionalidade", texto: "Aqui analisamos como os componentes trabalham juntos em fontes, amplificadores e osciladores.", detalhes: "O segredo está em entender o caminho que a corrente percorre." },
  10: { titulo: "Projetos", sub: "Mão na Massa", texto: "Montagem de projetos reais, desde um pisca-led até fontes ajustáveis de bancada.", detalhes: "Verifique todas as soldas antes de ligar a energia pela primeira vez!" }
};

const modulos = [
  { id: 0, nome: "Introdução", icon: "fa-bolt" },
  { id: 1, nome: "Fundamentos", icon: "fa-microchip" },
  { id: 2, nome: "Resistores", icon: "fa-ruler-horizontal" },
  { id: 3, nome: "Capacitores", icon: "fa-battery-half" },
  { id: 4, nome: "Indutores", icon: "fa-wave-square" },
  { id: 5, nome: "Transformadores", icon: "fa-plug" },
  { id: 6, nome: "Diodos", icon: "fa-arrow-right" },
  { id: 7, nome: "Transistores", icon: "fa-project-diagram" },
  { id: 8, nome: "Esquemas Elétricos", icon: "fa-map" },
  { id: 9, nome: "Circuitos", icon: "fa-network-wired" },
  { id: 10, nome: "Projetos", icon: "fa-tools" }
];

function App() {
  const [atual, setAtual] = useState(0);
  const info = conteudos[atual];

  const Navegacao = () => (
    <div className="flex justify-between items-center py-4">
      <button 
        disabled={atual === 0}
        onClick={() => setAtual(atual - 1)}
        className="flex items-center gap-2 px-6 py-2 bg-zinc-900 border border-red-900/40 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:text-white disabled:opacity-20 transition-all"
      >
        <i className="fas fa-arrow-left text-orange-500"></i> Aula Anterior
      </button>
      <button 
        disabled={atual === 10}
        onClick={() => setAtual(atual + 1)}
        className="flex items-center gap-2 px-6 py-2 bg-zinc-900 border border-red-900/40 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:text-white disabled:opacity-20 transition-all"
      >
        Próxima Aula <i className="fas fa-arrow-right text-orange-500"></i>
      </button>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#0a0505] text-slate-200 overflow-hidden">
      
      {/* SIDEBAR COM SCROLLBAR ESTILIZADA */}
      <aside className="w-80 border-r border-red-950 flex flex-col bg-black shadow-2xl z-20">
        <div className="p-8 border-b border-red-950/40">
          <h1 className="text-xl font-black italic tracking-tighter uppercase leading-none">
            Eletrônica<br/><span className="text-orange-500 text-3xl">Descomplicada</span>
          </h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {modulos.map((m) => (
            <div 
              key={m.id}
              onClick={() => setAtual(m.id)}
              className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                atual === m.id 
                ? 'bg-red-900/20 border-l-4 border-orange-500 text-orange-400' 
                : 'text-slate-500 hover:bg-zinc-900 hover:text-slate-200 border-l-4 border-transparent'
              }`}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-xl border border-red-950/20 ${atual === m.id ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-zinc-900'}`}>
                <i className={`fas ${m.icon} text-sm`}></i>
              </div>
              <div className="flex flex-col">
                <span className={`text-[9px] font-black uppercase ${atual === m.id ? 'text-orange-500' : 'text-red-900'}`}>Etapa {m.id}</span>
                <span className="text-sm font-bold truncate">{m.nome}</span>
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* ÁREA DE CONTEÚDO DINÂMICO */}
      <main id="main-content" className="flex-1 overflow-y-auto bg-gradient-to-br from-zinc-900/20 to-black scroll-smooth">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          
          <Navegacao />

          <header className="my-10">
            <span className="bg-red-500/10 text-red-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/20 mb-4 inline-block">Módulo Ativo</span>
            <h2 className="text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.9]">{info.titulo}</h2>
            <p className="text-2xl text-orange-500 font-bold mt-6 italic">{info.sub}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-zinc-900/40 p-8 rounded-[2rem] border border-red-950/30 backdrop-blur-sm">
                <p className="text-slate-300 text-lg leading-relaxed">{info.texto}</p>
              </div>

              {/* VIDEO PLAYER PLACEHOLDER */}
              <div className="group relative aspect-video bg-black rounded-[2.5rem] overflow-hidden border border-red-900/20 shadow-2xl hover:border-orange-500/50 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                    <i className="fas fa-play text-3xl ml-1"></i>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                  <span className="text-[10px] font-black uppercase text-orange-500 tracking-widest bg-black/60 px-3 py-1 rounded">Aula {atual}: Qualidade 4K</span>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-gradient-to-br from-orange-500 to-red-700 p-8 rounded-[2.5rem] text-black shadow-xl">
                <h4 className="font-black uppercase text-xs mb-4 flex items-center gap-2">
                  <i className="fas fa-exclamation-circle"></i> Nota do Professor
                </h4>
                <p className="text-sm font-bold italic leading-snug" dangerouslySetInnerHTML={{__html: info.detalhes}}></p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-[2.5rem] border border-red-950/30">
                <h4 className="text-white font-black text-xs uppercase mb-4 tracking-widest text-center">Downloads</h4>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center justify-center gap-3 py-4 bg-black/40 rounded-2xl hover:bg-red-900/20 transition-all border border-transparent hover:border-red-900/40">
                    <i className="fas fa-file-pdf text-red-500"></i>
                    <span className="text-[10px] font-black uppercase">Material Complementar</span>
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16 pt-8 border-t border-red-950/30">
            <Navegacao />
          </div>

        </div>
      </main>
    </div>
  );
}

// Renderizando o App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);