const { default: styled } = require('@emotion/styled');

export const ListActors = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ItemActor = styled.li`
  width: 185px;
`;
