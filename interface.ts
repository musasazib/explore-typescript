interface Player {
    name: string,
    Club: string,
    salary: number,
    wife?: string
}
const messy: Player = {
    name: 'L Messy',
    Club: 'Basra',
    salary: 500000,
    wife: 'sophia Begum'
};
const salas: Player = {
    name: 'Md. Salas',
    Club: 'PGS',
    salary: 400000,
};

interface Developer extends Player {
    language: string,
    codeEditor: string,
    typingSpeed: number
}
const zuku: Developer = {
    name: 'Kohima Udine',
    Club: 'Real Madrid',
    salary: 30000,
    language: 'JS',
    codeEditor: 'VS code',
    typingSpeed:65
}