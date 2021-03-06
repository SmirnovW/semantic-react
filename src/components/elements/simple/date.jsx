import React from 'react';
import classNames from 'classnames';
import DefaultProps from '../../defaultProps';

export default class Date extends React.PureComponent {
    static propTypes = {
        ...DefaultProps.propTypes
    };

    static defaultProps = {
        ...DefaultProps.defaultProps
    };

    render() {
        const { children, className, component, defaultClasses, ...other } = this.props;
        other.className = classNames(className, { date: true });

        return React.createElement(
            component,
            other,
            children
        );
    }
}
