const chispum = require("./chispum")


describe("chispum", () => {
    test("deberia imprimir 1 si se recibe 1", () => {
        const expected = 1;
        const result = chispum(1);
        expect(expected).toBe(result);
    });

    test("deberia imprimir chis si recibe 3", () => {

        const expected = "chis";
        const result = chispum(3);
        expect(expected).toBe(result);
    });

    test("deberia imprimir chis si recibe un multiplo de 3", () => {

        const expected = "chis";
        const result = chispum(6);
        expect(expected).toBe(result);
    });

    test("deberia imprimir pum si recibe 5", () => {

        const expected = "pum";
        const result = chispum(5);
        expect(expected).toBe(result);
    });

    test("deberia imprimir un chispum, si tiene multiplo de 3 y 5", () => {

        const expected = "chispum";
        const result = chispum(15);
        expect(expected).toBe(result);
    });
}); 