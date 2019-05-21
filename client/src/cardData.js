const cardData = [
  {
    id: 0,
    headline: "Frontend Skills",
    content: "This is the content",
    icons: [
      {
        src: `https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/frontend/css.svg`,
        top: "10%",
        left: "5%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/frontend/html.svg",
        top: "18%",
        left: "18%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/frontend/psd.svg",
        top: "52%",
        left: "8%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/frontend/react.svg",
        top: "40%",
        left: "65%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/frontend/xd-purp.svg",
        top: "60%",
        left: "80%"
      }
    ],
    styles: {
      background: `
                background:
                radial-gradient(black 15%, transparent 16%) 0 0,
                radial-gradient(black 15%, transparent 16%) 8px 8px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
                radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
                background-color:#282828;
                background-size:16px 16px;
        `,
      headlineStyles: `
                font-size: calc(16px + 1vw);
                color: white;
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%, -50%);
          `,
      contentStyles: `
                font-size: calc(12px + 1vw);
                color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
          
          `
    }
  },
  {
    id: 1,
    headline: "Backend Skills",
    content: "This is the content 2",
    icons: [
      {
        src: `https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/backend/expressjs-icon.svg`,
        top: "10%",
        left: "12%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/backend/mongo.svg",
        top: "80%",
        left: "60%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/backend/nodejs.svg",
        top: "72%",
        left: "15%"
      },
      {
        src:
          "https://s3-us-west-1.amazonaws.com/rane-portfolio-dev/icons/backend/sql.svg",
        top: "20%",
        left: "75%"
      }
    ],
    styles: {
      background: `
                background-color: #fff;
                background-image:
                linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
                linear-gradient(#eee .1em, transparent .1em);
                background-size: 100% 1.2em;
        `,
      headlineStyles: `
                font-size: calc(16px + 1vw);
                color: black;
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%, -50%);
          `,
      contentStyles: `
                font-size: calc(12px + 1vw);
                color: black;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
          
          `
    }
  },
  {
    id: 2,
    headline: "People Skills",
    content:
      "Five years on the front lines working with customers gives Rane a unique ability to understand and communicate customer and client needs",
    styles: {
      background: `
                background:
                linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
                linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
                linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
                linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
                linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
                linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
                background-color: #131313;
                background-size: 20px 20px;
        `,
      headlineStyles: `
                font-size: calc(16px + 1vw);
                color: white;
                margin-left: auto;
                margin-right: auto;
                position: absolute;
                top: 15%;
                left: 50%;
                transform: translate(-50%, -50%);
          `,
      contentStyles: `
                font-size: calc(12px + 1vw);
                //margin-right: 15%;
                color: white;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
          
          `
    }
  }
];

export default cardData;
