import express, { response } from 'express';
import "express-async-errors";

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

app.listen(port, () => console.log(`Server started on http://localhost:${port}`));