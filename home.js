import Footer from "./footer";
import img from "./images/rinku.jpeg";
import ire from "./images/India.jpg";
import asi from "./images/asia.jpeg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetMatchesQuery, useGetMatchDetailsQuery } from "./cricbuzzApi";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://unofficial-cricbuzz.p.rapidapi.com/matches/list`,
      params: { matchState: "live" },
      headers: {
        "X-RapidAPI-Host": " unofficial-cricbuzz.p.rapidapi.com",
        "X-RapidAPI-Key": "3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMatches(response.data.typeMatches);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="home">
        <div className="topbar">CricketConnect</div>
        <div className="belowtopbar">
          <p style={{ color: "black", fontWeight: "600" }}>
            Indian Premier League 2023
          </p>
          <p style={{ opacity: "0.5", fontWeight: "600" }}>
            All the updates from IPL 2023
          </p>
        </div>
        <div className="matches">Matches</div>
        <div className="matchescontainer">
          {matches ? (
            <div>
              {matches.map((m, index) => (
                <>
                  <div
                    className="match"
                    onClick={() =>
                      navigate(
                        `/matchdetail/${m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo.matchId}`
                      )
                    }
                  >
                    <p>{m.seriesAdWrapper[0].seriesMatches.seriesName}</p>
                    <h1>
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .team1.teamName
                      }{" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team1Score?.inngs1?.runs
                      }
                      /
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team1Score?.inngs1?.wickets
                      }
                    </h1>
                    <h1>
                      {" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .team2.teamName
                      }{" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team2Score?.inngs1?.runs
                      }
                      /
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team2Score?.inngs1?.wickets
                      }
                    </h1>
                    <h2>
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .status
                      }
                    </h2>
                  </div>
                </>
              ))}
              <button className="more">More Matches</button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <CircularProgress />
            </div>
          )}
        </div>
        <div className="matches">Cricket Videos</div>
        <div className="videoscontainer">
          <div className="video">
            <img src={img} alt="" width="80" />
            <h2>Rinku singh smashed five sixes against gujarat titans</h2>
          </div>
          <div className="video">
            <img src={ire} alt="" width="80" />
            <h2>India defeated ireland in a rain interrupted t20 series by 2-0</h2>
          </div>
          <div className="video">
            <img src={asi} alt="" width="80" />
            <h2>Get ready for power-packed series starting from Aug 30</h2>
          </div>
        </div>
        <button className="more">More Videos</button>
        <div className="matches">IPL 2023 Stats</div>
        <div style={{ display: "flex", padding: "1vmax" }}>
          <div style={{ width: "35%" }}>
            <h2 style={{ opacity: "0.5", fontSize: "16px" }}>Orange cap</h2>
            <h2 style={{ opacity: "0.5", fontSize: "16px" }}>Purple cap</h2>
          </div>
          <div style={{ width: "50%" }}>
            <h2 style={{ fontSize: "16px", color: "Orange" }}>
              Shubhman Gill{" "}
              <span style={{ fontSize: "12px", color: "#113D59" }}>
                890 runs in 17 innings
              </span>
            </h2>
            <h2 style={{ fontSize: "16px", color: "Purple" }}>
              Mohammed Shami{" "}
              <span style={{ fontSize: "12px", color: "#113D59" }}>
                28 Wickets
              </span>
            </h2>
          </div>
        </div>
        <div className="matches">Top Stories</div>
        <button className="more">More Stories</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
