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
- nestChildren (boolean; default False)
- renderStyle (a value equal to: 'list', 'table'; default 'table')
- startOpen (boolean; default False)
- headerRendererProps (dict; optional)
- filterRendererProps (dict; optional)
- fileRendererProps (dict; optional)
- folderRendererProps (dict; optional)
- detailRendererProps (dict; optional)
- selectedFile (dict; optional): selectedFile has the following type: dict containing keys 'key', 'size'.
Those keys have the following types:
  - key (string; optional)
  - size (number; optional)
- openFile (dict; optional): openFile has the following type: dict containing keys 'key', 'size'.
Those keys have the following types:
  - key (string; optional)
  - size (number; optional)"""
    @_explicitize_args
    def __init__(self, files=Component.REQUIRED, id=Component.UNDEFINED, actions=Component.UNDEFINED, showActionBar=Component.UNDEFINED, canFilter=Component.UNDEFINED, noFilesMessage=Component.UNDEFINED, nestChildren=Component.UNDEFINED, renderStyle=Component.UNDEFINED, startOpen=Component.UNDEFINED, headerRendererProps=Component.UNDEFINED, filterRendererProps=Component.UNDEFINED, fileRendererProps=Component.UNDEFINED, folderRendererProps=Component.UNDEFINED, detailRendererProps=Component.UNDEFINED, selectedFile=Component.UNDEFINED, openFile=Component.UNDEFINED, **kwargs):
        self._prop_names = ['files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'nestChildren', 'renderStyle', 'startOpen', 'headerRendererProps', 'filterRendererProps', 'fileRendererProps', 'folderRendererProps', 'detailRendererProps', 'selectedFile', 'openFile']
        self._type = 'KeyedFileBrowser'
        self._namespace = 'dash_keyed_file_browser'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'nestChildren', 'renderStyle', 'startOpen', 'headerRendererProps', 'filterRendererProps', 'fileRendererProps', 'folderRendererProps', 'detailRendererProps', 'selectedFile', 'openFile']
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
