const express = require('express')
const axios = require('axios')
const app = express()
app.use(cors())
app.get('/', (req, res) => {
  var username = req.query.username
  console.log(username)
  axios.get('https://api.github.com/users/' + username)
  .then(response => {
  	console.log('SUCESS');
    res.write(JSON.stringify(response.data))
  })
  .catch(err => {
  	console.log(err.message)
    res.write(err.message)
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))