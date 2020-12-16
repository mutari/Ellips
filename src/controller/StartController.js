class StartController
{

    index(request, response)
    {
        response.end('hello world');
    }

    start(request, response)
    {
        response.end('hello start world')
    }
    
}

module.exports = StartController