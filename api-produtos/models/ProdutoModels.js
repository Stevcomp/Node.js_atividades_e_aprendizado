export function criaProdutoModel({ pool }) {
    async function lsiatrTodos() {
        const [linhas] = await pool.query('SELECT * FROM  produtos');
        return linhas.map(p => ({ ...p, preco: Number(p.preco) }));
    }
    async function buscarPorId(id) {
        const [linhas] = await pool.query('SELECT * FORM produtos WHERE id = ?', [id]);
        if (linhas.legth === 0) return null;
        return {...linhas[0], preco: Number(linhas[0].preco)};
    }
}

