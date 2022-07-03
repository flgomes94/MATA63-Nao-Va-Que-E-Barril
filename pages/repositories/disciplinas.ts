import { v4 } from 'uuid';
import lodash from 'lodash';
import { Disciplina } from './disciplina.dto';
import ProfessoresRepository from './professores';

class DisciplinasRepository {
  disciplinas: Disciplina[];

  private static instance: DisciplinasRepository;

  constructor() {
    this.disciplinas = [];
    this.addDisciplina('GEOMETRIA ANALÍTICA', 'MATA01', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('CÁLCULO A', 'MATA02', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO', 'MATA37', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PROJETO DE CIRCUITOS LÓGICOS', 'MATA38', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('SEMINÁRIOS DE INTRODUÇÃO AO CURSO', 'MATA39', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('MATEMÁTICA DISCRETA I', 'MATA42', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ÁLGEBRA LINEAR A', 'MATA07', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ESTRUTURAS DE DADOS E ALGORITMOS I', 'MATA40', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ARQUITETURA DE COMPUTADORES', 'MATA48', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('LABORATÓRIO DE PROGRAMAÇÃO I', 'MATA57', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('COMPLEMENTOS DE CÁLCULO', 'MATA95', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('MATEMÁTICA DISCRETA II', 'MATA97', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ELEMENTOS DO ELETROMAGNETISMO E DE CIRCUITOS ELÉTRICOS', 'FISA75', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('MÉTODOS ESTATÍSTICOS', 'MAT236', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('LÓGICA PARA COMPUTAÇÃO', 'MATA47', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PROGRAMAÇÃO DE SOFTWARE BÁSICO', 'MATA49', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('LINGUAGENS FORMAIS E AUTÔMATOS', 'MATA50', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PROGRAMAÇÃO ORIENTADA A OBJETOS', 'MATA55', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('METODOLOGIA E EXPRESSÃO TÉCNICO-CIENTÍFICA', 'FCHC45', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('TEORIA DA COMPUTAÇÃO', 'MATA51', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ANÁLISE E PROJETO DE ALGORITMOS', 'MATA52', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('SISTEMAS OPERACIONAIS', 'MATA58', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('COMPILADORES', 'MATA61', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('COMPUTADOR, ÉTICA E SOCIEDADE', 'MATA68', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('TEORIA DOS GRAFOS', 'MATA53', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ESTRUTURAS DE DADOS E ALGORITMOS II', 'MATA54', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('REDES DE COMPUTADORES I', 'MATA59', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ENGENHARIA DE SOFTWARE I', 'MATA62', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO A', 'MATE12', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('BANCO DE DADOS', 'MATA60', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('INTELIGÊNCIA ARTIFICIAL', 'MATA64', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('COMPUTAÇÃO GRÁFICA', 'MATA65', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('FUNDAMENTOS DE SISTEMAS DISTRIBUÍDOS', 'MATA88', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('ENGENHARIA DE SOFTWARE II-A', 'MATE11', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PROJETO FINAL DE CURSO I', 'MATA66', 'Universidade Federal da Bahia - UFBA');
    this.addDisciplina('PROJETO FINAL DE CURSO II', 'MATA67', 'Universidade Federal da Bahia - UFBA');
  }

  public static getInstance(): DisciplinasRepository {
    if (!DisciplinasRepository.instance) {
      DisciplinasRepository.instance = new DisciplinasRepository();
    }
    return DisciplinasRepository.instance;
  }

  addDisciplina(nome:string, codigo:string, universidade:string) {
    const id = v4();
    const disciplina:Disciplina = {
      nome, codigo, universidade, id,
    };
    this.disciplinas.push(disciplina);
  }

  getAllDisciplinas() {
    return this.disciplinas;
  }

  getDisciplinaById(id) {
    const disciplina = lodash.find(this.disciplinas, (disciplina) => disciplina.id === id);
    return disciplina;
  }

  getDisciplinaByName(nome) {
    const disciplina = lodash.find(this.disciplinas, (disciplina) => disciplina.nome === nome);
    return disciplina;
  }

  getAllProfessoresByDisciplinaId(id) {
    const disciplinas = lodash.filter(ProfessoresRepository.getInstance().getAllProfessores(), (professor) => professor.disciplinaId === id);
    return disciplinas;
  }
}

export default DisciplinasRepository;
