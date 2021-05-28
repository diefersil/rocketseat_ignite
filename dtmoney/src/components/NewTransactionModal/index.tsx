import Modal from 'react-modal';
import React, { FormEvent } from 'react';
import { useState } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState(0);
    
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event:FormEvent){
        event.preventDefault();
    }


    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button className='react-modal-close' type='button' onClick={onRequestClose}><img src={closeImg} alt='fechar modal'/></button>
            
            
            <Container onSubmit={handleCreateNewTransaction} >
                
                <h2>Cadastrar Transação</h2>
                
                <input placeholder='Título' value={title} onChange={ event => setTitle(event.target.value)}/>

                <TransactionTypeContainer>
                    <RadioBox type='button' onClick={() => setType('deposit')} isActive={type == 'deposit'}  activeColor='green'    >
                        <img src={incomeImg} alt='Entradas'/>
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox type='button' onClick={() => setType('withdraw')} isActive={type == 'withdraw'} activeColor='red'>
                        <img src={outcomeImg} alt='Saídas'/>
                        <span>Saídas</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input type='number' placeholder='Valor' onChange={ event => setValue(Number(event.target.value))}/>

                <input placeholder='Categoria' onChange={ event => setCategory(Number(event.target.value))}/>
                <button type='submit'>Cadastrar</button>
            </Container>
        
        </Modal>    
    )

}