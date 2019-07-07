let server = ''
if (process.env.NOSE_ENV = 'development') {
    server = 'http://localhost:8888/'
} else {
    server = ''
}
export const SERVER = server