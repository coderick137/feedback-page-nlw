import express from 'express';
import { prisma } from './prisma';

const app = express();
app.use(express.json());

app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const newFeedback = await prisma.feedback.create({
        data:{
            type: type,
            comment: comment,
            screenshot: screenshot
        }
    })
    res.status(201).send({ data: newFeedback });
})

app.listen(3333, () => {
    console.log('Server started on port 3333');
})