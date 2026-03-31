export default async function handler(req,res){
    const {movieId}=req.body;
    try{
        const response=await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos`,
            {
                headers:{
                    Authorization:`Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
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