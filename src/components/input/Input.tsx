import * as React from 'react';
import './Input.scss';

interface InputText {
  index: number;
  value: string;
  inputType: string;
  labelText: string;
  isRequired?: boolean;
  handleOnChange: Function;
}
class Input extends React.Component<InputText, any> {

  state = {
    inputValue: ''
  }

  onChange = (e: any) => {
    this.setState({ inputValue: e.target.value });
    const { index } = this.props;
    this.props.handleOnChange(e.target.value, index);
  }

  render() {
    const { labelText, inputType, isRequired, value } = this.props;
    return (
      <div className="form__group field">
        <input
          className="form__field"
          placeholder={labelText}
          type={inputType}
          value={value}
          onChange={this.onChange}
          required={isRequired}
        />
        <label className="form__label">{labelText}</label>
      </div>
    );
  }
}

export default Input;
