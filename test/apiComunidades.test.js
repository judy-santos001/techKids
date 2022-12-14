const request= require('supertest')

const app = require("../src/app")
//let elementId;

describe("API test", () => {
    test("RotaGet/comunidades", (done) => {
        request(app)
        .get("/comunidades")
        
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });
    //let elementId
    test("RotaPost/comunidade/create", (done) => {
        request(app)
        .post("/comunidade/create")
       
        .send({
            CEP: 65788000,
            estado: "pará",
            cidade:"itupiranga",
            rua:"amazonas",
            bairro:"vila velha"

        })
        
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            elementId = res.body.savedConsole.id;
            return done();
        })
    });
    test("Rota Patch/console/update/:id", (done) => {
        request(app)
        .patch(`/comunidade/atualizar/:id${elementId}`)
       
        .send({id: "dados atualizados"})
        .expect(200)
        .expect((res) => {
            console.log (res.body)
            expect(res.body.updateComunidade).toBe("atualização de dados");
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        })
    })
    test("RotaDelete/comunidade/delete/:id", (done) => {
        request(app)
        .delete(`/comunidade/deletar/:id${elementId}`)
        .expect("Content-Type", /json/)
        .expect(200)
        
        .expect((res) => {
            console.log(res.body)
            expect(res.body.deleteComunidade).toBe("excluido !");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});