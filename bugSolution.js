const express = require('express');
const app = express();
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId) || !Number.isInteger(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));