export default async function handler(req,res){
    const {movieId}=req.query;
    try{
        const response=await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            {
                headers:{
                    Authorization:`Bearer ${process.env.TMDB_TOKEN}`,
                    "Content-Type":"application/json",
                },
            }
        );

        const data=await response.json();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({error:"Failed to Fetch Trailer"});
    }
}