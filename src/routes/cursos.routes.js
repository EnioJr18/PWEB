import { Router } from "express";
import { listarCursos, buscarCursoPorId, criarCurso, atualizarCurso } from "../controllers/cursos.controller.js";

import { validarNovoCurso, validarAtualizacaoCurso } from "../middlewares/validacao.middleware.js";

const router = Router(); // um mini-app só de rotas

router.get("/cursos", listarCursos);
router.get("/cursos/:id", buscarCursoPorId);
router.post("/cursos", validarNovoCurso, criarCurso);
router.put("/cursos/:id", validarAtualizacaoCurso, atualizarCurso);

export { router as cursosRouter };

