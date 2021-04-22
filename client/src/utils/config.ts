let HOST = 'http://121.5.65.243:3000/'
if(process.env.NODE_ENV==='development'){
    HOST = 'http://localhost:3000/'
}
export const host = HOST;