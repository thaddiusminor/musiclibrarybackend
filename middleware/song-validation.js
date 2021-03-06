exports.validateSongs = (req, res, next) => { 
    const data = req.body; 
    if( 
        (data.hasOwnProperty('title') && typeof(data.title) === 'string') && 
        (data.hasOwnProperty('album') && typeof(data.album) === 'string') && 
        (data.hasOwnProperty('artist') && typeof(data.artist) === 'string') && 
        (data.hasOwnProperty('genre') && typeof(data.genre) === 'number') &&
        (data.hasOwnProperty('releaseDate') && typeof(data.releaseDate) === 'number') 
        ){ 
            return next(); 
        }
        else{ 
            return res.status(400).send({error: 'Missing required properties.'}); 
        } 
} 