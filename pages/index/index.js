import { Component } from 'react';
import { connect } from 'dva';
import './index.scss';

@connect(({ common }) => ({ ...common }))
export default class A extends Component {
    state = {};

    componentWillMount() {}

    render() {
        return <div className="page_home">hellow world！！</div>;
    }
}
