import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';
import FileBrowser, {
    Headers,
    FileRenderers,
    FolderRenderers,
    Details,
    Filters,
    Groupers,
    Sorters,
    DefaultAction,
    DefaultConfirmDeletion,
    MultipleConfirmDeletion,
} from 'react-keyed-file-browser';

const defaultFuncProps = {
    headerRenderer: Headers.TableHeader,
    filterRenderer: Filters.DefaultFilter,
    fileRenderer: FileRenderers.TableFile,
    folderRenderer: FolderRenderers.TableFolder,
    detailRenderer: Details.DefaultDetail,
    actionRenderer: DefaultAction,
    confirmDeletionRenderer: DefaultConfirmDeletion,
    confirmMultipleDeletionRenderer: MultipleConfirmDeletion,
    group: Groupers.GroupByFolder,
    sort: Sorters.SortByName,

    onSelect: (fileOrFolder) => {}, // Always called when a file or folder is selected
    onSelectFile: (file) => {}, //    Called after onSelect, only on file selection
    onSelectFolder: (folder) => {}, //    Called after onSelect, only on folder selection

    onPreviewOpen: (file) => {}, // File opened
    onPreviewClose: (file) => {}, // File closed

    onFolderOpen: (folder) => {}, // Folder opened
    onFolderClose: (folder) => {}, // Folder closed

    onCreateFiles: false,
    onCreateFolder: false,
    onMoveFile: false,
    onMoveFolder: false,
    onRenameFile: false,
    onRenameFolder: false,
    onDeleteFile: false,
    onDeleteFolder: false,
    onDownloadFile: false,
};

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
                <p>{JSON.stringify(this.props)}</p>
                <FileBrowser
                    onChange={this.handleChange}
                    {...defaultFuncProps}
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
        //         <p>{JSON.stringify(this.props)}</p>
        //     </div>
        // );
    }
}

KeyedFileBrowser.defaultProps = {
    showActionBar: true,
    canFilter: true,
    noFilesMessage: 'No files.',

    nestChildren: false,
    renderStyle: 'table',

    startOpen: false,

    headerRendererProps: {},
    filterRendererProps: {},
    fileRendererProps: {},
    folderRendererProps: {},
    detailRendererProps: {},

    icons: {},
};

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

    headerRendererProps: PropTypes.object,
    filterRendererProps: PropTypes.object,
    fileRendererProps: PropTypes.object,
    folderRendererProps: PropTypes.object,
    detailRendererProps: PropTypes.object,
};
