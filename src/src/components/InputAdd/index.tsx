import plus from '../../../assets/plus.svg'
import styles from './style.module.css'


export default function InputAdd() {
    return (
        <form className={styles.form}>
            <div className={styles.formContainer}>
                <input className={styles.input} placeholder="Adicione uma nova tarefa" type="text" />
                <button>Criar <img className={styles.plus} src={plus} /></button>
            </div>
        </form>
    )
}
