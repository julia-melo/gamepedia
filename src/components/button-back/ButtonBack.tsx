import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import ButtonIcon from '../button-icon';

export default function ButtonBack() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return <ButtonIcon onClick={back}>{<MdKeyboardArrowLeft />}</ButtonIcon>;
}
