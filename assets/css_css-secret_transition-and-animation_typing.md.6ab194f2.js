import{V as t}from"./chunks/vmp_components.0f6a3520.js";import{_ as r,o as p,c as e,p as E,m as y,k as s,H as a,w as o,l as i,Q as F,a as n}from"./chunks/framework.c3fd347f.js";const d={},b=l=>(E("data-v-5c8f965a"),l=l(),y(),l),C={class:"box"},m=b(()=>s("h1",null,"CSS is awesome!",-1)),u=[m];function h(l,c){return p(),e("div",C,u)}const B=r(d,[["render",h],["__scopeId","data-v-5c8f965a"]]),A=F(`<h1 id="打字效果" tabindex="-1">打字效果 <a class="header-anchor" href="#打字效果" aria-label="Permalink to &quot;打字效果&quot;">​</a></h1><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;CSS is awesome&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;CSS is awesome&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">typing</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">@keyframes</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">blink-caret</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">50%</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">border-color</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">currentColor</span><span style="color:#E1E4E8;">; }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span><span style="color:#F97583;">ch</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">overflow</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">hidden</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">white-space</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">nowrap</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">border-right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">.05</span><span style="color:#F97583;">em</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">solid</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">transparent</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">animation</span><span style="color:#E1E4E8;">: typing </span><span style="color:#79B8FF;">6</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">steps</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">), blink-caret </span><span style="color:#79B8FF;">1</span><span style="color:#F97583;">s</span><span style="color:#E1E4E8;"> step(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">) </span><span style="color:#79B8FF;">infinite</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#E36209;">typing</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">from</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">@keyframes</span><span style="color:#24292E;"> </span><span style="color:#E36209;">blink-caret</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">50%</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">border-color</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">currentColor</span><span style="color:#24292E;">; }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">h1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">15</span><span style="color:#D73A49;">ch</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">overflow</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">hidden</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">white-space</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">nowrap</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">border-right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">.05</span><span style="color:#D73A49;">em</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">solid</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">transparent</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">animation</span><span style="color:#24292E;">: typing </span><span style="color:#005CC5;">6</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">steps</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">15</span><span style="color:#24292E;">), blink-caret </span><span style="color:#005CC5;">1</span><span style="color:#D73A49;">s</span><span style="color:#24292E;"> step(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">infinite</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;h1&#39;</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">each</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">).textContent.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">, s </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">).style;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        s.width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> len </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;ch&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        s.animationFunction </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;step(&quot;+ len + &quot;), step(1)&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;h1&#39;</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">each</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).textContent.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">, s </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">$</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">).style;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        s.width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> len </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;ch&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        s.animationFunction </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;step(&quot;+ len + &quot;), step(1)&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),g=s("div",{class:"language-vue vp-adaptive-theme line-numbers-mode"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"vue"),s("pre",{class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"box"'),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"h1"),s("span",{style:{color:"#E1E4E8"}},">CSS is awesome!</"),s("span",{style:{color:"#85E89D"}},"h1"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".box"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"var"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"--demo-blue"),s("span",{style:{color:"#E1E4E8"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@keyframes"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#FFAB70"}},"typing"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"@keyframes"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#FFAB70"}},"caret"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#B392F0"}},"50%"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"border-right-color"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"transparent"),s("span",{style:{color:"#E1E4E8"}},"; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#85E89D"}},"h1"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"font"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"bold"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"200"),s("span",{style:{color:"#F97583"}},"%"),s("span",{style:{color:"#E1E4E8"}}," Consolas, Monaco, "),s("span",{style:{color:"#79B8FF"}},"monospace"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#6A737D"}},"/*width: 8.25em;*/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#F97583"}},"ch"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"white-space"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"nowrap"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"overflow"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"hidden"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"border-right"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},".05"),s("span",{style:{color:"#F97583"}},"em"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	"),s("span",{style:{color:"#79B8FF"}},"animation"),s("span",{style:{color:"#E1E4E8"}},": typing "),s("span",{style:{color:"#79B8FF"}},"8"),s("span",{style:{color:"#F97583"}},"s"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"steps"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"	           caret "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"s"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"steps"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#79B8FF"}},"infinite"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"box"'),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"h1"),s("span",{style:{color:"#24292E"}},">CSS is awesome!</"),s("span",{style:{color:"#22863A"}},"h1"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".box"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"var"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"--demo-blue"),s("span",{style:{color:"#24292E"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@keyframes"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#E36209"}},"typing"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"@keyframes"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#E36209"}},"caret"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6F42C1"}},"50%"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"border-right-color"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"transparent"),s("span",{style:{color:"#24292E"}},"; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#22863A"}},"h1"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"font"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"bold"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"200"),s("span",{style:{color:"#D73A49"}},"%"),s("span",{style:{color:"#24292E"}}," Consolas, Monaco, "),s("span",{style:{color:"#005CC5"}},"monospace"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#6A737D"}},"/*width: 8.25em;*/")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#D73A49"}},"ch"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"white-space"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"nowrap"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"overflow"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"hidden"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"border-right"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},".05"),s("span",{style:{color:"#D73A49"}},"em"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	"),s("span",{style:{color:"#005CC5"}},"animation"),s("span",{style:{color:"#24292E"}},": typing "),s("span",{style:{color:"#005CC5"}},"8"),s("span",{style:{color:"#D73A49"}},"s"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"steps"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}},"),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"	           caret "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"s"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"steps"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#005CC5"}},"infinite"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])]),s("div",{class:"line-numbers-wrapper","aria-hidden":"true"},[s("span",{class:"line-number"},"1"),s("br"),s("span",{class:"line-number"},"2"),s("br"),s("span",{class:"line-number"},"3"),s("br"),s("span",{class:"line-number"},"4"),s("br"),s("span",{class:"line-number"},"5"),s("br"),s("span",{class:"line-number"},"6"),s("br"),s("span",{class:"line-number"},"7"),s("br"),s("span",{class:"line-number"},"8"),s("br"),s("span",{class:"line-number"},"9"),s("br"),s("span",{class:"line-number"},"10"),s("br"),s("span",{class:"line-number"},"11"),s("br"),s("span",{class:"line-number"},"12"),s("br"),s("span",{class:"line-number"},"13"),s("br"),s("span",{class:"line-number"},"14"),s("br"),s("span",{class:"line-number"},"15"),s("br"),s("span",{class:"line-number"},"16"),s("br"),s("span",{class:"line-number"},"17"),s("br"),s("span",{class:"line-number"},"18"),s("br"),s("span",{class:"line-number"},"19"),s("br"),s("span",{class:"line-number"},"20"),s("br"),s("span",{class:"line-number"},"21"),s("br"),s("span",{class:"line-number"},"22"),s("br"),s("span",{class:"line-number"},"23"),s("br"),s("span",{class:"line-number"},"24"),s("br"),s("span",{class:"line-number"},"25"),s("br"),s("span",{class:"line-number"},"26"),s("br"),s("span",{class:"line-number"},"27"),s("br"),s("span",{class:"line-number"},"28"),s("br"),s("span",{class:"line-number"},"29"),s("br"),s("span",{class:"line-number"},"30"),s("br")])],-1),v=s("p",null,":::",-1),k=JSON.parse('{"title":"打字效果","description":"","frontmatter":{},"headers":[],"relativePath":"css/css-secret/transition-and-animation/typing.md","filePath":"css/css-secret/transition-and-animation/typing.md","lastUpdated":1707147609000}'),_={name:"css/css-secret/transition-and-animation/typing.md"},S=Object.assign(_,{setup(l){return(c,f)=>(p(),e("div",null,[A,a(i(t),{lang:"vue",meta:"preview",code:"%3Ctemplate%3E%0A%3Cdiv%20class%3D%22box%22%3E%0A%20%20%20%20%3Ch1%3ECSS%20is%20awesome!%3C%2Fh1%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cstyle%20scoped%3E%0A.box%20%7B%0A%20%20%20%20background%3A%20var(--demo-blue)%3B%0A%7D%0A%0A%40keyframes%20typing%20%7B%0A%09from%20%7B%20width%3A%200%20%7D%0A%7D%0A%0A%40keyframes%20caret%20%7B%0A%0950%25%20%7B%20border-right-color%3A%20transparent%3B%20%7D%0A%7D%0A%0Ah1%20%7B%0A%09font%3A%20bold%20200%25%20Consolas%2C%20Monaco%2C%20monospace%3B%0A%09%2F*width%3A%208.25em%3B*%2F%0A%09width%3A%2015ch%3B%0A%09white-space%3A%20nowrap%3B%0A%09overflow%3A%20hidden%3B%0A%09border-right%3A%20.05em%20solid%3B%0A%09animation%3A%20typing%208s%20steps(15)%2C%0A%09%20%20%20%20%20%20%20%20%20%20%20caret%201s%20steps(1)%20infinite%3B%0A%7D%0A%0A%3C%2Fstyle%3E",component:"CodePreview"},{code:o(()=>[g]),default:o(()=>[a(B)]),_:1}),v]))}});export{k as __pageData,S as default};
