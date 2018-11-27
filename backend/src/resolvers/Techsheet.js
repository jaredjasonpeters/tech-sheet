const Techsheet = {
  author: async (root, args, context, info) => {
    const techsheet = await context.db.query.techsheet(
      {
        where: {
          id: root.id
        }
      },
      info
    );
    return techsheet.author;
  }
};

module.exports = {
  Techsheet
};
