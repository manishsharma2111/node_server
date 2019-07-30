import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    email: { type: 'string', required: true },
    password: { type: 'string', required: true },
    name: { type: 'string', lowercase: true }
}, { timestamps: true });

export default mongoose.model('User', UserSchema)
