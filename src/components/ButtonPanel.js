/* eslint-disable no-unused-vars */
import Button from './Button';

const mapBtnsToPanel = (arr, clickHandler) => {
  const res = arr.map(
    curr => {
      let color;
      const signs = ['AC', '÷', 'x', '-', '=', '+'];
      if (signs.includes(curr)) {
        color = 'orange';
      } else {
        color = 'grey';
      }
      return (<Button color={color} name={curr} clickHandler={() => clickHandler(curr)} />);
    },
  );
  return res;
};
const displayAllBtns = (rowsArr) => rowsArr.map((row, index) => (
  <div className={`row${index}`}>{ row }</div>
));
const ButtonPanel = ({ clickHandler }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  const signArr = [
    mapBtnsToPanel(group1, clickHandler),
    mapBtnsToPanel(group2, clickHandler),
    mapBtnsToPanel(group3, clickHandler),
    mapBtnsToPanel(group4, clickHandler),
    mapBtnsToPanel(group5, clickHandler),
  ];
  return (
    <div className = "calc">
       {displayAllBtns(signArr)}
      </div>
  );
};
/* eslint-enable no-unused-vars */
export default ButtonPanel;
