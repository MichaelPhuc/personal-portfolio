import "./study.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinkIcon from "@mui/icons-material/Link";

export default function Study() {
  return (
    <div className="study">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="intro-grid">
            <div className="blur">
              <img src="assets/logo.png" alt="" className="logo" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="overview-grid">
            <h1 className="main-head">1on1</h1>
            <h2 className="section-head">Project Vision/Overview</h2>
            <p>
              “1 on 1” is an innovative mobile application that connects
              individuals seeking personalised fitness and wellness coaching
              with highly skilled and experienced professionals. Leveraging
              advanced algorithms and user-friendly interfaces, our platform
              matches clients with the best-suited experts, fostering personal
              growth, skill development, and overall well-being.
            </p>
            <img src="assets/1on1mockup.png" alt="" className="mockup1" />
          </Grid>
          <Grid item xs={12} sm={6} className="overview-grid-right">
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/2lseNKiwtyJgGCZ4fnWWGm/1on1-Project?page-id=0%3A1&node-id=799-5824&starting-point-node-id=799%3A5824&mode=design&t=HyNLHwhFJKvNovuU-1">
                <LinkIcon /> User App Figma Prototype
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.figma.com/proto/2lseNKiwtyJgGCZ4fnWWGm/1on1-Project?page-id=228%3A44&node-id=573-3076&starting-point-node-id=573%3A3076&mode=design&t=M1yX1q1Vq5mZxHJQ-1">
                <LinkIcon /> Expert App Figma Prototype
              </a>
            </div>

            <h2 className="section-head2">Problem</h2>
            <p>
              In today's fast-paced and digitally connected world, individuals
              are increasingly seeking convenient and personalized solutions to
              address their health and wellness needs. While there is a plethora
              of fitness and wellness apps available, there remains a distinct
              gap for a specialized 1-on-1 wellness app that focuses on massage
              therapy, chiropractic care, and personal training. Several key
              problems highlight the urgent need for such an application,
              especially when compared to apps like MindBody that is designed
              for classes and larger groups:
            </p>
            <div className="goals">
              <h2 className="section-head2">Goals</h2>
              <dl>
                <dt>Efficient Practitioner-User Matching</dt>
                <dd>
                  - Streamline the process of matching users with the right
                  practitioners by employing intelligent algorithms that take
                  into account user preferences, needs, and location, ensuring
                  optimal practitioner-user pairings.
                </dd>
                <dt>Trust and Safety Assurance</dt>
                <dd>
                  - Establish a strong sense of trust and safety among users by
                  implementing rigorous practitioner verification processes,
                  ensuring that all listed professionals are certified,
                  licensed, and have a history of delivering high-quality care.
                </dd>
                <dt>User Engagement and Retention</dt>
                <dd>
                  - Engage users actively by offering features such as progress
                  tracking, reminders for appointments, and ongoing support,
                  fostering long-term engagement and retention within the app.
                </dd>
              </dl>
            </div>
          </Grid>
          {/* 
          <Grid item xs={12} className="research-grid">
            <h2 className="section-head2">Research</h2>
          </Grid> */}

          <Grid xs={12} sm={12} md={6} justify="space-between" alignItems="stretch" className="persona-grid">
            <h2 className="user-head">Meet the Users</h2>
            <div className="persona">
              
              <div className="persona-sarah">
                <img src="assets/sarah.jpeg" alt="" className="persona-image" />

                <ul className="userinfo">
                  <li className="username">Sarah Smith </li>
                  <li>Marketing Manager</li>
                  <li>Age: 35</li>
                </ul>
              </div>
              <p className="summary">
                <h4>Persona summary:</h4> Sarah, a 35-year-old marketing manager
                seeks relaxation, improved physical health, and
                personalized wellness solutions. She values convenience and is
                often pressed for time due to her demanding job. Sarah's pain
                points include difficulty finding trusted experts. The 1on1 app can help her by
                matching her with highly-rated professionals, offering
                convenient booking, and progress tracking, all
                while ensuring quality assurance through user reviews and
                ratings. With features like seamless communication with experts
                and integration with her calendar, the app can become her
                trusted resource for accessing personalized massage,
                chiropractic, and training services, helping her
                prioritize wellness in her busy life.
              </p>
            </div>
          </Grid>
          <Grid xs={12} sm={12} md={6} justify="space-between" alignItems="stretch"  className="persona-grid">
            <div className="persona">
              <div className="persona-james">
                <img src="assets/james.jpeg" alt="" className="persona-image" />

                <ul className="userinfo">
                  <li className="username">James Tan</li>
                  <li>Chiropractor Expert</li>
                  <li>Age: 40</li>
                </ul>
              </div>
              <p className="summary">
                <h4>Persona summary:</h4> Dr. Tan is a 40-year-old chiropractor
                and wellness specialist looking to expand his client base and
                offer personalized care. He values flexibility in scheduling and
                aims to strengthen his online reputation. The 1on1 app provides
                his with a platform to connect with clients seeking his
                expertise, streamline appointment management, and enhance her
                online visibility through client reviews and ratings. With
                features like detailed profiles, integration with his calendar,
                and in-app messaging, the app empowers Dr. Tan to focus on
                providing personalized and holistic wellness solutions while
                growing his practice in a competitive market.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} className="userflow-grid">
            <h2 className="userflow-head">Userflow</h2>
            <img src="assets/userflow.png" alt="" className="userflow" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
