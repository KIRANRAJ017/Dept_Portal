var express =require('express')
const bodyParser = require('body-parser');
var mongoose=require('mongoose')
var model=require("./query")
var db_name="mongodb://localhost:27017/"
const app =express()
const { MongoClient } = require('mongodb');
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const cors = require("cors");
app.use(cors());
const XLSX = require('xlsx');
const multer = require('multer');
const bcrypt = require('bcrypt');
const saltRounds = 10;


mongoose.connect(db_name)
var database=mongoose.connection
database.on('error',()=>console.log("error")) 
database.once('open',()=>console.log("connected")) 


app.post('/admin_login',async (req,res)=>{
    const{email,password}=req.body
    try{
        const check=await database.collection('admins').find({email:email,password:password}).toArray()
        if(check!=0){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post('/student_login',async (req,res)=>{
    const{email,password}=req.body
    try{
        const check=await database.collection('students').find({email:email,password:password}).toArray()
        if(check!=0){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post('/faculty_login',async (req,res)=>{
    const{email,password}=req.body
    try{
        const check=await database.collection('faculties').find({email:email,password:password}).toArray()
        if(check!=0){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post('/admin_members',async (req,res)=>{
    const{roll,email,password,db}=req.body;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(db)
    const data={
        id:roll,
        email:email,
        password:hashedPassword,
    }
    database.collection('faculties').insertOne(data);
})

app.post('/student_achivement',async (req,res)=>{
    const{roll,name,event,noneve,prize}=req.body;
    const data={
        rollno:roll,
        name:name,
        event:event,
        noneve:noneve,
        prize:prize,
    }
    database.collection('stu_cocurrs').insertOne(data);
})

app.post('/student_query',async (req,res)=>{
    const{name,email,toemail,query}=req.body;
    const data={
        from:name,
        email:email,
        toemail:toemail,
        query:query,
    }
    database.collection('queries').insertOne(data);
})

app.get('/admin_query', async (req, res) => {
    try {
        const queries = await database.collection('queries').find().toArray();
        res.json(queries);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

///////////////////////////////

app.get('/faculty_report', async (req, res) => {
    const client = new MongoClient(db_name);
    const dbName = 'Dept_portal';
    const collectionName = 'students';

    try {
        await client.connect();
        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const cocurr = database.collection('stu_cocurrs')

        const rollno = req.query.rollNo; 
        const data = await collection.findOne({ rollno:rollno });
        const cocurrdata = await cocurr.findOne({ rollno:rollno });
        console.log(cocurrdata)

        const mergedData = {
            ...data,
            ...cocurrdata
        };
        
        if (!data) {
             return res.status(404).json({ message: 'Data not found' });
        }
        console.log('Data found:',mergedData);
         res.json(mergedData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    } finally {
        // Close MongoDB connection
        await client.close();
    }
});

///////////////////////////////

const uri = 'mongodb://localhost:27017/';
const dbName = 'Dept_portal';
const collectionName = 'students'; 

app.get('/admin_report', async (req, res) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db(dbName);
        const collection = database.collection(collectionName);
        const data = await collection.find().toArray();
        console.log(data)
        res.json(data);
        console.log('Data fetched from MongoDB and sent to client.');
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Error fetching data' });
    } finally {
        await client.close();
    }
});

///////////////////////////////

const dataSchema = new mongoose.Schema({
    fileName: String,
    internal: Array,
  });
  const Data = mongoose.model('stumarks', dataSchema);
  const storage = multer.memoryStorage();
  const upload = multer({ storage });
  app.post('/faculty_internal', upload.single('file'), async (req, res) => {
    try {
      const workbook = XLSX.read(req.file.buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const fileName = req.body.fileName;
      const data = new Data({
        fileName,
        internal: jsonData,
      });
      await data.save();
      res.send('Data uploaded successfully');
    } catch (error) {
      console.error('Error uploading data:', error);
      res.status(500).send('Error uploading data');
    }
  });
  

//////////////////////////////

app.get('/',(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
}).listen(8000)
