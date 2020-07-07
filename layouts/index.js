import { Component } from 'react';
import { connect } from 'dva';
import View from '@/components/View/index';

@connect(({ common }) => ({ ...common }))
export default class Layout extends Component {
    componentWillMount() {}

    render() {
        (function() {
            function pxTorem() {
                var base = 50; //rem
                var wid = window.innerWidth || document.body.clientWidth;
                var size = wid / (750 / base);
                document.querySelector('html').style.fontSize = `${size}px`;
            }
            pxTorem();
            window.addEventListener('resize', function() {
                pxTorem();
            });
        })();
        return <View>{this.props.children}</View>;
    }
}
