from flask import Flask, render_template, request, session, redirect, url_for, send_from_directory
import os

app = Flask(__name__, template_folder='.')
app.secret_key = os.urandom(24)
users = {
    'user1': 'password1',
    'user2': 'password2'
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Authentication logic goes here
        return redirect(url_for('dashboard'))
    else:
        return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        confirm_password = request.form['confirm_password']
        # Registration logic goes here
        return redirect(url_for('dashboard'))
    else:
        return render_template('register.html')

@app.route('/courses.html')
def courses():
    return render_template('courses.html')

@app.route('/contact.html', methods=['GET'])
def contact():
    return render_template('contact.html')

@app.route('/contact.html', methods=['POST'])
def contact_post():
    # Form submission logic goes here
    return redirect(url_for('courses'))

@app.route('/logout.html')
def logout():
    session.clear()
    return redirect(url_for('login'))

@app.route('/enroll.html', methods=['GET'])
def enroll():
    return render_template('enroll.html')

@app.route('/enroll.html', methods=['POST'])
def enroll_post():
    # Enrollment logic goes here
    return redirect(url_for('dashboard'))

@app.route('/style.css')
def style():
    return send_from_directory('.', 'style.css')

@app.route('/script.js')
def script():
    return send_from_directory('.', 'script.js')

if __name__ == '__main__':
    app.run(debug=True)
