import GridItem from 'components/GridItem/GridItem';
import type { NextPage } from 'next';
import UnauthorizedTemplate from 'templates/UnauthorizedTemplate';
import { gridData } from 'data/front-page-grid.json';

const Home: NextPage = () => (
  <UnauthorizedTemplate
    title="Strona główna"
    description="Strona główna Quizaiton"
  >
    <div className="grid grid-auto gap-7">
      {gridData.map(({ imageAlt, imagePath, subtitle, title }) => (
        <GridItem
          image={imagePath}
          imageAlt={imageAlt}
          heading={title}
          content={subtitle}
        />
      ))}
    </div>
  </UnauthorizedTemplate>
);

export default Home;
