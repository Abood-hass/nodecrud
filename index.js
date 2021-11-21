// const fastify = require('fastify')({
//   logger: true
// });


const express= require('express')
const app = express();
const route = express.Router();

const swaggerJsDoc = require("swagger-jsdoc");

const swaggerUi = require("swagger-ui-express");

require('dotenv').config({ path: './config.env' })

const {postRows, patchRows, getRows, getAllRows,  updateRow, deleteRow} = require('./controller/controller')


// const swaggerOpt={
//   swaggerDefinition:{
//     info: {
//       title: 'CRUD',
//       description:'CRUD info',
//       contact: {
//         name: 'Amazing Deve'
//       },
//       servers: ['http://localhost:8080/getAllRows']
//     }
//   },
//   apis:["index.js"]
// }


// const swaggerDoc = swaggerJsDoc(swaggerOpt);

// app.use('./api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));





app.post('/Home/addNewRow',postRows);
  
// fastify.patch('/addGorupOfNewRow',patchRows);
  
app.get('/Home/getOldRow/:author',getRows);
  
app.get('/Home/getAllRows',getAllRows);

app.get('/Home',(req, res, next)=>{
  res.sendFile(__dirname + '/Views/DB.html');
})


app.put('/Home/updateOldRow/:author',updateRow);

app.delete('/Home/deleteOldRow/:id',deleteRow);

const port = process.env.PORT;

app.listen(port, (err, res) => {
  // res.write('view.html')
    if (err) {throw err}else{console.log(port)};
    // Server is now listening on ${address}
  })