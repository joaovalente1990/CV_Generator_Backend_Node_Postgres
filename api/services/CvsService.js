exports.getCVSByUser = (req, res, next) => {
    
    const userId = req.params.userId;

    User.findById(userId)
      .then(user => {
        return user.cvs.get();
      })
      .catch(err => console.log(err));
  };