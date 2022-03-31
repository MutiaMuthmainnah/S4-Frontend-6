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
export default Hello;