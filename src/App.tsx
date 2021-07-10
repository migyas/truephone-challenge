import React, { useState, useRef } from 'react';
import { CSVReader } from 'react-papaparse';

import Layout from './components/Layout';
import Header from './components/Header';
import loadingImg from './assets/img/loading_icon.svg';

import GlobalStyles from './styles/global';

import modelCSV from './assets/download/model.csv';
import List from './components/List';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);

  const buttonRef = useRef<any>();

  function handleFileUpload(dataFile: any) {
    console.log(dataFile);
  }

  console.log(data);

  const showData = () => {
    if (loading && !checked) {
      return (
        <>
          <p>Estamos verificando todas as mensagens em seu arquivo...</p>
          <img src={loadingImg} alt="loading icon" className="loading-icon" />
          <span className="content-footer-loading-text">
            Você quer
            <div onClick={() => setLoading(!loading)} aria-hidden="true">
              {' '}
              cancelar e voltar ao início
            </div>
            ?
          </span>
        </>
      );
    }

    if (loading && checked) {
      return <List />;
    }

    return (
      <>
        <p>Verifique a validade de uma lista de mensagens 👍</p>

        <label htmlFor="upload-file">
          <CSVReader
            ref={buttonRef}
            noDrag
            noProgressBar
            noClick
            onFileLoad={handleFileUpload}
            config={{ delimiter: ';' }}
          >
            {() => (
              <button
                type="button"
                onClick={(e: any) => buttonRef.current.open(e)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#fff',
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                }}
              >
                Selecionar lista
              </button>
            )}
          </CSVReader>
        </label>

        <span>
          Selecione um arquivo CSV para iniciar a verificação de uma lista com
          números e mensagens de SMS.
        </span>
        <span className="content-footer-text">
          Use nosso{' '}
          <a href={modelCSV} download="modelo.csv">
            modelo
          </a>{' '}
          de arquivo se você tem alguma dúvidas.
        </span>
      </>
    );
  };

  // useEffect(() => {
  //   if (loading) {
  //     setTimeout(() => {
  //       setChecked(true);
  //     }, 5000);
  //   }
  // }, [loading]);

  return (
    <>
      <Header />
      <Layout>{showData()}</Layout>
      <GlobalStyles />
    </>
  );
};

export default App;
