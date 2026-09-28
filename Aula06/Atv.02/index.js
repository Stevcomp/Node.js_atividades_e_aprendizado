import express from 'express';

// Coleção em memória (já fornecida ou definida no arquivo)
const produtos = [
  { id: 1, nome: 'Teclado', preco: 120, estoque: 4 },
  { id: 2, nome: 'Mouse', preco: 60, estoque: 8 }
];

export function criarAplicacao() {
  const app = express();

  app.get('/api/produtos', (req, res) => {
    res.status(200).json({
      sucesso: true,
      dados: produtos
    });
  });

  return app;
}

const app = criarAplicacao();
const porta = Number(process.env.PORT || 3000);
app.listen(porta, '127.0.0.1', () => console.log(`Servidor iniciado na porta ${porta}.`));