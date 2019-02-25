const server = require("./server.js");

const port = process.env.PORT || 5000;
server.list(port, () => {
  console.log(`
  ---------------------------------------
          Listening on Port ${port}
  ---------------------------------------  
  `);
});
