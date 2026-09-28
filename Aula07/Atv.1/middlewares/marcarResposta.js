export function marcarResposta(req, res, next) {
  res.setHeader('x-aula', '07');
  next();
}
