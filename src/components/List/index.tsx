import { useState } from 'react';
import alrightImg from '../../assets/img/alright-icon.svg';
import incorrectImg from '../../assets/img/incorrect-icon.svg';
import correctIcon from '../../assets/img/correct-icon.svg';
import cancelIcon from '../../assets/img/close-icon.svg';

import * as S from './styled';

interface ListProps {
  data: any;
  checked: any;
  loading: any;
}

const List: React.FC<ListProps> = ({ data, checked, loading }: ListProps) => {
  const [finish, setFinish] = useState(false);

  const numberRegex = /\d{2}9\d{8}/;
  const msgRegex = /^[\w\W]{1,160}$/;
  const dataNumber = data.map((item: any) => numberRegex.test(item.data[0]));
  const dataMsg = data.map((item: any) => msgRegex.test(item.data[1]));

  const filterPhone = dataNumber.filter((item: any) => item === false);
  const filterMsg = dataMsg.filter((item: any) => item === false);

  const datas = data.map((item: any) => ({
    ...item,
    statusNumber: numberRegex.test(item.data[0]),
    statusMsg: item.data[1].length <= 160,
  }));

  const handleChangeHome = () => {
    checked(false);
    loading(false);
  };

  // const handleFinished = () => {

  // };

  const showData = () => {
    if (finish) {
      return (
        <>
          <header>
            <p style={{ color: '#3D3ADA', fontSize: '3.6rem' }}>
              {' '}
              É isso aí! 🚀
            </p>
            <p>Sua lista está pronta para entrar em produção!</p>
            <span style={{ textAlign: 'center' }}>
              Já guardamos todos as mensagens válidas para que você possa
              usá-las em uma campanha no futuro.
            </span>
          </header>
          <span style={{ marginTop: '2.4rem' }}>
            <a
              href="/"
              onClick={() => handleChangeHome()}
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                color: 'blue',
              }}
            >
              Voltar ao início
            </a>{' '}
            para iniciar outra verificação
          </span>
        </>
      );
    }

    return (
      <>
        <p
          style={{
            textAlign: 'center',
            width: '46.6rem',
            marginTop: '-4rem',
          }}
        >
          Encontramos{' '}
          <strong style={{ color: '#12c223' }}>
            {dataNumber.length - (filterPhone.length + filterMsg.length)}
          </strong>{' '}
          mensagens válidas em sua lista 🎉
        </p>

        <div style={{ overflow: 'auto' }}>
          <S.Table>
            <thead>
              <tr>
                <th>Número</th>
                <th>Prévia da mensagem</th>
                <th>Resultado</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((item: any) => (
                <>
                  <tr key={item}>
                    <td>{item.data[0]}</td>
                    <td>
                      {item.data[1].length <= 160
                        ? item.data[1]
                        : 'Excedeu 160 caracteres'}
                    </td>

                    <td style={{ display: 'flex', alignItems: 'center' }}>
                      {item.statusNumber && item.statusMsg ? (
                        <>
                          Válida{' '}
                          <img
                            src={alrightImg}
                            alt="alright icon"
                            style={{
                              width: '1.4rem',
                              height: '1rem',
                              marginLeft: '.5rem',
                            }}
                          />
                        </>
                      ) : (
                        <>
                          Inválida{' '}
                          <img
                            src={incorrectImg}
                            alt="incorrect icon"
                            style={{
                              width: '1.4rem',
                              height: '1rem',
                              marginLeft: '.5rem',
                            }}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </S.Table>
        </div>
        <S.Footer>
          <span>Está pronto para prosseguir? 🤔</span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginTop: '2.4rem',
            }}
          >
            <button
              type="button"
              style={{
                color: '#747474',
                backgroundColor: '#ffffff',
                border: '2px solid #747474',
              }}
              onClick={() => handleChangeHome()}
            >
              Cancelar <img src={cancelIcon} alt="agree icon" />
            </button>
            <button
              type="button"
              style={{
                backgroundColor: '#3D3ADA',
                boxShadow: '0px 0px 20px rgba(61, 58, 218, 0.2)',
              }}
              onClick={() => setFinish(true)}
            >
              Salvar Lista <img src={correctIcon} alt="agree icon" />
            </button>
          </div>
        </S.Footer>
      </>
    );
  };
  return <>{showData()}</>;
};

export default List;
