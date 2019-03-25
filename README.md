# wall
Full-Stack: Wall App
Description
Wall App is a website that allows users to register, login, and write on a wall.

Below are the minimum requirements.  You are free to add any additional features you like.

Registration and Login: Anonymous users can create a new user and this new user receives a welcome e-mail. New users can then log in.
Wall (authed):  After logging in, in a user can post messages on the site-wide wall, similar to a facebook wall except there is only 1 wall for the entire site.  
Wall (guest): Guests as well as authed users can see all of the messages on the wall.
Write tests to confirm the functionality of the above requirements  

Note: a lot of the finer details are left out of this description, do whatever you think would make sense.  You are being judged on code and API design, not on how useful or interesting you make the app.  If you do however find a way to make it interesting, that’s a bonus!
Tech Info
Backend: REST API (python or javascript, preferably Django with Django REST Framework)
Frontend: AJAX-based website or native app (e.g. using React, Angular, React Native, iOS, Android)

Backend and frontend should be completely separate apps, i.e. the Django backend does not render any html pages for the frontend.

How to Test:
1. View the wall as a guest(non-auth)
2. Create a user by siging up
3. View email to confirm that you received the welcome email
4. Create a post
5. View the wall as a user, new post should appear

How to Run:
1. Clone the repo
2. cd to backend and run python manage.py runserver 0.0.0.0:8000
3. Open a new terminal window and cd to frontend
4. npm install, 
# Clean build assets (both for client and server)
npm run clean
# Run initial pre-build tasks (like buiding favicon files, usually run once after `clean`)
npm run init
# Starts the server with Hot Reloading
# Run webpack through webpack.config.dev.js
# Server in dev mode runs in watch mode using nodemon and babel-node (live transliping of ES6 server code) 
npm run dev
