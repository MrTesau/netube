import React, { useState, useEffect } from "react";
import { Header, Card } from "../components";
import * as ROUTES from "../routes";
import logo from "../nettube.png";

// Set search term on search
// Useeffect Hook to call youtube API on search term chnage
// conditionall render cards or search results in return

const Browse = ({ slides }) => {
  const [category, setCategory] = useState("videos");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    setSlideRows(slides.videos);
  }, [slides, category]);

  useEffect(() => {
    // Request Youtube Api
  }, [searchTerm]);
  return (
    <>
      <Header
        src={category === "videos" ? "dune" : "tension1"}
        dontShowOnSmallViewPort
      >
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
              <Header.Text onClick={() => setSearchTerm("poo")}>
                Search{" "}
              </Header.Text>
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
      <Card.Group>
        {searchTerm === "" ? (
          slideRows.map((slideItem) => (
            <Card key={`${slideItem.id}`}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image src={`${item.previewImg}`} />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category} />
            </Card>
          ))
        ) : (
          <div>search results here</div>
        )}
      </Card.Group>
    </>
  );
};

export default Browse;
