const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3000;
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'curriculo.db'; //use o nome que você achar melhor para o banco de dados

    app.use(express.json());
    app.get('/candidato', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Foto, Nome, Cargo FROM CANDIDATO ORDER BY Nome DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.get('/experiencia', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Empresa, Ano, Cargo FROM EXPERIENCIA ORDER BY Ano DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.get('/formacao', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Curso, Ano FROM FORMACAO ORDER BY Ano DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    
    app.get('/habilidades', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Illustrator, Photoshop, Coreldraw, Dreamwaver, HTMLCSS3 FROM HABILIDADES ORDER BY idHabilidades DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    
    app.get('/personalidade', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Loremipsum1, Loremipsum2, Loremipsum3, Loremipsum4, Loremipsum5 FROM PERSONALIDADE ORDER BY idPersonalidade DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    
    app.get('/realizacoes', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Descricao, Ano FROM REALIZACOES ORDER BY Ano DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    
    app.get('/sobre', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        var sql = "SELECT Endereco, Telefone, Email, Apresentacao FROM SOBRE ORDER BY idSobre DESC";
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/candidato`);
        console.log(`Server running at http://${hostname}:${port}/experiencia`);
        console.log(`Server running at http://${hostname}:${port}/formacao`);
        console.log(`Server running at http://${hostname}:${port}/habilidades`);
        console.log(`Server running at http://${hostname}:${port}/personalidade`);
        console.log(`Server running at http://${hostname}:${port}/realizacoes`);
        console.log(`Server running at http://${hostname}:${port}/sobre`);
        });