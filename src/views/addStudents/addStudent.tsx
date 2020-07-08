import * as React from 'react';
import * as actions from './redux/actions';
import { connect } from 'react-redux';
import Input from '../../components/input/Input';
import { inputFixtures } from './addStudent.fixtures';
import Link from '../../components/link/Link';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import './addStudent.scss';

class AddStudent extends React.Component<any, any> {
  state = {
    inputs: [...inputFixtures],
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const { inputs } = this.state;
    this.props.dispatch(actions.fetch(inputs));
    const newInputs: any = [];
    inputs.forEach((element: any) => {
      element.value = '';
      newInputs.push(element);
    });
    this.setState({
      inputs: [...newInputs],
    });
  };
  onChange = (e: any, index: number) => {
    let data = this.state.inputs;
    data[index].value = e;
    this.setState({
      inputs: [...data],
    });
  };

  render() {
    const { inputs } = this.state;
    return (
      <Card title="Add Student">
        <form onSubmit={this.onSubmit}>
          {inputs.map((item: any, index: number) => {
            return (
              <Input
                handleOnChange={this.onChange}
                index={index}
                key={index}
                value={item.value}
                inputType={item.inputType}
                labelText={item.labelText}
                isRequired={item.isRequired}
              />
            );
          })}
          <div className="buttons">
            <div className="save">
              <Button type="submit">Save</Button>
            </div>
            <div className="link">
              <Link to="/students" title="Show students" />
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

const mapStateToProps = (store: any) => {
  const { add } = store;
  return {
    add,
  };
};

export default connect(mapStateToProps)(AddStudent);
