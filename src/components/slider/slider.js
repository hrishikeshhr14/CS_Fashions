import "./slider.css";
import {} from '../../images/ani1.webp'
export default function slider() {
    return (
<section id="tranding">
  <div className="container">
    {/* <h3 class="text-center section-subheading">- popular Delivery -</h3> */}
    <h1 className="text-center section-heading">Projects</h1>
  </div>
  <div className="container">
    <div className="swiper tranding-slider">
      <div className="swiper-wrapper">
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="D:\Project\web\CS_Fashions\src\images\ani1.webp" alt="Thhh" />
          </div>
          <div className="tranding-slide-content">
            {/* <h1 class="food-price">$20</h1> */}
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">My Portfolio</h2>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="D:\Project\web\CS_Fashions\src\images\ani1.webp" alt="React blog" />

          </div>
          <div className="tranding-slide-content">
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">React Blog</h2>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="../../images/img1.webp" alt="powerbi" />
          </div>
          <div className="tranding-slide-content">
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Data Analysis on India's Import</h2>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="../../images/img2.png" alt="Tranding" />
          </div>
          <div className="tranding-slide-content">
            <h1 className="food-price">$15</h1>
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Frish Curry</h2>
              <h3 className="food-rating">
                <span>4.5</span>
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </h3>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="images/tranding-food-5.png" alt="Tranding" />
          </div>
          <div className="tranding-slide-content">
            <h1 className="food-price">$15</h1>
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Pane Cake</h2>
              <h3 className="food-rating">
                <span>4.5</span>
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </h3>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="images/tranding-food-6.png" alt="Tranding" />
          </div>
          <div className="tranding-slide-content">
            <h1 className="food-price">$20</h1>
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Vanilla cake</h2>
              <h3 className="food-rating">
                <span>4.5</span>
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </h3>
            </div>
          </div>
        </div>
        {/* Slide-end */}
        {/* Slide-start */}
        <div className="swiper-slide tranding-slide">
          <div className="tranding-slide-img">
            <img src="images/tranding-food-7.png" alt="Tranding" />
          </div>
          <div className="tranding-slide-content">
            <h1 className="food-price">$8</h1>
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Straw Cake</h2>
              <h3 className="food-rating">
                <span>4.5</span>
                <div className="rating">
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                  <ion-icon name="star" />
                </div>
              </h3>
            </div>
          </div>
        </div>
        {/* Slide-end */}
      </div>
      <div className="tranding-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline" />
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  </div>
</section>
    )
}