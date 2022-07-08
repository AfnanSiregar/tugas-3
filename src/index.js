import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

let nama="Muzayyin";

function Welcome(props){
    return <h1>Selamat datang {props.nama} </h1>;
}

function Home(){
    if (nama) {
        return <Welcome nama={nama} />
    }else{
        return <button>Login</button>
    }
}

root.render( <Home /> );
