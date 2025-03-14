import { FaExclamationTriangle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const toastWarning = (message) => {
  toast.warn(
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaExclamationTriangle size={20} />
      <span>{message}</span>
    </div>,
    {
      style: { background: '#FFC107', color: 'black' },
    }
  );
};

export default toastWarning