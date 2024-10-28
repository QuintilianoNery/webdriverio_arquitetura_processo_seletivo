const axios = require('axios');

// Global variables
const urlGetApps = 'https://api-cloud.browserstack.com/app-automate/recent_apps'
const headers = {
    "Authorization": "Basic cXVpbnRpbGlhbm9wYXF1aTE6QXlWUmMzTkszTEc0YnB5eTZ0UVA="
}

axios.get(urlGetApps, { headers }).then(function (response) {
    console.log(response.data)
})