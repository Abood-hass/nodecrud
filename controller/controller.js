
const Blog = require('../modules/blog');

const postRows = (req, res) => {
    const newRow = new Blog(req.body);

    newRow.save().then(() => 
            {res.send(`you add new Row:\n${newRow}`)}).
            catch(err => {console.log(err)})
};

const patchRows =  (req, res) => {
    Blog(req.body).save().then(() => 
            {res.send(`you add new Rows`)}).
            catch(err => {console.log(err)})
};

const getRows =  async (req, res) =>{
    const paraAuthor = req.params.author;
    const blog = await Blog.findOne({author:paraAuthor});
    res.send(blog);
  };

  
const getAllRows =  async (req, res) =>{
    const paraAuthor = req.params.author;
    const blog =  await Blog.find();
    res.send(blog);
  };

const updateRow =  async (req, res) => {
    const paraAuthor = req.params.author;
    const blog =  await Blog.findOneAndUpdate({author:paraAuthor},
      {
        "title":  req.body.title,
        "author": req.body.author,
        "body":   req.body.body
    });
  };


const deleteRow =  async (req, res) => {
    const paraID = req.params.id;
    Blog.findOneAndDelete({_id:paraID}).then(res.send(`this item ${paraID} just removed`))
};



module.exports = {postRows, patchRows,getRows, getAllRows, updateRow, deleteRow};