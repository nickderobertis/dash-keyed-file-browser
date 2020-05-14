# AUTO GENERATED FILE - DO NOT EDIT

dkfbKeyedFileBrowser <- function(id=NULL, label=NULL, value=NULL) {
    
    props <- list(id=id, label=label, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'KeyedFileBrowser',
        namespace = 'dash_keyed_file_browser',
        propNames = c('id', 'label', 'value'),
        package = 'dashKeyedFileBrowser'
        )

    structure(component, class = c('dash_component', 'list'))
}
