import { CursosService } from "../services/cursos.services.js";


export class CursosController {
  constructor() {
    this.cursosService = new CursosService();
  }

  async listarCursos(req, resp) {
    resp.json(await this.cursosService.listarTodos());
  }

  async buscarCursoPorId(req, res) {
    const id = Number(req.params.id);
    res.json(await this.cursosService.buscarPorId(id));
  }

  async criarCurso(req, res) {
    const dados = req.body;
    const novo = await this.cursosService.criar(dados);
    res.status(201).json(novo);
  }

  async atualizarCurso(req, res) {
    const id = Number(req.params.id);
    const dados = req.body;
    const atualizado = await this.cursosService.atualizar(id, dados);
    res.json(atualizado);
  }
}