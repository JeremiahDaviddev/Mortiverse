const mongoose = require('../db/connection')

const options = {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_doc, userDocToReturn) => {
      delete userDocToReturn.password
      return userDocToReturn
    }
  }
}

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  conspiracyTheories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConspiracyTheory'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  motto: String
}, options)

module.exports = mongoose.model('User', userSchema)