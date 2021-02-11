import React, { useState, useEffect } from "react";
import { Header, Card, Loading } from "../components";
import * as ROUTES from "../routes";
import logo from "../nettube.png";

import youtube from "../API/functions";
import { SubTitle } from "./../components/jumbotron/styles/jumbotron";

// Set search term on search
// Useeffect Hook to call youtube API on search term chnage
// conditionall render cards or search results in return

const Browse = ({ slides }) => {
  const [category, setCategory] = useState("videos");
  const [slideRows, setSlideRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSlideRows(slides.videos);
  }, [slides, category]);

  useEffect(() => {
    // Request Youtube Api
  }, [searchTerm]);

  const handleSubmit = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });
    console.log(response.data.items);
    setSearchResults(response.data.items);
  };

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
              <Header.Text
                onClick={() => {
                  setSearchTerm("avengers");
                  handleSubmit("avengers");
                }}
              >
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

      {searchTerm !== "" && searchResults.length === 0 ? <Loading /> : null}

      <Card.Group>
        {searchTerm === "" ? (
          slideRows.map((slideItem, i) => (
            <Card key={i}>
              <Card.Title>{slideItem.title}</Card.Title>
              <Card.Entities>
                {slideItem.data.map((item) => (
                  <Card.Item key={item.id} item={item}>
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
          <>
            <Card.Title>Search Results</Card.Title>
            <Card.Entities>
              {searchResults.map((result, i) => (
                <Card.SearchItem key={i} item={result}>
                  <Card.Image /*src={`${item.previewImg}`}*/ />
                  <Card.Meta>
                    <Card.SubTitle>{result.snippet.title}</Card.SubTitle>
                    <Card.Text>{result.snippet.description}</Card.Text>
                  </Card.Meta>
                </Card.SearchItem>
              ))}
            </Card.Entities>
          </>
        )}
      </Card.Group>
    </>
  );
};

export default Browse;
