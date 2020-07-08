
import * as React from 'react';
import *as actions from './redux/actions';
import * as actionsStudent from '../addStudents/redux/actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Link from '../../components/link/Link';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import './showStudent.scss';



class ShowStudents extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            redirect: false,
            id: ''
        }
    }
    componentWillMount() {
        this.props.dispatch(actions.fetch());
    }

    componentDidUpdate(props: any) {
        const { success } = props;
        if (success) {
            this.props.dispatch(actions.fetch());
        }
    }


    delete(index: number) {
        this.props.dispatch(actionsStudent.remove(index));
    }

    onDetails(id: number) {
        this.setState({
            redirect: true,
            url: `/details/${id}`
        })
    }
    render() {
        const { redirect, url } = this.state;
        if (redirect) {
            return <Redirect to={url} />
        }


        const { list } = this.props;
        return (
            <Card title='Students'>
                <table className="table-container">
                    <thead>
                        <tr className='head'>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Street Number</th>
                            <th scope="col">City</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">GPA</th>
                            <th scope="col">Delete</th>
                            <th scope="col">More</th>
                        </tr>
                    </thead>
                    {list &&
                        <tbody>
                            {list.map((item: any, index: number) => {
                                return <tr key={index} className={[
                                    'body',
                                    index % 2 == 1 ? 'color' : '',
                                ].join(' ')} >
                                    {
                                        item.map((student: any, j: number) => {
                                            return <td key={j}>{student.value}</td>
                                        })
                                    }
                                    <td>
                                        <Button type='button' onClick={() => this.delete(index)} color='danger' size='btn-sm' >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button type='button' onClick={() => this.onDetails(index)} color='success' size='btn-sm' >
                                        <i className="fas fa-info"></i>
                                        </Button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    }
                </table>
                <div className='link'>
                    <Link to='/home' title='Add Student' />
                </div>
            </Card>
        );
    }
}

const mapStateToProps = (store: any) => {
    const { list, add } = store;
    return {
        list: list.response ? list.response : null,
        success: add.success
    }
}

export default connect(mapStateToProps)(ShowStudents)