import {
  Input, Modal, Spacer, Textarea,
  Button,
} from '@nextui-org/react';
import { useState } from 'react';
import AvaliacoesRepository from '../repositories/avaliacoes';
import ProfessoresRepository from '../repositories/professores';
import styles from './professores.module.css';

export default function Professores({
  visible, handle, professor, setProfessor,
}) {
  const avaliacoesRepository = AvaliacoesRepository.getInstance();
  const [avaliacoes, setAvaliacoes] = useState(
    avaliacoesRepository.getAllAvaliacoesByProfessorId(professor.id),
  );

  const [avaliacaoAtual, setAvaliacaoAtual] = useState(null);
  const [comentario, setComentario] = useState('');
  const [nome, setNome] = useState('');
  return (
    <Modal
      closeButton
      open={visible}
      onClose={handle}
      width="800px"
    >
      <link href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet" type="text/css" />
      <div>
        <h1 className={styles.voteNoProfessor}>{`Vote no professor ${professor?.nome}`}</h1>
        {avaliacaoAtual == null
          ? (
            <Button.Group size="md">
              <Button onPress={() => setAvaliacaoAtual('barril')}>🤬</Button>
              <Button onPress={() => setAvaliacaoAtual('neutro')}>😐</Button>
              <Button onPress={() => setAvaliacaoAtual('deboa')}>😁</Button>
            </Button.Group>
          )
          : (
            <div className={styles.ComenteSobreOProfessor}>
              <Spacer y={2} />
              <Textarea labelPlaceholder="Comentário" rows={2} width="600px" onChange={(e) => setComentario(e.target.value)} />
              <Spacer y={2} />
              <Input labelPlaceholder="Seu nome" width="600px" onChange={(e) => setNome(e.target.value)} />
              <Spacer />
              <Button
                onPress={() => {
                  avaliacoesRepository
                    .addAvaliacao(comentario, nome, avaliacaoAtual, professor.id);
                  setProfessor(ProfessoresRepository.getInstance().getProfessorById(professor?.id));
                  setAvaliacoes(avaliacoesRepository.getAllAvaliacoesByProfessorId(professor?.id));

                  setAvaliacaoAtual(null);
                }}
              >
                Enviar comentário

              </Button>
            </div>
          )}
        <div className={styles.informacoesDoProfessor}>
          <h1>Classificação do professor</h1>
          <ul>
            <li>
              {professor?.barril}
              % acham esse professor barril 🤬
            </li>
            <li>
              {professor?.neutro}
              % acham esse professor neutro 😐
            </li>
            <li>
              {professor?.deboa}
              % acham esse professor de boa 😁
            </li>
          </ul>
        </div>
        <div className={styles.comentarios}>
          <h1>Comentários</h1>
          {avaliacoes.map((avaliacao) => (
            <div key={avaliacao.id} className={styles.comentario}>
              <h1>{avaliacao?.nome}</h1>
              <h2>
                Avaliou como
                {' '}
                {avaliacao.avaliacao === 'barril' ? 'barril 🤬' : avaliacao.avaliacao === 'neutro' ? 'neutro 😐' : 'de boa 😁'}
              </h2>
              <p>{avaliacao?.comentario}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
