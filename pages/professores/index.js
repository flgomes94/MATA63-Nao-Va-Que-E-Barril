import { Modal } from '@nextui-org/react';
import { Button } from "@nextui-org/react";
import styles from  './professores.module.css'

export default function Professores({visible,handle}) {

    return(
        <Modal
            closeButton
            open={visible}
            onClose={handle}
            width="800px"
            
        >
            <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'></link>
            <div>
            <h1 className={styles.voteNoProfessor}>Vote no professor</h1>
            <Button.Group color="light" size='md'>
                <Button >🤬</Button>
                <Button>😐</Button>
                <Button>😁</Button>
            </Button.Group>
            <div className={styles.informacoesDoProfessor}>
                <h1>Classificação do professor</h1>
                <ul>
                    <li>50% acham esse professor barril 🤬</li>
                    <li>20% acham esse professor neutro 😐</li>
                    <li>30% acham esse professor de boa 😁</li>
                </ul>
            </div>
            <div className={styles.comentarios}>
                <h1>Comentários</h1>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal.</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                <div className={styles.comentario}>
                    <h1>Fabio Lopes Gomes</h1>
                    <h2>Avaliou como de boa 😁</h2>
                    <p>Eu achei esse professor legal, não tive problmas com ele, cobrava poucas atividades e parecia ser um professor até legal</p>
                </div>
                <hr/>
                <div className={styles.comentario}>
                    <h1>Pedro Freitas</h1>
                    <h2>Avaliou como de boa 🤬</h2>
                    <p>Eu achei esse professor chato. CObrava presença e avaliações além do que deveria cobrar</p>
                </div>
                </div>
            </div>
        </Modal>
    )
}