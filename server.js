

// in app.get('/', function(req, resp){
// 	axios.get('https://api.github.com/users).then(response =>res.write(response.data))
// })

// const axios = require('axios')

// const getusers = () => {
//   try {
//     return axios.get('https://api.github.com/users/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }

// getusers()

const express = require('express')
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
  var username = req.query.username
  axios.get('https://api.github.com/users/' + username)
  .then(response => {
    res.write(response.data)
  })
  .catch(err => {
    res.write(err.message)
  });
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))