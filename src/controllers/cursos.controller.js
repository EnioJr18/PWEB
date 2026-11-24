import { cursos } from "../dados/cursos.js";

export function listarCursos(req, resp) {
  resp.json(cursos);
}

export function buscarCursoPorId(req, res) {
  const id = Number(req.params.id);
  const curso = cursos.find((c) => c.id === id);

  if (!curso) {
    return res.status(404).json({ error: "Curso não encontrado" });
  }
  res.json(curso);
}

export function criarCurso(req, res) {
  const novoCurso = req.body;
  novoCurso.nome = novoCurso.nome.trim();

  cursos.push(novoCurso);
  res.status(201).json(novoCurso);
}

export function atualizarCurso(req, res) {
  const id = Number(req.params.id);
  const cursoIndex = cursos.findIndex((c) => c.id === id);

  if (cursoIndex === -1) {
    return res.status(404).json({ error: "Curso não encontrado" });
  }

  const { nome, cargaHoraria, nivel, preco, ativo } = req.body;

  cursos[cursoIndex] = {
    id: id,
    nome: nome.trim(),
    cargaHoraria,
    nivel,
    preco,
    ativo,
  };

  res.json(cursos[cursoIndex]);
}
