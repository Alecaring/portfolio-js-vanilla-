import React, { useEffect, useState } from 'react';
import '../scss/partials/editor.scss'; // Importa il file SCSS
import CommonSectionLayout from '../components/layouts/CommonSectionLayout';
import CommonSidebarLayout from '../components/layouts/CommonSidebarLayout';
import Loading from './Loading';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Icon from '../components/Icon';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const FileExplorer = () => {
  const { repoName } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [directoryContent, setDirectoryContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fileContent, setFileContent] = useState('');
  const [fileName, setFileName] = useState('');

  // Leggi il parametro "path" dall'URL (se presente)
  const currentPath = new URLSearchParams(location.search).get('path') || '';

  const loadDirectory = async (path = '') => {
    setLoading(true);
    const repoOwner = 'alecaring';

    try {
      const response = await fetch(
        `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`, {
        headers: {
          Authorization: `token ALESSIO_TOKEN`,
        }
      }
      );

      if (response.ok) {
        const data = await response.json();
        setDirectoryContent(data);

        // Aggiorna l'URL per riflettere il nuovo percorso
        navigate(`?path=${encodeURIComponent(path)}`);
      } else {
        const errorData = await response.text();
        console.error('Errore nel caricare la directory:', errorData);
        setDirectoryContent([]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Errore nel caricare la directory:', error);
      setDirectoryContent([]);
      setLoading(false);
    }
  };

  const loadFileContent = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl);

      if (response.ok) {
        const contentType = response.headers.get('Content-Type');

        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();

          if (data.content) {
            const decodedContent = atob(data.content);
            setFileContent(decodedContent);
            setFileName(fileName);
          } else {
            console.error('Contenuto del file non trovato');
            setFileContent('Contenuto del file non trovato');
          }
        } else {
          const textContent = await response.text();
          setFileContent(textContent);
          setFileName(fileName);
        }
      } else {
        const errorData = await response.text();
        console.error('Errore nel caricare il contenuto del file:', errorData);
        setFileContent('Errore nel caricare il file');
      }
    } catch (error) {
      console.error('Errore nel caricare il contenuto del file:', error);
      setFileContent('Errore nel caricare il file');
    }
  };

  // Funzione per tornare indietro di un livello nel percorso
  const goBack = () => {
    if (!currentPath) return;

    // Rimuovi l'ultimo segmento dal percorso
    const pathSegments = currentPath.split('/');
    pathSegments.pop(); // Rimuovi l'ultimo elemento
    const newPath = pathSegments.join('/');

    // Carica la nuova directory e aggiorna l'URL
    loadDirectory(newPath);
  };

  const detectLanguage = (fileName) => {
    const extension = fileName.split('.').pop();
    switch (extension) {
      case 'js':
        return 'javascript';
      case 'jsx':
        return 'jsx';
      case 'ts':
        return 'typescript';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      case 'scss':
        return 'scss';
      case 'json':
        return 'json';
      case 'py':
        return 'python';
      case 'php':
        return 'php';
      case 'java':
        return 'java';
      case 'c':
        return 'c';
      case 'cpp':
        return 'cpp';
      case 'md':
        return 'markdown';
      default:
        return 'plaintext';
    }
  };

  // Carica la directory quando cambia il parametro "path" nell'URL
  useEffect(() => {
    loadDirectory(currentPath);
  }, [currentPath]);

  if (loading) {
    return <Loading />;
  }

  // Modifica il tema per adattarlo allo sfondo nero
  const customStyle = {
    ...materialLight,
    'pre[class*="language-"]': {
      ...materialLight['pre[class*="language-"]'],
      background: '#000', // Sfondo nero
      color: '#fff',      // Testo bianco
    },
    'code[class*="language-"]': {
      ...materialLight['code[class*="language-"]'],
      background: '#000', // Sfondo nero
      color: '#fff',      // Testo bianco
    },
    'span.token.comment': {
      color: '#6c757d',   // Colore dei commenti
    },
    'span.token.keyword': {
      color: '#f8c555',   // Colore delle parole chiave
    },
    // Aggiungi ulteriori modifiche per i tipi di token
  };

  return (
    <section className="container-main">
      <CommonSidebarLayout>
        <div className="sidebar">
          <div className="top-sidebar-folder">
            <button className="back-button" onClick={goBack} style={{ marginLeft: '10px' }}>
              <Icon icon={faCaretLeft}/>
            </button>
            <h2>Esplora File</h2>
          </div>
          <ul>
            {directoryContent.map((item) => (
              <li key={item.path}>
                {item.type === 'dir' ? (
                  <button onClick={() => loadDirectory(item.path)}>{item.name}/</button>
                ) : (
                  <button onClick={() => loadFileContent(item.download_url, item.name)}>{item.name}</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </CommonSidebarLayout>
      <CommonSectionLayout>
        <div className="file-content">
          <h2>Contenuto del File: <span style={{ color: "wheat" }}>{fileName}</span></h2>
          {fileContent ? (
            <SyntaxHighlighter
              language={detectLanguage(fileName)}
              style={customStyle}
              customStyle={{
                backgroundColor: 'black',
                borderRadius: '8px',       // Optional: aggiunge bordi arrotondati
                padding: '16px',           // Optional: aggiunge padding interno
              }}
              showLineNumbers
            >
              {fileContent}
            </SyntaxHighlighter>
          ) : (
            <pre className='nothing-on-page'>Seleziona un file per visualizzarlo</pre>
          )}
        </div>
      </CommonSectionLayout>
    </section>
  );
};

export default FileExplorer;
