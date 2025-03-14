import SyncLoader from 'react-spinners/SyncLoader';

const LoadingSearch = () => {
  const loaderProps = {
    size: 15, // Tamanho do loader
    margin: 2, // Margem entre os pontos
    color: "#cccccc", // Cor cinza claro em formato hexadecimal
    loading: true, // Controla se o loader está ativo
    cssOverride: {}, // Sobrescreve estilos padrão (opcional)
    speedMultiplier: 1, // Velocidade média (1 é o padrão)
  };

  return (
    <div>
      <SyncLoader {...loaderProps} />
    </div>
  );
};

export default LoadingSearch;