import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';


export default function App(){
return (
<BrowserRouter>
<div style={{display:'flex'}}>
<aside style={{width:260, padding:16, borderRight:'1px solid #ddd'}}>
<h2>MyBlog</h2>
<nav>
<Link to="/">Home</Link>
</nav>
</aside>
<main style={{flex:1, padding:24}}>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/article/:id" element={<Article/>} />
</Routes>
</main>
</div>
</BrowserRouter>
)
}
