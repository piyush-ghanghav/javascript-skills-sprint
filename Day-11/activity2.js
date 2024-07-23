// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("User data fetched.");
        resolve("User data");
      }, 1000);
    });
  }
  
  function fetchPosts(userData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Posts fetched using:", userData);
        resolve("Posts data");
      }, 1000); 
    });
  }
  
  function fetchComments(postsData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Comments fetched using:", postsData);
        resolve("Comments data");
      }, 1000); 
    });
  }
  
  fetchUser()
    .then((userData) => fetchPosts(userData))
    .then((postsData) => fetchComments(postsData))
    .then((commentsData) => {
      console.log("All data fetched:", commentsData);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  