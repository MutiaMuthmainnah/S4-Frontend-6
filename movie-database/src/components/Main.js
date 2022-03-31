function Hello(props) {
    console.log(props);

    //Melakukan destructing props
    const {name} = props;


    //didalam return adalah jsx
    // tampilan yang ingin kita tampilkan di html atau UI
    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}
/**
 * 
 *  membuat component main
 * untuk menampung content utama
 */
 function Main(){
    //mengirim props name 
    return(
        <main>
            <Hello name = "Mutia"/>
            <Hello name = "Dea"/>
            <Hello name = "Fadhila"/>
            <Hello name = "Farah"/>
            <Hello name = "Eka"/>
        </main>
    );
}
export default Main;