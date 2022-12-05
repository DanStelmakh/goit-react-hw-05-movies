import { ButtonGoBack, Svg } from './GoBack.styled';

export const GoBackButton = ({ onClick }) => {
  return (
    <>
      <ButtonGoBack type="buton" onClick={onClick}>
        <Svg />
        Go back
      </ButtonGoBack>
    </>
  );
};
