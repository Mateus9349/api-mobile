'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Collects = sequelize.define('Collects', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    feedstickId: {
      type: DataTypes.STRING
    },
    team: {
      type: DataTypes.STRING
    },
    foodExpenses: {
      type: DataTypes.FLOAT
    },
    boatExpenses: {
      type: DataTypes.FLOAT
    },
    rebetaExpenses: {
      type: DataTypes.FLOAT
    },
    otherExpenses: {
      type: DataTypes.FLOAT
    },
    balseExpenses: {
      type: DataTypes.FLOAT
    },
    materialPerDayExpenses: {
      type: DataTypes.FLOAT
    },
    materialExpensesTotal: {
      type: DataTypes.FLOAT
    },
    status: {
      type: DataTypes.STRING
    },
    closedDate: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  return Collects;
};
