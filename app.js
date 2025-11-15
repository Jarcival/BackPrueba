const express = require("express");
          const cors = require("cors");
          const app = express();

          app.use(cors());
          app.use(express.json());

          // Conecta las rutas
          const questionsRoutes = require("./routes/questions.routes");
          app.use("/api/questions", questionsRoutes);
            
          // Arranque del servidor
          const PORT = process.env.PORT || 3000;
          app.listen(PORT, () => {
            //console.log(`Servidor escuchando en http://localhost:${PORT}`); La quite , para probar en render
            console.log(`Servidor corriendo en puerto ${PORT}`);

          });