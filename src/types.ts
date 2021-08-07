export default interface IMongoDBUser {
    googleId?: string;
    facebookId?: string;
    githubId?: string;
    username: string;
    _id: string;
    __v: number;
}