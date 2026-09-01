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
const ausentes = [];

for (const nome of obrigatorias) {
    const valor = process.env[nome];

    if (typeof valor !== 'string' || valor.trim() === '') {
        ausentes.push(nome);
    }

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
}
