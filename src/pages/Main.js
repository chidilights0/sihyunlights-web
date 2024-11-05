import React from "react";
import "./Pages.css";



function Main() {
    return (
        <div class="sectionContainer">
            <img class="banner" src="/Main.jpg" alt="banner"></img>
            
            <section class="maxWidth">
                <div id="headContainer">
                <div id="symbol"><div><img src="/Symbol.svg" alt="sihyunlights symbol" /></div></div>
                    <div id="profileInfo">
                        <img src="/Profile.jpg" alt="sihyunlights profile" />
                        <p>백시현 (Si Hyun Baek)</p>
                    </div>
                    <h1>빛을 통해 즐거움을 전달합니다</h1>
                </div>
                <p>Like light spreading in all directions, revealing the world, treasured things, and hidden details, I hope that one day my stories, as they reach others, will bring new joy to someone.</p>
                <p>사방으로 퍼져나가며 사물과 세상, 그리고 소중한 무언가를 볼 수 있게 해주는 빛처럼, 언젠가는 퍼져나간 나의 이야기가 누군가에게 새로운 즐거움을 가져다주기를 바랍니다.</p>
            </section>
            <div className="hrWrapper maxWidth"><hr/></div>

            <section class="maxWidth">
                <h2>highlights</h2>
                <div className="List">
                    <iframe src="https://www.youtube.com/embed/WV9Ho5fx4Lk?color=white" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <a href="https://www.instagram.com/p/C2PcizmhwEC/" target="_blank" rel="noopener noreferrer">
                    <img src="/PeopleLogistics.jpg" alt="국민택배"></img>
                    </a>
                    <a href="https://x.com/siriusinyoursky" target="_blank" rel="noopener noreferrer">
                    <img src="/fluid.jpg" alt="fluid"></img>
                    </a>
                    <iframe src="https://www.youtube.com/embed/CCoEz_RywPI?color=white" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
        </div>
    );
}

export default Main;