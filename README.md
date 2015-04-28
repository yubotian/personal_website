## myWebApp

<p>http://yubotian.com</p>
<p>I made this personal website using MongoDB, Express, AngularJS, and Node.js. </p>
<p>This is an interactive webapp with live posting/ dynamic post feeding and full registration/authentication system. It functions just like twitter, but I deactivate the register button so that only I can post news in my life :) </p>

      
## deployment
<p>deployed at microsoft azure under yubo93@hotmail.com (non-ms-employee account)</p>
<p>switched to heroku. set up db at mongolab. connected to github repo and activated auto deploy</p>

## mongo usage:
```c
mongo
show dbs
use <db>
show collections
db.<collection>.find()
	to clean collection:
db.<collection>.drop()
```

## heroku usage:
```c
git push heroku master
heroku ps:scale web=1
```
