export function gerarHorariosDoDia() {
    const horarios = [];
    let hora = 8; // Começando às 08:00

    while (hora < 20) { // Até as 20:00
        horarios.push(`${hora.toString().padStart(2, '0')}:00`);
        hora++;
    }

    return horarios;
}