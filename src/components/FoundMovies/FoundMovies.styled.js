const { default: styled } = require('@emotion/styled');

export const ListMovies = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 30px;
  align-items: center;
  justify-content: center;
`;

export const ItemMovie = styled.li`
width: 300px;
`

export const MovieImg = styled.img`
  display: block;
  width: 300px;
  height: 425px;
`;


