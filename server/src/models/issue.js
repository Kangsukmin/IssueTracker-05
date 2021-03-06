export default (sequelize, DataTypes) => {
  const issue = sequelize.define(
    'issue',
    {
      iid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      isOpen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      closedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'issue',
      underscored: true,
    },
  );

  issue.associate = (models) => {
    issue.belongsTo(models.milestone, {
      foreignKey: {
        name: 'mid',
        allowNull: true,
      },
    });

    issue.belongsTo(models.user, {
      foreignKey: {
        name: 'uid',
        allowNull: false,
      },
    });

    issue.hasMany(models.comment, {
      foreignKey: {
        name: 'iid',
        allowNull: false,
      },
    });

    issue.belongsToMany(models.user, {
      through: 'issue_assignee',
      as: 'assignees',
    });

    issue.belongsToMany(models.label, {
      through: 'issue_label',
    });
  };

  return issue;
};
