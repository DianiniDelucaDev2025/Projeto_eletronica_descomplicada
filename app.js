const e = React.createElement;
const { useState } = React;

const conteudos = {
    0: { titulo: "Introdução", sub: "Masterclass de Bancada", texto: "Seja bem-vindo à nova era do ensino técnico. Aqui, a teoria não é um obstáculo, mas o mapa para sua maestria na manutenção e criação de hardware.", nota: "Prepare seu kit: Multímetro, ferro de solda e curiosidade.", icon: "fa-bolt" },
    1: { titulo: "Fundamentos", sub: "A Alma da Corrente", texto: "Tensão, Corrente e Resistência. Entender como esses três elementos interagem é o que diferencia um especialista.", nota: "V = R * I: A base de todo diagnóstico.", icon: "fa-microchip" },
    2: { titulo: "Resistores", sub: "Controle de Fluxo", texto: "Dos componentes PTH aos SMDs microscópicos. Aprenda a ler, medir e substituir sem erros.", nota: "Dica: Fique atento à potência em Watts dos resistores.", icon: "fa-ruler-horizontal" },
    3: { titulo: "Capacitores", sub: "Filtros de Estabilidade", texto: "Eles são os guardiões da energia. Identifique falhas de ESR que matam fontes de alimentação.", nota: "Atenção: Sempre descarregue antes de tocar na placa!", icon: "fa-battery-half" },
    4: { titulo: "Indutores", sub: "Magnetismo em Ação", texto: "Bobinas controlam frequências e filtram ruídos. Essencial para áudio e RF.", nota: "O Henry (H) é a chave do armazenamento magnético.", icon: "fa-wave-square" },
    5: { titulo: "Transformadores", sub: "Poder em Escala", texto: "Conversão de energia com segurança. Isole seu laboratório da rede elétrica bruta.", nota: "Segurança: Use sempre transformadores isoladores.", icon: "fa-plug" },
    6: { titulo: "Diodos", sub: "Retificação e Proteção", texto: "O componente que deu origem à eletrônica moderna. De pontes retificadoras a diodos Zener.", nota: "Polaridade: Ânodo e Cátodo em harmonia.", icon: "fa-arrow-right" },
    7: { titulo: "Transistores", sub: "O Cérebro Semicondutor", texto: "Seja como chave ou amplificador, o transistor é o coração da tecnologia moderna.", nota: "NPN e PNP: Aprenda a testar as junções.", icon: "fa-project-diagram" },
    8: { titulo: "Esquemas", sub: "Arquitetura de Trilhas", texto: "Não se perca mais. Aprenda a ler diagramas elétricos como se fossem um livro aberto.", nota: "O GND é o seu ponto de referência principal.", icon: "fa-map" },
    9: { titulo: "Análise", sub: "Troubleshooting Real", texto: "Diagnóstico sistemático: Tensão de entrada, saídas reguladas e sinais de controle.", nota: "Siga o sinal. O multímetro nunca mente.", icon: "fa-network-wired" },
    10: { titulo: "Projetos", sub: "Mão na Massa", texto: "Hora de soldar! Vamos montar sua primeira fonte de bancada ajustável de alta precisão.", nota: "Solda brilhante evita falhas intermitentes.", icon: "fa-tools" }
};

function App() {
    const [atual, setAtual] = useState(0);
    const info = conteudos[atual];

    const sidebar = e('aside', { className: 'w-80 border-r border-red-900/20 flex flex-col bg-[#050303] z-50' }, [
        e('div', { className: 'p-10' }, [
            e('div', { className: 'w-10 h-1 bg-orange-500 mb-4' }),
            e('h1', { className: 'text-2xl font-black italic tracking-tighter uppercase leading-none text-white' }, [
                'Eletrônica', e('br'), e('span', { className: 'text-orange-500 text-4xl' }, 'Descomplicada')
            ])
        ]),
        e('nav', { className: 'flex-1 overflow-y-auto px-6 pb-10 space-y-2' }, 
            Object.keys(conteudos).map(id => {
                const isActive = atual === Number(id);
                return e('div', {
                    key: id,
                    onClick: () => setAtual(Number(id)),
                    className: `flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${isActive ? 'bg-zinc-900/50 border border-red-500/10' : 'hover:bg-zinc-900/20'}`
                }, [
                    e('div', { className: `w-10 h-10 flex items-center justify-center rounded-xl ${isActive ? 'bg-orange-500 text-black glow-orange' : 'bg-zinc-900 text-zinc-600'}` }, 
                        e('i', { className: `fas ${conteudos[id].icon} text-xs` })
                    ),
                    e('div', { className: 'flex flex-col' }, [
                        e('span', { className: `text-[9px] font-black uppercase ${isActive ? 'text-red-500' : 'text-zinc-700'}` }, `Etapa ${id}`),
                        e('span', { className: `text-sm font-bold ${isActive ? 'text-white' : 'text-zinc-500'}` }, conteudos[id].titulo)
                    ])
                ]);
            })
        )
    ]);

    const main = e('main', { className: 'flex-1 overflow-y-auto bg-[#0a0505] relative' }, [
        e('div', { className: 'absolute inset-0 bg-grid' }),
        e('div', { className: 'max-w-5xl mx-auto p-12 lg:p-24 relative z-10' }, [
            e('header', { className: 'mb-16' }, [
                e('h2', { className: 'text-7xl lg:text-9xl font-black italic uppercase tracking-tighter text-white leading-none mb-6' }, info.titulo),
                e('div', { className: 'inline-block bg-orange-500 text-black px-6 py-1 rounded-full font-black italic text-lg' }, info.sub)
            ]),
            e('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-12' }, [
                e('div', { className: 'lg:col-span-8' }, [
                    e('p', { className: 'text-zinc-400 text-2xl font-medium leading-relaxed mb-12' }, info.texto),
                    e('div', { className: 'aspect-video bg-black rounded-[3rem] border border-white/5 flex items-center justify-center shadow-2xl' }, 
                        e('i', { className: 'fas fa-play text-zinc-800 text-4xl' })
                    )
                ]),
                e('aside', { className: 'lg:col-span-4' }, 
                    e('div', { className: 'glass-effect p-8 rounded-[2.5rem]' }, [
                        e('h4', { className: 'text-orange-500 font-black uppercase text-[10px] tracking-widest mb-4' }, 'Nota Técnica'),
                        e('p', { className: 'text-white font-bold italic leading-relaxed text-lg' }, info.nota)
                    ])
                )
            ])
        ])
    ]);

    return e('div', { className: 'flex h-screen w-full' }, [sidebar, main]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
