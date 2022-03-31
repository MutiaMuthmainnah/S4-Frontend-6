import styles from "./Form.module.css";

function Form(){
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div  className={styles.form__left}>
                    <h3 className={styles.form__title}>Add Movie</h3>
                    <form>
                        <div>
                            <label className={styles.form__label}>Title</label><br />
                            <input className={styles.form__control}></input>
                        </div>
                        <div>
                            <label className={styles.form__label}>Year</label><br />
                            <input className={styles.form__control}></input>
                        </div>
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
                <div  className={styles.form__right}>
                    <img className={styles.form__image} src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>
    );
}
export default Form;