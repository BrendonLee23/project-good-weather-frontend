import SyncLoader from 'react-spinners/SyncLoader';
import PropTypes from 'prop-types'; // Importe o PropTypes

const LoadingSearch = ({ size, color }) => {
  const loaderProps = {
    size: size || 15, // Tamanho do loader, com valor padrão 15 se não for passado
    margin: 2, // Margem entre os pontos
    color: color || "#cccccc", // Cor cinza claro
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

// Validação de props
LoadingSearch.propTypes = {
  size: PropTypes.number, // Tamanho do loader deve ser um número
  color:  PropTypes.string,
};

export default LoadingSearch;
