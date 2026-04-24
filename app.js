const e = React.createElement;
const { useState } = React;

const conteudos = {
    0: { titulo: "Introdução", sub: "A Jornada do Técnico", texto: "Neste Volume 1, focaremos na base sólida. A eletrônica não é difícil, ela apenas exige o método correto de visualização do fluxo de elétrons.", nota: "Dica: Tenha sempre um caderno de bancada para anotar medições.", icon: "fa-bolt" },
    1: { titulo: "Fundamentos", sub: "Tensão, Corrente e Resistência", texto: "Entender a Lei de Ohm é como aprender a ler. Sem isso, você estará apenas trocando peças sem entender o porquê.", nota: "<b>V = R * I</b>. Memorize este triângulo!", icon: "fa-microchip" },
    2: { titulo: "Resistores", sub: "Limitadores de Fluxo", texto: "Aprenda a ler códigos de cores e a identificar resistores SMD (Surface Mount Device) pelos seus códigos numéricos.", nota: "Resistores de precisão têm 5 faixas de cor.", icon: "fa-ruler-horizontal" },
    3: { titulo: "Capacitores", sub: "Filtros e Reservatórios", texto: "Capacitores estabilizam a tensão. Um capacitor ruim é a causa número 1 de falhas em fontes de alimentação.", nota: "Sempre descarregue capacitores grandes antes de tocar na placa!", icon: "fa-battery-half" },
    4: { titulo: "Indutores", sub: "Inércia Elétrica", texto: "Indutores e bobinas trabalham com magnetismo. São fundamentais em filtros de rádio e conversores DC-DC.", nota: "A unidade de medida é o Henry (H).", icon: "fa-wave-square" },
    5: { titulo: "Transformadores", sub: "Indução e Segurança", texto: "Como isolar seu circuito da rede elétrica e reduzir os 127V/220V para níveis seguros de trabalho (12V/5V).", nota: "Nunca teste transformadores sem carga por longos períodos.", icon: "fa-plug" },
    6: { titulo: "Diodos", sub: "Semicondutores Básicos", texto: "O diodo é o guarda de trânsito do circuito. Ele garante que a corrente não volte e danifique os componentes sensíveis.", nota: "A queda de tensão em um diodo de silício é de aprox. 0.7V.", icon: "fa-arrow-right" },
    7: { titulo: "Transistores", sub: "O Coração da Automação", texto: "O transistor permite que uma pequena corrente controle uma corrente muito maior. É a base de tudo o que chamamos de 'inteligência'.", nota: "NPN e PNP: saiba a diferença para não inverter a polaridade.", icon: "fa-project-diagram" },
    8: { titulo: "Leitura de Esquemas", sub: "Interpretando o Mapa", texto: "Aprenda a seguir as trilhas e entender os nós de conexão. Um bom técnico 'vê' a eletricidade correndo no papel.", nota: "Símbolos internacionais são a sua linguagem universal.", icon: "fa-map" },
    9: { titulo: "Análise de Circuitos", sub: "Troubleshooting Real", texto: "Técnicas de diagnóstico: onde colocar a ponta de prova do multímetro quando o aparelho não liga?", nota: "Siga o fluxo: Fonte -> Regulação -> Processamento.", icon: "fa-network-wired" },
    10: { titulo: "Laboratório Prático", sub: "Projetos do Volume 1", texto: "Montagem de uma fonte regulada e um testador de continuidade sonoro para sua bancada.", nota: "Segurança em primeiro lugar: use óculos de proteção ao soldar!", icon: "fa-tools" }
};

