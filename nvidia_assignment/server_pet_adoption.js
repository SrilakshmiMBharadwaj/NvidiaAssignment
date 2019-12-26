const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const home = '/Users/srilakshmi/nvidia_assignment/client_pet_adoption/src/'

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  //res.send({id: '1', animal:'dog', breed:'lasa apso',age:'17', picture: './lasa_apso.jpg', name : 'dweedles', location: 'Madison 53703', details: 'Friendly dog. Eats cereals and carrots.'});
  res.json([{id:1, animal: 'dog', breed: 'lasa apso'}, {id:2, animal: 'cat', breed: 'pussy cat'}, {id:3, animal: 'dog', breed: 'lab'}])
});

app.get('/express_backend_pet', (req, res) => {
  //res.send({id: '1', animal:'dog', breed:'lasa apso',age:'17', picture: './lasa_apso.jpg', name : 'dweedles', location: 'Madison 53703', details: 'Friendly dog. Eats cereals and carrots.'});
  res.json([{id:1, animal: 'dog', breed: 'Lhasa Apso',age:17, picture: 'lasa_apso.jpg', name : 'Dweedles', location: '53703', details: 'Friendly dog. Eats cereals and carrots.'}, {id:2, animal: 'cat', breed: 'Birman',age:5, picture: 'birman.jpeg', name : 'Kitty', location: '536000', details: 'Friendly cat. Plays with kids'}, {id:3, animal: 'dog', breed: 'Labrador',age:10, picture: 'labrador.jpeg', name : 'Browny', location: '53703', details: 'Friendly dog. Eats apple'}])
});

app.post('/data', (req, res) => {
  console.log(req.body);
  res.send(
    'I received your POST request. This is what you sent me: ${req.body.post}',
  );
});