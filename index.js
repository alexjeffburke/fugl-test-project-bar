const foo = require('dont-break-foo');

process.exit(foo === 'bar' ? 0 : 1);
