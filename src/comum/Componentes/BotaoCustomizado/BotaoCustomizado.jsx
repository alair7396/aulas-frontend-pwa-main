import './BotaoCustomizado.css'

const BotaoCustomizado=(props) =>{
    return(
        <>
            <button>{props.children}</button>
        </>
    )
}
export default BotaoCustomizado;