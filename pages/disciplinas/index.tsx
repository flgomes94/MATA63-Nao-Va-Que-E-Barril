import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsPlusCircle } from 'react-icons/bs';
import Professores from '../professores';
import styles from './disciplinas.module.css';
import DisciplinasRepository from '../repositories/disciplinas';
import FormDialog from '../components/dialogCreate';

export default function Disciplinas() {
  const router = useRouter();
  const { disciplinaId } = router.query;
  const disciplinasRepository = DisciplinasRepository.getInstance();
  const disciplina = disciplinasRepository.getDisciplinaById(disciplinaId);
  const professores = disciplinasRepository.getAllProfessoresByDisciplinaId(disciplinaId);

  const [visible, setVisible] = useState(false);
  const [professor, setProfessor] = useState(null);
  const handle = (professor) => { setProfessor(professor); setVisible(!visible); };

  const [open, setOpen] = useState(false);
  const [disciplinaOpen, setDisciplinaOpen] = useState(false);
  const [valuesProfessor, setValuesProfessor] = useState();

  function handleClickInclude() {
    setDisciplinaOpen(false);
    setOpen(true);
  }

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        valuesProfessor={valuesProfessor}
        setValuesProfessor={setValuesProfessor}
      />
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
            <li><Link href="/">Início</Link></li>
            <li><a href="#home">Professores</a></li>
            <li><a href="#home">Login</a></li>
            <li><a href="#home">Registrar-se</a></li>
            <li className={styles.active}><a href="#home">Sair</a></li>
            <li className={styles.active}><a href="#home">Opções</a></li>
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
                  {professor.barril}
                  % Barril
                </li>
                <li className={styles.neutro}>
                  😐
                  {professor.neutro}
                  % Neutro
                </li>
                <li className={styles.deboa}>
                  😁
                  {professor.deboa}
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
    </>
  );
}
