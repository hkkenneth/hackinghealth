Rapid Health - Health News In Your Pocket
====

Introduction
---
This was started as a project at the Hacking Health HK (Sept 26-28, 2014). The original idea was to develop an android app that will receive push notification of health news curated by volunteers.

The idea was inspired by "Drop" http://justdrop.co/

However, due to limited time and human resource, the project was reduced to a proof-of-concept project to demonstrate the workflow:

1. Curators submit links via google form
2. A server-side program picks up the update and publish the links to some facebook pages (instead of Mobile Apps)

Details
---

### Submission
Curators can submit links at https://docs.google.com/forms/d/1tuYIqcL082sGOR7_UT2H09u074oB7DAy7aq1NlF_-Os/viewform

### Response
The responses are exported as JSON at https://script.googleusercontent.com/macros/echo?user_content_key=pGWGrzOgstYSV3G1EIYbQkzCT3xFlj8UvD17IR-kC3-Rz-xpCtOcPpoeclebPH9VuOezLXyawadoQZ5BroWgsaSa3rRzugwrOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa3GaoauzAMbF001i6RBWVb-ahx4EiaaV5fSJzo-0WxE6LvjOUOM7LAmIGuV_AbfFrj0-L2Dqk3c87Hotbouu6tap6XAcKZqNEvGQLsmst4g0_3zO0s2HpavwKTzqndR166l559AUt5ooNAm_wNdZrWHpjKdGh0jXiILUVgQmUa08&lib=M0klXLQOsKcIM4m86X8_CevqWUX6-vu4W

### Installation and running the program
    git clone https://github.com/hkkenneth/hackinghealth.git
    cd hackinghealth
    npm install
    node index.js

### Publishing

The links will be published to these facebook pages depending on the selected category:

1. https://www.facebook.com/rapidhealthdiabetes
2. https://www.facebook.com/pages/健迅通心臟/1527083510838322
3. https://www.facebook.com/pages/健迅通長者/358595884318405

