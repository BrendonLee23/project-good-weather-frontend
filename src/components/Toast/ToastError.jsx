import toast from 'react-hot-toast';
import { FaTimesCircle } from 'react-icons/fa';

const toastError = (message) => {
  toast.error(
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaTimesCircle size={20} />
      <span>{message}</span>
    </div>,
    {
      style: { background: '#F44336', color: 'white' },
    }
  );
};

export default toastError;