Prerequisites:
node.js and npm installed globally : https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/

1. git clone https://github.com/SrilakshmiMBharadwaj/NvidiaAssignment.git
2. cd nvidia_assignment
3. on one terminal:
  - cd server_pet_adoption
  - node server_pet_adoption.js
4. on second terminal:
  - cd client_pet_adoption
  - npm start - will redirect to the webpage on browser

5. In nvidia_assignment/client_pet_adoption/src/Search.js
Line 64 - change                                                     
<img src = {require('/Users/srilakshmi/nvidia_assignment/client_pet_adoption/src/'+picture)} alt = {picture}/>
to
<img src = {require('your-home-path/nvidia_assignment/client_pet_adoption/src/'+picture)} alt = {picture}/>

