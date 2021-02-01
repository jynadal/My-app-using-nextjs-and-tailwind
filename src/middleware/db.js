import mongoose from 'mongoose';

export async function dbConnect() {
    if(mongoose.connection.readyState >= 1) return

    return mongoose.connect(process.env.DB_CONN_STR, {
        newUrlPArser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    });
}