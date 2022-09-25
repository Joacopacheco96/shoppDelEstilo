const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const pool = require('./db/db.js');


app.post('/mailRegister', async (req, res) => {
  const user = req.body.user;
  const userMail = req.body.user.mail;
  mailsplit=userMail.replace('<','').replace(' ','').replace('[','').replace('{','').replace('/','').replace('=','');
  try {    
  const queryUser = await pool.query("INSERT INTO shoppusers (mail,regdate) VALUES($1,$2)",[mailsplit,user.regDate]);
  updates=queryUser.rowCount;
  if (updates===1)
  {res.json({success: true, mail:mailsplit}).status(200)}
  else {res.json({success: false}).status(500)};
  } 
  catch (err) {
  res.json({success: false}).status(500)
  } 
}
)

app.listen(3001, function () {
    console.log('App corriendo en el puerto 3001');
});
