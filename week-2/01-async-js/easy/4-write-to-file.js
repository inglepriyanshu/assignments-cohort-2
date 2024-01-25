const fs = require('fs');

const contentToWrite = 'Hello, this is some content to be written to a file.';

fs.writeFile('./example.txt', contentToWrite, (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File has been written successfully!');
});
