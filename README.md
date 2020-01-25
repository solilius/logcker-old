# logcker
assignment for Codefresh 

## Demo Instructions:
#### 1. Run the "set containers" script
The script will:
- pull 3 images from dockerHub
- run all of them (first 2 containers with the label 'test')
- wait for ENTER to kill them all (don't press it yet)
#### 2. Open a console on the repository folder and run:

```sh
$ npm i
$ node app.js
```
#### 3. Click [ here ](http://localhost:3000/) to open the UI
the UI will update the logs displayed automatically but you can stop the auto scroll.
#### 4. Go back to the bash and hit ENTER.
all the contianers will be killed and therefore will stop loging.
go back to the UI and see that no new logs are displayed.
