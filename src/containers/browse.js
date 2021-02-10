import React, { useState } from "react";
import Header from "../components/header";
import * as ROUTES from "../routes";
import logo from "../nettube.png";

const Browse = ({ videos }) => {
  const [category, setCategory] = useState("videos");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  return (
    <Header src={category === "videos" ? "dune" : "tension1"}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink
            active={category === "videos" ? "true" : "false"}
            onClick={() => setCategory("videos")}
          >
            Videos
          </Header.TextLink>
          <Header.TextLink
            active={category === "music" ? "true" : "false"}
            onClick={() => setCategory("music")}
          >
            Music
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            style={{ marginRight: "10px" }}
          />

          <Header.Group>
            <Header.Text>Search NetTube</Header.Text>
          </Header.Group>
        </Header.Group>
      </Header.Frame>

      <Header.Feature>
        <Header.FeatureCallOut>
          {category === "videos" ? `Dune (2021) Trailer` : `Tension (2012)`}
        </Header.FeatureCallOut>
        <Header.Text>
          {category === "videos"
            ? `In the year 10191, a spice called melange is the most valuable
          substance in the universe, and its only source is the desert planet
          Arrakis. He who controls the Spice controls the universe...`
            : `Ten$ion is the second studio album by South African hip-hop/rave group Die Antwoord. 
            The album was released on the iTunes Store on 29 January 2012.
            `}
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>
  );
};

export default Browse;
