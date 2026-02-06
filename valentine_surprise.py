from flask import Flask, render_template, request, redirect
import os

app = Flask(__name__)

PASSWORD = "021825"

@app.route("/", methods=["GET","POST"])
def login():
    if request.method == "POST":
        if request.form["password"] == PASSWORD:
            return redirect("/slideshow")
    return render_template("login.html")

@app.route("/slideshow")
def slideshow():
    images = sorted(os.listdir("static/images"))

    return render_template("slideshow.html", images=images)

@app.route("/question")
def question():
    return render_template("question.html")
@app.route("/")
def home():
    return render_template("question.html")

if __name__ == "__main__":
    app.run()

app.run(debug=True)
