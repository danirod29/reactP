import React, { useState } from "react";

const Landingcontent = () => {
    

  return (
    <div>
      <br></br>
      <h1>Destacados y Recomendados</h1>
      <div id="carr" className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.ctfassets.net/umhrp0op95v1/VvjFjkl41oG52Nf71hZbr/e39168a3549882dd41f8b23187aa576c/LA_Y2_KA_Share_1200x630.jpg"
            className="w-8/12"
          />
            <div className="side">
            <h1>Lost Ark</h1>
            <div className="mosImg">
              <img
                src="https://www.nme.com/wp-content/uploads/2022/02/Lost-Ark-2@2000x1270.jpg"
              />
              <img
                src="https://images.ctfassets.net/umhrp0op95v1/7i8S2coNpbqNf0bjQQBjYF/383ea0da9a28ff4718b0563e1e32be5a/LA_Elgacia_740x416.jpg"
              />
              <img
                src="https://pressover.news/wp-content/uploads/2021/11/20211106134534_1.jpeg"
              />
              <img
                src="https://i.blogs.es/064243/la-ss-14/450_1000.jpeg"
              />
            </div>
            <h1>Ya disponible</h1>
            <h1 id="texto">Lo mas vendido</h1>
            <h1>Free to play</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg?t=1692294127"
            className="w-8/12"
          />
            <div className="side">
            <h1>Baldurs Gate 3</h1>
            <div className="mosImg">
              <img
                src="https://cdn.akamai.steamstatic.com/steam/apps/1086940/ss_f8c7fcdeccbfe77e3fad33330a464fed30f781f0.1920x1080.jpg?t=1692294127"
              />
              <img
                src="https://img.asmedia.epimg.net/resizer/-e0gIYGZa6w0iNp_egkj8opz8UQ=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/JJRXWJRTMFBOHJ7OLZLCWFG33E.jpg"
              />
              <img
                src="https://twistedvoxel.com/wp-content/uploads/2023/08/baldurs-gate-3.jpg"
              />
              <img
                src="https://cdn.alfabetajuega.com/alfabetajuega/2023/08/druida-en-baldurs-gate-3.jpg"
              />
            </div>
            <h1>Ya disponible</h1>
            <h1 id="texto">Lo mas vendido</h1>
            <h1>COL $199.000</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267"
            className="w-8/12"
          />
            <div className="side">
            <h1>Sekiro</h1>
            <div className="mosImg">
              <img
                src="https://assetsio.reedpopcdn.com/54523638_1699443240202052_532125883670986752_o.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
              />
              <img
                src="https://top-mmo.fr/wp-content/uploads/2022/06/sekiro_via_official_website_2019.jpg"
              />
              <img
                src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CYB7GHJBS5ALXI33H7A5PWU4WY.jpg&w=1200"
              />
              <img
                src="https://assets1.ignimgs.com/thumbs/userUploaded/2019/3/20/sekiroreviewblogroll-1553148660295.jpg"
              />
            </div>
            <h1>Ya disponible</h1>
            <h1 id="texto">Lo mas vendido</h1>
            <h1>COL $179.000</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg?t=1694114964"
            className="w-8/12"
          />
            <div className="side">
            <h1>Apex Legends</h1>
            <div className="mosImg">
              <img
                src="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/5/13/i1pyqdapxumjllhfjoco/duos-apex-legends"
              />
              <img
                src="https://media.contentapi.ea.com/content/dam/apex-legends/common/s18-revenant-dev-ama-thumbnail.png.adapt.crop16x9.431p.png"
              />
              <img
                src="https://exputer.com/wp-content/uploads/2022/06/apex-legends-mobile.jpg"
              />
              <img
                src="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/ss_baffff3e89143c5ba609740d78db008507ef4702.1920x1080.jpg?t=1694114964"
              />
            </div>
            <h1>Ya disponible</h1>
            <h1 id="texto">Lo mas vendido</h1>
            <h1>Free to play</h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingcontent;
