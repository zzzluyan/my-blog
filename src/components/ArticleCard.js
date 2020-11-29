export default function ArticleCard({ title, date, content }) {
    return (
        <div className="article-card-container">
            <div className="card-title">{title}</div>
            <span className="article-date">{date}</span>
            <div className="card-content">{content}</div>
        </div>
    );
}