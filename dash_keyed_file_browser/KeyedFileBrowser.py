# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class KeyedFileBrowser(Component):
    """A KeyedFileBrowser component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- files (list; required)
- id (string; optional)
- actions (a list of or a singular dash component, string or number; optional)
- showActionBar (boolean; default True)
- canFilter (boolean; default True)
- noFilesMessage (string; default 'No files.')
- icons (dict; optional): icons has the following type: dict containing keys 'Folder', 'FolderOpen', 'File', 'PDF', 'Image', 'Delete', 'Rename', 'Loading', 'Download'.
Those keys have the following types:
  - Folder (dash component; optional)
  - FolderOpen (dash component; optional)
  - File (dash component; optional)
  - PDF (dash component; optional)
  - Image (dash component; optional)
  - Delete (dash component; optional)
  - Rename (dash component; optional)
  - Loading (dash component; optional)
  - Download (dash component; optional)
- nestChildren (boolean; default False)
- renderStyle (a value equal to: 'list', 'table'; default 'table')
- startOpen (boolean; default False)
- headerRendererProps (dict; optional)
- filterRendererProps (dict; optional)
- fileRendererProps (dict; optional)
- folderRendererProps (dict; optional)
- detailRendererProps (dict; optional)
- onCreateFiles (boolean; optional)
- onCreateFolder (boolean; optional)
- onMoveFile (boolean; optional)
- onMoveFolder (boolean; optional)
- onRenameFile (boolean; optional)
- onRenameFolder (boolean; optional)
- onDeleteFile (boolean; optional)
- onDeleteFolder (boolean; optional)
- onDownloadFile (boolean; optional)"""
    @_explicitize_args
    def __init__(self, files=Component.REQUIRED, id=Component.UNDEFINED, actions=Component.UNDEFINED, showActionBar=Component.UNDEFINED, canFilter=Component.UNDEFINED, noFilesMessage=Component.UNDEFINED, group=Component.UNDEFINED, sort=Component.UNDEFINED, icons=Component.UNDEFINED, nestChildren=Component.UNDEFINED, renderStyle=Component.UNDEFINED, startOpen=Component.UNDEFINED, headerRenderer=Component.UNDEFINED, headerRendererProps=Component.UNDEFINED, filterRenderer=Component.UNDEFINED, filterRendererProps=Component.UNDEFINED, fileRenderer=Component.UNDEFINED, fileRendererProps=Component.UNDEFINED, folderRenderer=Component.UNDEFINED, folderRendererProps=Component.UNDEFINED, detailRenderer=Component.UNDEFINED, detailRendererProps=Component.UNDEFINED, actionRenderer=Component.UNDEFINED, confirmDeletionRenderer=Component.UNDEFINED, confirmMultipleDeletionRenderer=Component.UNDEFINED, onCreateFiles=Component.UNDEFINED, onCreateFolder=Component.UNDEFINED, onMoveFile=Component.UNDEFINED, onMoveFolder=Component.UNDEFINED, onRenameFile=Component.UNDEFINED, onRenameFolder=Component.UNDEFINED, onDeleteFile=Component.UNDEFINED, onDeleteFolder=Component.UNDEFINED, onDownloadFile=Component.UNDEFINED, onSelect=Component.UNDEFINED, onSelectFile=Component.UNDEFINED, onSelectFolder=Component.UNDEFINED, onPreviewOpen=Component.UNDEFINED, onPreviewClose=Component.UNDEFINED, onFolderOpen=Component.UNDEFINED, onFolderClose=Component.UNDEFINED, **kwargs):
        self._prop_names = ['files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'icons', 'nestChildren', 'renderStyle', 'startOpen', 'headerRendererProps', 'filterRendererProps', 'fileRendererProps', 'folderRendererProps', 'detailRendererProps', 'onCreateFiles', 'onCreateFolder', 'onMoveFile', 'onMoveFolder', 'onRenameFile', 'onRenameFolder', 'onDeleteFile', 'onDeleteFolder', 'onDownloadFile']
        self._type = 'KeyedFileBrowser'
        self._namespace = 'dash_keyed_file_browser'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'icons', 'nestChildren', 'renderStyle', 'startOpen', 'headerRendererProps', 'filterRendererProps', 'fileRendererProps', 'folderRendererProps', 'detailRendererProps', 'onCreateFiles', 'onCreateFolder', 'onMoveFile', 'onMoveFolder', 'onRenameFile', 'onRenameFolder', 'onDeleteFile', 'onDeleteFolder', 'onDownloadFile']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['files']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(KeyedFileBrowser, self).__init__(**args)
