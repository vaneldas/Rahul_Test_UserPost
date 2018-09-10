const axios = require('axios');
const config = require('./config.js');
var URL = config.URL
var post1= 1;

function userspost (post1){
  return axios.get('https://reqres.in/api/users/${post1}', {
    params: {
       },
}).then(response=> {
results=response.data.results
if(results.length===0) {
  return [{
    type: 'quickReplies',
   content: {
       title: 'Sorry, but I could not find any results for your request :(',
       buttons: [{ title: 'Start over', value: 'Start over' }],
    },
  }];
}

const cards = [{
  FirstName : first_name,
  LastName : last_name,
  imageUrl: `https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg`,
  buttons:
      buts,
  }];

  return [
       {
         type: 'text',
         content: "Here's what I found for you!",
       },
       { type: 'carousel', content: cards },
     ];
}); // end of then(response=>)
}// end of userpost function

module.exports = userspost;






/*
var usersURL="https://reqres.in/api/users/"+post1;
console.log(usersURL);
function users(post1){
    return axios.get (usersURL,{
      params: {
          },

    }// after get emthod ending
  ).then(results=>{
  if(results.length==0){
    return [{
      content: {
              title: 'incomeple request'
             },
    }] //
  }
  }
);

  var output = results.data.first_name;

  console.log(output);
  console.log(Rahul);
} //users fucntion ending
var Rahul = "Rahul Vaneldas";
console.log(Rahul);
*/
