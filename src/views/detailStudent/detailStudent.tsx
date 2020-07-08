
import * as React from 'react';
import *as actions from './redux/actions';
import { connect } from 'react-redux';
import Detail from '../../components/detail/Detail';
import Card from '../../components/card/Card';
import Link from '../../components/link/Link';


import './detailStudent.scss'


class DetailStudent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    componentWillMount() {
        const { params } = this.props.match;
        this.props.dispatch(actions.fetch(params.id));
    }

    render() {
        const { detail } = this.props;
        return (
            <Card title='Student Detail'>
                <Detail student={detail} />
                <div className='link-container'>
                    <div className='ref'>
                        <Link to='/students' title='Back' />
                    </div >
                    <div className='ref'>
                        <Link to='/home' title='Add Students' />
                    </div>
                </div>
            </Card>
        );
    }
}

const mapStateToProps = (store: any) => {
    const { detail } = store;
    return {
        detail: detail.response ? detail.response : null,
    }
}

export default connect(mapStateToProps)(DetailStudent)