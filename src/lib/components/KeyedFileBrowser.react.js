import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import FileBrowser from 'react-keyed-file-browser';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class KeyedFileBrowser extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // Bind to Dash event handler that puts event back into props
    handleChange(event) {
        console.log(event);
        // this.props.setProps();
    }

    render() {
        const {id} = this.props;

        return (
            <div id={id}>
                <FileBrowser
                    onChange={this.handleChange}
                    {...omit(['setProps'], this.props)}
                />
            </div>
        );
    }
}

KeyedFileBrowser.defaultProps = FileBrowser.defaultProps;

KeyedFileBrowser.propTypes = FileBrowser.propTypes;
