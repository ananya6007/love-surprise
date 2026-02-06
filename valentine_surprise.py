from flask import Flask, render_template, request, redirect, url_for
import os

app = Flask(__name__)

PASSWORD = "021825"

# Login page
@app.route("/", methods=["GET", "POST"])
def login():
    error = None
    if request.method == "POST":
        if request.form.get("password") == PASSWORD:
            return redirect(url_for("slideshow"))
        else:
            error = "Incorrect password. Try again."
    return render_template("login.html", error=error)

# Slideshow page
@app.route("/slideshow")
def slideshow():
    images_folder = os.path.join(app.static_folder, "images")
    images = sorted(os.listdir(images_folder)) if os.path.exists(images_folder) else []
    return render_template("slideshow.html", images=images)

# Question page
@app.route("/question")
def question():
    return render_template("question.html")

# Run the app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
