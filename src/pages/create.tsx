import '../style/create'
import FormInputs from '../components/inputs/form';
import { useState } from 'react';
import api from '../server/api';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

function Create() {
  const [drawName, setDrawName] = useState<string>('');
  const [minValue, setMinValue] = useState<string>('');
  const [maxValue, setMaxValue] = useState<string>('');
  const [dateDraw, setDateDraw] = useState<string>('');
  const [giftDate, setGiftDate] = useState<string>('');
  const [descriptionDraw, setdescriptionDraw] = useState<string>('');
  const formsParameters = [
    {
      labelForInput: 'Nome do Sorteio*',
      placeholderInput: 'Ex: Sorteio da Firma',
      typeInput: 'text',
      setInputValue: setDrawName,
    },
    {
      labelForInput: 'Valor mínimo',
      placeholderInput: 'Ex: 10,00',
      typeInput: 'text',
      setInputValue: setMinValue,
    },
    {
      labelForInput: 'Valor máximo',
      placeholderInput: 'Ex: 50,00',
      typeInput: 'text',
      setInputValue: setMaxValue,
    },
    {
      labelForInput: 'Data do Sorteio',
      placeholderInput: 'Ex: 10/12/2024',
      typeInput: 'text',
      setInputValue: setDateDraw,
    },
    {
      labelForInput: 'Data da troca de presentes',
      placeholderInput: 'Ex: 24/12/2024',
      typeInput: 'text',
      setInputValue: setGiftDate,
    },
    {
      labelForInput: 'Descrição do amigo secreto',
      placeholderInput: 'Ex: Amigo secreto da firma - 2024',
      typeInput: 'text',
      setInputValue: setdescriptionDraw,
    },
  ];

  const handleDraw = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.post('/draws', {
      draw: {
        title: drawName,
        min_value: minValue,
        max_value: maxValue,
        date_draws: dateDraw,
        date_present: giftDate,
        description: descriptionDraw
      },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  };


  return (
    <>
      <div className='register-header'>
        <Link to="/home" className='back-arrow'>
          <FaArrowLeft size={20} />
        </Link>
        <h2>Criar</h2>
        <Link to="/home" className='back-arrow'>
          <FaXmark size={20} />
        </Link>
      </div>
      <form onSubmit={handleDraw} className='form'>
        <div className='form-inputs'>
          {formsParameters.map(formParameter =>
            <FormInputs
              labelForInput={formParameter.labelForInput}
              placeholderInput={formParameter.placeholderInput}
              typeInput={formParameter.typeInput}
              setInputValue={formParameter.setInputValue}
            />)}
        </div>

        <div className="buttonSubmit">
          <button className='button-padrao' type="submit">Próximo</button>
        </div>
      </form>
    </>
  )

}

export default Create