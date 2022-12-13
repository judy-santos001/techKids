const request = require('supertest')
const app = require('../src/app.js')

//let elementId;
describe("API test", () => {
    test("RotaGet/voluntarios", (done) => {
        request(app)
        .get("/voluntarios")
        .expect(200)
        .expect((res) => {
            expect(res.body.lenght).not.toBe(0);
        })
        .end((err, res) => {
            if (err) return done(err);
            return done();
        })
    });

    let elementId
    test("RotaPost/voluntario/create", (done) => {
        request(app)
        .post("/voluntario/create")
        
        .send({
            
         nome: "Ana Paula Gomes",
         contato: 94991215678,
         email: "anaGomes3@gmail.com",
         senha:"",
         vagasDisponiveis: true,
         areaDeAtuação: "professora de desenvolvimento Web ",
         diasDaSemana: "quarta e terça",
        horario: "14:30 -16:45" 

        })
        .expect(201)
        .end((err, res) => {
            if(err) return done(err);
            elementId = res.body.savedVoluntario._id;
            return done();
        })
    });
    test("Rota Patch/", (done) => {
    
        request(app)
        .patch(`/voluntario/atualizar/:idd${elementId}`)
        
        .send({_id: "dados atualizados"})
        .expect(200)
        .expect((res) => {
            console.log (res.body)
            expect(res.body.updateVoluntario).toBe("atualização de dados");
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        })
    })
    test("RotaDelete/voluntario/deletar/:id", (done) => {
        request(app)
        .delete(`/delete/:id${elementId}`)
        //.expect("Content-Type", /json/)
        .expect(200)
        .expect((res) => {
            console.log(res.body)
            expect(res.body.deleteVoluntarioById).toBe("excluido !");        
        })
        .end((err,res) => {
            if (err) return done(err);
            return done();
        });
    });
});