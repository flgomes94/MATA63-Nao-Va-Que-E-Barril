import Professores from '../professores'
import { useState } from 'react';
import styles from  './disciplinas.module.css'

export default function Disciplinas() {
  const [visible,setVisible] = useState(false);
  const handle = () => setVisible(!visible);
    return (
        <div className={styles.container}>
          <Professores visible={visible} handle={handle}/>
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
      <h1 className={styles.nomeDisciplina}>Engenharia de Software 2</h1>
      <h2 className={styles.codigoDisciplina}>MAT63</h2>
      <h3 className={styles.nomeUniversidade}>UFBA</h3>
      <div className={styles.cartoes}>
        <div className={styles.cartao} onClick={handle}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        
      </div>

      <footer className={styles.footer}>
          Trabalho de Eng Soft 2
      </footer>
    </div>
    )
}