function App() {
    const [atual, setAtual] = useState(0);
    const info = conteudos[atual];

    const sidebar = e('aside', { className: 'w-72 lg:w-80 border-r border-red-950 flex flex-col bg-black' }, [
        e('div', { className: 'p-8 border-b border-red-950/40' }, [
            e('h1', { className: 'text-xl font-black italic tracking-tighter uppercase leading-none' }, [
                'Eletrônica', e('br'), e('span', { className: 'text-orange-500 text-3xl' }, 'Descomplicada')
            ])
        ]),
        e('nav', { className: 'flex-1 overflow-y-auto p-4 space-y-2' }, 
            Object.keys(conteudos).map(id => {
                const item = conteudos[id];
                const isActive = atual === Number(id);
                return e('div', {
                    key: id,
                    onClick: () => setAtual(Number(id)),
                    className: `flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-red-900/20 border-l-4 border-orange-500 text-orange-400' : 'text-slate-500 hover:bg-zinc-900'}`
                }, [
                    e('div', { className: `w-10 h-10 flex items-center justify-center rounded-xl ${isActive ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-zinc-900'}` }, 
                        e('i', { className: `fas ${item.icon} text-sm` })
                    ),
                    e('div', { className: 'flex flex-col' }, [
                        e('span', { className: 'text-[9px] font-black uppercase text-red-900' }, `Módulo ${id}`),
                        e('span', { className: 'text-sm font-bold truncate' }, item.titulo)
                    ])
                ]);
            })
        )
    ]);

    const content = e('main', { className: 'flex-1 overflow-y-auto bg-gradient-to-br from-zinc-900/10 to-black' }, [
        e('div', { className: 'max-w-5xl mx-auto p-8 lg:p-16' }, [
            e('header', { className: 'mb-12' }, [
                e('span', { className: 'bg-orange-500/10 text-orange-500 px-4 py-1 rounded-full text-[10px] font-black uppercase border border-orange-500/20 mb-6 inline-block' }, 'Conteúdo Educativo - 2026'),
                e('h2', { className: 'text-6xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-none' }, info.titulo),
                e('p', { className: 'text-2xl text-orange-500 font-bold mt-6 italic' }, info.sub)
            ]),
            e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-12' }, [
                e('div', { className: 'lg:col-span-8 space-y-10' }, [
                    e('div', { className: 'glass-card p-10 rounded-[2.5rem]' }, 
                        e('p', { className: 'text-slate-300 text-xl leading-relaxed' }, info.texto)
                    ),
                    e('div', { className: 'relative aspect-video bg-zinc-900 rounded-[3rem] border border-red-950/50 overflow-hidden group' }, [
                        e('div', { className: 'absolute inset-0 flex flex-col items-center justify-center' }, [
                            e('div', { className: 'w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center border border-red-600/30' }, 
                                e('i', { className: 'fas fa-video-slash text-2xl text-red-500' })
                            ),
                            e('p', { className: 'text-[10px] uppercase font-black text-zinc-600 mt-6 tracking-[0.3em]' }, 'Gravação em andamento')
                        ])
                    ])
                ]),
                e('aside', { className: 'lg:col-span-4 space-y-6' }, [
                    e('div', { className: 'bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-[2.5rem] text-black shadow-2xl' }, [
                        e('h4', { className: 'font-black uppercase text-[11px] mb-4 flex items-center gap-2' }, [
                            e('i', { className: 'fas fa-lightbulb' }), 'Dica do Ebook'
                        ]),
                        e('p', { 
                            className: 'text-sm font-bold italic leading-tight',
                            dangerouslySetInnerHTML: { __html: info.nota } 
                        })
                    ]),
                    e('div', { className: 'bg-black/50 p-8 rounded-[2.5rem] border border-red-950/30 text-center' }, [
                        e('p', { className: 'text-[10px] font-black uppercase text-zinc-500 mb-2' }, 'Status do Projeto'),
                        e('p', { className: 'text-lg font-black text-white' }, '98% Completo'),
                        e('div', { className: 'w-full bg-zinc-900 h-2 mt-4 rounded-full overflow-hidden' }, 
                            e('div', { className: 'bg-orange-500 h-full w-[98%] shadow-[0_0_10px_#f97316]' })
                        )
                    ])
                ])
            ])
        ])
    ]);

    return e('div', { className: 'flex h-screen w-full' }, [sidebar, content]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
