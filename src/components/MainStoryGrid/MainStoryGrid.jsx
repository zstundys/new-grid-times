import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import Advertisement from "../Advertisement";
import MainStory from "../MainStory";
import OpinionStory from "../OpinionStory";
import SecondaryStory from "../SecondaryStory";
import SectionTitle from "../SectionTitle";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <SecondaryStoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <>
              {index > 0 && <Divider />}
              <SecondaryStory key={story.id} {...story} />
            </>
          ))}
        </SecondaryStoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <>
              {index > 0 && <OpinionDivider />}
              <OpinionStory key={story.id} {...story} />
            </>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --gap: 48px;

  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: var(--gap);
  margin-bottom: var(--gap);

  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
    grid-template-columns: 1fr 252px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
    grid-template-columns: 1fr 386px 278px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    &::after {
      position: absolute;
      top: 0;
      right: calc(var(--gap) * -0.5);
      bottom: 0;
      border-left: 1px solid var(--color-gray-300);
      content: "";
    }
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    &::after {
      position: absolute;
      top: 0;
      right: calc(var(--gap) * -0.5);
      bottom: 0;
      border-left: 1px solid var(--color-gray-300);
      content: "";
    }
  }
`;

const SecondaryStoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 0 32px;

    & > * {
      flex: 1;
    }
  }
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid var(--color-gray-300);
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const OpinionDivider = styled(Divider)`
  @media ${QUERIES.tabletOnly} {
    display: none;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  position: relative;

  @media ${QUERIES.laptopAndUp} {
    &::before {
      position: absolute;
      top: calc(var(--gap) * -0.5);
      right: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid var(--color-gray-300);
      content: "";
    }
  }
`;

export default MainStoryGrid;
