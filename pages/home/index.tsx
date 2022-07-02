import styles from  './Home.module.css'
import DisciplinasRepository from '../repositories/disciplinas';
import Link from 'next/link';

export default function Home() {
  const disciplinasRepository = DisciplinasRepository.getInstance();
    return (
        <div className={styles.container}>
        <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
      {
        // Header
      }
      <div className={styles.header}>
        <ul>
          <li><a href="#home">Postagens</a></li>
          <li><a href="#home">Professores</a></li>
          <li><a href="#home">Login</a></li>
          <li><a href="#home">Registrar-se</a></li>
          <li className={styles.active}><a href="#home">Sair</a></li>
          <li className={styles.active}><a href="#home">Opções</a></li>
        </ul>
      </div>

      {
        // Busca
      }

      <form className={styles.formPesquisa}>
        <input type='text' placeholder="Pesquise professor, instituição, disciplina.." name="search"/>
        <button type="submit">Pesquisar</button>
      </form>


      {
        // Encontrados
      }
      <div className={styles.cartoes}>
      {
        disciplinasRepository.getAllDisciplinas().map(disciplina =>  <Link key={disciplina.id} href={{pathname:'disciplinas', query:{disciplinaId: disciplina.id}}}><div className={styles.cartao}>
          <h1>{disciplina.nome}</h1>
          <h3>{disciplina.codigo}</h3>
          <h2>{disciplina.universidade}</h2>
        </div>
        </Link>
        )
      }
      </div>

      <footer className={styles.footer}>
          Trabalho de Eng Soft 2
      </footer>
    </div>
    )
}