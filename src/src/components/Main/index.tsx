import { useEffect, useState } from 'react';
import listImg from '../../../assets/list.svg';
import Logo from '../../../assets/Logo.svg';
import plus from '../../../assets/plus.svg';
import Item from '../Item';
import styles from './style.module.css';

function Main() {
    const [list, setList] = useState<{ content: string, done: boolean }[]>([]);
    const [listCreate, setlistCreate] = useState<{ content: string, done: boolean }[]>([]);
    const [listDone, setlistDone] = useState<{ content: string, done: boolean }[]>([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        setlistCreate(list.filter((element) => {
            return element.done === false
        }))
        setlistDone(list.filter((element) => {
            return element.done === true
        }))
        console.log(list.length)
    }, [list])


    function changeType(props: { content: string, done: boolean }) {
        let arrayList = [...list]
        let content = props.content
        let done = props.done
        let object = { content, done }

        let index = arrayList.findIndex((element) => {
            return element.content === object.content
        })

        arrayList[index].done = !arrayList[index].done;
        setList(arrayList)
    }

    function exclude(props: { content: string, done: boolean }) {
        let arrayList = [...list]
        let content = props.content
        let done = props.done
        let object = { content, done }

        let newArrayList = arrayList.filter((element) => {
            return element.content !== object.content
        })
        setList(newArrayList);
    }
    function add() {
        let array = [...list];
        let object = {
            content: input,
            done: false
        }
        array.push(object)
        setList(array)
        setInput('');
    }


    return (
        <>
            <header className={styles.header}>
                <div className={styles.header_content}>
                    <img src={Logo} alt="Logo" />
                    <form className={styles.form}>
                        <div className={styles.formContainer}>
                            <input value={input} onChange={(e) => { setInput(e.target.value) }} className={styles.input} placeholder="Adicione uma nova tarefa" type="text" />
                            <button onClick={(e) => {
                                e.preventDefault();
                                add();
                            }}>Criar <img className={styles.plus} src={plus} /></button>
                        </div>
                    </form>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.main_content}>
                    <div className={list.length === 0 ? styles.main_contentEmpty_header : styles.main_content_header}>
                        <div className={styles.created_tasks}>
                            <p>Tarefas criadas</p>
                            <p className={styles.number}>{list.length}</p>
                        </div>
                        <div className={styles.completed_tasks}>
                            <p>Tarefas Concluídas</p>
                            <p className={styles.number}>{listDone.length === 0 ? (<>{listDone.length}</>) : (<>{listDone.length} de {list.length}</>)}</p>
                        </div>
                    </div>
                    <div className={list.length === 0 ? styles.main_contentEmpty_body : styles.main_content_body}>

                        {listCreate.length === 0 && listDone.length === 0 ? (
                            <>
                                <img className={styles.imgEmpty} src={listImg} />
                                <p className={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</p>
                                <p className={styles.textEmpty}>Crie tarefas e organize seus itens a fazer</p>
                            </>
                        ) : (
                            <>
                                {listCreate.map((item, index) => {
                                    return (
                                        <Item key={index} list={"create"} onClick={changeType} delete={exclude} content={item.content} done={item.done} />
                                    )
                                })
                                }
                            </>
                        )
                        }
                        {listDone.map((item, index) => {
                            return (
                                <Item key={index} list={"done"} onClick={changeType} delete={exclude} content={item.content} done={item.done} />
                            )
                        })
                        }
                    </div>
                </div>
            </main>
        </>

    )
}

export default Main