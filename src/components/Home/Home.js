import React, { useState } from "react";
import "./style.scss";
import { FiSearch } from "react-icons/fi";
import { Recorrer} from "./Categorias/Recorrer";



const Home = () => {
  const [Pagina, setPagina] = useState("Guajolotas");

  return (
    <div className="Container">

      <div className="Logo">
        <a href="/">
          <img
            src="https://res.cloudinary.com/aca-geek/image/upload/v1642891058/Ilustraci%C3%B3n_sin_t%C3%ADtulo_66_1_twomjl.png"
            alt=""
            width={90}
          />
        </a>
      </div>

      <div className="texto">Nada como una Guajalota para empezar el dia</div>

      <div className="Sabor">
        <FiSearch className="iconoBusqueda" size={25} />
        <input
          type="Text"
          className="InputSabor"
          placeholder="Sabor de guajolota, bebida..."
        />
      </div>

      <div className="Categorias">
        <button className="BotonCate" onClick={() => setPagina("Guajolotas")}>
          Guajalotas
        </button>
        <button className="BotonCate" onClick={() => setPagina("Bebidas")}>
          Bebidas
        </button>
        <button className="BotonCate" onClick={() => setPagina("Tamales")}>
          Tamales
        </button>
      </div>

    <Recorrer CategoriaActual={Pagina}/>
    </div>
  );
};

export default Home;
