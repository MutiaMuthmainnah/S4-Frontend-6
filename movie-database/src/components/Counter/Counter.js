import {useState} from "react";
function Counter() {
    
    //membuat variable state
    //mengembalikan 2 data
    //data yang pertama yaitu data saat ini
    //fungsi untuk mengubah state
     const [hasil, setHasil] = useState(0);

    function tambah(){
        //jalankan fungsi setHasil
        //untuk mengubah state
        setHasil(hasil + 1)
    }
    return(
        <div>
            <p>Hasil : {hasil} </p>
            <button onClick={tambah}> Add </button>
        </div>
    );
}
export default Counter;