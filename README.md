# Owlab React Front End Test Task

The task was to implement an application that can display the following pages:
- / - main
- /login - page for entering login and password
- /news - page with news (any information of the same type)
- /profile - a free text page that cannot be accessed without authorization

On the site, in the header or footer, implement links:
- Main (/)
- News (/news)
- Profile (/profile)
If the user clicks on the "profile" page and he is not "authorized" - go to the page /login
The login form (/login) accepts “fake” data:
username: Admin
password: 12345

If other data is entered, the following messages are displayed:
Wrong username or password
If the data is correct, then redirect to the /profile page
User authorization information is stored in localStorage, with a simple parameter true / false.
