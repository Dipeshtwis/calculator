/* eslint-disable no-unused-vars */
import Button from './Button';

const signCalc = (sign) => < Button name = {sign} />;

const ButtonPanel = () => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'X'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];
  const sign1 = group1.map(signCalc);
  const sign2 = group2.map(signCalc);
  const sign3 = group3.map(signCalc);
  const sign4 = group4.map(signCalc);
  const sign5 = group5.map(signCalc);
  return (
    <div className = "calc">
       <div className = "btn-show">
          {sign1}
       </div>

       <div className = "btn-show">
          {sign2}
       </div>

       <div className = "btn-show">
          {sign3}
       </div>

       <div className = "btn-show">
          {sign4}
       </div>

       <div className = "btn-show">
          {sign5}
       </div>
      </div>
  );
};
/* eslint-enable no-unused-vars */
export default ButtonPanel;
