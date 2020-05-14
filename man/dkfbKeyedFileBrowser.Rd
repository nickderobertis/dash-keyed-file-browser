% Auto-generated: do not edit by hand
\name{dkfbKeyedFileBrowser}

\alias{dkfbKeyedFileBrowser}

\title{KeyedFileBrowser component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
dkfbKeyedFileBrowser(files=NULL, id=NULL, actions=NULL, showActionBar=NULL,
canFilter=NULL, noFilesMessage=NULL, icons=NULL,
nestChildren=NULL, renderStyle=NULL, startOpen=NULL,
headerRendererProps=NULL, filterRendererProps=NULL,
fileRendererProps=NULL, folderRendererProps=NULL,
detailRendererProps=NULL)
}

\arguments{
\item{files}{Unnamed list. }

\item{id}{Character. }

\item{actions}{A list of or a singular dash component, string or number. }

\item{showActionBar}{Logical. }

\item{canFilter}{Logical. }

\item{noFilesMessage}{Character. }

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

\item{headerRendererProps}{Named list. }

\item{filterRendererProps}{Named list. }

\item{fileRendererProps}{Named list. }

\item{folderRendererProps}{Named list. }

\item{detailRendererProps}{Named list. }
}

\value{named list of JSON elements corresponding to React.js properties and their values}

