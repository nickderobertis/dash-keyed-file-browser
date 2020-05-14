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
        // this.props.setProps({});
    }

    render() {
        const {id} = this.props;

        return (
            <div id={id}>
                <p>Component works</p>
                <FileBrowser
                    onChange={this.handleChange}
                    {...omit(['setProps'], this.props)}
                />
            </div>
        );
        // return (
        //     <div id={id}>
        //         <div
        //             onChange={this.handleChange}
        //             {...omit(['setProps'], this.props)}
        //         />
        //         <p>Component works</p>
        //     </div>
        // );
    }
}

KeyedFileBrowser.defaultProps = FileBrowser.defaultProps;

/**
 * Was not working until I copied the propTypes rather than referenced them
 */
KeyedFileBrowser.propTypes = {
    files: PropTypes.array.isRequired,
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change.
     */
    setProps: PropTypes.func,

    actions: PropTypes.node,
    showActionBar: PropTypes.bool,
    canFilter: PropTypes.bool,
    noFilesMessage: PropTypes.string,

    group: PropTypes.func,
    sort: PropTypes.func,

    icons: PropTypes.shape({
        Folder: PropTypes.element,
        FolderOpen: PropTypes.element,
        File: PropTypes.element,
        PDF: PropTypes.element,
        Image: PropTypes.element,
        Delete: PropTypes.element,
        Rename: PropTypes.element,
        Loading: PropTypes.element,
        Download: PropTypes.element,
    }),

    nestChildren: PropTypes.bool,
    renderStyle: PropTypes.oneOf(['list', 'table']),

    startOpen: PropTypes.bool,

    headerRenderer: PropTypes.func,
    headerRendererProps: PropTypes.object,
    filterRenderer: PropTypes.func,
    filterRendererProps: PropTypes.object,
    fileRenderer: PropTypes.func,
    fileRendererProps: PropTypes.object,
    folderRenderer: PropTypes.func,
    folderRendererProps: PropTypes.object,
    detailRenderer: PropTypes.func,
    detailRendererProps: PropTypes.object,
    actionRenderer: PropTypes.func,
    confirmDeletionRenderer: PropTypes.func,
    confirmMultipleDeletionRenderer: PropTypes.func,

    onCreateFiles: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onCreateFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onMoveFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onMoveFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onRenameFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onRenameFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onDeleteFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onDeleteFolder: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    onDownloadFile: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),

    onSelect: PropTypes.func,
    onSelectFile: PropTypes.func,
    onSelectFolder: PropTypes.func,

    onPreviewOpen: PropTypes.func,
    onPreviewClose: PropTypes.func,

    onFolderOpen: PropTypes.func,
    onFolderClose: PropTypes.func,
};
