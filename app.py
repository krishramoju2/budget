from flask import Flask, render_template_string, send_from_directory

app = Flask(__name__)

with open("index.html", "r") as f:
    html_content = f.read()

@app.route("/")
def index():
    return render_template_string(html_content)

@app.route("/style.css")
def style():
    return send_from_directory(".", "style.css", mimetype="text/css")

@app.route("/chart.js")
def chartjs():
    return send_from_directory(".", "chart.js", mimetype="application/javascript")

if __name__ == "__main__":
    app.run(debug=True)
