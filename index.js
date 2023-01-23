const x = require('express');

const app = x();

app.get('/', (_, res) => {
	return res.send('sup');
});

app.listen(3000, () => console.log('listening on 3000'));