'use client'
import { HowItWorks } from "./common/arrays";
import {
  Header,
  HeaderTitle,
  IdeaImage,
  IdeaText,
  IdeaTextWrapper,
  IdeaTitle,
  IdeaWrapper,
  PropositionTile,
  PropositionsContainer,
  PropositionsTitle,
  PropositionsWrapper,
  TileDate,
  TileTitle,
  WorkContainer,
  WorkTile,
  WorkTileNumber,
  WorkTileText,
  WorkTitle,
  WorkWrapper,
  Wrapper
}
  from "./styledHome";
import hall from './common/Images/HomeImages/headerBackground.svg';
import { ButtonLink } from "./common/UI/UI";



export default function Home() {

  const tiles = Array.from({ length: 8 });

  return (
    <Wrapper>
      <Header>
        <HeaderTitle>Znajdź swojego partnera w długie wędrówki po Tatrach</HeaderTitle>
        <ButtonLink
          text="Zaproponuj trasę"
          href="/Profile"
          $background="blue"
        />
      </Header>

      <PropositionsWrapper>
        <PropositionsTitle>
          Najnowsze propozycje wyjść
        </PropositionsTitle>

        <PropositionsContainer>
          {tiles.map((_, index) => (
            <PropositionTile key={index}>
              <TileTitle>Rysy</TileTitle>
              <TileDate>24.08.2024</TileDate>
            </PropositionTile>
          ))}
        </PropositionsContainer>
        <ButtonLink
          text="Sprawdź wszytskie propozycje"
          href="/Login"
          $background="blue"
        />
      </PropositionsWrapper>

      <WorkWrapper>
        <WorkTitle>Jak to działa?</WorkTitle>
        <WorkContainer>
          {HowItWorks.map((tile) => (
            <WorkTile key={tile.number}>
              <WorkTileNumber>{tile.number}</WorkTileNumber>
              <WorkTileText>{tile.text}</WorkTileText>
            </WorkTile>
          ))}
        </WorkContainer>
      </WorkWrapper>

      <IdeaWrapper>
        <IdeaTextWrapper>
          <IdeaTitle>Skąd pomysł na taką stronę?</IdeaTitle>
          <IdeaText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem sed sint asperiores eum nobis doloribus minima alias eius? Accusamus dignissimos praesentium quos vitae hic enim quis ut rem est.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolorem sed sint asperiores eum nobis doloribus minima alias eius? Accusamus dignissimos praesentium quos vitae hic enim quis ut rem est.
          </IdeaText>
        </IdeaTextWrapper>
        <IdeaImage src={hall.src} alt="Hala Gąsienicowa" />
      </IdeaWrapper>
    </Wrapper>
  );
}
