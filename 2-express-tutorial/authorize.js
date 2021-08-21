const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'john') {
        req.user = { name: 'john', id: 3 }
        console.log(req.user)
        next()
    } else {
        return res.status(404).send('Unauthorized')
    }
    console.log('authorize')
    next()
}
//if the user provides a query string in the URL, I will send back the resource!
//if the user doesn't provide a query sting, I will send back a 404
module.exports = authorize;