import db from '@models';

const getUsers = async () => {
  try {
    const users = db.user.findAll();
    return users;
  } catch (err) {
    throw new Error(err);
  }
};

export default { getUsers };
