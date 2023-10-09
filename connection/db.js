import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL = `mongodb+srv://${username}:${password}@projectnews.ktn8wos.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(URL , { useNewUrlParser: true });
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
