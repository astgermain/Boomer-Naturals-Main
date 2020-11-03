/**
 * Email Capture Component with Klayvio Email Marketing Integration
 */
import React from "react"
import { Helmet } from "react-helmet"
import "../email.css"

const Email = () => {
  return (
    <div>
      <Helmet>
      <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=TSPD66"></script>
      </Helmet>
      <div className="email-section">
        <div className="inner-email-container">
          <div className="email-text">
            <div className="email-main-text">Join the Boomer Family</div>
            <div className="email-sub-text">
              Sign up and get <b>10% OFF</b> on your first order!
            </div>
          </div>
          <div className="klaviyo-form-TxM3pR"></div>
        </div>
      </div>
    </div>
  )
}

export default Email
