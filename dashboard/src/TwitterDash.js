import React, { useEffect, useState } from "react";
import needle from "needle";

export default function TwitterDash() {
  const [twitterData, settwitterData] = useState("");

  useEffect(() => {
    const endpointURL = "https://api.twitter.com/2/users/by?usernames="
    async function getRequest() {

    const params = {
      usernames: "theReuterMan", // Edit usernames to look up
      "user.fields": "created_at,description", // Edit optional query parameters here
      "expansions": "pinned_tweet_id"
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
      headers: {
        "User-Agent": "v2UserLookupJS",
        "authorization": `Bearer AAAAAAAAAAAAAAAAAAAAAIlgTgEAAAAAjGx96GKyOAzoXMqQQczBpP9FadU%3DyjOIxtxk9XPVZu2jwWmm9fu4m3IUxQxAXCe8n3LDPt4Yci4KhY`
      }
    })

    if (res.body) {
      return res.body;
    } else {
      throw new Error('Unsuccessful request')
    }
  }

  (async () => {

    try {
      // Make request
      const response = await getRequest();
      console.dir(response, {
        depth: null
      });

    } catch (e) {
      console.log(e);
    }
  })();

  });

  return(
    <div className='TwitterDash'>
      <h1>Twitter Dash</h1>
      <span>{twitterData}</span>
    </div>
  );
  }
