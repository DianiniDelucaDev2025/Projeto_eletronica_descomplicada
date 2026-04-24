const { useState } = React;

const conteudos = {
  0: { titulo: "Introdução", sub: "O Início da sua Jornada Técnica", texto: "Neste portal, transformaremos teorias complexas em conceitos práticos. Você aprenderá a eletrônica de forma descomplicada, focando no que realmente importa para a prática.", detalhes: "Prepare seu multímetro e sua protoboard. A eletrônica é 10% teoria e 90% prática!" },
  1: { titulo: "Fundamentos", sub: "A Tríade da Eletricidade", texto: "Tensão (V), Corrente (A) e Resistência (Ω) são as três grandezas que governam o universo eletrônico.", detalhes: "<b>Lei de Ohm:</b> V = R * I. A regra fundamental para não queimar componentes." },
  2: { titulo: "Resistores", sub: "Controlando o Fluxo", texto: "Resistores limitam a passagem de corrente elétrica. Eles são os protetores de componentes sensíveis.", detalhes: "Lembre-se: <b>Marrom, Preto, Vermelho</b> indica um resistor de 1kΩ." },
  3: { titulo: "Capacitores", sub: "Reserva de Energia", texto: "Capacitores armazenam carga e a liberam conforme o circuito necessita. Essenciais para filtragem de ruído.", detalhes: "<b>Cuidado:</b> Capacitores eletrolíticos têm polaridade!" },
  4: { titulo: "Indutores", sub: "Campos Magnéticos", texto: "Indutores armazenam energia em campos magnéticos. Eles se opõem a mudanças bruscas de corrente.", detalhes: "Muito usados em filtros de áudio e fontes chaveadas." },
  5: { titulo: "Transformadores", sub: "Conversão de Tensão", texto: "Eles aumentam ou diminuem tensões alternadas (AC) por indução magnética.", detalhes: "O transformador é vital para segurança na sua bancada." },
  6: { titulo: "Diodos", sub: "Válvula Eletrônica", texto: "Diodos permitem que a corrente flua em apenas uma direção. Essencial para converter AC em DC.", detalhes: "Diodos Zener são ótimos para estabilizar tensões em valores fixos." },
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

  return (
    <div className="flex h-screen bg-[#0a0505] text-slate-200 overflow-hidden">
      
      {/* SIDEBAR */}
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

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-zinc-900/20 to-black scroll-smooth">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          
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

              <div className="aspect-video bg-black rounded-[2.5rem] overflow-hidden border border-red-900/20 flex items-center justify-center">
                 <div className="text-center">
                    <i className="fas fa-play text-5xl text-orange-500 mb-4 opacity-50"></i>
                    <p className="text-sm text-zinc-600 font-bold uppercase tracking-widest">Vídeo da Aula {atual} em breve</p>
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
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
