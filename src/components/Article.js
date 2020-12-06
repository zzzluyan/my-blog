import { Suspense } from "react";

export default function ArticleList({ data }) {
    const list = data.map((item, index) => <ArticleCard {...item} key={index} />);
    return (
        <div className="article-list-container">{list}</div>
    );
}

export function ArticleCard({ title, date, ContentCom, bgImg }) {
    const toArticleDetail = () => {}
    return (
        <div className="article-card-container" onClick={toArticleDetail}>
            <div style={{background: "url("+bgImg+")"}} className="article-card-bg"></div>
            <div className="card-desc">
                <div className="card-title">{title}</div>
                <span className="article-date">{date}</span>
                <div className="card-content">
                    <Suspense fallback={<div>loading..</div>}>
                        <ContentCom />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}