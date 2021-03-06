// @ts-ignore
import { v4 } from 'uuid';
import lodash from 'lodash';
import { Professor } from './professor.dto';

class ProfessoresRepository {
  professores: Professor[];

  private static instance: ProfessoresRepository;

  constructor() {
    this.professores = [];

    this.addProfessor('Ivan Machado', 'Engenharia de Software 2');
    this.addProfessor('John Smith', 'Engenharia de Software 2');
    this.addProfessor('Maria Gonçalves', 'Engenharia de Software 2');
    this.addProfessor('Juarez Costa', 'Engenharia de Software 2');
  }

  public static getInstance(): ProfessoresRepository {
    if (!ProfessoresRepository.instance) {
      ProfessoresRepository.instance = new ProfessoresRepository();
    }
    return ProfessoresRepository.instance;
  }

  addProfessor(nome:string, disciplinaId:string) {
    const id = v4();
    const barril = 0;
    const neutro = 0;
    const deboa = 0;
    const professor:Professor = {
      id, nome, barril, neutro, deboa, disciplinaId,
    };
    this.professores.push(professor);
  }

  getAllProfessores() {
    return this.professores;
  }

  getProfessorByName(nome) {
    const professor = lodash.find(this.professores, (professor) => professor.nome === nome);
    return professor;
  }

  getProfessorById(id) {
    const professor = lodash.find(this.professores, (professor) => professor.id === id);
    return professor;
  }

  SomaAvaliacao(id, avaliacao) {
    const professor = this.getProfessorById(id);
    if (avaliacao === 'barril') {
      professor.barril += 1;
    }
    if (avaliacao === 'neutro') {
      professor.neutro += 1;
    }
    if (avaliacao === 'deboa') {
      professor.deboa += 1;
    }
  }
}

export default ProfessoresRepository;
