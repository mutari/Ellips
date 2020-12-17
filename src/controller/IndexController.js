class IndexController
{

    index({ request, response, id, ...rest })
    {
        console.log(id)
        response.sendFile('index.html');
    }

    error({ request, response })
    {
        response.writeHead(404),
        response.write('The path you whant ti dos not exist???');
        response.write('This is a new write')
        response.on('data', (cls) => {
            response.write('The path you whant ti dos not exist???');
            response.write('This is a new write')
            console.log(cls)
        })
        response.end();
    }
    
}

module.exports = IndexController