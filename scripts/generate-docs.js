import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function replaceSection(content, startTag, endTag, newText) {
  const regex = new RegExp(
    `${startTag}[\\s\\S]*?${endTag}`,
    "g"
  );
  return content.replace(
    regex,
    `${startTag}\n${newText}\n${endTag}`
  );
}

async function run() {
  const readme = fs.readFileSync("README.md", "utf-8");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.3,
    messages: [
      {
        role: "system",
        content:
          "You are a senior software architect generating clean professional GitHub documentation.",
      },
      {
        role: "user",
        content: `
Project: Apple-style 3D product showcase website.

Generate the following sections clearly labeled:

DESCRIPTION:
Professional overview paragraph.

USECASE:
Mermaid use case diagram.

FLOW:
Mermaid data flow diagram.

FEATURES:
Bullet list.

BENEFITS:
Bullet list.

CHALLENGES:
Bullet list.

RISKS:
Bullet list.

REQUIREMENTS:
Bullet list.

ASSUMPTIONS:
Bullet list.

DEPENDENCIES:
Bullet list.

CONSTRAINTS:
Bullet list.

Be concise and professional.
`,
      },
    ],
  });

  const text = response.choices[0].message.content;

  function extract(section) {
    const regex = new RegExp(`${section}:[\\s\\S]*?(?=\\n[A-Z]+:|$)`);
    const match = text.match(regex);
    return match ? match[0].replace(`${section}:`, "").trim() : "—";
  }

  let updated = readme;

  updated = replaceSection(
    updated,
    "<!-- AI_DESCRIPTION_START -->",
    "<!-- AI_DESCRIPTION_END -->",
    extract("DESCRIPTION")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_USECASE_START -->",
    "<!-- AI_USECASE_END -->",
    extract("USECASE")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_FLOW_START -->",
    "<!-- AI_FLOW_END -->",
    extract("FLOW")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_FEATURES_START -->",
    "<!-- AI_FEATURES_END -->",
    extract("FEATURES")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_BENEFITS_START -->",
    "<!-- AI_BENEFITS_END -->",
    extract("BENEFITS")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_CHALLENGES_START -->",
    "<!-- AI_CHALLENGES_END -->",
    extract("CHALLENGES")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_RISKS_START -->",
    "<!-- AI_RISKS_END -->",
    extract("RISKS")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_REQUIREMENTS_START -->",
    "<!-- AI_REQUIREMENTS_END -->",
    extract("REQUIREMENTS")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_ASSUMPTIONS_START -->",
    "<!-- AI_ASSUMPTIONS_END -->",
    extract("ASSUMPTIONS")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_DEPENDENCIES_START -->",
    "<!-- AI_DEPENDENCIES_END -->",
    extract("DEPENDENCIES")
  );

  updated = replaceSection(
    updated,
    "<!-- AI_CONSTRAINTS_START -->",
    "<!-- AI_CONSTRAINTS_END -->",
    extract("CONSTRAINTS")
  );

  fs.writeFileSync("README.md", updated);
  console.log("✅ README fully updated by AI");
}

run();