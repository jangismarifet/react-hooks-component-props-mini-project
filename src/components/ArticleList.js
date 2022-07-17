import React from "react";
import Article from "./Article";

function ArticleList({ arts }) {
    return (
        <main>
            {arts?.map(art => {
                return <Article key={art.id} title={art.title} date={art.date} preview={art.preview}/>
            })}
        </main>
    )
}

export default ArticleList;