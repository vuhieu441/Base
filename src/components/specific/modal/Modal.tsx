import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectModalComponent, selectModalShow } from 'src/feature/modal/ModalSlice';
import CreatePG from 'src/pages/admin/pg/component/CreatePG/CreatePg';

import './Styled.scss';

const Modal = () => {
  const open = useSelector(selectModalShow);
  const component = useSelector(selectModalComponent);

  useEffect(() => {
    if (open === true) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflowY = '';
    }
  }, [open]);

  const modalComponent: any = {
    ADD_PG: <CreatePG />,
    // MODAL: < />
  };

  return open && <div className='modal__container'>{modalComponent[component]}</div>;
};

export default Modal;
