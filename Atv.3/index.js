const nomeInformado = process.argv[2];
const turmaInformada = process.argv[3];

if (!nomeInformado || !turmaInformada) {
    console.error('PENDENTE: valide nome e turma antes de confirmar a inscrição.');
    process.exitCode = 1;
    process.exit();
} else {
    console.log(`Entrada recebida:Parabéns, ${nomeInformado}! Você está inscrito na turma ${turmaInformada}.`);
}
