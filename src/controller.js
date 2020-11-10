const all = (session) => async (success) => {
  return session
    .run("MATCH (m:Movie) RETURN m.title as title, m.tagline as tagline")
    .then(({ records }) => success(records))
    .catch((error) => {
      console.error(error);
    })
    .then(() => session.close());
};

module.exports = { all };
