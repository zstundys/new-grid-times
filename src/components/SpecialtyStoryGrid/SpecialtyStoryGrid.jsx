import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import { MARKET_DATA, SPORTS_STORIES } from "../../data";

import MarketCard from "../MarketCard";
import MiniStory from "../MiniStory";
import SectionTitle from "../SectionTitle";

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visit Markets data »",
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: "/sports",
            content: "Visit Sports page »",
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --gap: 48px;

  display: grid;
  gap: var(--gap);

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const MarketsSection = styled.section`
  display: grid;
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(min(11.75rem, 100%), 1fr));
  }
`;

const SportsSection = styled.section`
  display: grid;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    &::before {
      position: absolute;
      top: 0;
      left: calc(var(--gap) * -0.5);
      bottom: 0;
      border-left: 1px solid var(--color-gray-300);
      content: "";
    }
  }
`;

const SportsStories = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    overflow: auto;

    > * {
      flex: 1;
      min-width: 220px;
    }
  }
`;

export default SpecialtyStoryGrid;
