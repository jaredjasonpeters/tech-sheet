const Techsheet = {
     author: (root, args, context) => {
      return context.db.techsheet({
        id: root.id
      }).author()
    }
  }

  module.exports = {
      Techsheet,
  }