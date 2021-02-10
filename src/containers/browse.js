import React, { useState } from "react";
import Header from "../components/header";
import * as ROUTES from "../routes";
import logo from "../nettube.png";

const Browse = ({ videos }) => {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  return (
    <Header src={"dune"}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Header.TextLink
            active={category === "series" ? "true" : "false"}
            onClick={() => setCategory("series")}
          >
            Series
          </Header.TextLink>
          <Header.TextLink
            active={category === "films" ? "true" : "false"}
            onClick={() => setCategory("films")}
          >
            Films
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />

          <Header.Group>
            <Header.TextLink>Sign out</Header.TextLink>
          </Header.Group>
        </Header.Group>
      </Header.Frame>

      <Header.Feature>
        <Header.FeatureCallOut>Dune (2021) Trailer</Header.FeatureCallOut>
        <Header.Text>
          In the year 10191, a spice called melange is the most valuable
          substance in the universe, and its only source is the desert planet
          Arrakis. He who controls the Spice controls the universe...
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>
  );
};

export default Browse;
