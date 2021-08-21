import React from "react";

//graphql
import { NEW_RELEASES, FEATURED_MOVIES } from "@im/base/src/graphql/queries";

// Components
import FilmList from "@im/components/src/organisms/filmList";
import Banner from "../../organisms/banner";

function LandingPage() {
  return (
    <div>
      <Banner />
      <FilmList
        key="new-releases"
        label={"New Releases"}
        listKey={"new-releases"}
        query={NEW_RELEASES}
        dataPath={"getNewReleases"}
        application={"OTT"}
      />
      <FilmList
        key="featured-movies"
        label={"Featured Movies"}
        listKey={"featured"}
        isFeatured={true}
        showDetails
        query={FEATURED_MOVIES}
        dataPath={"getFeatured"}
        application={"OTT"}
      />
      <FilmList
        key="featured-movies"
        label={"Featured Movies"}
        listKey={"featured"}
        isFeatured={true}
        query={FEATURED_MOVIES}
        dataPath={"getFeatured"}
        application={"OTT"}
      />
      <Banner onlyOne />
      <FilmList
        key="featured-movies"
        label={"Featured Movies"}
        listKey={"new-releases"}
        isFeatured={true}
        showDetails
        isDetailsRightAligned
        query={FEATURED_MOVIES}
        dataPath={"getFeatured"}
        application={"OTT"}
      />
    </div>
  );
}

export default LandingPage;
