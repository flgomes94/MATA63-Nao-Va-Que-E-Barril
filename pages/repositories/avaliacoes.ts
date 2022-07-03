import { v4 } from 'uuid';
import lodash from 'lodash';
import { Avaliacao } from './avaliacao.dto';
import ProfessoresRepository from './professores';

class AvaliacoesRepository {
  avaliacoes: Avaliacao[];

  private static instance: AvaliacoesRepository;

  constructor() {
    this.avaliacoes = [];
  }

  public static getInstance(): AvaliacoesRepository {
    if (!AvaliacoesRepository.instance) {
      AvaliacoesRepository.instance = new AvaliacoesRepository();
    }
    return AvaliacoesRepository.instance;
  }

  getAllAvaliacoes() {
    return this.avaliacoes;
  }

  addAvaliacao(comentario:string, nome:string, avaliacao:'barril' | 'neutro' | 'deboa', professorId: string) {
    const id = v4();
    const avaliacaoObj:Avaliacao = {
      id, comentario, nome, avaliacao, professorId,
    };
    ProfessoresRepository.getInstance().SomaAvaliacao(professorId, avaliacao);
    this.avaliacoes.push(avaliacaoObj);
  }

  getAllAvaliacoesByProfessorId(id) {
    const avaliacoes = lodash.filter(this.avaliacoes, (avaliacao) => avaliacao.professorId === id);
    return avaliacoes;
  }
}

export default AvaliacoesRepository;
