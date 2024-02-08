/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { Styled, jsx } from "theme-ui"

import LandingSectionTitle from "./landing-section-title"
import ShowItem from "./show-item"

const Shows = ({ shows = [] }) => {
  const sortedShows = shows.sort((a,b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const upcoming = shows.filter((show) => {
    return new Date(show.date) > new Date();
  });

  const past = sortedShows.filter((show) => {
    return new Date(show.date) < new Date();
  });

  return (
    <section id="shows" sx={{ variant: "layout.landingSection" }}>
      {upcoming.length > 0 && (
      <>
        <LandingSectionTitle>Upcoming shows</LandingSectionTitle>
        <Styled.ol
          sx={{
            m: 0,
            p: 0,
            mb: [4, 5],
            listStyle: "none",
          }}
        >
          {upcoming.map(node => {
              return <ShowItem {...node} key={node.id} />
            })}
        </Styled.ol>
        </>
      )}
      {past.length > 0 && (
      <>
        <LandingSectionTitle>Past shows</LandingSectionTitle>
        <ol
          sx={{
            m: 0,
            p: 0,
            listStyle: "none",
          }}
        >
          {past.map(node => {
              return <ShowItem {...node} key={node.id} />
            })}
        </ol>
        </>
      )}
    </section>
  )
}

export default Shows
