const express = require('express');
const app = express();
const port = 4300;
const bodyParser = require("body-parser");
const cors = require('cors')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//files
require("./db/db");
const user = require("./routes/UserRoutes");
const candidate = require("./routes/CandidateRoutes");
const position = require("./routes/PositionsRoutes");

//swagger setup
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        tittle: "My apis",
        version: "1.0.0"
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                in: 'header',
                bearerFormat: 'JWT',
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
};

const options = {
    swaggerDefinition,
    apis: ['./cotrollers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


//use
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//routing
app.use("/user", user)
app.use("/candidate", candidate);
app.use("/position", position);


app.listen(port, () => {
    console.log(`running on port ${port}`);
})