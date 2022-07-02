import { v4 } from "uuid";
import lodash from 'lodash';
import { Disciplina } from "./disciplina.dto";
import ProfessoresRepository from "./professores";

class DisciplinasRepository {
    disciplinas: Disciplina[]
    private static instance: DisciplinasRepository;

    constructor(){
        this.disciplinas = Array();
        this.addDisciplina('Engenharia de Software 2', 'MATA63', 'Universidade Federal da Bahia - UFBA');
        this.addDisciplina('Inteligência Artificial', 'MATA64', 'Universidade Federal da Bahia - UFBA');
        this.addDisciplina('Sistemas Multimídias', 'MATB19', 'Universidade Federal da Bahia - UFBA');
        this.addDisciplina('Introdução a Web Semântica', 'MATC93', 'Universidade Federal da Bahia - UFBA');
        
    }

    public static getInstance(): DisciplinasRepository {
        if(!DisciplinasRepository.instance){
            DisciplinasRepository.instance = new DisciplinasRepository();
        }
        return DisciplinasRepository.instance;
    }

    addDisciplina(nome:string, codigo:string,universidade:string){
        const id = v4();
        const disciplina:Disciplina = {nome,codigo,universidade,id};
        this.disciplinas.push(disciplina);
    }

    getAllDisciplinas(){
        return this.disciplinas;
    }

    getDisciplinaById(id){
        const disciplina = lodash.find(this.disciplinas, disciplina => disciplina.id === id)
        return disciplina;
    }
    getDisciplinaByName(nome){
        const disciplina = lodash.find(this.disciplinas, disciplina => disciplina.nome === nome)
        return disciplina;
    }

    getAllProfessoresByDisciplinaId(id){
        const disciplinas = lodash.filter(ProfessoresRepository.getInstance().getAllProfessores(), professor => professor.disciplinaId === id);
        return disciplinas;
    }
}

export default DisciplinasRepository;