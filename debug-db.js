const fs = require('fs');
const https = require('https');
const path = require('path');

const envPath = path.join(__dirname, '.env.local');

try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const env = {};
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) env[key.trim()] = value.trim().replace(/"/g, '');
    });

    const apiKey = env['NOTION_API_KEY'];
    const dbId = env['NOTION_DATABASE_MISSIONS'];

    if (!apiKey || !dbId) {
        console.error('Missing API Key or Database ID in .env.local');
    } else {
        fetchDatabase(apiKey, dbId);
    }

} catch (e) {
    console.error('Error reading .env.local:', e.message);
}

function fetchDatabase(apiKey, dbId) {
    const options = {
        hostname: 'api.notion.com',
        path: `/v1/databases/${dbId}`,
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Notion-Version': '2022-06-28',
        }
    };

    const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => {
            try {
                const json = JSON.parse(data);
                if (json.properties) {
                    console.log('--- Database Properties ---');
                    Object.keys(json.properties).sort().forEach(key => {
                        console.log(`${key}: ${json.properties[key].type}`);
                        if (json.properties[key].type === 'status') {
                            console.log('Status Options:', JSON.stringify(json.properties[key].status.options, null, 2));
                        }
                    });
                } else {
                    console.log('Error/No properties:', JSON.stringify(json, null, 2));
                }
            } catch (err) {
                console.error('Error parsing JSON:', err);
            }
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });
    req.end();
}
