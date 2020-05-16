# AUTO GENERATED FILE - DO NOT EDIT

dkfbKeyedFileBrowser <- function(files=NULL, id=NULL, actions=NULL, showActionBar=NULL, canFilter=NULL, noFilesMessage=NULL, nestChildren=NULL, renderStyle=NULL, startOpen=NULL, headerRendererProps=NULL, filterRendererProps=NULL, fileRendererProps=NULL, folderRendererProps=NULL, detailRendererProps=NULL, selectedFile=NULL, openFile=NULL) {
    
    props <- list(files=files, id=id, actions=actions, showActionBar=showActionBar, canFilter=canFilter, noFilesMessage=noFilesMessage, nestChildren=nestChildren, renderStyle=renderStyle, startOpen=startOpen, headerRendererProps=headerRendererProps, filterRendererProps=filterRendererProps, fileRendererProps=fileRendererProps, folderRendererProps=folderRendererProps, detailRendererProps=detailRendererProps, selectedFile=selectedFile, openFile=openFile)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_keyed_file_browser',
        propNames = c('files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'nestChildren', 'renderStyle', 'startOpen', 'headerRendererProps', 'filterRendererProps', 'fileRendererProps', 'folderRendererProps', 'detailRendererProps', 'selectedFile', 'openFile'),
        package = 'dashKeyedFileBrowser'
        )

    structure(component, class = c('dash_component', 'list'))
}
