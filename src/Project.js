import React, { Component } from 'react';
import { gsap } from 'gsap';
import { Power3, Power4 } from 'gsap/all';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posY: 0,
      listItems: 0,
      defaults: {
        carousel: ".js-carousel",
        bgImg: ".js-carousel-bg-img",
        list: ".js-carousel-list",
        listItem: ".js-carousel-list-item",
      },
    };
  }

  componentDidMount() {
    this.initCursor();
    this.init();
    this.bgImgController();
  }

  getBgImgs = () => {
    const bgImgs = document.querySelectorAll(this.state.defaults.bgImg);
    return bgImgs.length > 0 ? bgImgs : [];
  }

  getListItems = () => {
    const listItems = document.querySelectorAll(this.state.defaults.listItem);
    return listItems.length > 0 ? listItems : [];
  }


  getList = () => {
    return document.querySelector(this.state.defaults.list);
  }

  getCarousel = () => {
    return document.querySelector(this.state.defaults.carousel);
  }

  init = () => {
    gsap.set(this.getBgImgs(), {
      autoAlpha: 0,
      scale: 1.05
    });

    gsap.set(this.getBgImgs()[0], {
      autoAlpha: 1,
      scale: 1
    });

    this.setState({ listItems: this.getListItems().length - 1 });
    this.listOpacityController(0);
  }

  initCursor = () => {
    const listHeight = this.getList().clientHeight;
    const carouselHeight = this.getCarousel().clientHeight;

    this.getCarousel().addEventListener(
      "mousemove",
      event => {
        this.setState({ posY: event.pageY - this.getCarousel().offsetTop });
        let offset = -this.state.posY / carouselHeight * listHeight;

        gsap.to(this.getList(), {
          duration: 0.3,
          y: offset,
          ease: Power4.easeOut
        });
      },
      false
    );
  }

  bgImgController = () => {
    for (const link of this.getListItems()) {
      if (link) {
        link.addEventListener("mouseenter", ev => {
          let currentId = ev.currentTarget.dataset.itemId;

          this.listOpacityController(currentId);

          gsap.to(ev.currentTarget, {
            duration: 0.3,
            autoAlpha: 1
          });

          gsap.to(".is-visible", {
            duration: 0.2,
            autoAlpha: 0,
            scale: 1.05
          });

          if (
            this.getBgImgs()[currentId] &&
            !this.getBgImgs()[currentId].classList.contains("is-visible")
          ) {
            this.getBgImgs()[currentId].classList.add("is-visible");
          }

          gsap.to(this.getBgImgs()[currentId], {
            duration: 0.6,
            autoAlpha: 1,
            scale: 1
          });
        });
      }
    }
  }


  listOpacityController = (id) => {
    id = parseInt(id);
    let aboveCurrent = this.state.listItems - id;
    let belowCurrent = parseInt(id);

    if (aboveCurrent > 0) {
      for (let i = 1; i <= aboveCurrent; i++) {
        let opacity = 0.5 / i;
        let offset = 5 * i;
        gsap.to(this.getListItems()[id + i], {
          duration: 0.5,
          autoAlpha: opacity,
          x: offset,
          ease: Power3.easeOut
        });
      }
    }
    if (belowCurrent > 0) {
      for (let i = 0; i <= belowCurrent; i++) {
        let opacity = 0.5 / i;
        let offset = 5 * i;
        gsap.to(this.getListItems()[id - i], {
          duration: 0.5,
          autoAlpha: opacity,
          x: offset,
          ease: Power3.easeOut
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="container">
              <header className="c-header c-header--archive c-header--project-list">
                <div className="c-mouse-vertical-carousel js-carousel u-media-wrapper u-media-wrapper--16-9">
                  <ul className="c-mouse-vertical-carousel__list js-carousel-list">
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={0}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            01
                          </span> Nevada
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Carson City
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={1}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            02
                          </span> New Hampshire
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Concord
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={2}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            03
                          </span> New York
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Albany
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={3}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            04
                          </span> Oklahoma
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Oklahoma City
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={4}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            05
                          </span> North Carolina
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Raleigh
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={5}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            06
                          </span> Utah
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Salt Lake City
                        </p>
                      </a>
                    </li>
                    <li className="c-mouse-vertical-carousel__list-item js-carousel-list-item" data-item-id={6}>
                      <a href>
                        <p className="c-mouse-vertical-carousel__eyebrow u-b4">
                          <span>
                            07
                          </span> Missouri
                        </p>
                        <p className="c-mouse-vertical-carousel__title u-a5">
                          Jefferson City
                        </p>
                      </a>
                    </li>
                  </ul>
                  <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: 'url("https://psmag.com/.image/t_share/MTU4NzUzMjc3MDkyMDQ2NTUy/gettyimages-1031626122.jpg")' }} />
                  {/* Additional background images */}
                  <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_0GKAodXMZepB7tTSU4Htw-NfsRO3RJyZlBePeHNyuSFhZ1wmu5IMmJFQowYqG_9qfo&usqp=CAU")' }} />
                  <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_0GKAodXMZepB7tTSU4Htw-NfsRO3RJyZlBePeHNyuSFhZ1wmu5IMmJFQowYqG_9qfo&usqp=CAU")' }} />
                  <i className="c-mouse-vertical-carousel__bg-img js-carousel-bg-img" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_0GKAodXMZepB7tTSU4Htw-NfsRO3RJyZlBePeHNyuSFhZ1wmu5IMmJFQowYqG_9qfo&usqp=CAU")' }} />
                  {/* ... Add more background images as needed */}
                  <i className="c-gradient-overlay" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
