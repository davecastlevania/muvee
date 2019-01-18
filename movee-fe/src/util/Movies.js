const Movies = {
  search(term) {
    return fetch("http://localhost:5000/movies/", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        //make sure to serialize your JSON body
        body: JSON.stringify({
          TitleName: term,
        })
      })
      .then( (response) => { 
         //do something awesome that makes the world a better place
         console.log(response);
         return response.json();
      });
  },
};

export default Movies;
