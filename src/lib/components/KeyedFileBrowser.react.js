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
    Icons,
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
    onSelectFolder: (folder) => {}, //    Called after onSelect, only on folder selection

    onFolderOpen: (folder) => {}, // Folder opened
    onFolderClose: (folder) => {}, // Folder closed

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
    state = {
        files: this.props.files,
    };

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            files: nextProps.files,
        };
    }

    setFiles(files) {
        this.props.setProps({files: files});
    }

    handleCreateFolder = (key) => {
        this.setState((state) => {
            const newFiles = state.files.concat([
                {
                    key: key,
                },
            ]);
            state.files = newFiles;
            this.setFiles(newFiles);
            return state;
        });
    };

    handleCreateFiles = (files, prefix) => {
        this.setState((state) => {
            const newFiles = files.map((file) => {
                let newKey = prefix;
                if (
                    prefix !== '' &&
                    prefix.substring(prefix.length - 1, prefix.length) !== '/'
                ) {
                    newKey += '/';
                }
                newKey += file.name;
                return {
                    key: newKey,
                    size: file.size,
                };
            });

            const uniqueNewFiles = [];
            newFiles.map((newFile) => {
                let exists = false;
                state.files.map((existingFile) => {
                    if (existingFile.key === newFile.key) {
                        exists = true;
                    }
                });
                if (!exists) {
                    uniqueNewFiles.push(newFile);
                }
            });
            const replaceFiles = state.files.concat(uniqueNewFiles);
            state.files = replaceFiles;
            this.setFiles(replaceFiles);
            return state;
        });
    };

    handleRenameFolder = (oldKey, newKey) => {
        this.setState((state) => {
            const newFiles = [];
            state.files.map((file) => {
                if (file.key.substr(0, oldKey.length) === oldKey) {
                    newFiles.push({
                        ...file,
                        key: file.key.replace(oldKey, newKey),
                    });
                } else {
                    newFiles.push(file);
                }
            });
            state.files = newFiles;
            this.setFiles(newFiles);
            return state;
        });
    };

    handleRenameFile = (oldKey, newKey) => {
        this.setState((state) => {
            const newFiles = [];
            state.files.map((file) => {
                if (file.key === oldKey) {
                    newFiles.push({
                        ...file,
                        key: newKey,
                    });
                } else {
                    newFiles.push(file);
                }
            });
            state.files = newFiles;
            this.setFiles(newFiles);
            return state;
        });
    };

    handleDeleteFolder = (folderKey) => {
        this.setState((state) => {
            const newFiles = [];
            state.files.map((file) => {
                if (file.key.substr(0, folderKey.length) !== folderKey) {
                    newFiles.push(file);
                }
            });
            state.files = newFiles;
            this.setFiles(newFiles);
            return state;
        });
    };

    handleDeleteFile = (fileKey) => {
        this.setState((state) => {
            const newFiles = [];
            state.files.map((file) => {
                if (file.key !== fileKey) {
                    newFiles.push(file);
                }
            });
            state.files = newFiles;
            this.setFiles(newFiles);
            return state;
        });
    };

    handleSelectFile = (file) => {
        this.props.setProps({selectedFile: file});
    };

    handlePreviewOpen = (file) => {
        this.props.setProps({openFile: file});
    };

    handlePreviewClose = (file) => {
        this.props.setProps({openFile: {}});
    };

    render() {
        const {id} = this.props;

        return (
            <div id={id}>
                <FileBrowser
                    files={this.state.files}
                    icons={Icons.FontAwesome(4)}
                    {...defaultFuncProps}
                    {...omit(['setProps', 'files'], this.props)}
                    onCreateFolder={this.handleCreateFolder}
                    onCreateFiles={this.handleCreateFiles}
                    onMoveFolder={this.handleRenameFolder}
                    onMoveFile={this.handleRenameFile}
                    onRenameFolder={this.handleRenameFolder}
                    onRenameFile={this.handleRenameFile}
                    onDeleteFolder={this.handleDeleteFolder}
                    onDeleteFile={this.handleDeleteFile}
                    onSelectFile={this.handleSelectFile}
                    onPreviewOpen={this.handlePreviewOpen}
                    onPreviewClose={this.handlePreviewClose}
                />
            </div>
        );
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

    selectedFile: {},
    openFile: {},
};

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

    nestChildren: PropTypes.bool,
    renderStyle: PropTypes.oneOf(['list', 'table']),

    startOpen: PropTypes.bool,

    headerRendererProps: PropTypes.object,
    filterRendererProps: PropTypes.object,
    fileRendererProps: PropTypes.object,
    folderRendererProps: PropTypes.object,
    detailRendererProps: PropTypes.object,

    selectedFile: PropTypes.shape({
        key: PropTypes.string,
        size: PropTypes.number,
    }),
    openFile: PropTypes.shape({key: PropTypes.string, size: PropTypes.number}),
};
