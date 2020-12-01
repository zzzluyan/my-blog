import ArticleList from './Article';
import NavigationBar from './NavigationBar';
import { ARTICLE_DATA, NAV_BAR } from '../util/MOCK_DATA';

export default function HomePage() {
    const articleList = ARTICLE_DATA;
    const navData = NAV_BAR;
    
    return (
        <div>
            <NavigationBar title="my-blog" barItems={navData} />
            <ArticleList data={articleList} />
        </div>
    );
}

