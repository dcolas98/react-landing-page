import React from "react";

const data = [
  {
    image:
      "https://image.shutterstock.com/image-photo/haitian-food-fish-banana-lettuce-600w-1931797310.jpg",
    cardTitle: "Card title",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
      url: "#",
      label: "Learn more",
    },
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/soup-joumou-haitian-beef-pumpkin-600w-1873722751.jpg",
    cardTitle: "Card title",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
      url: "#",
      label: "Learn more",
    },
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/en-sauceserved-white-rice-black-600w-1238359159.jpg",
    cardTitle: "Card title",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
      url: "#",
      label: "Learn more",
    },
  },
  {
    image:
      "https://image.shutterstock.com/image-photo/dinner-plate-flag-haiti-on-600w-326660543.jpg",
    cardTitle: "Card title",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: {
      url: "#",
      label: "Learn more",
    },
  },
];

const CardsInHTML = data.map((card, i) => {
  return (
    <div key={i} className="col-md-3 pb-5">
      <div className="card">
        <img src={card.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="text-center">
            <h4 className="card-title">{card.cardTitle}</h4>
          </div>
          <p className="card-text">{card.cardDescription}</p>
          <div className="text-center">
            <a className="btn btn-dark btn-md" href={card.url} role="button">
              {card.button.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

const Cards = () => {
  return (
      <div className="row row-cols-md-4 m-5">{CardsInHTML}</div>
  );
};

export default Cards;