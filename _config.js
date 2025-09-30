var config = {}

<<<<<<< HEAD
config.mongoURI = {
    production: 'mongodb+srv://matthewmuchangi:much%40ngi12@cluster0.mokxjvb.mongodb.net/darkroom?retryWrites=true&w=majority&appName=Cluster0',
    development: 'mongodb+srv://matthewmuchangi:much%40ngi12@cluster0.mokxjvb.mongodb.net/darkroom-dev?retryWrites=true&w=majority&appName=Cluster0',
    test: 'mongodb+srv://matthewmuchangi:much%40ngi12@cluster0.mokxjvb.mongodb.net/darkroom-test?retryWrites=true&w=majority&appName=Cluster0',
}

module.exports = config;

=======
// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
>>>>>>> test
