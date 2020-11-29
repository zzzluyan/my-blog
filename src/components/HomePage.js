import ArticleCard from './ArticleCard';
import NavigationBar from './NavigationBar';
import { ARTICLE_DATA, NAV_BAR } from '../util/MOCK_DATA';

export default function HomePage() {
    const data = ARTICLE_DATA;
    const navData = NAV_BAR;
    let List = data.map((item, index) => <ArticleCard {...item} key={index} />);
    return (
        <div>
            <NavigationBar title="my-blog" barItems={navData} />
            <div className="article-list">{List}</div>
            
        </div>
    );
}

