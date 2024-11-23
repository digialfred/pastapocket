const fs = require('fs-extra');

const archivoCasos = './casos.json';

const leerCasos = async () => {
    try {
        const casos = await fs.readJson(archivoCasos);
        return casos;
    }
       catch {
        return [];
    }       
};
const guardarCaso = async (caso) => {
    const casos = await leerCasos();
    casos.push(caso);
    await fs.writeJson(archivoCasos, casos, { spaces: 2 });
};

module.exports = { leerCasos, guardarCaso };
