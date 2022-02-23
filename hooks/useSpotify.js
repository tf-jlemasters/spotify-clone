import { useEffect } from "react";
import { useSession } from "next-auth/react";
// import spotifyApi from "../lib/spotify";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET
});

const useSpotify = () => {
    const { data: session, status } = useSession();
    useEffect(() => {
    if (session) {
      // if refresh access token attempt fails, redirect user to login...
        if (session.error === "RefreshAccessTokenError") {
        signIn();
        }
        spotifyApi.setAccessToken(session.user.accessToken);
    }
    }, [session]);
    return spotifyApi;
};

export default useSpotify;