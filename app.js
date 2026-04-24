
const e = React.createElement;
const { useState } = React;

const conteudos = {
    0: { titulo: "Introdução", sub: "Início da Jornada", texto: "Bem-vindo ao portal de eletrônica.", detalhes: "Prepare seu multímetro!" },
    1: { titulo: "Fundamentos", sub: "Tensão e Corrente", texto: "A base de tudo.", detalhes: "V = R * I" }
    // Você pode expandir os módulos aqui seguindo o mesmo padrão
};

function App() {
    const [atual, setAtual] = useState(0);
    const info = conteudos[atual] || conteudos[0];

    // Criando a Sidebar
    const sidebar = e('aside', { className: 'w-64 border-r border-red-950 bg-black p-8 flex flex-col' }, [
        e('h1', { className: 'text-orange-500 font-black italic uppercase leading-tight text-xl' }, [
            'Eletrônica', e('br'), e('span', { className: 'text-3xl' }, 'Descomplicada')
        ]),
        e('nav', { className: 'mt-10 space-y-4' }, 
            Object.keys(conteudos).map(id => 
                e('div', {
                    key: id,
                    onClick: () => setAtual(Number(id)),
                    className: `cursor-pointer p-3 rounded-xl transition-all ${atual === Number(id) ? 'bg-red-900/20 text-orange-400 border-l-2 border-orange-500' : 'text-zinc-600'}`
                }, conteudos[id].titulo)
            )
        )
    ]);

    // Criando o Conteúdo Principal
    const main = e('main', { className: 'flex-1 p-16 overflow-y-auto' }, [
        e('span', { className: 'text-red-500 font-black text-xs uppercase' }, `Módulo ${atual}`),
        e('h2', { className: 'text-6xl font-black uppercase italic text-white mt-2' }, info.titulo),
        e('p', { className: 'text-xl text-orange-500 font-bold mt-4' }, info.sub),
        e('div', { className: 'mt-10 p-8 bg-zinc-900/50 rounded-3xl border border-red-900/20' }, info.texto),
        e('div', { 
            className: 'mt-6 p-6 bg-orange-500 text-black font-bold italic rounded-2xl',
            dangerouslySetInnerHTML: { __html: info.detalhes }
        })
    ]);

    return e('div', { className: 'flex h-screen overflow-hidden' }, [sidebar, main]);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e(App));
