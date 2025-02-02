import React, { useState, useEffect, useRef } from "react";
import { Header, Card, Loading } from "../components";
import * as ROUTES from "../routes";
import logo from "../nettube.png";
import youtube from "../API/functions";

const Browse = ({ slides }) => {
  const [category, setCategory] = useState("videos");
  const [slideRows, setSlideRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    setSlideRows(slides.videos);
  }, [slides, category]);

  const handleSubmit = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        q: search,
      },
    });

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
          <Header.Group style={{ marginLeft: "1rem" }}>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              style={{ marginRight: "10px" }}
            />

            <Header.Group>
              <Header.Text
                style={{ cursor: "pointer", fontSize: "1.125rem" }}
                onClick={() => {
                  handleSubmit(searchTerm);
                  executeScroll();
                }}
              >
                Search NetTube
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
          <Header.PlayButton
            onClick={() => {
              setSearchTerm(
                category === "videos" ? "Dune Trailer" : "Die Antwoord Tension"
              );
              handleSubmit(
                category === "videos" ? "Dune Trailer" : "Die Antwoord Tension"
              );
              executeScroll();
            }}
          >
            Play
          </Header.PlayButton>
        </Header.Feature>
      </Header>

      {searchTerm !== "" && searchResults.length === 0 ? <Loading /> : null}

      <Card.Group>
        <div ref={myRef} />
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
            <Card>
              <Card.Title>Search Results:</Card.Title>
              <Card.Entities>
                {searchResults
                  .filter((result, i) => searchResults.indexOf(result) < 5)
                  .map((result, i) => (
                    <Card.Item
                      key={i}
                      item={{
                        title: result.snippet.title,
                        description: result.snippet.description,
                        genre: searchTerm,
                        largeImg: result.snippet.thumbnails.high.url,
                        maturity: 11,
                        url: result.id.videoId,
                      }}
                    >
                      <Card.Image src={result.snippet.thumbnails.medium.url} />
                      <Card.Meta>
                        <Card.SubTitle>{result.snippet.title}</Card.SubTitle>
                        <Card.Text>{result.snippet.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
              </Card.Entities>
              <Card.Title></Card.Title>
              <Card.Entities>
                {searchResults
                  .filter((result, i) => searchResults.indexOf(result) > 4)
                  .map((result, i) => (
                    <Card.Item
                      key={i}
                      item={{
                        title: result.snippet.title,
                        description: result.snippet.description,
                        genre: searchTerm,
                        largeImg: result.snippet.thumbnails.high.url,
                        maturity: 11,
                        url: result.id.videoId,
                      }}
                    >
                      <Card.Image src={result.snippet.thumbnails.medium.url} />
                      <Card.Meta>
                        <Card.SubTitle>{result.snippet.title}</Card.SubTitle>
                        <Card.Text>{result.snippet.description}</Card.Text>
                      </Card.Meta>
                    </Card.Item>
                  ))}
              </Card.Entities>
              <Card.SearchFeature category={"search"} />
            </Card>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Header.PlayButton onClick={() => setSearchTerm("")}>
                Back
              </Header.PlayButton>
            </div>
          </>
        )}
      </Card.Group>
    </>
  );
};

export default Browse;
