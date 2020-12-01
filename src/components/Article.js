export default function ArticleList({ data }) {
    const list = data.map((item, index) => <ArticleCard {...item} key={index} />);
    return (
        <div className="article-list-container">{list}</div>
    );
}

export function ArticleCard({ title, date, content, bgImg }) {
    return (
        <div className="article-card-container" >
            <div style={{background: "url("+bgImg+")"}} className="article-card-bg"></div>
            <div className="card-desc">
                <div className="card-title">{title}</div>
                <span className="article-date">{date}</span>
                <div className="card-content">{content}</div>
            </div>
        </div>
    );
}