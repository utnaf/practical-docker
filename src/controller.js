const all = (session) => async (success) => {
  return session
    .run("MATCH (m:Movie) RETURN m.title as title, m.tagline as tagline")
    .then(({ records }) => success(records))
    .then(() => session.close())
    .catch((error) => {
      console.log("Error", error);
    });
};

module.exports = { all };
