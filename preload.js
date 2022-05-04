const fs = require('fs');

window.list_item = path => fs.readdirSync(path);
