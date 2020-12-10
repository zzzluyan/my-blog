import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';

// 主页-文章卡片列表
export default function ArticleList({ data }) {
    const list = data.map((item, index) => <ArticleCard {...item} key={index} />);
    return (
        <div className="article-list-container">{list}</div>
    );
}

export function ArticleCard({ title, date, ContentCom, bgImg, contentId }) {
    let history = useHistory();
    console.log(history);
    const toArticleDetail = (id) => {
        history.push(`./article/${id}`)
    }
    return (
        <div className="article-card-container" onClick={toArticleDetail.bind(this, contentId)}>
            <div style={{ background: "url(" + bgImg + ")" }} className="article-card-bg"></div>
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

// 文章页 - 文章列表
export function ArticlePage({ }) { }

// 文章详情页（通过卡片点击 / 文章列表点击进入）
export function ArticleDetail({ }) { }