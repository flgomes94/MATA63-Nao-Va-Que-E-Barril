import { v4 } from "uuid";
import lodash from 'lodash';
import { Disciplina } from "./disciplina.dto";
import DisciplinasRepository from "./disciplinas";
import { Professor } from "./professor.dto";

class ProfessoresRepository {
    professores: Professor[]
    private static instance: ProfessoresRepository;

    constructor(){
        this.professores = Array();

        this.addProfessor('Ivan Machado', 'Engenharia de Software 2' );
        this.addProfessor('John Smith', 'Engenharia de Software 2');
        this.addProfessor('Maria Gonçalves', 'Engenharia de Software 2');
        this.addProfessor('Juarez Costa', 'Engenharia de Software 2');
        
    }

    public static getInstance(): ProfessoresRepository {
        if(!ProfessoresRepository.instance){
            ProfessoresRepository.instance = new ProfessoresRepository();
        }
        return ProfessoresRepository.instance;
    }

    addProfessor(nome:string, disciplina:string){
        const id = v4();
        const barril = 0;
        const neutro = 0;
        const deboa = 0;
        const {id:disciplinaId} = DisciplinasRepository.getInstance().getDisciplinaByName(disciplina);
        const professor:Professor = {id,nome,barril,neutro,deboa,disciplinaId};
        this.professores.push(professor);
    }

    getAllProfessores(){
        return this.professores;
    }

    getProfessorById(id){
        const professor = lodash.find(this.professores, professor => professor.id === id)
        return professor;
    }
}

export default ProfessoresRepository;