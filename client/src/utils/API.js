import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search+"&key=AIzaSyDFh8cG5jkf33IjH4PX2fzxMMuV4fQSQkQ");
  }
};