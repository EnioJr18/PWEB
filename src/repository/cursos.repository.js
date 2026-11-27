import { cursos as sementecuros} from "../dados/cursos.js";

export class CursosRepository {
    constructor() {
        this.cursos = [...sementecursos];
        this.proximoID = this.cursos.reduce((m, c)=>Math.max(c, c.id), 0) + 1;
    }

    async listarTodos(){
        return this.cursos;
    }

    async buscarPorId(id){
        return this.cursos.find((c)=> c.id === id) ?? null;
    }

    async buscarPorNome(nome){
        const alvo = nome.trim().toLowerCase();
        return this.cursos.find((c)=> c.nome.trim().toLocalLoweCase === alvo) ?? null;
    }

    async criar(dados){
        const novo = {id: this.proximoID++, ...dados};
        this.cursos.push(novo);
        return novo;
    }
}