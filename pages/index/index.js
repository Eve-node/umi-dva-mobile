import { Component } from 'react';
import { connect } from 'dva';
import './index.scss';
// 组件，小程序的姿势来写页面，后期可迁移
import View from '@/components/View/index';

@connect(({ common }) => ({ ...common }))
export default class A extends Component {
    state = {};

    componentWillMount() {}

    render() {
        return <View className="page_home">hellow world！！</View>;
    }
}
