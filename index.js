const fastify = require('fastify')({
    logger: true
  });
require('dotenv').config({ path: './config.env' })

const {postRows, patchRows, getRows, getAllRows,  updateRow, deleteRow} = require('./controller/controller')


fastify.post('/addNewRow',postRows);
  
// fastify.patch('/addGorupOfNewRow',patchRows);
  
fastify.get('/getOldRow/:author',getRows);
  
fastify.get('/getAllRows',getAllRows);

fastify.put('/updateOldRow/:author',updateRow);

fastify.delete('/deleteOldRow/:id',deleteRow);

const port = process.env.PORT;

fastify.listen(port, (err, res) => {
  // res.write('view.html')

    if (err) {throw err}else{console.log(port)};
    // Server is now listening on ${address}
  })