AngularJS - ngResource Example
===============

To execute the example you can try with python

	python -m SimpleHTTPServer

This example tries to explain how to use the ngResource with an AngularJs Factory, when you run the code you will see a list of "Movies in theatres" and a "Movie Selection"

The main structure of the code is the next

    app/                --> all of the files to be used
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        services.js     --> custom angular services where the factory is generated
      json/             --> Local json files
        movies.json     --> Json array with movies
        movies/
          1.json        --> Json description for a movie
      partials/         --> angular view partials (partial html templates)
        main.html

In the service.js file, you will find a simple structure to declare a factory that invoke the local JSON files using a "RESTful Simulation" 

When you do your factory using NgResource you will be able to load the responses in your controller without a explicit $promise.
    
    $scope.movies = Movie.get();
    $scope.singlemovie = Movie.read({ id : 1});
  

## License

The MIT License (MIT)

Copyright (c) 2014 Josue G Gutierrez Hernandez josue.ggh@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
