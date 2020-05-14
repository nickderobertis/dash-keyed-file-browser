# AUTO GENERATED FILE - DO NOT EDIT

dkfbKeyedFileBrowser <- function(files=NULL, id=NULL, actions=NULL, showActionBar=NULL, canFilter=NULL, noFilesMessage=NULL, group=NULL, sort=NULL, icons=NULL, nestChildren=NULL, renderStyle=NULL, startOpen=NULL, headerRenderer=NULL, headerRendererProps=NULL, filterRenderer=NULL, filterRendererProps=NULL, fileRenderer=NULL, fileRendererProps=NULL, folderRenderer=NULL, folderRendererProps=NULL, detailRenderer=NULL, detailRendererProps=NULL, actionRenderer=NULL, confirmDeletionRenderer=NULL, confirmMultipleDeletionRenderer=NULL, onCreateFiles=NULL, onCreateFolder=NULL, onMoveFile=NULL, onMoveFolder=NULL, onRenameFile=NULL, onRenameFolder=NULL, onDeleteFile=NULL, onDeleteFolder=NULL, onDownloadFile=NULL, onSelect=NULL, onSelectFile=NULL, onSelectFolder=NULL, onPreviewOpen=NULL, onPreviewClose=NULL, onFolderOpen=NULL, onFolderClose=NULL) {
    
    props <- list(files=files, id=id, actions=actions, showActionBar=showActionBar, canFilter=canFilter, noFilesMessage=noFilesMessage, group=group, sort=sort, icons=icons, nestChildren=nestChildren, renderStyle=renderStyle, startOpen=startOpen, headerRenderer=headerRenderer, headerRendererProps=headerRendererProps, filterRenderer=filterRenderer, filterRendererProps=filterRendererProps, fileRenderer=fileRenderer, fileRendererProps=fileRendererProps, folderRenderer=folderRenderer, folderRendererProps=folderRendererProps, detailRenderer=detailRenderer, detailRendererProps=detailRendererProps, actionRenderer=actionRenderer, confirmDeletionRenderer=confirmDeletionRenderer, confirmMultipleDeletionRenderer=confirmMultipleDeletionRenderer, onCreateFiles=onCreateFiles, onCreateFolder=onCreateFolder, onMoveFile=onMoveFile, onMoveFolder=onMoveFolder, onRenameFile=onRenameFile, onRenameFolder=onRenameFolder, onDeleteFile=onDeleteFile, onDeleteFolder=onDeleteFolder, onDownloadFile=onDownloadFile, onSelect=onSelect, onSelectFile=onSelectFile, onSelectFolder=onSelectFolder, onPreviewOpen=onPreviewOpen, onPreviewClose=onPreviewClose, onFolderOpen=onFolderOpen, onFolderClose=onFolderClose)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_keyed_file_browser',
        propNames = c('files', 'id', 'actions', 'showActionBar', 'canFilter', 'noFilesMessage', 'group', 'sort', 'icons', 'nestChildren', 'renderStyle', 'startOpen', 'headerRenderer', 'headerRendererProps', 'filterRenderer', 'filterRendererProps', 'fileRenderer', 'fileRendererProps', 'folderRenderer', 'folderRendererProps', 'detailRenderer', 'detailRendererProps', 'actionRenderer', 'confirmDeletionRenderer', 'confirmMultipleDeletionRenderer', 'onCreateFiles', 'onCreateFolder', 'onMoveFile', 'onMoveFolder', 'onRenameFile', 'onRenameFolder', 'onDeleteFile', 'onDeleteFolder', 'onDownloadFile', 'onSelect', 'onSelectFile', 'onSelectFolder', 'onPreviewOpen', 'onPreviewClose', 'onFolderOpen', 'onFolderClose'),
        package = 'dashKeyedFileBrowser'
        )

    structure(component, class = c('dash_component', 'list'))
}
