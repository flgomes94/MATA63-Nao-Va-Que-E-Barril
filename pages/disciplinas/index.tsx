// @ts-ignore
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsPlusCircle } from 'react-icons/bs';
import {
  Button, Input, Modal, Spacer,
} from '@nextui-org/react';
import Professores from '../professores';
import styles from './disciplinas.module.css';
import DisciplinasRepository from '../repositories/disciplinas';
import FormDialog from '../components/dialogCreate';
import ProfessoresRepository from '../repositories/professores';

export default function Disciplinas() {
  const router = useRouter();
  const { disciplinaId } = router.query;
  const disciplinasRepository = DisciplinasRepository.getInstance();
  const disciplina = disciplinasRepository.getDisciplinaById(disciplinaId);
  const professores = disciplinasRepository.getAllProfessoresByDisciplinaId(disciplinaId);

  const [visible, setVisible] = useState(false);
  const [professor, setProfessor] = useState(null);
  const handle = (professor) => { setProfessor(professor); setVisible(!visible); };

  const [modalAddProfessor, setModalAddProfessor] = useState(false);
  const [nomeProfessor, setNomeProfessor] = useState('');

  function handleClickInclude() {
    setModalAddProfessor(!modalAddProfessor);
  }

  return (
    <div className={styles.container}>
      {visible
          && (
          <Professores
            visible={visible}
            handle={handle}
            professor={professor}
            setProfessor={setProfessor}
          />
          )}
      <link href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet" type="text/css" />
      {
        // Header
      }
      <div className={styles.header}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><a href="#">Postagens</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Registrar-se</a></li>
          <li className={styles.active}><a href="#home">Login</a></li>
          <li className={styles.active}><a href="#home">Registrar</a></li>
        </ul>
      </div>
      <h1 className={styles.nomeDisciplina}>{disciplina?.nome || ''}</h1>
      <h2 className={styles.codigoDisciplina}>{disciplina?.codigo || ''}</h2>
      <h3 className={styles.nomeUniversidade}>{disciplina?.universidade || ''}</h3>
      {
        // Botão Adicionar
      }
      <button
        className={styles.add}
        onClick={() => handleClickInclude()}
      >
        <BsPlusCircle size={30} />

      </button>

      {
        // Modal Add Professor
      }

      {modalAddProfessor
      && (
      <Modal
        closeButton
        open={modalAddProfessor}
        onClose={handleClickInclude}
        width="800px"
      >
        <div className={styles.modalAddProfessor}>
          <h1>Adicionar professor</h1>
          <Spacer y={2} />
          <Input labelPlaceholder="Nome Professor" width="600px" onChange={(e) => setNomeProfessor(e.target.value)} />
          <Spacer y={2} />
          <Spacer />
          <Button
            size="sm"
            onPress={() => {
              ProfessoresRepository
                .getInstance().addProfessor(nomeProfessor, disciplinaId);
              handleClickInclude();
            }}
          >
            Adicionar Professor
          </Button>
          <Spacer y={2} />
        </div>
      </Modal>
      )}

      <div className={styles.cartoes}>
        {professores.map((professor) => (
          <div
            key={professor.id}
            className={styles.cartao}
            onClick={() => handle(professor)}
          >
            <h1>{professor.nome}</h1>
            <ul>
              <li className={styles.barril}>
                🤬
                {((professor.barril * 100)
                  / (professor.barril + professor.neutro + professor.deboa) || 0).toFixed()}
                % Barril
              </li>
              <li className={styles.neutro}>
                😐
                {((professor.neutro * 100)
                  / (professor.barril + professor.neutro + professor.deboa) || 0).toFixed()}
                % Neutro
              </li>
              <li className={styles.deboa}>
                😁
                {((professor.deboa * 100)
                  / (professor.barril + professor.neutro + professor.deboa) || 0).toFixed()}
                % De boa
              </li>
            </ul>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        Trabalho de Eng Soft 2
      </footer>
    </div>
  );
}
