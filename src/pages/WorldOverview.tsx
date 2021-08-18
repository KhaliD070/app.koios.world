import worldsData from '../assets/data/Worlds.json';
import {useParams, Link} from "react-router-dom";
import QuickLinks from "../components/QuickLinks";
import LinkCard from "../components/LinkCard";
import DiscordEmbed from '../components/discordEmbed';
import {Slugify} from '../components/Util/Slugify';
import SmallCard from "../components/SmallCard";
import LearnToNavigate from "../components/LearnToNavigate";
import LevelCards from "../components/LevelCards";
import Team from "../components/Team";
import {useRef} from "react";
import cardData from "../assets/data/overviewHeaderLinks.json";
import {Icon} from "../components/Util/Icon";
import {SvgSprite} from "../components/Util/SvgSprite";

type CourseContentParams = {
  worldContent: string;
};

const WorldOverview = () => {
  const {worldContent} = useParams<CourseContentParams>();
  const world = worldsData.find((item) => Slugify(item.url, {
    lowerCase: true,
    replaceAmpersand: "and"
  }) === worldContent);

  const learn = useRef(null);
  const team = useRef(null);

  return (
    <>
      <div className={'worldOverviewHeader'}>
        <div className={'worldOverviewHeader__titleRow'}>
          <h1 className={'worldOverviewHeader__titleRow__title'}>{world?.course}</h1>
          <p className={'worldOverviewHeader__titleRow__description'}>{world?.description}</p>
        </div>
        {/*<SmallCard/>*/}
        <div className={"smallCard-container"}>
          {cardData.map((data) => {
            return (
              <div className={"smallCard"}>
                <div className={"smallCard__title-row"}>
                  <h2 className={"smallCard__title"}>{data.title}</h2>
                  <Icon type={data.icon as keyof typeof SvgSprite}/>
                </div>
                <p className={"smallCard__description"}>{data.description}</p>
                {data.title === 'Learn' &&
                  <button className={"smallCard__link"} onClick={() => learn.current.scrollIntoView({behavior: 'smooth'})}>{data.linkTitle}</button>
                }
                {data.title === 'Earn' &&
                  <Link className={"smallCard__link"} to={'/earn'}>{data.linkTitle}</Link>
                }
                {data.title === 'Connect' &&
                  <button className={"smallCard__link"} onClick={() => team.current.scrollIntoView({behavior: 'smooth'})}>{data.linkTitle}</button>
                }
              </div>
            )
          })
          }
        </div>
      </div>
      <div className={'container worldOverviewContainer'}>
        <div ref={learn}>
          <LearnToNavigate world={world}/>
          <LevelCards world={world} baseUrl={worldContent}/>
        </div>
        <DiscordEmbed/>
        <div ref={team}>
          <Team world={world}/>
        </div>
        {/*<QuickLinks data={world?.quickLinks}/>*/}
        {/*<div className={'linkCardContainer'}>*/}
        {/*  <LinkCard data={world?.content} baseUrl={worldContent} title={'Learn'}/>*/}
        {/*  <LinkCard data={world?.earn} baseUrl={worldContent} title={'Earn'}/>*/}
        {/*  <LinkCard data={world?.connect} baseUrl={worldContent} title={'Connect'}/>*/}
        {/*</div>*/}
      </div>
    </>
  )
}
export default WorldOverview;

