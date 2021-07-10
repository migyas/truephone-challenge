import { useState } from 'react';
import alrightImg from '../../assets/img/alright-icon.svg';
import incorrectImg from '../../assets/img/incorrect-icon.svg';

import * as S from './styled';


const List: React.FC = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      <p
        style={{
          textAlign: 'center',
          width: '46.6rem',
          marginTop: '-4rem',
        }}
      >
        Encontramos 32 mensagens válidas em sua lista 🎉
      </p>

      <S.Table>
        <thead>
          <tr>
            <th>Número</th>
            <th>Prévia da mensagem</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>(62) 99999-9901</td>
            <td>Olá funalo, você está recebendo essa mensagem...</td>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              {status ? (
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
          <tr>
            <td>(62) 99999-9901</td>
            <td>Olá funalo, você está recebendo essa mensagem...</td>
            <td
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '.5rem',
              }}
            >
              {!status ? (
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
          <tr>
            <td>(62) 99999-9901</td>
            <td>Olá funalo, você está recebendo essa mensagem...</td>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              {!status ? (
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
          <tr>
            <td>(62) 99999-9901</td>
            <td>Olá funalo, você está recebendo essa mensagem...</td>
            <td style={{ display: 'flex', alignItems: 'center' }}>
              {!status ? (
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
        </tbody>
      </S.Table>
    </>
  );
};

export default List;
