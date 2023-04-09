import {NavAwardIcon, NavCelebIcon, NavCommunityIcon, NavMovieIcon, NavTVIcon, NavWatchIcon} from "./svgs"

export const navlist = [
  {
    id : 1,
    icon : <NavMovieIcon />,
    heading : "Movies",
    list : ["Release Calender", "Top 250 Movies","Most Popular Movies", "Browse Movies by Genre", "Top Box Office", "Showtime & Tickets", "Movie News", "India Movie Spotlight" ]
  },
  {
    id : 2,
    icon : <NavTVIcon />,
    heading : "TV Shows",
    list : ["What's on TV & Streaming", "Top 250 TV Shows","Most Popular TV Shows", "Browse TV Shows by Genre", "TV News", "India TV Spotlight" ]
  },
  {
    id : 3,
    icon : <NavAwardIcon />,
    heading : "Awards & Events",
    list : ["Oscars", "SXSW","Star Wars Celebration", "Cannes", "STARmeter Awards", "Awards Central", "Festival Central", "All Events" ]
  },
  {
    id : 4,
    icon : <NavCelebIcon />,
    heading : "Celebs",
    list : ["Born Today", "Most Popular","Celebrity News" ]
  },
  {
    id : 5,
    icon : <NavWatchIcon />,
    heading : "Watch",
    list : ["What to Watch", "Latest Trailers","IMDb Originals", "IMDb Picks", "IMDb Podcasts" ]
  },
  {
    id : 6,
    icon : <NavCommunityIcon />,
    heading : "Community",
    list : ["Help Center", "Contributor Zone","Polls"]
  },
]