"use strict";


function getGitHubInfo(userId) {
  console.log('getGitHubInfo function ran');

  fetch(`https://api.github.com/users/${userId}/repos`)
    .then(function (response) {
      return response.json();
    })
    .then((responseJson) => {
      console.log(responseJson); 
      displayResults(responseJson); 
    });

}


const displayResults = (responseJson) => {
    console.log('the displayResults has ran');
          for (key i in responseJson) {
        
      }

}

// handler function for the submit button
// this calls the function that uses fetch
// that calls a function to remove the hidden class and also shows the images
function handelSubmit () {
  console.log('the handler has ran');
  $('form').on('submit',  (e) => {
    e.preventDefault(); 
    const gitHubId = $("#github-id").val();
    console.log(gitHubId); 
    getGitHubInfo(gitHubId);
  });
}

function setHeaders() {
  return options = {
    headers: new Headers({
      Accept:'application/vnd.github.v3+json'
    }),
  };
}

const render = (template) => $('main').html(template); 


$(function () {
  console.log("The webapp has loaded! JS index is working.");
  handelSubmit();
});