import { useState, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import check from 'assets/images/buttons/check.svg';

const Options = ({
  theme,
  toggleState,
  background,
  setBackground,
  handleSelect,
  items,
  ...props
}) => {
  const [isSelected, setIsSelected] = useState([true, false, false, false]);
  const isColor = toggleState === '컬러';

  const handleContainerSelect = index => {
    const newSelected = new Array(4).fill(false);
    newSelected[index] = true;
    setIsSelected(newSelected);
    setBackground(items[index]);
    handleSelect(background, index);
  };

  useEffect(() => {
    setBackground(items[0]);
    setIsSelected([true, false, false, false]);
  }, [setBackground, items, toggleState]);

  return (
    <PreviewBlocks {...props}>
      {items.map((item, index) => (
        <div
          className="container"
          key={index}
          style={
            isColor
              ? { backgroundColor: theme[item] }
              : { backgroundImage: `url(${item})` }
          }
          onClick={() => handleContainerSelect(index)}
        >
          {isSelected[index] && (
            <div className="checkbox">
              <img src={check} alt="check" />
            </div>
          )}
        </div>
      ))}
    </PreviewBlocks>
  );
};

const PreviewBlocks = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  .container {
    width: 16.8rem;
    height: 16.8rem;
    border-radius: 1.6rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkbox {
    width: 4.4rem;
    height: 4.4rem;
    padding: 1rem;
    border-radius: 10rem;
    gap: 1rem;

    background-color: ${({ theme }) => theme.gray500};
    img {
      width: 2.4rem;
      height: 2.4rem;
      aspect-ratio: 1 / 1;
    }
  }
`;

export default withTheme(Options);
