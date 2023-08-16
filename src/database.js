const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bot_cs_mix', 'wesley', 'botcsmix', {
  host: 'db',
  port: 5432,
  dialect: 'postgres',
  timezone: '-03:00',
});

// Teste a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Falha ao estabelecer a conexão:', err);
  });

module.exports = sequelize;
