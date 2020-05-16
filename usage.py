import dash_keyed_file_browser
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

NUM_UPDATES = 0

app = dash.Dash(__name__, show_undo_redo=True,)

EXAMPLE_FILES = [
    {"key": "photos/animals/cat in a hat.png", "size": 1.5 * 1024 * 1024,},
    {"key": "photos/animals/kitten_ball.png", "size": 545 * 1024,},
    {"key": "photos/animals/elephants.png", "size": 52 * 1024,},
    {"key": "photos/funny fall.gif", "size": 13.2 * 1024 * 1024,},
    {"key": "photos/holiday.jpg", "size": 85 * 1024,},
    {"key": "documents/letter chunks.doc", "size": 480 * 1024,},
    {"key": "documents/export.pdf", "size": 4.2 * 1024 * 1024,},
]

app.layout = html.Div(
    [
        dash_keyed_file_browser.KeyedFileBrowser(EXAMPLE_FILES, id="kfb",),
        html.H1("All Files"),
        html.Div(id="files-output"),
        html.H1("Selected File"),
        html.Div(id="select-output"),
        html.H1("Open File"),
        html.Div(id="open-output"),
    ]
)


@app.callback(Output("files-output", "children"), [Input("kfb", "files")])
def display_output(value):
    global NUM_UPDATES
    NUM_UPDATES += 1
    return f"Updated {NUM_UPDATES} times. Files are {value}"


@app.callback(Output("select-output", "children"), [Input("kfb", "selectedFile")])
def display_selected(value):
    return str(value)


@app.callback(Output("open-output", "children"), [Input("kfb", "openFile")])
def display_open(value):
    return str(value)


if __name__ == "__main__":
    app.run_server(debug=True)
