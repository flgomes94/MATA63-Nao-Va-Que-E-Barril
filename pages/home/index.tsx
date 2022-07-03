import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import {
  Button, Input, Modal, Spacer,
} from '@nextui-org/react';
import styles from './Home.module.css';
import DisciplinasRepository from '../repositories/disciplinas';
// import FormDialog from '../components/dialogCreate';

export default function Home() {
  const disciplinasRepository = DisciplinasRepository.getInstance();

  const [modalAddDisciplina, setModalAddDisciplina] = useState(false);
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [codiogoDisciplina, setCodigoDisciplina] = useState('');
  const [nomeUniversidade, setNomeUniversidade] = useState('');

  function handleClickInclude() {
    setModalAddDisciplina(!modalAddDisciplina);
  }

  return (
    <div className={styles.container}>
      <link href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet" type="text/css" />
      {
        // Header
      }
      <div className={styles.header}>
        <ul>
          <li><a href="#">Professores</a></li>
          <li><a href="#home">Postagens</a></li>
          <li><a href="#home">Login</a></li>
          <li><a href="#home">Registrar-se</a></li>
          <li className={styles.active}><a href="#home">Login</a></li>
          <li className={styles.active}><a href="#home">Registrar</a></li>
        </ul>
      </div>

      {
        // Busca
      }

      <form className={styles.formPesquisa}>
        <input type="text" placeholder="Pesquise professor, instituição, disciplina.." name="search" />
        <button type="submit">Pesquisar</button>
      </form>

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
        // Adicionar disciplinas
      }
      {modalAddDisciplina
      && (
      <Modal
        closeButton
        open={modalAddDisciplina}
        onClose={handleClickInclude}
        width="800px"
      >
        <div className={styles.modalAddDisciplina}>
          <h1>Adicionar disciplina</h1>
          <Spacer y={2} />
          <Input labelPlaceholder="Nome Disciplina" width="600px" onChange={(e) => setNomeDisciplina(e.target.value)} />
          <Spacer y={2} />
          <Input labelPlaceholder="Código Disciplina" width="600px" onChange={(e) => setCodigoDisciplina(e.target.value)} />
          <Spacer y={2} />
          <Input labelPlaceholder="Nome Universidade" width="600px" onChange={(e) => setNomeUniversidade(e.target.value)} />
          <Spacer />
          <Button
            size="sm"
            onPress={() => {
              DisciplinasRepository
                .getInstance().addDisciplina(nomeDisciplina, codiogoDisciplina, nomeUniversidade);
              handleClickInclude();
            }}
          >
            Adicionar disciplina
          </Button>
          <Spacer y={2} />
        </div>
      </Modal>
      )}

      {
        // Encontrados
      }
      <div className={styles.cartoes}>
        {
        disciplinasRepository.getAllDisciplinas().map((disciplina) => (
          <Link key={disciplina.id} href={{ pathname: 'disciplinas', query: { disciplinaId: disciplina.id } }}>
            <div className={styles.cartao}>
              <h1>{disciplina.nome}</h1>
              <h3>{disciplina.codigo}</h3>
              <h2>{disciplina.universidade}</h2>
            </div>
          </Link>
        ))
      }
      </div>

      <footer className={styles.footer}>
        Trabalho de Eng Soft 2
      </footer>
    </div>
  );
}
