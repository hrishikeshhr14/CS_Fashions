import "./address.css";

export default function Address() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="post">
            <div className="postname">
              <h6>Meet us directly:</h6>
              <div className="address">
                <h6>
                  8/252D, Periyar Colony, <br />
                  KPR Mill Road, Annuparpalayam Post
                  Tirupur, <br />
                  Tamilnadu, India - 641652.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="post">
            <div className="postname">
              <h6>Or Call us at:</h6>
              <div className="address">
                <h6>
                  +91 72000 30839 / +91 96002 32555
                </h6>
              </div>
            </div>
            <div className="postname">
              <h6>Or Mail us:</h6>
              <div className="address">
                <h6>
                  suresh@csfashions.net / chandru@csfashions.net
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
