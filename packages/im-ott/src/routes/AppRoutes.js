import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import AppLoader from "../molecules/appLoader";
import AppSkeleton from "../organisms/appSkeleton";
import WatchList from "../pages/watchList";
import FilmDetails from "../pages/filmDetails";
import LandingPage from "../pages/landingPage";

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      AppLoader.setVisibility(false);
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    AppLoader.setVisibility(true);
    return null;
  }

  return (
    <AppSkeleton>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/watchlist" component={WatchList} />
        <Route exact path="/film/:filmId" component={FilmDetails} />
      </Switch>
    </AppSkeleton>
  );
};

export default AppRoutes;