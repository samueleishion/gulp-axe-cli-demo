# gulp-axe-cli-demo
Demo project for [gulp-axe-cli](https://github.com/samueleishion/gulp-axe-cli).

## Install

```
$ git clone https://github.com/samueleishion/gulp-axe-cli-demo
$ npm install
```

## Running

To run the demo site, run the static express app:

```
$ npm run serve
```

To run the tests with aXe, run this script:

```
$ npm run test
```

__Note__ that the server must be running in order to run the aXe tests. See more below under gotchas.

__Note__ While aXe one of the best automated tools, it only covers 20%-50% of all a11y issues. Be sure to test manually after the smoke test.

## Gotchas

### Run server when running tests

For the demo, we are testing each file in it's locally hosted route. This can be seen [in the gulpfile](https://github.com/samueleishion/gulp-axe-cli-demo/blob/master/gulpfile.js#L7-L11):

```
axeConfig = {
  urls: function(file) {
    file = 'http://localhost:3000/' + file.substring(file.lastIndexOf('/') + 1);
    return file;
  },
  ...
```

In order for the file to get loaded successfully, the local server must be running as mentioned above. There are several ways of ensuring this process.

- Run the test script on a different terminal window
	- This is the approach followed on the demo, by separating the commands.
- Run a separate instance of the server in the same test script.
	- You could add another express script and run it in parallel to your test script. iE/

```
'test': 'npm-run-all --parallel test.js "gulp test"'
```

Where `test.js` is the express script that runs the static server. For reference, look at [index.js](https://github.com/samueleishion/gulp-axe-cli-demo/blob/master/index.js)

### Create ./axe-results on install to save

If you want to save the results, by default, we're saving them into an `./axe-results` directory. This directory should already be present by the time you run the tests, so we have a script to [add it post install](https://github.com/samueleishion/gulp-axe-cli-demo/blob/master/package.json#L7).

### Test coverage

aXe helps to automate a11y testing, but it only covers certain rules for fully accessible sites. Here's the note from aXe after each test run: 
```
Please note that only 20% to 50% of all accessibility issues can automatically be detected. 
Manual testing is always required. For more information see:
https://dequeuniversity.com/curriculum/courses/testingmethods
```

There are only certain a11y rules that are covered, so for maximum coverage, do test your application manually.