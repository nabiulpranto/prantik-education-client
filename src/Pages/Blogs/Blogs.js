import React from "react";
import Footer from "../Shared/Footer/Footer";
import MenuBar from "../Shared/MenuBar/MenuBar";

const Blogs = () => {
  return (
    <div>
      <MenuBar />
      <div style={{ backgroundColor: "#edffff" }}>
        <div className="container">
          <h1 className="text-center mb-5">
            **THE BLOG LIST** <br />
          </h1>
          <div className="qsn-ans">
            <div className="qsn-1">
              <h2>Question : what is cors??</h2>
              <h6>
                Answer : Cross-Origin Resource Sharing (CORS) is an HTTP-header
                based mechanism that allows a server to indicate any origins
                (domain, scheme, or port) other than its own from which a
                browser should permit loading resources.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-2">
              <h2>
                Question : Why are you using firebase? What other options do you
                have to implement authentication ??
              </h2>
              <h6>
                Answer : Firebase provides tools to grow your app and business,
                for startups & global enterprises. Get your app up and running
                quickly & securely with fully managed backend infrastructure.
                Cross-Platform Solutions. For Mobile or Web Apps. Monitor App
                Performance.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-3">
              <h2>Question : How does the private route work??</h2>
              <h6>
                Answer : The private route component is similar to the public
                route, the only change is that redirect URL and authenticate
                condition. If the user is not authenticated he will be
                redirected to the login page and the user can only access the
                authenticated routes If he is authenticated (Logged in).
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-4">
              <h2>Question : What is Node? How does Node work? ??</h2>
              <h6>
                Answer : Node. js is a JavaScript runtime environment that
                achieves low latency and high throughput by taking a
                “non-blocking” approach to serving requests. In other words,
                Node. js wastes no time or resources on waiting for I/O requests
                to return.
              </h6>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Blogs;
