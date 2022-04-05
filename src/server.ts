import express from 'express';
import "express-async-errors";
import { routes } from './routes';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use((err: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
   
    if(err instanceof Error) {
        response.status(400).json({
            message: err.message
        });
    }

    return response.status(500).json({
        message: 'Internal server error'
    });

});

app.use(routes);

app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(port, () => console.log(`Server started on ${process.env.BASE_URL}:${port}`));