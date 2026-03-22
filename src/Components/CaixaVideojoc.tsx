import "./CaixaVideojoc.css";

/**
 * Aquestes són les propietats del component CaixaVideojoc
 */
type prop = {
    title:string,
    preu:number,
    descripcio:string
};

/**
 * Component que mostra la informació d'un videojoc
 * @component
 * @param prop Propietats del videojoc
 * @returns JSX amb la informació d'un videojoc
 */
function CaixaVideojoc(prop:prop){


    return(
        <div className={"CaixaVideojoc"}>
            <h2 className={"title"}>{prop.title}</h2>
            <p className={"preu"}>{prop.preu}</p>
            <p className={"descripcio"}>{prop.descripcio}</p>
        </div>
    )
}

export default CaixaVideojoc;