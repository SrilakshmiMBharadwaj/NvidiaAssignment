Prerequisites:
node.js and npm installed globally : https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/

git clone 
cd nvidia_assignment
on one terminal:
  cd server_pet_adoption
  node server_pet_adoption.js
on second terminal:
  cd client_pet_adoption
  npm start - will redirect to the webpage on browser

In nvidia_assignment/client_pet_adoption/src/Search.js
Line 64 - change                                                     
<img src = {require('/Users/srilakshmi/nvidia_assignment/client_pet_adoption/src/'+picture)} alt = {picture}/>
to
<img src = {require('<your-home-path>/nvidia_assignment/client_pet_adoption/src/'+picture)} alt = {picture}/>

