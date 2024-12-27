import './Rodape.css'

const Rodape = () => {
    return (
        <footer>
            <div className='sociais'>
                <a href='facebook.com' target='_blank'>
                    <img src='imagens/fb.png' alt='Facebook'/>
                </a>
                <a href='x.com' target='_blank'>
                    <img src='imagens/tw.png' alt='X'/>
                </a>
                <a href='instagram.com' target='_blank'>
                    <img src='imagens/ig.png' alt='Instagram'/>    
                </a>
            </div>
            <div className='logo'>
                <img src='imagens/logo.png' alt='Logo' />
            </div>
            <div>
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape