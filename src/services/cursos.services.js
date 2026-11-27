import { CursosRepository } from "../repository/cursos.repository";

export class CursosService {
    constructor() {
        this.cursosRepository = new CursosRepository();
    }

    async listarTodos() {
        return await this.cursosRepository.listarTodos();
    }

    async buscarPorId(id) {
        return await this.cursosRepository.buscarPorId(id);
    }

    async buscarPorNome(nome) {
        return await this.cursosRepository.buscarPorNome(nome);
    }

    async criar(dados) {
        const cursoExistente = await this.cursosRepository.buscarPorNome(dados.nome);
        if (cursoExistente) {
            throw new Error(`Curso com nome "${dados.nome}" já existe.`);
        }
        if(dados.ativo && dados.preco === 0){
            throw new Error(`Curso ativo não pode ter preço zero.`);
        }
        return await this.cursosRepository.criar(dados);
    }
}