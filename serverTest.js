const http = require('http'); // http 모듈을 요청합니다. 

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Node.js로 서버만들기');
    res.end('<p> 응답을 종료되었습니다</p>');
}).listen(8080, ()=>{
    console.log('8080 포트에서 서버 연결중입니다...')
});

