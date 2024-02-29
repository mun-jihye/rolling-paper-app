import style from 'styled-components';
import { theme } from 'components/styles/theme';

const CreateListItem = ({
  selectedItem,
  setSelectedItem,
  handleClickAndBlur,
  Lists,
}) => {
  return (
    <StyledList alt="드롭다운 메뉴바" className="dropdown-list">
      {Lists.map((element, index) => {
        return (
          <StyledListItem
            key={index}
            value={element}
            className="list-item"
            onClick={event => handleClickAndBlur(event, index)}
          >
            <span>{element}</span>
          </StyledListItem>
        );
      })}
    </StyledList>
  );
};

const StyledList = style.div`
  border-radius: 0.8rem;
  border: 1px solid ${theme.gray300};
  box-shadow: 0px 2px 12px 0px #00000014;
  background-color: #fff;

  position: absolute;
  display: flex;
  flex-direction: column;

  width: 31.8rem;
  height: 22rem;
  top: 5.8rem;
  left-right: 0;
  padding: 1rem 0.1rem;
  z-index: 2;

  overflow: scroll;
`;
const StyledListItem = style.button`
  width: 31.6rem;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  gap: 10px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;
  color: ${theme.gray900};
  background-color: #fff;

  &:hover {
    background-color: ${theme.gray100};
  }
`;

export default CreateListItem;
