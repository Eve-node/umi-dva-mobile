import { Component } from 'react';
import { connect } from 'dva';
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
        return <div>{this.props.children}</div>;
    }
}
