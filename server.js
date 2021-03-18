//import express
const express = require("express")

//import the data file
const data = require("./data")

//console.log the data file
// console.log(data)

//create a server
const app = express()

//define a port
const port = 4000

//send a response, console.log method and path
app.get("/", (request, response) => {
  console.log("this is method:", request.method)
  console.log("this is path:", request.path)
  response.send("Hello, Karla")
})

//send a response with html
const document = `<html>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>`

app.get("/webpage", (request, response) => {
  console.log(request.method)
  console.log(request.path)
  response.send(document)
})

//send the whole data as a response
app.get("/students", (request, response) => {
  response.send(data)
})

//write a get with filter
app.get("/players", (request, response) => {
  const playsQuidditch = data.filter(student => student.playsQuidditch)
  response.send(playsQuidditch)
})

//write a get with find
app.get("/student/:id", (request, response) => {
  console.log("this is params", request.params)
  const parsedId = parseInt(request.params.id) 

  const specificStudent = data.find(student => student.id === parsedId)
  response.send(specificStudent)
})

//start listening
app.listen(port, () => console.log(`listening on port ${port}`))