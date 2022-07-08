const Serie = require("../src/models/seriesModel")

describe("Teste do modelo de Series", () => {
    const serie = new Serie({
        "id": 10,
        "name": "Stranger Things",
        "genre": "Suspense",
        "synopsis": "Um grupo de amigos se envolve em uma série de eventos sobrenaturais na pacata cidade de Hawkins. Eles enfrentam criaturas monstruosas, agências secretas do governo e se aventuram em dimensões paralelas.",
        "liked": true
    });
    it("Deve chamar o Schema e retornar uma nova série", () => {
        expect(serie.name).toBe("Stranger Things")
    })
    it("Deve salvar no banco de dados uma nova série cadastrada", () => {
        serie.save().then((dados) => {
            expect(dados.name).toBe("Stranger Things")
        })
    })
}) 

