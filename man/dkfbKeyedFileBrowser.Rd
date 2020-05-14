% Auto-generated: do not edit by hand
\name{dkfbKeyedFileBrowser}

\alias{dkfbKeyedFileBrowser}

\title{KeyedFileBrowser component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dkfbKeyedFileBrowser(files=NULL, id=NULL, actions=NULL, showActionBar=NULL,
canFilter=NULL, noFilesMessage=NULL, group=NULL, sort=NULL,
icons=NULL, nestChildren=NULL, renderStyle=NULL,
startOpen=NULL, headerRenderer=NULL,
headerRendererProps=NULL, filterRenderer=NULL,
filterRendererProps=NULL, fileRenderer=NULL,
fileRendererProps=NULL, folderRenderer=NULL,
folderRendererProps=NULL, detailRenderer=NULL,
detailRendererProps=NULL, actionRenderer=NULL,
confirmDeletionRenderer=NULL,
confirmMultipleDeletionRenderer=NULL, onCreateFiles=NULL,
onCreateFolder=NULL, onMoveFile=NULL, onMoveFolder=NULL,
onRenameFile=NULL, onRenameFolder=NULL, onDeleteFile=NULL,
onDeleteFolder=NULL, onDownloadFile=NULL, onSelect=NULL,
onSelectFile=NULL, onSelectFolder=NULL, onPreviewOpen=NULL,
onPreviewClose=NULL, onFolderOpen=NULL, onFolderClose=NULL)
}

\arguments{
\item{files}{Unnamed list. }

\item{id}{Character. }

\item{actions}{A list of or a singular dash component, string or number. }

\item{showActionBar}{Logical. }

\item{canFilter}{Logical. }

\item{noFilesMessage}{Character. }

\item{group}{}

\item{sort}{}

\item{icons}{Lists containing elements 'folder', 'folderopen', 'file', 'pdf', 'image', 'delete', 'rename', 'loading', 'download'.
those elements have the following types:
  - folder (dash component; optional)
  - folderopen (dash component; optional)
  - file (dash component; optional)
  - pdf (dash component; optional)
  - image (dash component; optional)
  - delete (dash component; optional)
  - rename (dash component; optional)
  - loading (dash component; optional)
  - download (dash component; optional). }

\item{nestChildren}{Logical. }

\item{renderStyle}{A value equal to: 'list', 'table'. }

\item{startOpen}{Logical. }

\item{headerRenderer}{}

\item{headerRendererProps}{Named list. }

\item{filterRenderer}{}

\item{filterRendererProps}{Named list. }

\item{fileRenderer}{}

\item{fileRendererProps}{Named list. }

\item{folderRenderer}{}

\item{folderRendererProps}{Named list. }

\item{detailRenderer}{}

\item{detailRendererProps}{Named list. }

\item{actionRenderer}{}

\item{confirmDeletionRenderer}{}

\item{confirmMultipleDeletionRenderer}{}

\item{onCreateFiles}{Logical. }

\item{onCreateFolder}{Logical. }

\item{onMoveFile}{Logical. }

\item{onMoveFolder}{Logical. }

\item{onRenameFile}{Logical. }

\item{onRenameFolder}{Logical. }

\item{onDeleteFile}{Logical. }

\item{onDeleteFolder}{Logical. }

\item{onDownloadFile}{Logical. }

\item{onSelect}{}

\item{onSelectFile}{}

\item{onSelectFolder}{}

\item{onPreviewOpen}{}

\item{onPreviewClose}{}

\item{onFolderOpen}{}

\item{onFolderClose}{}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

