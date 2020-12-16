class IndexController
{

    index(request, response)
    {
        response.end('hello world');
    }

    error(request, response)
    {
        response.writeHead(404),
        response.write('The path you whant ti dos not exist???');
        response.end();
    }
    
}

module.exports = IndexController