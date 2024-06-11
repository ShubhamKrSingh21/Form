const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcGVubWljIiwic3ViIjoib3Blbm1pYyIsImlhdCI6MTcxODA5MTg5NDc1MiwiZXhwIjoyNjA5MTgwOTE4OTQ3NTIsIm9yZ2FuaXphdGlvbiI6eyJpZCI6NTUxLCJuYW1lIjoiTXkgT3JnYW5pemF0aW9uIiwiY3JlYXRlZEF0IjoiMjAyNC0wNi0xMFQxMjozNDozNi4zMzhaIiwidXBkYXRlZEF0IjoiMjAyNC0wNi0xMFQxNTo1Nzo1Mi4wNjhaIiwic3RyaXBlQ3VzdG9tZXJJZCI6ImN1c19RR2VzalBYd29wbEV0UCIsInN0cmlwZVN1YnNjcmlwdGlvbklkIjpudWxsLCJ0d2lsaW9TSUQiOm51bGwsInR3aWxpb0F1dGhUb2tlbiI6bnVsbCwibWludXRlc1VzZWQiOjIsIm1pbnV0ZXNDcmVkaXRzIjoxMDAsImhhc0FnZW5jeUFjY2VzcyI6ZmFsc2UsImludml0ZVRva2VuIjpudWxsLCJzdWJBY2NvdW50VHJpYWxNaW51dGVzIjowLCJzdWJBY2NvdW50Q29zdFBlck1pbiI6MCwibG9nbyI6bnVsbCwicGFyZW50T3JnYW5pemF0aW9uSWQiOm51bGwsInN1YnNjcmlwdGlvbklkIjpudWxsfX0.7K-iRGGsfNSlf7IMUeWMlsrFUa-6Jb-LdO7Kw6JNMDU';

app.post('/call', async (req, res) => {
    const { name, phone, email } = req.body;

    try {
        const response = await axios.post('https://api.openmic.ai/v1/calls', {
            name,
            phone,
            email,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        res.send(`Call initiated with OpenMic API. Response: ${response.data}`);
    } catch (error) {
        res.status(500).send(`Error initiating call: ${error.message}`);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
