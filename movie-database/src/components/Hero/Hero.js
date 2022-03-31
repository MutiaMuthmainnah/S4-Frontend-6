import styles from "./Hero.module.css";

function Hero(){
    return(
        <div className={styles.container}>
            <section className={styles.hero}>
                <div>
                    <h2 className={styles.hero__title}>Spiderman</h2>
                    <h3 className={styles.hero__genre}>Genre : Action, Drama</h3>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore adipisci placeat laudantium non ullam, dolores praesentium magni fugit labore.
                    </p>
                    <button className={styles.hero__button}>Watch!!</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/600/400" alt="" />
                </div>
            </section>
        </div>
    );
}
export default Hero;