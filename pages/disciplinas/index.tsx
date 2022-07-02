import Professores from '../professores'
import { useState } from 'react';
import { useRouter } from 'next/router'
import styles from  './disciplinas.module.css'
import DisciplinasRepository from '../repositories/disciplinas';
import Link from 'next/link';

export default function Disciplinas() {
  const router = useRouter();
  const {disciplinaId} = router.query;
  const disciplinasRepository = DisciplinasRepository.getInstance();
  const disciplina = disciplinasRepository.getDisciplinaById(disciplinaId);
  const professores = disciplinasRepository.getAllProfessoresByDisciplinaId(disciplinaId);

  const [visible,setVisible] = useState(false);
  const [professor,setProfessor] = useState({});
  const handle = (professor) => {setProfessor(professor);setVisible(!visible)};
    return (
        <div className={styles.container}>
          <Professores visible={visible} handle={handle} professor={professor}/>
      <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
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
      <div className={styles.cartoes}>
        {professores.map(professor => <div key={professor.id} className={styles.cartao} onClick={() => handle(professor)}>
          <h1>{professor.nome}</h1>
          <ul>
            <li className={styles.barril}>🤬 {professor.barril}% Barril</li>
            <li className={styles.neutro}>😐 {professor.neutro}% Neutro</li>
            <li className={styles.deboa}>😁 {professor.deboa}% De boa</li>
          </ul>
        </div>)}
      </div>


      <footer className={styles.footer}>
          Trabalho de Eng Soft 2
      </footer>
    </div>
    )
}