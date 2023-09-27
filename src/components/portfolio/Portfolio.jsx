
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio, spacePortfolio, massagePortfolio } from "../../data";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Portfolio() {


  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <Grid container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          item
          lg={6}
          sm={6}
          xs={12}
        >
          {massagePortfolio.map((d) => (
            <div className="item left">
              <Link target="_blank" to="/study">
                <h3>{d.title}</h3>
                <img src={d.img} alt="" />
              </Link>
            </div>
          ))}
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          item
          lg={6}
          sm={6}
          xs={12}
        >
          {spacePortfolio.map((d) => (
            <div className="item right">
              <a href={d.link} target="_blank" rel="noreferrer">
                <h3>{d.title}</h3>
                <img src={d.img} alt="" />
              </a>
            </div>
          ))}
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          item
          lg={6}
          sm={6}
          xs={12}
        >
          {mobilePortfolio.map((d) => (
            <div className="item left">
              <a href={d.link} target="_blank" rel="noreferrer">
                <h3>{d.title}</h3>
                <img src={d.img} alt="" />
              </a>
            </div>
          ))}
        </Grid>

        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          item
          lg={6}
          sm={6}
          xs={12}
        >
          {webPortfolio.map((d) => (
            <div className="item right">
              <a href={d.link} target="_blank" rel="noreferrer">
                <h3>{d.title}</h3>
                <img src={d.img} alt="" />
              </a>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
