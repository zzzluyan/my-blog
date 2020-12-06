import ArticleList from './Article';
import NavigationBar from './NavigationBar';
import  articleListData  from '../blogs/index';

import { NAV_BAR } from '../util/MOCK_DATA';

export default function HomePage() {
    const navData = NAV_BAR;
    
    return (
        <div>
            <NavigationBar title="my-blog" barItems={navData} />
            <ArticleList data={articleListData} />
        </div>
    );
}

