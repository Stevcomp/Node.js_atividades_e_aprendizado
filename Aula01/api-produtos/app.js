const arquivoDeConfiguracao = process.argv[2];
const idInformado = process.argv[3];
let configuracaoCarregada = true;

if (arquivoDeConfiguracao) {
    try {
        process.loadEnvFile(arquivoDeConfiguracao);
    } catch {
        console.error(`Não foi possível carregar o arquivo de configuração ${arquivoDeConfiguracao}`);
        process.exitCode = 1;
        configuracaoCarregada = false
    }
};

const obrigatorias = ['PORT', 'NOME_ALUNO', 'TURMA'];
const ausentes = obrigatorias.filter((nome) => !process.env[nome]?.trim());


if (configuracaoCarregada && ausentes.length > 0) {
    console.error(`Configure no .env: ${ausentes.join(", ")}`);
    process.exitCode = 1;
} else if (configuracaoCarregada) {
    console.table({
        estudante: process.env.NOME_ALUNO,
        turma: process.env.TURMA,
        projeto: 'api-produtos',
        ambientes: process.env.NODE_ENV || 'development',
        node: process.version,
        sistema: `${process.platform} ${process.arch}`,
        diretorio: process.cwd(),
        portaConfigurada: process.env.PORT
    });
    console.log(`Ambiente configurado com sucesso!`);
}

const produtos = [
    { id: 1, nome: 'Mouse', preco: 80.00, estoque: 10, categoria: 'Periféricos' },
    { id: 2, nome: 'Monitor', preco: 900.00, estoque: 2, categoria: 'Vídeos' },
    { id: 3, nome: 'Teclado', preco: 120.00, estoque: 8, categoria: 'Periféricos' },
];

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function buscarProdutoPorId(id) {
    await esperar(1000); // Simula um atraso de 1 segundo
    if (!Number.isInteger(id)) {
        throw new Error(`Identificador inteiro exigido`);
    }
    const produto = produtos.find((item) => item.id === id);
    if (!produto) {
        throw new Error(`Produto ${id} não encontrado`);
    }
    // return {...produto, preco: produto.preco * 1.4};
    return { ...produto };
}

async function listarCategorias() {
    await esperar(1000);
    const categorias = produtos.map((categoria) => categoria
    );
    return [...new Set(categorias)]
}

async function executar() {
    if (!configuracaoCarregada) return;
    try {
        const id = Number(idInformado ?? 1);
        const [produto, categorias] = await Promise.all([
            buscarProdutoPorId(id),
            listarCategorias()
        ]);
        console.log('Produto: ', produto);
        console.log('Valor em estoque: ', produto.estoque * produto.preco);
        console.log('Categorias', categorias)
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}

executar();