import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button className='react-modal-close' type='button' onClick={onRequestClose}><img src={closeImg} alt='fechar modal'/></button>
            <Container>
                <h2>Cadastrar Transação</h2>
                <input placeholder='Título'/>

                    <TransactionTypeContainer>
                        <button type='button'>
                            <img src={incomeImg} alt='Entradas'/>
                            <span>Entradas</span>
                        </button>

                        <button type='button'>
                            <img src={outcomeImg} alt='Saídas'/>
                            <span>Saídas</span>
                        </button>

                    </TransactionTypeContainer>




                <input type='number' placeholder='Valor'/>
                <input placeholder='Categoria'/>
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>    
    )

}