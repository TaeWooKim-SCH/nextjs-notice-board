import { MongoClient } from "mongodb";
const url = 'mongodb+srv://admin:tjfd6055@zop1234.w45q5gz.mongodb.net/notice-board?retryWrites=true&w=majority';
const options = {useNewUrlParser: true};
let connectDB;

if (process.env.NODE_ENV === "development") {
    if (!global._mongo) { // 개발중일땐 전역에다 저장
        global._mongo = new MongoClient(url, options).connect();
    }
    connectDB = global._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}

// const client = await MongoClient.connect(
//     'mongodb+srv://admin:tjfd6055@zop1234.w45q5gz.mongodb.net/?retryWrites=true&w=majority',
//     {useNewUrlParser: true}
// );

export {connectDB};