const express = require('express');
const fs = require('fs');
const app = express();

app.get('/data', (req, res) => {
  fs.readFile('drugs.json', 'utf-8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    const items = JSON.parse(data);
    console.log(items);

    res.json(items);
  });

  
});

app.listen(3002, (e) => {
  if(e) {
    console.log(e);
  } else {
    console.log('JSON Server is running on port 3002');
  }
});
