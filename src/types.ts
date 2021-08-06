export default interface IMongoDBUser {
    googleId?: string;
    twitterId?: string;
    githubId?: string;
    username: string;
    _id: string;
    __v: number;
}