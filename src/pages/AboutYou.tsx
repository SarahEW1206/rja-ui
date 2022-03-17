import React from "react";

import { Link } from "react-router-dom";

import { CLIENT_GOALS } from "../constants/texts";

export const AboutYou = () => (
  <div
    style={{ display: "flex", flexDirection: "column", marginTop: "4.5rem" }}
  >
    <img
      className="img-responsive"
      src={require("../images/clientheader.jpg")}
      alt="R&J Advisory Group Clients"
      style={{ width: "100%" }}
    />
    <div className="wrapper">
      <main id="clientMain">
        <section>
          <h2 id="clientHeading">About You</h2>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#ideal"
                role="tab"
              >
                Who is this for?
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#mindset"
                role="tab"
              >
                The Right Mindset
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="ideal" role="tabpanel">
              <p>
                As a strategic coaching client, you are most likely to see
                results if you are passionate about learning, open to change,
                willing to be accountable and excited about where this will
                lead. If that sounds like you, and you recognize yourself and
                your business below, let&#39;s talk.
              </p>

              <br />
              <p className="listHeader">Does this sound like you?</p>

              <ul className="clientPageList">
                <li className="clientPageItem">
                  You are working harder than ever but not seeing a difference
                  in your pockets.
                </li>
                <li className="clientPageItem">
                  You aren’t sure you have the right people on your team to
                  achieve scalable growth.
                </li>
                <li className="clientPageItem">
                  Your business earns at least $5 million in revenue.
                </li>
                <li className="clientPageItem">
                  You are located in the Palm Beach, Broward and Dade counties.
                  (I will be happy to have a conversation with you if you live
                  elsewhere but I would prefer that all of our quarterly and
                  annual meetings take place in South Florida).
                </li>
              </ul>

              <br />
              <p className="listHeader">
                Do you desire any or all of the following?
              </p>

              <ul className="clientPageList">
                {CLIENT_GOALS.map((goal) => (
                  <li className="clientPageItem">{goal} </li>
                ))}
              </ul>
              <br />

              <p>
                If so,
                <a href="/contact">let's get started!</a>
              </p>
            </div>

            <div className="tab-pane" id="mindset" role="tabpanel">
              <p className="listHeader">
                To benefit from working together, it is important for you to
                have the right mindset. Specifically:
              </p>
              <br />
              <p>
                <em>Passion for Learning</em>
              </p>

              <p>
                You are constantly consuming content, reading, watching videos
                and asking questions of others.
              </p>
              <br />
              <p>
                <em>Accountability</em>
              </p>
              <p>
                You are willing to put learning into action and do what it takes
                to grow and change.
              </p>
              <br />
              <p>
                <em>A belief in investing in your business and self</em>
              </p>
              <p>
                You expect ROI and know that growth is not possible without
                investing in external resources like a coach!
              </p>
              <br />
              <p>
                <em>Humility of Character</em>
              </p>
              <p>
                You realize you don&#39;t know it all and can't do it alone.
                You're open to receiving help and you leave your ego at the
                door.
              </p>
              <br />
              <p>
                My hope is that, through this coaching program, you will create
                a culture of accountability and alignment as well as improved
                communications. Your employees will be happier and more
                productive in the process! And most importantly, you will be on
                track to achieve your Freedom Goal&trade;!
              </p>
            </div>
          </div>
        </section>
      </main>

      <aside className="sidebarContent">
        <div className="signUp">
          <h4>
            I want to reach my
            <br />
            <strong>Freedom Goal&trade;</strong>.
          </h4>

          <Link className="contact" to="/contact">
            CONTACT JENNIFER
          </Link>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/randjadvisorygroup/"
              target="_blank"
            >
              <img src="/images/facebook.png" alt="facebook icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/randjadvisorygroup"
              target="_blank"
            >
              <img src="/images/linkedin.png" alt="linkedin icon" />
            </a>
          </div>
        </div>
        <p className="quote">
          "My parent company (Herman AV) has been working with Jennifer for the
          past 2 years and we feel it has made a real difference in how we
          operate as a company and the success we are having"
          <br />
        </p>
        <p className="quoteBy">
          Chris Bianchet
          <br />
          President of Herman Integration Services
        </p>
      </aside>
    </div>
  </div>
);
