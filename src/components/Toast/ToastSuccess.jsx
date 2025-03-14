import { toast } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

const toastSuccess = (message) => {
  toast.success(
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <FaCheckCircle size={20} />
      <span>{message}</span>
    </div>,
    {
      style: { background: '#4CAF50', color: 'white' },
    }
  );
};

export default toastSuccess