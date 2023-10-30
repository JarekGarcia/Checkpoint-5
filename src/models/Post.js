export class Post {
    constructor(data) {
        this.id = data.id
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.likeIds = data.likeIds
        this.likes = data.likes
    }
}

// const postData{
//     {
//         "_id": "653d61eff7657dbfd719de6a",
//         "body": "How cool codes post make me feel.",
//         "imgUrl": "https://plus.unsplash.com/premium_photo-1681965459294-0270f3585061?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         "creatorId": "6525cefac22ddff8178f8c70",
//         "likeIds": [
//             "65382bc540571c6df979aa3a",
//             "6525cefac22ddff8178f8c70",
//             "653834f10bac5abaf4ae93dc"
//         ],
//         "createdAt": "2023-10-28T19:33:03.378Z",
//         "updatedAt": "2023-10-28T21:38:45.473Z",
//         "__v": 15,
//         "creator": {
//             "_id": "6525cefac22ddff8178f8c70",
//             "subs": [
//                 "auth0|6525cefa2ce43a0d74f8bdf4"
//             ],
//             "email": "bobbarker@wheelofhouses.net",
//             "name": "bobbarker",
//             "picture": "https://s.gravatar.com/avatar/a547c8b6f16a4d12ea4e9b06e6eb8b8e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbo.png",
//             "bio": "",
//             "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
//             "github": "",
//             "linkedin": "",
//             "resume": "",
//             "class": "",
//             "graduated": false,
//             "createdAt": "2023-10-10T22:23:59.723Z",
//             "updatedAt": "2023-10-10T22:23:59.723Z",
//             "__v": 0,
//             "id": "6525cefac22ddff8178f8c70"
//         },
//         "likes": [
//             {
//                 "_id": "65382bc540571c6df979aa3a",
//                 "name": "couldbeRhys",
//                 "picture": "https://media4.giphy.com/media/TUOSneOOtImPurKwph/200w.webp?cid=ecf05e47e9qdwwicktryejztdmipcbncr4ssl528u1atxtcn&ep=v1_gifs_search&rid=200w.webp&ct=g",
//                 "id": "65382bc540571c6df979aa3a"
//             },
//             {
//                 "_id": "6525cefac22ddff8178f8c70",
//                 "name": "bobbarker",
//                 "picture": "https://s.gravatar.com/avatar/a547c8b6f16a4d12ea4e9b06e6eb8b8e?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fbo.png",
//                 "id": "6525cefac22ddff8178f8c70"
//             },
//             {
//                 "_id": "653834f10bac5abaf4ae93dc",
//                 "name": "Cool codes",
//                 "picture": "https://s.gravatar.com/avatar/52044ae8aaf4eaae30bd49c6c2ce2570?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fco.png",
//                 "id": "653834f10bac5abaf4ae93dc"
//             }
//         ],
//         "id": "653d61eff7657dbfd719de6a"
//     }
// }