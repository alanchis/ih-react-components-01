// 1. Importaciones



// 2. Funcion
function Header (props) {

    console.log(props)
    return ( 
        <header>
            <p>Este es el header</p>
            <p>Hola {props.nombre}.</p>
        </header>
    )
}


// 3. Exportacion
export default Header