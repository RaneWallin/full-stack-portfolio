const cardData = [
  {
    id: 0,
    headline: "Frontend Skills",
    content: "This is the content",
    styles: {
      background: `
                background-color:black;
                background-image:
                radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
                radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
                radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
                radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
                background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
                background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
        `,
      headlineStyles: `
                font-size: calc(16px + 1vw);
                position: absolute;
                top: 5%;
                left: 10%;
          `,
      contentStyles: `
                font-size: calc(12px + 1vw);
                color: white;
                position: absolute;
                top: 15%;
                left: 15%;
          
          `
    }
  },
  {
    id: 1,
    headline: "Backend Skills",
    content: "This is the content 2",
    styles: {
      background: `
                background-color:#001;
                background-image: radial-gradient(rgba(207, 207, 196, .1) 15%, transparent 16%),
                radial-gradient(rgba(207, 207, 196, .1)  15%, transparent 16%);
                background-size: 60px 60px;
                background-position: 0 0, 30px 30px;
        `,
      headlineStyles: `
                font-size: calc(16px + 1vw);
                position: absolute;
                top: 15%;
                left: 40%;
          `,
      contentStyles: `
                font-size: calc(12px + 1vw);
                color: white;
                position: absolute;
                top: 35%;
                left: 15%;
          
          `
    }
  }
];

export default cardData;
