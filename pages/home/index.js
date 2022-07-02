import styles from  './Home.module.css'

export default function Home() {
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
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>
        <div className={styles.cartao}>
          <h1>Engenharia de Software 2</h1>
          <h3>MATA63</h3>
          <h2>Universidade Federal da Bahia - UFBA</h2>
        </div>

 {/*
        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>

        <div className={styles.cartao}>
          <h1>Ivan Machado</h1>
          <h2>Universidade Federal da Bahia - UFBA</h2>
          <h3>Leciona MATA63 e outras 2 disciplinas</h3>
          <ul>
            <li className={styles.barril}>🤬 20% Barril</li>
            <li className={styles.neutro}>😐 30% Neutro</li>
            <li className={styles.deboa}>😁 50% De boa</li>
          </ul>
        </div>
        */}
      </div>

      <footer className={styles.footer}>
          Trabalho de Eng Soft 2
      </footer>
    </div>
    )
}