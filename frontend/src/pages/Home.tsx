import React from 'react';
import { Link } from 'react-router-dom';


const sample = [
{id:'1', title:'Welcome to SimpleBrowser', excerpt:'A tiny browser with blog UI.'}
];


export default function Home(){
return (
<div>
{sample.map(a=> (
<article key={a.id} style={{marginBottom:18}}>
<h3><Link to={`/article/${a.id}`}>{a.title}</Link></h3>
<p>{a.excerpt}</p>
</article>
))}
</div>
)
}
