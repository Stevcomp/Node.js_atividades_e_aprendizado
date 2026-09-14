import { buscarProdutoPorId } from './catalogo/consulta.js';
import { carregarAmbiente, exibirdiagnostico } from './config/ambiente.js';
import { formatarMoeda } from './util/formatarMoeda.js';

async function executar() {
    try {
        const configuracao = carregarAmbiente(process.argv[2]);
        const idSolicitado = carregarAmbiente(process.argv[3]);
        if (!Number.isInteger((idSolicitado))) {
            throw new Error("Informe um indentificador inteiro para o produto");
        }
        exibirdiagnostico(configuracao);
        const [produto, categorias] = await Promise.all([
            buscarProdutoPorId(idSolicitado),
            listarCategorias()
        ]);
        console.log({
            produto: {
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                precoFormatado: formatarMoeda(produto.preco),
                estoque: produto.estoque,
                categoria: produto.categoria,
                valorEmEstoque: produto.calcularValorEmEstoque(),
                valorEmEstoqueFormatado: formatarMoeda(produto.calcularValorEmEstoque()),
                valorComDesconto: produto.calcularValorComDesconto(10),
                valorComDescontoFormatado: formatarMoeda(produto.calcularValorComDesconto())
            },
            categorias
        });
    } catch (erro) {
        console.error(erro.message);
    }
}
