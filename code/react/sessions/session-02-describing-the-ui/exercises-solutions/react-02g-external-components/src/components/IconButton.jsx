import { MdArrowForward } from 'react-icons/md';

export default function IconButton({ children }) {
  return (
    <button>
      {children} <MdArrowForward />
    </button>
  );
}
