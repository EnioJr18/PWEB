import { cursos } from "../dados/cursos.js";

export function validarNovoCurso(req, res, next) {
  const novoCurso = req.body;
  const { id, nome, cargaHoraria, nivel, preco, ativo } = novoCurso;
  const erros = [];

  if (!id || id <= 0 || !Number.isInteger(id)) {
    erros.push("O id do curso deve ser um número inteiro positivo.");
  }
  if (cursos.some((c) => c.id === id)) {
    erros.push("Já existe um curso cadastrado com esse ID.");
  }
  if (
    typeof nome !== "string" ||
    nome.trim().length < 3 ||
    nome.trim().length > 80
  ) {
    erros.push("O nome do curso deve ser uma string entre 3 e 80 caracteres.");
  }
  if (
    typeof cargaHoraria !== "number" ||
    cargaHoraria < 20 ||
    cargaHoraria > 400
  ) {
    erros.push("A carga horária deve ser um número positivo entre 20 e 400.");
  }
  if (!["BASICO", "INTERMEDIARIO", "AVANCADO"].includes(nivel)) {
    erros.push(
      "O nível do curso deve ser 'BASICO', 'INTERMEDIARIO' ou 'AVANCADO'."
    );
  }
  if (!Number.isInteger(preco) || preco <= 0) {
    erros.push("O preço do curso deve ser um número inteiro e positivo.");
  }
  if (typeof ativo !== "boolean") {
    erros.push("O campo 'ativo' deve ser um valor booleano.");
  }

  if (erros.length > 0) {
    return res.status(400).json({ errors: erros });
  }

  next();
}

export function validarAtualizacaoCurso(req, res, next) {
  const cursoAtualizado = req.body;
  const { nome, cargaHoraria, nivel, preco, ativo } = cursoAtualizado;
  const erros = [];

  if (
    typeof nome !== "string" ||
    nome.trim().length < 3 ||
    nome.trim().length > 80
  ) {
    erros.push("O nome do curso deve ser uma string entre 3 e 80 caracteres.");
  }
  if (
    typeof cargaHoraria !== "number" ||
    cargaHoraria < 20 ||
    cargaHoraria > 400
  ) {
    erros.push("A carga horária deve ser um número positivo entre 20 e 400.");
  }
  if (!["BASICO", "INTERMEDIARIO", "AVANCADO"].includes(nivel)) {
    erros.push(
      "O nível do curso deve ser 'BASICO', 'INTERMEDIARIO' ou 'AVANCADO'."
    );
  }
  if (!Number.isInteger(preco) || preco <= 0) {
    erros.push("O preço do curso deve ser um número inteiro e positivo.");
  }
  if (typeof ativo !== "boolean") {
    erros.push("O campo 'ativo' deve ser um valor booleano.");
  }

  if (erros.length > 0) {
    return res.status(400).json({ errors: erros });
  }

  next();
}
