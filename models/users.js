import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already registered!"],
        required: [true, "Email is required!"],
    },
    username: {
        type: String,
        required: [true, "Username is required!"],
        // match: [
        //     /^(?=.{5,10}$)[a-zA-Z0-9]+$/,
        //     "Invalid Username, it should contain 5-10 unique alphanumeric characters!",
        // ],
    },
    image: {
        type: String,
    },
});

const User = models.User || model("User", UserSchema);

export default User;
