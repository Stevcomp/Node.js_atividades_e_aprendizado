const arquivoDeConfiguracao = process.argv[2];
let configuracaoCarregada = true;

if (arquivoDeConfiguracao) {
    try{
        process.loadEnvFile(arquivoDeConfiguracao);  
    } catch{
        console.error(`Não foi possível carregar o arquivo de configuração ${arquivoDeConfiguracao}`);
        process.exitCode = 1;
        configuracaoCarregada = false
    }
};

const obrigatorias = ['PORT', 'NOME_ALUNO', 'TURMA'];

for (const nome of obrigatorias) {
    const valor = process.env[nome];

    if (typeof valor !== 'string' || valor.trim() === '') {
        ausents.push--
    }
}
