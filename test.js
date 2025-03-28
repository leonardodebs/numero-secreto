const { gerarNumeroAleatorio } = require('./numeros.js');

test('Gera um número dentro do intervalo', () => {
    const numero = gerarNumeroAleatorio();
    expect(numero).toBeGreaterThanOrEqual(1);
    expect(numero).toBeLessThanOrEqual(10);
});
