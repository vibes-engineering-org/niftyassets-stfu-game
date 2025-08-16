import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjg2OTk5OSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc2ZDUwQjBFMTQ3OWE5QmEyYkQ5MzVGMUU5YTI3QzBjNjQ5QzhDMTIifQ",
      payload:
        "eyJkb21haW4iOiJuaWZ0eWFzc2V0cy1zdGZ1LWdhbWUudmVyY2VsLmFwcCJ9",
      signature:
        "MHg4ZjViNWQyZDAzNzM2MTk5NzJmNzI0NjYwMjk1Mzg5NWUwMDFmMjdmMDY1OWQ0ODkyYzc2ZWE3MTE4ZTNhODZhMjI4ZjAxYTg5MjIyYTFmNWQ4NGM0YWQxMDMwMTQ1MDk2NzQwOWU5MmNjZWQ0YTEyZGE5NTQzZTI2NDkxODQ1ODFj",
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/og.png`,
      buttonTitle: "Open",
      webhookUrl: `${appUrl}/api/webhook`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#555555",
      primaryCategory: "games",
      tags: ["quiz", "web3", "crypto", "ethereum", "game"],
    },
  };

  return Response.json(config);
}
