
import check from '../../../assets/check.svg';
import lixeira from '../../../assets/trash.svg';
import styles from './style.module.css';


interface ItemProps {
    onClick: (props: { content: string, done: boolean }) => void;
    delete: (props: { content: string, done: boolean }) => void;
    done: boolean;
    content: string;
    list: string;
    key: number;
}

export default function Item(props: ItemProps) {
    return (
        <div className={(props.list === 'create' && props.done === true) ? styles.item_create_done : styles.item_create}>
            {props.list === 'create' ?
                (<div onClick={() => { props.onClick(props) }} className={styles.circle_create} />) :
                (<img onClick={() => { props.onClick(props) }} src={check} />)
            }
            {
                (props.list === 'create') && (<p className={styles.text}>{props.content}</p>)
            }
            {
                (props.list === 'done' && props.done === true) ? (<del className={styles.text}>{props.content}</del>) : <></>
            }
            <img className={styles.lixeira} onClick={() => { props.delete(props) }} src={lixeira} alt="lixeira" />
        </div>

    )
}
