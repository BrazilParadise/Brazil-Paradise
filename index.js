const express = require('express');
const { getRandomJoke, getMultipleJokes } = require('./jokeService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

/**
 * GET /joke - Retorna uma piada aleatória
 */
app.get('/joke', async (req, res) => {
  try {
    const joke = await getRandomJoke();
    res.json({
      success: true,
      joke: joke,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar piada',
      error: error.message,
    });
  }
});

/**
 * GET /jokes?count=5 - Retorna múltiplas piadas
 */
app.get('/jokes', async (req, res) => {
  try {
    const count = parseInt(req.query.count) || 5;
    
    // Validar limite máximo
    if (count > 20) {
      return res.status(400).json({
        success: false,
        message: 'Máximo de 20 piadas por requisição',
      });
    }

    const jokes = await getMultipleJokes(count);
    res.json({
      success: true,
      count: jokes.length,
      jokes: jokes,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erro ao buscar piadas',
      error: error.message,
    });
  }
});

/**
 * GET / - Página inicial
 */
app.get('/', (req, res) => {
  res.json({
    name: 'Random Joke Generator API',
    version: '1.0.0',
    endpoints: {
      'GET /joke': 'Retorna uma piada aleatória',
      'GET /jokes?count=5': 'Retorna múltiplas piadas (máximo 20)',
    },
  });
});

// Tratamento de erros 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint não encontrado',
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🎭 Servidor de piadas rodando em http://localhost:${PORT}`);
  console.log(`📝 Endpoints disponíveis:`);
  console.log(`   - GET http://localhost:${PORT}/joke`);
  console.log(`   - GET http://localhost:${PORT}/jokes?count=5`);
});

module.exports = app;
