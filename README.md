# car-dealership


### Installation
- Open Terminal (Mac) or Command Prompt (Windows)
- Create and `cd` into the directory you wish to keep the project
- `git clone https://github.com/visuallogicgroup/car-dealership.git`
- `cd car-dealership`


### Running
- `cd` into the `car-dealership` directory
- `npm install`
- `node server`

### Objective 
You will be creating a car dealerhsip inventory list. 

Your inventory should look like the example provided.

- There needs to be 15 vehicles that are populated from a database into the inventory list.
- The list will have a search bar which you should be able to search for vehicles.
- Each list item when clicked should take you to a page thats specific to that vehicle.
- The list needs to be responsive in the browser.

The app needs to be modular and needs to be broken into components for each part of the list.
It also needs to have a data file which contains the database and the means of sorting.

### Whats provided
- package.json which tells you which npm modules to be added.
- gruntfile.js which allows grunt watch and browserify when you're ready to use it.
- server.js which allows you to run a local server at localhost:5000

- The build folder which contains everything to run your app.
  - Images of the 6 different types of vehicles
  - app.js which is the bare bones of the app
  - router.js which will help you route to the specific list item page when that item is clicked.
