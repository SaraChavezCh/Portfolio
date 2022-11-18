const express = require ('express');
const app = express ();
const path = require ('path');
const fs = require ('fs/promises');

app.use (express.json());


const jsonPath = path.resolve('./data.json');


app.get ('/api/v1/users', async(req, res)=>{
    
    const jsonFile = await fs.readFile(jsonPath, 'utf8');
    res.status(200);
    res.send(jsonFile);
    console.log(jsonFile);
});

app.post ('/api/v1/users', async(req, res)=>{
    res.sendStatus(200);
    const newUser = req.body;
    const jsonFile = JSON.parse( await fs.readFile(jsonPath, 'utf8'));
    jsonFile.push({...newUser, id:getId(jsonFile)});
    await fs.writeFile(jsonPath, JSON.stringify(jsonFile));
    res.end();    
    console.log("post");
});

app.put ('/api/v1/users', async (req, res)=>{
    const {id, email, name, password}= req.body;
    const jsonFile = JSON.parse( await fs.readFile(jsonPath, 'utf8'));
    const matchIndexUser = jsonFile.findIndex((user)=>
    user.id ===id);
    jsonFile[matchIndexUser].name = name;
    jsonFile[matchIndexUser].email = email;
    jsonFile[matchIndexUser].password = password;
    await fs.writeFile(jsonPath, JSON.stringify(jsonFile));
    res.sendStatus(200);
    console.log("put");
});

app.delete ('/api/v1/users', async (req, res)=>{
    const {id}= req.body;
    const jsonFile = JSON.parse( await fs.readFile(jsonPath, 'utf8'));
    const matchIndexUser = jsonFile.findIndex((user)=>
    user.id ===id);
    jsonFile.splice(matchIndexUser, 1);
    await fs.writeFile(jsonPath, JSON.stringify(jsonFile));
    res.sendStatus(200);

    console.log("delete");
});

app.listen(8003, ()=>{console.log('running')});

const getId = ((array)=>{
    array.sort((a,b)=> a.id - b.id);
    const lastIndex = array.length -1;
    return array[lastIndex].id + 1;
});
