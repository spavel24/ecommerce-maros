import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Convertir la URL del archivo actual a una ruta de directorio para 'express.static'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// =====================================================================================
// MIDDLEWARES
// =====================================================================================
app.use(cors());
app.use(express.json());

// Sirve archivos estáticos (imágenes, etc.) desde la carpeta 'assets'.
// Asegúrate de que esta carpeta esté en tu directorio 'backend'.
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// =====================================================================================
// CONFIGURACIÓN DE LA BASE DE DATOS
// =====================================================================================
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'maros_ecommerce'
});

connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL.');
});

// =====================================================================================
// DEFINICIÓN DE ENDPOINTS
// =====================================================================================

// Endpoint para obtener productos destacados
app.get('/api/products/featured', (req, res) => {
  const sql = `
    SELECT 
      id, 
      name, 
      price, 
      originalPrice, 
      image_url as image, 
      category, 
      is_new as isNew
    FROM products 
    WHERE is_featured = 1
  `;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error al obtener productos destacados:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    res.json(results);
  });
});

// Endpoint para obtener categorías
app.get('/api/categories', (req, res) => {
  const sql = `
    SELECT 
      title, 
      description, 
      image_url as image, 
      product_count as count
    FROM categories
  `;
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error al obtener categorías:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    res.json(results);
  });
});

// =====================================================================================
// INICIAR SERVIDOR
// =====================================================================================
app.listen(PORT, () => {
  console.log(`Servidor de backend corriendo en http://localhost:${PORT}`);
});