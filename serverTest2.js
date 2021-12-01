const http = require('http'); // http 모듈을 요청합니다. 

const fs = require('fs').promises;

http.createServer(async(req, res)=>{
    try{
        const f = await fs.readFile('./fs_index.html');
        res.writeHead(200, {'Content-Type':'text.html; charset=utf-8'});
        res.end(f);
    } catch (err){
        console.error(err);
        res.writeHead(500,{'Content-Type':'text.html; charset=utf-8'});

        res.end(err.message);
    }


}).listen(8080, ()=>{
    console.log('8080포트에서 서버 연결중 ')
});

/*
fs_index.html 파일의 내용 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1> html 파일 보내기 </h1>
    <p> 파일을 클라이언트에 전송합니다. </p>
</body>
</html>
*/
