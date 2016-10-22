This repository can be used as a starting point for any javascript project.
### Prerequisites: 
- Have npm installed
- Have grunt-cli installed

To get started, run from the root directory of the project:
```sh
./setup.sh
```

This will:
- Run 'npm install' to install all basic dependencies
- Do a brief workspace fixup to fix some pathing issues in some of the dependencies

To build the project, run: 
```sh
grunt build
```
To deploy, run:
```
grunt deploy
```

Note: This is really only for my personal use, so the Gruntfile is set up to rely on a credentials.json file, which has information about my webspace.

#### To-Do:
- Use minified app javascript file in final uploaded js
- Figure out how to create compressed packaged that gets uploaded
- Get rid of warnings on initial npm install