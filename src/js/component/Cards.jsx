import React from "react";

const data = [
  {
    image:
      "https://worldredeye.com/wp-content/uploads/2019/09/17/1-dsc_9075-900x600.jpg",
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
      "https://miami.pinta.art/var/buenosairesphoto_com/storage/images/miami/secciones/next/245240-15-esl-AR/Next_destacado.jpg",
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
      "https://sfcommunityliving.org/wp-content/uploads/2020/11/lms-12_OpArt.jpg",
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
      "https://www.nybooks.com/wp-content/uploads/2022/04/miranda_1-051222-900.jpg",
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