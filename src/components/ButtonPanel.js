/* eslint-disable no-unused-vars */
import Button from './Button';

/* eslint-enable no-unused-vars */
function ButtonPanel() {
  return (
    <div class = "calc">
      <div className = "btn-show">
      < Button name = 'AC'/>
      < Button name = '+/-'/>
      < Button name = '%'/>
      < Button name = '÷'/>
      </div>

    <div className = "btn-show">
      < Button name = '7'/>
      < Button name = '8'/>
      < Button name = '9'/>
      < Button name = 'X'/>
    </div>
    <div className = "btn-show">
      < Button name = '4'/>
      < Button name = '5'/>
      < Button name = '6'/>
      < Button name = '-'/>
    </div>
    <div className = "btn-show">
      < Button name = '1'/>
      < Button name = '2'/>
      < Button name = '3'/>
      < Button name = '+'/>
    </div>
    <div className = "btn-show">
      < Button name = '0'/>
      < Button name = '.'/>
      < Button name = '='/>
      < Button name = ''/>
    </div>
    </div>
  );
}

export default ButtonPanel;
