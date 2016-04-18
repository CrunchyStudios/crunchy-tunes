// Make sure you have your directory and regex test set correctly!
const context = require.context('./tests', true, /-test\.js$/);
context.keys().forEach(context);
